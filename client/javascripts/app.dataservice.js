(function() {
    'use strict';

    angular
    .module('app')
    .factory('dataservice', dataservice);

    dataservice.$inject = ['$http'];

    function dataservice($http) {
        var baseurl = 'http://ec2-52-87-218-36.compute-1.amazonaws.com:3000/api/';

        return {
            getCountries: getCountries,
            getCountriesWithFilter : getCountriesWithFilter,
            getCities: getCities,
            getCitiesWithFilter: getCitiesWithFilter,
            getLanguages: getLanguages,
            getLanguagesWithFilter: getLanguagesWithFilter
        };

        function getCountries() {
            return $http.get(baseurl + 'countries')
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

        function getCountriesWithFilter(type,value) {
            console.log(baseurl + "countries?filter[where]["+type+"]="+value);
            return $http.get(baseurl + "countries?filter[where]["+type+"]="+value)
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
            return $http.get(baseurl + 'cities')
                .then(getCitiesComplete)
                .catch(getCitiesFailed);

            function getCitiesComplete(response) {
                return response.data;
            }

            function getCitiesFailed(error) {
                console.error('Error: failed to retrieve cities' + error.data);
            }
        }

        function getCitiesWithFilter(type,value) {
            console.log(baseurl + "cities?filter[where]["+type+"]="+value);
            return $http.get(baseurl + "cities?filter[where]["+type+"]="+value)
                .then(getCitiesComplete)
                .catch(getCitiesFailed);

            function getCitiesComplete(response) {
                console.log('Well, it should have worked');
                return response.data;
            }

            function getCitiesFailed(error) {
                console.error('Failed to retrieve countries:' + error.data);
            }
        }

        function getLanguages() {
            return $http.get(baseurl + 'countrylanguages')
                .then(getLanguagesComplete)
                .catch(getLanguagesFailed);

            function getLanguagesComplete(response) {
                return response.data;
            }

            function getLanguagesFailed(error) {
                console.error('Error: failed to retrieve cities' + error.data);
            }
        }

        function getLanguagesWithFilter(type,value) {
            console.log(baseurl + "countrylanguages?filter[where]["+type+"]="+value);
            return $http.get(baseurl + "countrylanguages?filter[where]["+type+"]="+value)
                .then(getLanguagesComplete)
                .catch(getLanguagesFailed);

            function getLanguagesComplete(response) {
                console.log('Well, it should have worked');
                return response.data;
            }

            function getLanguagesFailed(error) {
                console.error('Failed to retrieve countries:' + error.data);
            }
        }
    }
})();
