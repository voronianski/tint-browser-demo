var MenuItemFactory = require('../MenuItemFactory');

var submenus = [{
    title: 'Undo',
    key: 'u',
    handler: function () {
        application.undo();
    }
}, {
    title: 'Redo',
    key: 'r',
    handler: function () {
        application.redo();
    }
}, {
    title: 'Copy',
    key: 'c',
    handler: function () {
        application.copy();
    }
}, {
    title: 'Cut',
    key: 'x',
    handler: function () {
        application.cut();
    }
}, {
    title: 'Paste',
    key: 'v',
    handler: function () {
        application.paste();
    }
}];

module.exports = function () {
    return new MenuItemFactory('Edit', submenus).create();
};
