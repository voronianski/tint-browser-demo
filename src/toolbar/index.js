var Toolbar = require('Toolbar');
var Button = require('Button');
var TextInput = require('TextInput');

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


    var toolbar = new Toolbar();

    toolbar.appendChild(backBtn);
    toolbar.appendChild(forwardBtn);
    toolbar.appendChild('space');
    toolbar.appendChild(urlField);
    toolbar.appendChild('space');
    toolbar.appendChild(reloadBtn);

    return toolbar;
};
