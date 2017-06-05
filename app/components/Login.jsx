var React = require('react');

var Login = React.createClass({
  componentDidMount: function() {
    var elem = new Foundation.Abide($('#abide'));
    $(document).on("submit", function(ev) {
      ev.preventDefault();
      window.location.replace("/#/panel");
    });
  },
  render: function () {
      return(
        <div className="page2" id="abide">
          <form data-abide noValidate onSubmit={this.onFormSubmit}>
            <div data-abide-error className="alert callout" style={{display:'none'}}>
              <p><i className="fi-alert"></i>Wrong ID/password</p>
            </div>
            <div className="row">
              <div className="small-6 large-centered columns">
                <label>ID
                  <input type="text" placeholder="ID NUMBER" aria-describedby="exampleHelpText" required pattern="number"/>
                  <span className="form-error">
                    ID can only consist of numbers
                  </span>
                </label>
                <p className="help-text" id="exampleHelpText">ID can be found on your main device</p>
              </div>
            </div>
            <div className="row">
              <div className="small-6 large-centered columns">
                <label>Password
                  <input type="password" id="password" placeholder="PIN CODE" aria-describedby="exampleHelpText" required />
                  <span className="form-error">
                    Required!
                  </span>
                </label>
                <p className="help-text" id="exampleHelpText"></p>
              </div>
            </div>
            <div className="row">
              <fieldset className="formButton">
                <button className="button success" type="submit" value="Submit">Submit</button>
              </fieldset>
              <fieldset className="formButton">
                <button className="button success" type="reset" value="Reset">Reset</button>
              </fieldset>
            </div>
          </form>
        </div>
    )
  }
});



module.exports = Login;
