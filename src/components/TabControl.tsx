import React from "react";

interface ITabControlProps {
  tabNames: string[];
}

const TabControl: React.FC<ITabControlProps> = ({ tabNames, children }) => (
  <div className="TabControl">
    <ul className="TabHeaders">
      {tabNames.map(tab => (
        <li key={tab}>{tab}</li>
      ))}
    </ul>
    {children}
  </div>
);

export default TabControl;
