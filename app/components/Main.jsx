var React = require('react');
var Nav = require('Nav');

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
        <span style={{'font-size':'15px'}}>&copy; 2017</span> home+
      </div>
    </div>
  );
};

module.exports = Main;
