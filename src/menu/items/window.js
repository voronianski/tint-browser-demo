var MenuItemFactory = require('../MenuItemFactory');

var submenus = [{
    title: 'Minimize',
    key: 'm',
    handler: function () {
        // get access to actual window (implement as singleton?)
        // win.state = 'minimized';
    }
}, {
    title: 'Zoom',
    handler: function () {
        // get access to actual window (implement as singleton?)
        // win.state = 'maximized';
    }
}, {
    title: 'Bring All to Front',
    separate: true,
    handler: function () {
        // get access to actual window (implement as singleton?)
        // win.bringToFront();
    }
}];

module.exports = function () {
    return new MenuItemFactory('Window', submenus).create();
};
