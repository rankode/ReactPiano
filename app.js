// server.js
// var server = express();

// server.use(function(req, res) {
// 	var appHtml = React.renderToString(<App />);
// 	var html = injectIntoHtml({app: appHtml});
// 	res.send(html);
// });


// client.js
// React.render(<App />, document.getElementById("app"));

// after the app is loaded in the browser, 
// the first render doesn't "destroy" the DOM 
// generated by the server, but rather "hooks" onto it. 

// sharing state
server.use(function(req, res) {
	var state = {};

	fetchData(function(err, data) {
		state.data = data;

		var exposedState = "window.__STATE__=" + JSON.stringify(state) + ";";

		var appHtml = React.renderToString(<App data={data} />);

		var html = injectIntoHtml({
			app: appHtml,
			state: exposedState
		});

		res.send(html);

	});
});

// client.js
var state = window.__STATE__;
React.render(<App data={state.data} />,
	document.getElementById);

// We see the need to be able to serialize all 
// of the state on the server, and then parse 
// and instantiate it on the client (you'll 
// hear the terms dehydrate and rehydrate).

// Also note that on the server the app state 
// is bound to each request, i.e. there is one 
// state per request (since a server serves 
// multiple client requests). On the client, 
// the app state is global, i.e. we only need 
// one state for the whole browser session.

// On the server, we can simply get the route by 
// matching the request URL against our "routes declaration" (not shown here):
// server.js
server.use(function(req, res) {
  var route = matchPath(req.url);
  var appHtml = React.renderToString(<App route={route} />);
  var html = injectIntoHtml({app: appHtml});
  res.send(html);
});

// On the client, we use the path from the browser's 
// URL location API to match a route (implementation not shown here):
// client.js
function render(route) {
  React.render(<App route={route} />, document.getElementById('app'));
}

// first render
var route = matchPath(getCurrentPath());
render(route);
// re-render on browser location change
addLocationChangeListener(function(path) {
  var route = matchPath(path);
  render(route);
});

// Since subsequent route changes will happen on the client, 
// we listen to browser URL location changes (this could be 
// implemented on top of HTML5 History), and re-render the new route.















































