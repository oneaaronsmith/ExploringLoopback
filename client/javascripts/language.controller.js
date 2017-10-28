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
        vm.filterType;
        vm.filterValue;

        //Functions
        vm.getLanguageList = getLanguageList;
        vm.getLanguageListByFilter = getLanguageListByFilter;

        function getLanguageList() {
            dataservice.getLanguages()
                .then(function(data) {
                    if(data != null) {
                        vm.languages = data;
                        vm.showTable = true;
                    }
                })
                .catch(function(err) {
                    vm.error = err;
                    vm.showError = true;
                });
        }

        function getLanguageListByFilter() {
            dataservice.getLanguagesWithFilter(vm.filterType,vm.filterValue)
            .then(function(data) {
                if(data != null) {
                    vm.languages = data;
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