var React = require('react');

var minTemp = 17;
var roomTemp = 25.7; // <-- room temperature
var arrow = undefined;

var Panel = React.createClass({
  componentDidMount: function() {
    var slider1 = new Foundation.Slider($('#tempSlider'));
    var slider2 = new Foundation.Slider($('#blindsSlider'));
    var that = this;
    $('#switch1').prop('checked', true);
    $("#tempSlider, #blindsSlider").on('moved.zf.slider', function() {
        that.onValueChange();
    });
  },
  getInitialState: function () {
    return{
      setTemp: undefined,
      windowBlinds: undefined
    };
  },
  onValueChange: function () {
    this.setState({
      setTemp: minTemp + this.refs.tempHandle.value*0.1,
      windowBlinds: this.refs.blindsHandle.value
    });
  },
  onFormSubmit: function(e){
    e.preventDefault();
    var tempHandle = this.refs.tempHandle.value;
    var value = minTemp + tempHandle*0.1;
    if(value>roomTemp)
      arrow="icon-up-small";
    else if (value<roomTemp)
      arrow="icon-down-small";
    else {
      arrow=undefined;
    }

    this.forceUpdate(); // <- to be removed
  },
  render: function() {
    var {setTemp, windowBlinds} = this.state;
    var curTemp = 23; // <-- API
    var curBlindPosition = 0; // <-- API

    curTemp = (curTemp-minTemp)*10;



    function showSelectedTemp(){
      if(typeof setTemp == 'number')
      return(
        <div className="tempDisplay">
          {setTemp.toFixed(1)}°C
        </div>
      )
    }

    function showBlindsPosition(){
      return(
        <div className="tempDisplay">
          {windowBlinds}%
        </div>
      )
    }

    return (
      <div className="panel">
        <div className="row">
          <div className="borderName">now</div>
          <div className="currentStats">{roomTemp}°C<i className={arrow}></i>
          </div>
          <div className="borderName">control panel</div>
          <div className="controlPanel">
            <div className="temperatureControl">
              <div className="controlName icon-temperatire">temperature</div>
              <div className="slider vertical" data-slider data-initial-start={curTemp} data-step="5" data-end="110" data-vertical="true" id="tempSlider">
                <span className="slider-handle" data-slider-handle role="slider" tabIndex="1"></span>
                <span className="slider-fill" data-slider-fill></span>
                <input id="tempInput" type="hidden" ref="tempHandle" onChange={this.onValueChange}/>
              </div>
              {showSelectedTemp()}
            </div>
            <div className="temperatureControl">
              <div className="controlName icon-window-maximize">window blinds</div>
              <div className="slider vertical" data-slider data-initial-start={curBlindPosition} data-step="25" data-end="100" data-vertical="true" id="blindsSlider">
                <span className="slider-handle" data-slider-handle role="slider" tabIndex="1"></span>
                <span className="slider-fill" data-slider-fill></span>
                <input id="blindsInput" type="hidden" ref="blindsHandle"/>
              </div>
              {showBlindsPosition()}
            </div>
            <div className="borderName">switches <i className="icon-exchange"></i></div>
            <div id="lightPanel">
              <div className="switchControl">
                <div className="controlName">indoor lights</div>
                <div className="switch large">
                  <input className="switch-input" id="switch1" type="checkbox"/>
                  <label className="switch-paddle" htmlFor="switch1">
                    <span className="show-for-sr">Lights switch</span>
                    <span className="switch-active" aria-hidden="true">On</span>
                    <span className="switch-inactive" aria-hidden="true">Off</span>
                  </label>
                </div>
              </div>
              <div className="switchControl">
                <div className="controlName">outdoor lights</div>
                <div className="switch large">
                  <input className="switch-input" id="switch2" type="checkbox"/>
                  <label className="switch-paddle" htmlFor="switch2">
                    <span className="show-for-sr">Lights switch</span>
                    <span className="switch-active" aria-hidden="true">On</span>
                    <span className="switch-inactive" aria-hidden="true">Off</span>
                  </label>
                </div>
              </div>
              <div className="switchControl">
                <div className="controlName">tv</div>
                <div className="switch large">
                  <input className="switch-input" id="switch3" type="checkbox"/>
                  <label className="switch-paddle" htmlFor="switch3">
                    <span className="show-for-sr">Lights switch</span>
                    <span className="switch-active" aria-hidden="true">On</span>
                    <span className="switch-inactive" aria-hidden="true">Off</span>
                  </label>
                </div>
              </div>
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
