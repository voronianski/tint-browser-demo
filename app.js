require('Application');

application.exitAfterWindowsClose = true;

var Screens = require('Screens');
var Window = require('Window');
var WebView = require('WebView');

// Create main application window
var win = new Window();
win.canBeFullscreen = true;

// Access actual screen size for window
win.width = Screens.active.bounds.width;
win.height = Screens.active.bounds.height;
win.x = Screens.active.bounds.x;
win.y = Screens.active.bounds.y;

win.title = 'Tint Browser';

// When all manipulations are done, show window
win.visible = true;

var webView = new WebView();
win.appendChild(webView);

webView.useragent = 'User-Agent	Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5';
webView.top = webView.left = webView.right = webView.bottom = 0;
webView.location = 'http://google.com';
