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
        vm.showSpinner = true;
        vm.filterType;
        vm.filterValue;

        //Functions
        vm.getCityList = getCityList;
        vm.getCityListByFilter = getCityListByFilter;

        function getCityList() {
            vm.showTable = false;
            vm.showSpinner = true;
            dataservice.getCities()
                .then(function(data) {
                    if(data != null) {
                        vm.cities = data;
                        vm.showTable = true;
                    }
                    vm.showSpinner = false;
                })
                .catch(function(err) {
                    vm.error = err;
                    vm.showError = true;
                    vm.showSpinner = false;
                });
        }

        function getCityListByFilter() {
            vm.showTable = false;
            vm.showSpinner = true;
            dataservice.getCitiesWithFilter(vm.filterType,vm.filterValue)
            .then(function(data) {
                if(data != null) {
                    vm.cities = data;
                    vm.showTable = true;
                }
                else vm.showTable = false;
                vm.filterType = '';
                vm.filterValue = '';
                vm.showSpinner = false;
            })
            .catch(function(err) {
                console.log(err);
                vm.error = err;
                vm.showError = true;
                vm.filterType = '';
                vm.filterValue = '';
                vm.showSpinner = false;           
            });
        }
 
    }
})();