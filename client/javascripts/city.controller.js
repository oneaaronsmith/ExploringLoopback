// city.controller.js
(function() {
    'use strict';

    angular
        .module('app')
        .controller('CityController', CityController);

    CityController.$inject = ['dataservice'];

    function CityController(dataservice) { 
        var vm = this;
        //Variables
        vm.cities = getCityList();
        vm.showTable = false;
        vm.error;
        vm.showError = false;
        vm.filterType;
        vm.filterValue;

        //Functions
        vm.getCityList = getCityList;
        vm.getCityListByFilter = getCityListByFilter;

        function getCityList() {
            dataservice.getCities()
                .then(function(data) {
                    if(data != null) {
                        vm.cities = data;
                        vm.showTable = true;
                    }
                })
                .catch(function(err) {
                    vm.error = err;
                    vm.showError = true;
                });
        }

        function getCityListByFilter() {
            dataservice.getCitiesWithFilter(vm.filterType,vm.filterValue)
            .then(function(data) {
                if(data != null) {
                    vm.cities = data;
                    vm.showTable = true;
                }
                else vm.showTable = false;
                vm.filterType = '';
                vm.filterValue = '';
            })
            .catch(function(err) {
                console.log(err);
                vm.error = err;
                vm.showError = true;
                vm.filterType = '';
                vm.filterValue = '';           
            });
        }
 
    }
})();