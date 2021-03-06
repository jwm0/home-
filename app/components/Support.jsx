var React = require('react');


var Support = React.createClass({
  componentDidMount: function() {
    var elem2 = new Foundation.Abide($('#support'));
    var that = this;
    $('#support').on("submit", function(ev) {
      ev.preventDefault();
      if(that.refs.text.value.length>10){
        $('#support').foundation('resetForm');
        that.onSuccess();
      }
      });
  },
  getInitialState: function () {
    return{
      submit: false
    };
  },
  onSuccess: function () {
    this.setState({
      submit: true
    });
  },
  render: function () {
    var {submit} = this.state;

    function submitted(){
      if(submit==true){
        return(
          <div id="messageSubmit">Thank you!<p>Your message has been sent to the support</p></div>
        )
      }
    }
      return(
        <div className="page2" id="support">
          <form data-abide noValidate>
            {submitted()}
            <div data-abide-error className="alert" style={{display:'none'}}>
            </div>
            <div className="row">
              <div className="small-4 small-centered columns">
                <label>Enter your e-mail
                  <input type="text" placeholder="name@example.com" aria-describedby="exampleHelpText" required pattern="email"/>
                  <span className="form-error">
                    Please enter a valid e-mail format
                  </span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="small-8 small-centered columns">
                <label>What's wrong?
                  <textarea pattern=".{10,}" placeholder="Type in here" rows="4" cols="50" ref="text" aria-describedby="exampleHelpText" required></textarea>
                  <span className="form-error">
                    The message needs to be at least 10 characters long!
                  </span>
                </label>
              </div>
            </div>
            <div className="row">
              <fieldset className="formButton">
                <button className="button success" type="submit" value="Submit">Send</button>
              </fieldset>
            </div>
          </form>
        </div>
    )
  }
});



module.exports = Support;
