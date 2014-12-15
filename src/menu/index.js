var Menu = require('Menu');

var apple = require('./items/apple');
var file = require('./items/file');
var edit = require('./items/edit');
var wind = require('./items/window');
var help = require('./items/help');

var MainMenu = exports;

MainMenu.create = function () {
    var mainMenu = new Menu();

    mainMenu.appendChild(apple());
    mainMenu.appendChild(file());
    mainMenu.appendChild(edit());
    mainMenu.appendChild(wind());
    mainMenu.appendChild(help());

    return mainMenu;
};
