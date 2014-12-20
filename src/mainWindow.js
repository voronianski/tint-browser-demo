var Screens = require('Screens');
var Window = require('Window');

var mainMenu = require('./menu');
var mainToolbar = require('./toolbar');

MainWindow = exports;

MainWindow.init = function () {
    // Create main application window
    var win = MainWindow.sharedInstance = new Window();

    win.canBeFullscreen = true;

    // Access actual screen size for window
    win.width = Screens.active.bounds.width - 300;
    win.height = Screens.active.bounds.height;
    win.x = Screens.active.bounds.x + 300;
    win.y = Screens.active.bounds.y;

    win.title = application.name;

    // Create application menu
    win.menu = mainMenu.create();

    // Create application toolbar
    win.toolbar = mainToolbar.create();

    // Show window when all manipulations are done
    win.visible = true;
};
