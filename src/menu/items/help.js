var MenuItemFactory = require('../MenuItemFactory');

var submenus = [{
    title: 'Website',
    handler: function () {
        console.log('Show website');
    }
}, {
    title: 'License',
    handler: function () {
        console.log('Show licence');
    }
}];

module.exports = function () {
    return new MenuItemFactory('Help', submenus).create();
};
