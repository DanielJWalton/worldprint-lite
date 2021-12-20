import { setSidebarToggleMobile } from "../reducers/ThemeOptions";
import PerfectScrollbar from "react-perfect-scrollbar";
import importedList from "./SidebarArrays/navItems";
import { Shield, ChevronRight } from "react-feather";
import React, { Fragment, useEffect, useState } from "react";
import SidebarUserbox from "./SidebarUserbox";
import { NavLink } from "react-router-dom";
import { Collapse } from "reactstrap";
import { connect } from "react-redux";
import { string } from "prop-types";
import PropTypes from "prop-types";
import debug from "sabio-debug";
import clsx from "clsx";
import userProfileService from "../services/userProfileService";
import defaultPortrait from "@assets/images/avatars/placeholder.png";
const _logger = debug.extend("SidebarMenu");

const SidebarMenu = (props) => {
  const { setSidebarToggleMobile, sidebarUserbox, currentUser } = props;
  const [mappedSideBar, setSideBar] = useState([]);
  const [testList] = useState(importedList);
  const [userProfile, setUserProfile] = useState({
    id: 0,
    email: "",
    firstName: "",
    lastName: "",
    mi: "",
    avatarUrl: defaultPortrait,
  });
  const toggleSidebarMobile = () => setSidebarToggleMobile(false);

  const [categoryOpen, setCategoryOpen] = useState(undefined);

  const toggleCategory = (evt) => {
    let catName = evt.currentTarget.dataset.category;
    _logger(evt);
    evt.preventDefault();

    setCategoryOpen(catName);
  };

  const mapCatItem = (subItem, index) => {
    let Icon = subItem.icon;
    return (
      <li key={`${subItem.label}_${index}`}>
        <NavLink
          activeClassName="active"
          data-id={subItem.id}
          onClick={toggleSidebarMobile}
          className="nav-link-simple"
          to={subItem.to}
        >
          <span className="sidebar-icon">{<Icon />}</span>
          {subItem.label}
        </NavLink>
      </li>
    );
  };

  const mapACategory = (cat, index) => (
    <li key={`${cat.title}_${index}`}>
      {_logger("log1", cat.title)}
      <a
        href="#/"
        onClick={toggleCategory}
        data-category={cat.title}
        className={clsx({ active: cat.title === categoryOpen })}
      >
        <span className="sidebar-icon">
          <Shield />
        </span>
        <span className="sidebar-item-label">{cat.title}</span>
        <span className="sidebar-icon-indicator">
          <ChevronRight />
        </span>
      </a>
      <Collapse isOpen={cat.title === categoryOpen}>
        <div className="content">
          <ul>{cat.content?.map(mapCatItem)}</ul>
        </div>
      </Collapse>
    </li>
  );

  useEffect(() => {
    if (userProfile.id === 0) {
      userProfileService
        .getByUserId(currentUser.id)
        .then(onGetProfileSucess)
        .catch(onGetProfileFail);
    }
  });

  const onGetProfileSucess = (data) => {
    const user = data.item;
    user.avatarUrl = user.avatarUrl || defaultPortrait;
    setUserProfile({
      id: props.currentUser.id,
      firstName: user.firstName,
      lastName: user.lastName,
      mi: user.mi,
      avatarUrl: user.avatarUrl,
      email: props.currentUser.email,
    });
  };

  const onGetProfileFail = () => {
    _logger("no profile found");
    setUserProfile({
      id: props.currentUser.id,
      avatarUrl: defaultPortrait,
      firstName: "",
      lastName: "",
      mi: "",
      email: props.currentUser.email,
    });
  };

  useEffect(() => {
    let categories = testList.map((item) => item.category);

    categories = [...new Set(categories)];

    categories = categories.map((item) => {
      _logger("mapping with ", item);

      let matchedContent = testList.filter((content) => {
        if (
          content.category === item &&
          content.roles.some((r) => currentUser.roles.includes(r))
        ) {
          return item;
        }
      });

      _logger("item found", item, matchedContent);

      return {
        title: item,
        content: matchedContent,
      };
    });

    setSideBar(categories.map(mapACategory));
  }, [testList, categoryOpen]);

  return (
    <>
      <PerfectScrollbar>
        {sidebarUserbox && <SidebarUserbox user={userProfile} />}
        <div className="sidebar-navigation">
          <div className="sidebar-header">
            <span>Navigation menu</span>
          </div>
          <ul>{mappedSideBar}</ul>
        </div>
      </PerfectScrollbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  sidebarUserbox: state.ThemeOptions.sidebarUserbox,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile,
});
const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable)),
});
SidebarMenu.propTypes = {
  setSidebarToggleMobile: PropTypes.func,
  sidebarUserbox: PropTypes.bool,
  Collapse: PropTypes.shape({
    isOpen: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  }),
  list: PropTypes.shape({
    content: PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.shape({}),
      description: PropTypes.string,
      to: PropTypes.string,
      roles: PropTypes.arrayOf(string),
      category: PropTypes.string,
    }),
  }),
  currentUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);
