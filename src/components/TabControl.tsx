import React from "react";
import { Link } from "react-router-dom";

interface ITabControlProps {
  tabNames: string[];
}

const TabControl: React.FC<ITabControlProps> = ({ tabNames, children }) => (
  <div className="TabControl">
    <ul className="TabHeaders">
      {tabNames.map(tab => (
        <li key={tab}>
          <Link to={`/${tab}`}>{tab}</Link>
        </li>
      ))}
    </ul>
    {children}
  </div>
);

export default TabControl;
