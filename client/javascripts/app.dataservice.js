(function() {
    'use strict';

    angular
    .module('app')
    .factory('dataservice', dataservice);

    dataservice.$inject = ['$http'];

    function dataservice($http) {
        console.log(countryurl);

        return {
            getCountries: getCountries,
            getCountriesWithFilter : getCountriesWithFilter,
            getCities: getCities,
            getLanguages: getLanguages
        };

        function getCountries(endpoint) {
            return $http.get(endpoint)
                .then(getCountriesComplete)
                .catch(getCountriesFailed);

            function getCountriesComplete(response) {
                console.log('Well, it should have worked');
                return response.data;
            }

            function getCountriesFailed(error) {
                console.error('Failed to retrieve countries:' + error.data);
            }
        }

        function getCountriesWithFilter(endpoint) {
            return $http.get(endpoint)
                .then(getCountriesComplete)
                .catch(getCountriesFailed);

            function getCountriesComplete(response) {
                console.log('Well, it should have worked');
                return response.data;
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
                return response.data;
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
                return response.data;
            }

            function getLanguagesFailed(error) {
                console.error('Error: failed to retrieve cities' + error.data);
            }
        }
    }
})();