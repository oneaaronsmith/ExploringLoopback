// country.controller.js
(function() {
    'use strict';

    angular
        .module('app')
        .controller('CountryController', CountryController);

    CountryController.$inject = ['dataservice'];

    function CountryController(dataservice) { 
        var vm = this;
        //Variables
        vm.countries = getCountryList();
        vm.showTable = false;
        vm.error;
        vm.showError = false;
        vm.filterType;
        vm.filterValue;

        //Functions
        vm.getCountryList = getCountryList;
        vm.getCountryListByFilter = getCountryListByFilter;

        function getCountryList() {
            dataservice.getCountries()
                .then(function(data) {
                    if(data != null) {
                        vm.countries = data;
                        vm.showTable = true;
                    }
                })
                .catch(function(err) {
                    vm.error = err;
                    vm.showError = true;
                });
        }

        function getCountryListByFilter() {
            dataservice.getCountriesWithFilter(vm.filterType,vm.filterValue)
            .then(function(data) {
                if(data != null) {
                    vm.countries = data;
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