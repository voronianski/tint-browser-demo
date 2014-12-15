var mainWindow = require('../../mainWindow');
var MenuItemFactory = require('../MenuItemFactory');

var submenus = [{
    title: 'Minimize',
    key: 'm',
    handler: function () {
        mainWindow.sharedInstance.state = 'minimized';
    }
}, {
    title: 'Zoom',
    handler: function () {
        mainWindow.sharedInstance.state = 'maximized';
    }
}, {
    title: 'Bring All to Front',
    separate: true,
    handler: function () {
        mainWindow.sharedInstance.bringToFront();
    }
}];

module.exports = function () {
    return new MenuItemFactory('Window', submenus).create();
};
