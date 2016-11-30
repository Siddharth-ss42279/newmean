'use strict';

// Articles controller

var articlesapp = angular.module('articles');

articlesapp.controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles', '$modal', '$log',
  function ($scope, $stateParams, $location, Authentication, Articles, $modal, $log) {

    this.authentication = Authentication;

    // Find a list of Articles
    this.articles = Articles.query();

      //open model window to create candidate form
    this.modalCreate = function (size) {
      var modalInstance = $modal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'modules/articles/client/views/create-article.client.view.html',
        controller: function ($scope, $modalInstance){


          $scope.ok = function () {
            if(this.createProfile.$valid) {
              $modalInstance.close();
            }
          };

          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        },
        size: size,
        
      });

      modalInstance.result.then(function (selectedItem) {

      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };


      //open model window to update single tutor
    this.modalUpdate = function (size,selectedArticle) {
      var modalInstance = $modal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'modules/articles/client/views/edit-article.client.view.html',
        controller: function ($scope, $modalInstance, article){

          $scope.article = article;

          $scope.ok = function () {
            if(this.updateProfile.$valid) {
              $modalInstance.close($scope.article);
            }
          };

          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        },
        size: size,
        resolve: {
          article: function () {
            return selectedArticle;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });


    };



    // Remove existing Article
    this.remove = function (article) {
      if (article) {
        article.$remove();

        for (var i in this.articles) {
          if (this.articles[i] === article) {
            this.articles.splice(i, 1);
          }
        }
      } else {
        this.article.$remove(function () {
        });
      }
    };
  }
]);

