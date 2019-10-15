import React from "react";
import { Link } from "react-router-dom";
import styles from "styled-components";

type TabRoute = {
  name: string;
  route: string;
};

interface ITabControlProps {
  tabNames: TabRoute[];
}

const Menu = styles.ul`
  list-style: none;
`;

const MenuItem = styles.li`
  padding: 5px 10px;
  margin-right: 10px;
  display: inline-block;
  border: 1px solid #999;
  min-width: 150px;
  border-radius: 5px 5px 0px 0px;
`;

const NavLink = styles(Link)`
  text-decoration: none;
  text-transform: capitalize;
`;

const TabControl: React.FC<ITabControlProps> = ({ tabNames, children }) => (
  <div className="TabControl">
    <Menu>
      {tabNames.map(tab => (
        <MenuItem key={tab.name}>
          <NavLink to={tab.route}>{tab.name}</NavLink>
        </MenuItem>
      ))}
    </Menu>
    {children}
  </div>
);

export default TabControl;
