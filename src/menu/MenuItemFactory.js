var Menu = require('Menu');
var MenuItem = require('MenuItem');
var MenuItemSeparator = require('MenuItemSeparator');

function MenuItemFactory (title, submenus) {
    this._title = title || 'No title';
    this._submenus = submenus || [];
}

MenuItemFactory.prototype._populate = function () {
    var submenu = new Menu(this._title);

    this._submenus.forEach(function (item) {
        var menuItem = new MenuItem(item.title, item.key, item.modifiers);
        if (item.handler) {
            menuItem.addEventListener('click', item.handler);
        }
        submenu.appendChild(menuItem);

        if (item.separate) {
            submenu.appendChild(new MenuItemSeparator());
        }
    });

    return submenu;
};

MenuItemFactory.prototype.create = function () {
    var menu = new MenuItem(this._title);
    menu.submenu = this._populate();
    return menu;
};

module.exports = MenuItemFactory;
