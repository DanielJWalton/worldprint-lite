import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import debug from "sabio-debug";
const _logger = debug.extend("UserCookies");
import "../CookiesPopUp/cookiespop.css";

function UserCookies() {
  const [hasConsented, setConsent] = useState(false);
  const [modal4, setModal4] = useState(false);

  const cookieStorage = {
    getItem: (key) => {
      const cookies = document.cookie
        .split(";")
        .map((cookie) => cookie.split("="))
        .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
      _logger("cookie", cookies.worldprint_consent);
      return cookies[key];
    },
    setItem: (key, value) => {
      document.cookie = `${key}=${value}`;
    },
  };

  const storageType = cookieStorage;
  const consentPropertyName = "worldprint_consent";

  const shouldShowPopUp = () => !storageType.getItem(consentPropertyName);
  const saveToStorage = () => storageType.setItem(consentPropertyName, true);

  const docCookie = document.cookie;
  _logger("docCookie", docCookie);

  useEffect(() => {
    if (docCookie === "worldprint_consent=true") {
      setConsent(false);
      setModal4(false);
    } else if (docCookie !== "worldprint_consent=true") {
      shouldShowPopUp(storageType);
      setConsent(true);
      setModal4(true);
    }
  });

  const onToggleClick = () => {
    saveToStorage(storageType);
    setModal4(false);
    setTimeout(() => {}, 2000);
  };

  return (
    <>
      <Modal
        isOpen={modal4}
        className={"consent-popup " + (hasConsented ? "" : "hidden")}
      >
        <ModalHeader color="secondary">Cookies Consent</ModalHeader>
        <ModalBody>
          <p>
            By using this site you agree to our{" "}
            {/* a tag can be changed to NavLink when T&C exists */}
            <a className="btn-flush" href="#">
              Terms and Conditions{" "}
            </a>
            Please{" "}
            <button className="btn-flush" onClick={onToggleClick}>
              Accept
            </button>{" "}
            these before using our site.
          </p>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </>
  );
}
export default UserCookies;
