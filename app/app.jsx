var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

// Load foundation - allows use of foundation css framework
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css - allows to add own css/sass
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="timer"/>
      <Route path="countdown"/>
      <IndexRoute/>
    </Route>
  </Router>,
  document.getElementById('app')
);