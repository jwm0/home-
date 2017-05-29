var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return(
    <div className="header">
        <div className="top-bar-left">
          <ul className="menu">
            <li><IndexLink to ="/" className="menu_logo">home<span style={{'fontFamily':'"Maven Pro",sans-serif;font-size:100px;color:#191414;'}}>+</span></IndexLink></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu_tile">our product</li>
            <li className="menu_tile">about us</li>
            <li><Link to ="/panel" className="menu_panel" activeClassName="panel_active">user panel</Link></li>
          </ul>
        </div>
      </div>
  );
};

module.exports = Nav;
