import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { string } from "prop-types";
import { connect } from "react-redux";
import UserContent from "./SidebarArrays/UserContent";
import debug from "sabio-debug";
const _logger = debug.extend("SidebarMenuContent");

const SidebarMenuContent = (props) => {
  const { setSidebarToggleMobile, currentUser } = props;
  const [list, setList] = useState(UserContent().list);
  _logger(setList);
  const toggleSidebarMobile = () => setSidebarToggleMobile(false);

  const result = list.map((a) => a.content);
  return (
    <>
      <Fragment>
        <div>
          {result
            .filter(
              (subItem) =>
                !subItem.roles ||
                subItem.roles.some((r) => currentUser.roles.includes(r))
            )
            .map((subItem) => {
              const Icon = subItem.icon;
              return (
                <li key={subItem.label}>
                  <NavLink
                    activeClassName="active"
                    onClick={toggleSidebarMobile}
                    className="nav-link-simple"
                    to={subItem.to}
                  >
                    <span className="sidebar-icon">
                      <Icon />
                    </span>
                    {subItem.label}
                  </NavLink>
                </li>
              );
            })}
        </div>
      </Fragment>
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
SidebarMenuContent.propTypes = {
  setSidebarToggleMobile: PropTypes.func,
  sidebarUserbox: PropTypes.bool,
  list: PropTypes.shape({
    category: PropTypes.string,
    icon: PropTypes.shape({}),
    content: PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.shape({}),
      description: PropTypes.string,
      to: PropTypes.string,
      roles: PropTypes.arrayOf(string),
    }),
  }),
  currentUser: PropTypes.shape({
    roles: PropTypes.shape(PropTypes.string),
  }),
};
export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenuContent);
