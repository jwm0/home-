var React = require('react');

var Panel = (props) => {
  return(
    <div className="page2">
      <form data-abide noValidate>
        <div className="row">
          <div className="large-4 medium-6 small-12 columns">
            <label>Login
              <input type="text" placeholder="username" required pattern="number"/>
              <span className="form-error">
                Enter your username
              </span>
            </label>
          </div>
          <div className="large-4 medium-6 small-12 columns">
            <label>Password
              <input type="password" id="password" placeholder="password" required />
              <span className="form-error">
                I'm required!
              </span>
            </label>
          </div>
        </div>
    <div className="row">
      <fieldset className="large-12 columns">
        <button className="button" type="submit" value="Submit">Submit</button>
      </fieldset>
    </div>
  </form>
</div>
  )
};

module.exports = Panel;
