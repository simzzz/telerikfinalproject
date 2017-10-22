SystemJS.config({
    "transpiler": "plugin-babel",
    "map": {
        //SystemJS files\\
        "plugin-babel": "../node-modules/systemjs-plugin-babel/plugin-babel.js",
        "systemjs-babel-build": "../node-modules/systemjs-plugin-babel/systemjs-babel-browser.js",

        //App files\\
        "index": "../app-modules/index.js",
        "templates": "../app-modules/templates.js",
        "registerController": "../controllers/registerController.js",
        "loginController": "../controllers/loginController.js",
        "logoutController": "../controllers/logoutController.js",
        "userController": "../controllers/userController.js",
        "homeController": "../controllers/homeController.js",
        "contactsController": "../controllers/contactsController.js",
        "showsController": "../controllers/showsController.js",
        "editProfileController": "../controllers/editProfileController.js",
        "changePasswordController": "../controllers/changePasswordController.js",
        "reviewsController": "../controllers/reviewsController.js",
        "userRequester": "../requesters/userRequester.js",

        //Libraries\\
        "jquery": "../node-modules/jquery/dist/jquery.js",
        "ultimate-pagination": "../node_modules/ultimate-pagination/dist/ultimate-pagination.min.js",
        //Routing:
        "navigo": "../node-modules/navigo/lib/navigo.min.js",
        //HTML:
        "handlebars": "../node-modules/handlebars/dist/handlebars.js",
        //Popup messages
        "toastr": "../node-modules/toastr/toastr.js",
        //UI stuffs (autocomplete, calendar etc.)
        "jqueryUi": "../node-modules/jquery-ui-dist/jquery-ui.js",
        "bootstrap": "node-modules/bootstrap/dist/js/bootstrap.min.js",
        "popperjs": "../node-modules/popper.js/dist/popper.min.js",
    }
});

// SystemJS.import('index');