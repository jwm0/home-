var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return(
    <div className="header">
        <div className="top-bar-left">
          <Link to ="/" style={{color:'white'}} className="menu_logo">home<span style={{fontFamily:'"Maven Pro",sans-serif;fontSize:100px;color:#191414;line-height:20px'}}>+</span></Link>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu_tile">our product</li>
            <li className="menu_tile">about us</li>
            <li><Link to ="/panel" className="menu_panel" activeClassName="panel_active" style={{color:'white'}}>user panel</Link></li>
          </ul>
        </div>
      </div>
  );
};

module.exports = Nav;
