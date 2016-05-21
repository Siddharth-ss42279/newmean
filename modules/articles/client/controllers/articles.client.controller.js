'use strict';

// Articles controller

var articlesapp = angular.module('articles');

articlesapp.controller('ArticlesController', ['$scope', '$stateParams', 'Authentication', 'Articles', '$modal', '$log', 
  function ($scope, $stateParams, Authentication, Articles, $modal, $log) {

    this.authentication = Authentication;
    // Find a list of Articles
    
    this.articles = Articles.query();

    //open model window to create single tutor
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
        size: size
        
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
articlesapp.controller('ArticlesCreateController', ['$scope','Articles',
  function ($scope, Articles) {

        // Create new Article
    this.create = function () {
     

     

      // Create new Article object
      var article = new Articles({
        list: this.list,
        firstName: this.firstName,
        lastName: this.lastName,
        reffered: this.reffered,
        male: this.male,
        female: this.female,
        age: this.age,
        address: this.address,
        city: this.city,
        country: this.country,
        postalCode: this.postalCode,
        phone: this.phone,
        email: this.email,
        mon: this.mon,
        tue: this.tue,
        wed: this.wed,
        thu: this.thu,
        fri: this.fri,
        sat: this.sat,
        sund: this.sund,
        feeHourly: this.feeHourly,
        feeMonthly: this.feeMonthly,

        art: this.art,
        math: this.math,
        science: this.science,
        social: this.social,
        english: this.english,
        economic: this.economic,
        account: this.account,
        computer: this.computer,

        experience: this.experience,
        aboutYou: this.aboutYou,
        areaofStudy: this.areaofStudy,
        major: this.major,
        institute: this.institute

      });

      // Redirect after save
      article.$save(function (response) {
       

        // Clear form fields
        $scope.firstName = '';
        $scope.lastName= '';
        $scope.reffered='';
        $scope.male= '';
        $scope.female= '';
        $scope.age= '';
        $scope.address= '';
        $scope.city= '';
        $scope.country= '';
        $scope.postalCode= '';
        $scope.phone= '';
        $scope.email= '';
        $scope.mon='';
        $scope.tue='';
        $scope.wed='';
        $scope.thu='';
        $scope.fri='';
        $scope.sat='';
        $scope.sund='';
        $scope.avalability= '';
        $scope.feeHourly= '';
        $scope.feeMonthly= '';
        $scope.art= '';
        $scope.math= '';
        $scope.science= '';
        $scope.social= '';
        $scope.english= '';
        $scope.economic= '';
        $scope.account= '';
        $scope.computer= '';
        $scope.experience= '';
        $scope.aboutYou= '';
        $scope.areaofStudy= '';
        $scope.major= '';
        $scope.institute= '';
      
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

  }
]);
articlesapp.controller('ArticlesUpdateController', ['$scope', 'Articles',
  function ($scope, Articles) {


    $scope.ageoptions = [
      {id:1, item:'17 - 20'},
      {id:2, item:'21 - 24'},
      {id:3, item:'25 - 28'},
      {id:4, item:'29 - 32'},
      {id:5, item:'33 - 36'},
      {id:6, item:'above 36...'},
    ];
    //$scope.age = $scope.ageoptions[0];
    







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

    



    

