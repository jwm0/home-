var React = require('react');

var minTemp = 17;

var Panel = React.createClass({
  componentDidMount: function() {
    var elem = new Foundation.Slider($('.slider'));
    var that = this;
    $('.slider').on('moved.zf.slider', function() {
        that.onValueChange();
    });
  },
  getInitialState: function () {
    return{
      setTemp: undefined
    };
  },
  onValueChange: function () {
    this.setState({
      setTemp: minTemp + this.refs.location.value*0.1
    });
  },
  onFormSubmit: function(e){
    e.preventDefault();
    var location = this.refs.location.value;
    var value = minTemp + location*0.1;
    alert(value);
    this.forceUpdate(); // <- to be removed
  },
  render: function() {
    var {setTemp} = this.state;
    var curTemp = 24; // <-- API
    curTemp = (curTemp-minTemp)*10;



    function showSelectedTemp(){
      if(typeof setTemp == 'number')
      return(
        <div className="tempDisplay">
          {setTemp.toFixed(1)}°C
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
            <div className="temperatureControl">
              <div className="controlName">Temperature</div>
              <div className="slider vertical" data-slider data-initial-start={curTemp} data-step="5" data-end="110" data-vertical="true">
                <span className="slider-handle" data-slider-handle role="slider" tabIndex="1"></span>
                <span className="slider-fill" data-slider-fill></span>
                <input id="tempInput" type="hidden" ref="location" onChange={this.onValueChange}/>
              </div>
              {showSelectedTemp()}
            </div>
            <div className="temperatureControl">
              <div className="controlName">Light switch</div>
              <div className="switch">
                <input className="switch-input" id="switch1" type="checkbox" name="exampleSwitch"/>
                <label className="switch-paddle" htmlFor="switch1">
                  <span className="show-for-sr">Lights switch</span>
                  <span className="switch-active" aria-hidden="true">On</span>
                  <span className="switch-inactive" aria-hidden="true">Off</span>
                </label>
              </div>
              {showSelectedTemp()}
            </div>
          </div>
          <div className="borderButton">
              <form onSubmit={this.onFormSubmit}>
                <button className="coolButton">confirm</button>
                {/* <button type="submit" className="coolButton success button large" value="Submit">confirm</button> */}
              </form>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Panel;