articlesapp.controller('ArticlesCreateController', ['$scope', 'Articles',
  function ($scope, Articles) {

    this.create = function (isValid) {
      


      // Create new Article object
      var article = new Articles({
        jobtitle: this.jobtitle,
        locat: this.locat,
        salary: this.salary,
        contract: this.contract,
        companybackground: this.companybackground,
        role: this.role,
        fname: this.fname,
        lname: this.lname,
        gender: this.gender,
        age: this.age,
        postalcode: this.postalcode,
        address: this.address,
        tnumber: this.tnumber,
        email: this.email,
        mnumber: this.mnumber,
        finalyear: this.finalayer,
        undergraduate: this.undergraduate,
        tepassyear: this.tepassyear,
        tegrade: this.tegrade,
        twpassyear: this.twpassyear,
        twgrade: this.twgrade,
        anygap: this.anygap,
        reffname: this.reffname,
        reflname: this.reflname,
        refcompany: this.refcompany,
        refdesignation: this.refdesignation,
        refaddress: this.refaddress,
        reftnumber: this.reftnumber,
        refemail: this.refemail,
        refrelation: this.refrelation,
        position: this.position,
        created: this.created,
        stime: this.stime,
        ftime: this.ftime,
        pfname: this.pfname,
        plname: this.plname,
        pdepartment: this.pdepartment,
        pdesignation: this.pdesignation,
        natureofinterview: this.natureofinterview,
        satisfyability: this.satisfyability,
        ratingscale: this.ratingscale,
        select: this.select   

      });

      // Redirect after save
      article.$save(function (response) {
       

        // Clear form fields
        $scope.jobtitle = '';
        $scope.locat = '';
        $scope.salary = '';
        $scope.contract = '';
        $scope.companybackground = '';
        $scope.role = '';
        $scope.fname = '';
        $scope.lname = '';
        $scope.age = '';
        $scope.gender = '';
        $scope.address = '';
        $scope.postalcode = '';
        $scope.tnumber = '';
        $scope.email = '';
        $scope.mnumber = '';
        $scope.finalyear = '';
        $scope.undergraduate = '';
        $scope.tepassyear = '';
        $scope.tegrade = '';
        $scope.twpassyear = '';
        $scope.twgrade = '';
        $scope.anygap = '';
        $scope.reffname = '';
        $scope.reflname = '';
        $scope.refcompany = '';
        $scope.refdesignation = '';
        $scope.refaddress = '';
        $scope.reftnumber = '';
        $scope.refemail = '';
        $scope.refrelation = '';
        $scope.position = '';
        $scope.created = '';
        $scope.stime = '';
        $scope.ftime = '';
        $scope.pfname = '';
        $scope.plname = '';
        $scope.pdepartment = '';
        $scope.pdesignation = '';
        $scope.natureofinterview = '';
        $scope.satisfyability = '';
        $scope.ratingscale = '';
        $scope.select = '';



      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };
  }
]);

articlesapp.controller('ArticlesUpdateController', ['$scope','Articles',
  function ($scope, Articles) {


    // Update existing Article
    this.update = function (updatedArticle) {

      var article = updatedArticle;

      article.$update(function () {

        //location.path('articles/' + article._id);
        console.log('now calling put method');

      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };
  }
]);



articlesapp.directive('articleList', [function(){
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'modules/articles/client/views/article-list-template.html',
    link: function(scope, element, attra){

    }
  };
}]);

    

    // // Create new Article
    // $scope.create = function (isValid) {
    //   $scope.error = null;

    //   if (!isValid) {
    //     $scope.$broadcast('show-errors-check-validity', 'articleForm');

    //     return false;
    //   }

    //   // Create new Article object
    //   var article = new Articles({
    //     jobtitle: this.jobtitle,
    //     locat: this.locat,
    //     salary: this.salary,
    //     contract: this.contract,
    //     companybackground: this.companybackground,
    //     role: this.role,
    //     fname: this.fname,
    //     lname: this.lname,
    //     gender: this.gender,
    //     age: this.age,
    //     postalcode: this.postalcode,
    //     address: this.address,
    //     tnumber: this.tnumber,
    //     email: this.email,
    //     mnumber: this.mnumber,
    //     finalyear: this.finalayer,
    //     undergraduate: this.undergraduate,
    //     tepassyear: this.tepassyear,
    //     tegrade: this.tegrade,
    //     twpassyear: this.twpassyear,
    //     twgrade: this.twgrade,
    //     anygap: this.anygap,
    //     reffname: this.reffname,
    //     reflname: this.reflname,
    //     refcompany: this.refcompany,
    //     refdesignation: this.refdesignation,
    //     refaddress: this.refaddress,
    //     reftnumber: this.reftnumber,
    //     refemail: this.refemail,
    //     refrelation: this.refrelation,
    //     position: this.position,
    //     created: this.created,
    //     stime: this.stime,
    //     ftime: this.ftime,
    //     pfname: this.pfname,
    //     plname: this.plname,
    //     pdepartment: this.pdepartment,
    //     pdesignation: this.pdesignation,
    //     natureofinterview: this.natureofinterview,
    //     satisfyability: this.satisfyability,
    //     ratingscale: this.ratingscale,
    //     select: this.select   

    //   });

    //   // Redirect after save
    //   article.$save(function (response) {
    //     $location.path('articles/' + response._id);

    //     // Clear form fields
    //     $scope.jobtitle = '';
    //     $scope.locat = '';
    //     $scope.salary = '';
    //     $scope.contract = '';
    //     $scope.companybackground = '';
    //     $scope.role = '';
    //     $scope.fname = '';
    //     $scope.lname = '';
    //     $scope.age = '';
    //     $scope.gender = '';
    //     $scope.address = '';
    //     $scope.postalcode = '';
    //     $scope.tnumber = '';
    //     $scope.email = '';
    //     $scope.mnumber = '';
    //     $scope.finalyear = '';
    //     $scope.undergraduate = '';
    //     $scope.tepassyear = '';
    //     $scope.tegrade = '';
    //     $scope.twpassyear = '';
    //     $scope.twgrade = '';
    //     $scope.anygap = '';
    //     $scope.reffname = '';
    //     $scope.reflname = '';
    //     $scope.refcompany = '';
    //     $scope.refdesignation = '';
    //     $scope.refaddress = '';
    //     $scope.reftnumber = '';
    //     $scope.refemail = '';
    //     $scope.refrelation = '';
    //     $scope.position = '';
    //     $scope.created = '';
    //     $scope.stime = '';
    //     $scope.ftime = '';
    //     $scope.pfname = '';
    //     $scope.plname = '';
    //     $scope.pdepartment = '';
    //     $scope.pdesignation = '';
    //     $scope.natureofinterview = '';
    //     $scope.satisfyability = '';
    //     $scope.ratingscale = '';
    //     $scope.select = '';



    //   }, function (errorResponse) {
    //     $scope.error = errorResponse.data.message;
    //   });
    // };

    // // Remove existing Article
    // $scope.remove = function (article) {
    //   if (article) {
    //     article.$remove();

    //     for (var i in $scope.articles) {
    //       if ($scope.articles[i] === article) {
    //         $scope.articles.splice(i, 1);
    //       }
    //     }
    //   } else {
    //     $scope.article.$remove(function () {
    //       $location.path('articles');
    //     });
    //   }
    // };

    // // Update existing Article
    // $scope.update = function (isValid) {
    //   $scope.error = null;

    //   if (!isValid) {
    //     $scope.$broadcast('show-errors-check-validity', 'articleForm');

    //     return false;
    //   }

    //   var article = $scope.article;

    //   article.$update(function () {
    //     $location.path('articles/' + article._id);
    //   }, function (errorResponse) {
    //     $scope.error = errorResponse.data.message;
    //   });
    // };

    

    // // Find existing Article
    // $scope.findOne = function () {
    //   $scope.article = Articles.get({
    //     articleId: $stateParams.articleId
    //   });
    // };

