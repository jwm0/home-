var React = require('react');

var Nav = () => {
  return(
    <div className="header">
        <div className="top-bar-left">
          <ul className="menux">
            <li className="menu_logo">home<span>+</span></li>
            <li className="menu_tile">our product</li>
            <li className="menu_tile">about us</li>
            <li className="menu_tile">contact</li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menux">
            <li className="menu_panel">user panel</li>
          </ul>
        </div>
      </div>
  );
};

module.exports = Nav;
