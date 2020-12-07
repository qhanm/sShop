/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

window.basePath = 'http://localhost/sShop/public/';
window.qhnPrefix = 'qhn6396_';

require('./backend/layouts');

if(document.getElementById(window.qhnPrefix + 'backend_login')){
    //require('./backend/components/auth/Login');
}

if(document.getElementById(window.qhnPrefix + 'backend_category_form')){
    //require('./backend/components/category/Form');
}

if(document.getElementById(window.qhnPrefix + 'backend_category_list')){
    //require('./backend/components/category/List');
}

if(document.getElementById(window.qhnPrefix + 'backend_page_category_list')){
    require('./backend/page/category/CategoryListPage');
}

if (document.getElementById('example')) {
    require('./components/Example');
}
//require('./components/TestComponent');


