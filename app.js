require('Application');

application.name = 'Tint2 Browser';
application.exitAfterWindowsClose = true;

var WebView = require('WebView');

var mainWindow = require('./src/mainWindow');
mainWindow.init();

var webView = new WebView();
mainWindow.sharedInstance.appendChild(webView);

webView.useragent = 'User-Agent	Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5';
webView.top = webView.left = webView.right = webView.bottom = 0;
webView.location = 'http://labs.voronianski.com/tint2-demo';
