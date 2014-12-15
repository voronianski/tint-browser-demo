var MenuItemFactory = require('../MenuItemFactory');

var submenus = [{
    title: 'About '+application.name,
    separate: true,
    handler: function () {
        console.log('Do smth for about!');
    }
}, {
    title: 'Hide '+application.name,
    key: 'h',
    handler: function () {
        application.visible = false;
    }
}, {
    title: 'Hide Others',
    handler: function () {
        application.hideAllOtherApplications();
    }
}, {
    title: 'Show All',
    separate: true,
    handler: function () {
        application.unhideAllOtherApplications();
    }
}, {
    title: 'Quit '+application.name,
    key: 'q',
    handler: function () {
        process.exit(0);
    }
}];

module.exports = function () {
    return new MenuItemFactory(application.name, submenus).create();
};
