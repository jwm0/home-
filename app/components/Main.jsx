var React = require('react');
var Nav = require('Nav');
var {Link, IndexLink} = require('react-router');

var Main = (props) => {
  return(
    <div className="fill">
      <Nav/>
      <div>
        <div>
          {props.children}
        </div>
      </div>
      <div id="footer">
        <span style={{'fontSize':'15px'}}>&copy; 2017</span> home+ <i className="icon-facebook-squared"></i> <span id="bug"><Link to ="/support" id="bugText">report a bug</Link></span>
      </div>
    </div>
  );
};

module.exports = Main;
