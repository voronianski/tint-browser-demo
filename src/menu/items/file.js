var MenuItemFactory = require('../MenuItemFactory');

var submenus = [{
    title: 'New File',
    key: 'f'
}, {
    title: 'Open',
    key: 'o'
}, {
    title: 'Save',
    key: 's'
}, {
    title: 'Save As',
    key: 'S',
    modifiers: 'shift',
    separate: true
}, {
    title: 'Close',
    key: 'c',
    modifiers: 'cmd'
}];

module.exports = function () {
    return new MenuItemFactory('File', submenus).create();
};
