(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = shirts;
  });

  app.controller('PanelController', function(){
    this.tab = 1;
    this.setTab = function(newTab){
      this.tab = newTab;
    };

    this.isCurrentTab = function(tab){
      return this.tab === tab;
    };

    this.activeClass = function(tab){
      if(this.tab === tab){
        return "banana";
      }
    };
  });

  app.controller("ReviewController", function($scope){
    this.review = {};
    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    }
  });

  app.directive("shirtNavigation", function(){
    return {
      restrict: "E",
      templateUrl: 'shirt-navigation.html'
    }
  });

  app.directive("shirtDescription", function(){
    return {
      restrict: "E",
      templateUrl: 'shirt-description.html'
    }
  });

  app.directive("shirtPrice", function(){
    return {
      restrict: "E",
      templateUrl: 'shirt-price.html'
    }
  });

  var shirts = [
      { shirtName: 'Casual Friday',
          color: 'gray',
          size: 'M',
          price: '12',
          reviews: []
      },
      { shirtName: 'Portal Based Cleaning',
          color: 'gray',
          size: 'M',
          price: '12',
          reviews: []
      }

  ];

})();
