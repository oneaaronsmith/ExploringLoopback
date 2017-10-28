// country.controller.js
(function() {
    'use strict';

    angular
        .module('app')
        .controller('LanguageController', LanguageController);

    LanguageController.$inject = ['dataservice'];

    function LanguageController(dataservice) { 
        var vm = this;
        //Variables
        vm.languages = getLanguageList();
        vm.showTable = false;
        vm.error;
        vm.showError = false;
        vm.showSpinner = true;
        vm.filterType;
        vm.filterValue;

        //Functions
        vm.getLanguageList = getLanguageList;
        vm.getLanguageListByFilter = getLanguageListByFilter;

        function getLanguageList() {
            vm.showSpinner = true;
            vm.showTable = false;
            dataservice.getLanguages()
                .then(function(data) {
                    if(data != null) {
                        vm.languages = data;
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

        function getLanguageListByFilter() {
            vm.showTable = false;
            vm.showSpinner = true;
            dataservice.getLanguagesWithFilter(vm.filterType,vm.filterValue)
            .then(function(data) {
                if(data != null) {
                    vm.languages = data;
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