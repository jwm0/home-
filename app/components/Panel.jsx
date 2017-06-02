var React = require('react');

var minTemp = 17;

var Panel = React.createClass({
  componentDidMount: function() {
    var elem = new Foundation.Slider($('.slider'));
  },
  getInitialState: function () {
    return{
      setTemp: this.refs.location.value;
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
    var temp=setTemp; // not necessary, can use setTemp later
    var random = Math.random(); // test, to be removed

    function showSelectedTemp(){
      return(
        <div style={{border:'2px solid red;height:50px'}}>
          {temp}
        </div>
      )
    }
    return (
      <div className="panel">
        <div className="row">
          <div className="borderName">now</div>
          <div className="currentStats">
            Temp: {random}
          </div>
          <div className="borderName">control panel</div>
          <div className="controlPanel">
            <div className="slider vertical" data-slider data-initial-start={curTemp} data-step="5" data-end="110" data-vertical="true">
              <span className="slider-handle" data-slider-handle role="slider" tabIndex="1" aria-controls="sliderOutput1"
             onClick={this.onValueChange}
             onMouseUp={this.onValueChange}
             onMouseMove={this.onValueChange}
             onMouseDown={this.onValueChange}></span>
              <span className="slider-fill" data-slider-fill></span>
            </div>
            <input type="number" id="sliderOutput1" ref="location" onProgress={this.onValueChange}/>
          </div>
          <div className="borderButton">
              <form onSubmit={this.onFormSubmit}>
                <button type="submit" className="success button large" value="Submit">confirm</button>
              </form>
          </div>
        </div>
        {showSelectedTemp()}
      </div>
    )
  }
});

module.exports = Panel;
