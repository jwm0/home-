var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return(
    <div className="header">
        <div className="top-bar-left">
          <ul className="menux">
            <li className="menu_logo"><IndexLink to ="/" className="link">home+</IndexLink></li>
            <li className="menu_tile">our product</li>
            <li className="menu_tile">about us</li>
            <li className="menu_tile">contact</li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menux">
            <li><Link to ="/panel" className="menu_panel" activeClassName="panel_active">user panel</Link></li>
          </ul>
        </div>
      </div>
  );
};

module.exports = Nav;
