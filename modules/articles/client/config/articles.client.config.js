'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Find Candidates',
      state: 'articles',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'articles', {
      title: 'List Candidates',
      state: 'articles.list'
    });

    // // Add the dropdown create item
    // Menus.addSubMenuItem('topbar', 'articles', {
    //   title: 'Create Articles',
    //   state: 'articles.create',
    //   roles: ['user']
    // });
  }
]);
