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
        vm.baseurl = 'http://localhost:3000/api/countries';
        vm.endpoint;
        //Functions
        vm.getCountryList = getCountryList;
        vm.getCountryListByFilter = getCountryListByFilter;

        function getCountryList() {
            vm.showTable = false;
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

        function getCountryListByFilter(type,value) {
            vm.showTable = false;
            dataservice.getCountriesWithFilter(type,value)
            .then(function(data) {
                if(data != []) {
                    console.log('This is what you got:' + data)
                    vm.countries = data;
                    vm.showTable = true;
                }
                else {
                    vm.showTable = false;
                    vm.countries = [];
                }
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