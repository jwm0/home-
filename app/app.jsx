var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Page = require('Page');
var Login = require('Login');
var Panel = require('Panel');
var Support = require('Support');

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
require('script!jquery.scrollto/jquery.scrollTo.min.js');

$(document).foundation();

// app css
require('!style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="login" component={Login}/>
      <Route path="panel" component={Panel}/>
      <Route path="support" component={Support}/>
      <IndexRoute component={Page}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
