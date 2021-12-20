import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import toastr from "toastr";
import { Collapse, Nav, NavItem } from "reactstrap";
import { NavLink as NavLinkStrap } from "reactstrap";
import WP from "@assets/images/fillerLogo/WP.png";
import usersServices from "../../services/usersService";
import debug from "sabio-debug";

const _logger = debug.extend("OverviewHeader");

const LivePreviewExample = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  const handleOnLogOutClicked = (e) => {
    e.preventDefault();
    toggleTab("3");
    usersServices.logout().then(onLogOutSuccess).catch(onLogOutFail);
  };

  const onLogOutSuccess = (dataReturned) => {
    toastr["success"]("Successfully Logged Out");
    props.history.push("/", { type: "LogOut" });
    _logger("Logout Success:", dataReturned);
  };

  const onLogOutFail = (error) => {
    toastr["error"]("Log Out Unsuccessul");
    _logger("Logout Failed:", error);
  };

  return (
    <>
      <div className="header-nav-wrapper header-nav-wrapper-lg navbar-dark">
        <div className="app-nav-logo">
          <div className="app-nav-logo--icon rounded-lg shadow-second-sm bg-secondary border-0">
            <img alt="World Print" src={WP} />
          </div>
          <div className="app-nav-logo--text">
            <span>General</span>
            <b>World Print</b>
          </div>
        </div>

        <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
          <span className="d-none d-lg-block">
            <div className="nav-tabs-first tabs-animated tabs-animated-shadow">
              <Nav tabs justified>
                <NavItem>
                  <NavLinkStrap
                    className={clsx("mb-0", {
                      active: activeTab === "1",
                    })}
                    onClick={() => {
                      props.history.push("/login");
                      toggleTab("1");
                    }}
                  >
                    <span className="font-weight-bold font-size-sm text-white-50 text-uppercase">
                      Login
                    </span>
                    <div className="divider" />
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx("mb-0", {
                      active: activeTab === "2",
                    })}
                    onClick={() => {
                      props.history.push("/register");
                      toggleTab("2");
                    }}
                  >
                    <span className="font-weight-bold font-size-sm text-white-50 text-uppercase">
                      Register
                    </span>
                    <div className="divider" />
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx("mb-0", {
                      active: activeTab === "3",
                    })}
                    onClick={handleOnLogOutClicked}
                  >
                    <span className="font-weight-bold font-size-sm text-white-50 text-uppercase">
                      LogOut
                    </span>
                    <div className="divider" />
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
          </span>
          <span className="d-block d-lg-none">
            <button
              onClick={toggle}
              className={clsx("navbar-toggler hamburger hamburger--elastic", {
                "is-active": collapse,
              })}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </span>
        </div>
        <div className="d-flex d-lg-none">
          <Collapse
            isOpen={collapse}
            className="nav-collapsed-wrapper shadow-lg navbar-collapse"
          >
            <div className="nav-inner-wrapper">
              <div className="nav-tabs-first tabs-animated tabs-animated-shadow"></div>

              <div className="m-3">
                <Nav justified>
                  <NavItem>
                    <NavLinkStrap
                      className={clsx("mb-0", {
                        active: activeTab === "1",
                      })}
                      onClick={() => {
                        props.history.push("/login");
                        toggleTab("1");
                      }}
                    >
                      <span className="font-weight-bold font-size-sm  text-uppercase">
                        Login
                      </span>
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap
                      className={clsx("mb-0", {
                        active: activeTab === "2",
                      })}
                      onClick={() => {
                        props.history.push("/register");
                        toggleTab("2");
                      }}
                    >
                      <span className="font-weight-bold font-size-sm  text-uppercase">
                        Register
                      </span>
                      <div className="divider" />
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap
                      className={clsx("mb-0", {
                        active: activeTab === "3",
                      })}
                      onClick={handleOnLogOutClicked}
                    >
                      <span className="font-weight-bold font-size-sm  text-uppercase">
                        LogOut
                      </span>
                      <div className="divider" />
                    </NavLinkStrap>
                  </NavItem>
                </Nav>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
      <div
        className={clsx("collapse-page-trigger", { "is-active": collapse })}
        onClick={toggle}
      />
    </>
  );
};

LivePreviewExample.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default LivePreviewExample;
