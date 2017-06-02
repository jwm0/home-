var React = require('react');

var Panel = React.createClass({
  componentDidMount: function() {
    var elem = new Foundation.Slider($('.slider'));
  },
  onFormSubmit: function(e){
    e.preventDefault();
    var location = this.refs.location.value;
    alert(location);
    this.forceUpdate();
  },
  render: function() {
    var curTemp = 20;
    var temp=this.location;

    function showSelectedTemp(shit){
      return(
        <div>
          {temp}
        </div>
      )
    }
    return (
      <div className="panel">
        <div className="row">
          <div className="borderName">now</div>
          <div className="currentStats">
            Temp: 28
          </div>
          <div className="borderName">control panel</div>
          <div className="controlPanel">
            <div className="slider vertical" data-slider data-initial-start={curTemp} data-end="200" data-vertical="true">
              <span className="slider-handle" data-slider-handle role="slider" tabIndex="1" aria-controls="sliderOutput1"></span>
              <span className="slider-fill" data-slider-fill></span>
              <input type="hidden" ref="location"/>
            </div>
          </div>
          <div className="borderButton">
              <form onSubmit={this.onFormSubmit}>
                <button type="submit" className="success button large" value="Submit">confirm</button>
              </form>
          </div>
        </div>
        {showSelectedTemp("okay")}
      </div>
    )
  }
});

module.exports = Panel;
