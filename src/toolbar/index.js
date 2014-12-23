var Toolbar = require('Toolbar');
var Button = require('Button');
var TextInput = require('TextInput');
var Box = require('Box');

var mainWindow = require('../mainWindow');

var MainToolbar = exports;

MainToolbar.create = function () {

    var urlField = new TextInput();

    var backBtn = new Button();
    backBtn.image = 'back';

    var forwardBtn = new Button();
    forwardBtn.image = 'forward';

    var reloadBtn = new Button();
    reloadBtn.image = 'reload';

    var navBtn = new Button();
    navBtn.title = 'Menu';
    navBtn.image = 'view-as-tree';

    var box = new Box();
    box.visible = false;
    box.width = 220;
    box.height = mainWindow.sharedInstance.height;
    box.top = '-15px';
    box.right = 0;

    mainWindow.sharedInstance.appendChild(box);
    navBtn.addEventListener('click', function () {
        console.log('klik klik');
        box.visible = box.visible ? false : true;
    });

    var toolbar = new Toolbar();

    toolbar.appendChild(backBtn);
    toolbar.appendChild(forwardBtn);
    toolbar.appendChild('space');
    toolbar.appendChild(urlField);
    toolbar.appendChild('space');
    toolbar.appendChild(reloadBtn);
    toolbar.appendChild(navBtn);

    return toolbar;
};
