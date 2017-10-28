(function() {
    'use strict';

    angular
    .module('app')
    .factory('dataservice', dataservice);

    dataservice.$inject = ['$http'];

    function dataservice($http) {
        return {
            getCountries: getCountries,
            getCities: getCities,
            getLanguages: getLanguages
        };

        function getCountries() {
            return $http.get('/api/maa')
                .then(getCountriesComplete)
                .catch(getCountriesFailed);

            function getCountriesComplete(response) {
                return response.data.results;
            }

            function getCountriesFailed(error) {
                console.error('Failed to retrieve countries:' + error.data);
            }
        }

        function getCities() {
            return $http.get('')
                .then(getCitiesComplete)
                .catch(getCountriesFailed);

            function getCitiesComplete(response) {
                return response.data.results;
            }

            function getCitiesFailed(error) {
                console.error('Error: failed to retrieve cities' + error.data);
            }
        }

        function getLanguages() {
            return $http.get('')
                .then(getLanguagesComplete)
                .catch(getLanguagesFailed);

            function getLanguagesComplete(response) {
                return response.data.results;
            }

            function getLanguagesFailed(error) {
                console.error('Error: failed to retrieve cities' + error.data);
            }
        }
    }
});