var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  componentDidMount: function () {
    $('#ourProduct').click(function() {
      $.scrollTo($('#ourProductPage'), 500);
    });
    $('#aboutus').click(function() {
      $.scrollTo($('#about'), 500);
    });
  },
  render: function () {
    return(
      <div className="header">
          <div className="top-bar-left">
            <Link to ="/" style={{color:'white'}} className="menu_logo">home<span style={{fontFamily:'"Maven Pro",sans-serif;fontSize:100px;color:#191414;line-height:20px'}}>+</span></Link>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu_tile" id="ourProduct">our product</li>
              <li className="menu_tile" id="aboutus">about us</li>
              <li><Link to ="/login" className="menu_panel" activeClassName="panel_active" style={{color:'white'}}>user panel</Link></li>
            </ul>
          </div>
        </div>
    );
  }
});

module.exports = Nav;
