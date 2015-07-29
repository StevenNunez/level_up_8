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

  var shirts = [
      { shirtName: 'Casual Friday',
          color: 'gray',
          size: 'M',
          price: '12'
      },
      { shirtName: 'Portal Based Cleaning',
          color: 'gray',
          size: 'M',
          price: '12'
      }

  ];

})();
