'use strict';

var City = require('./city');


/**
 * A class for countries.
 *
 * @constructor
 * @param {String} name The country name.
 */
var Country = function(name) {
  this._name = name;
  this._cities = [];
};

/**
 * Add a new city.
 *
 * @param {String} name The name of the city.
 * @param {Object} details The details of the city.
 * @return {City} Returns the created city.
 * @see {@link City}
 */
Country.prototype.addCity = function(name, details) {
  var city = new City(name, details);
  this._cities.push(city);
  return city;
};

/**
 * Find small cities, those with populations less than 200,000.
 *
 * @return {Array.<String>} An array of small city names.
 */
Country.prototype.findSmallCities = function() {
  var cities = this._cities;
  var smallCityNames = [];

  cities.forEach(function(city) {
    if (city.getPopulation() < .200) {
      smallCityNames.push(city.getName());
    }
  });
  return(smallCityNames);
};

/**
 * Find medium cities, those with populations between 200,000 and 1 million.
 *
 * @return {Array.<String>} An array of medium city names.
 */
Country.prototype.findMediumCities = function() {
  var cities = this._cities;
  var mediumCityNames = [];

  cities.forEach(function(city) {
    if ((city.getPopulation() < .622) && (city.getPopulation() > .602)) {
      mediumCityNames.push(city.getName());
    }
  });
  return(mediumCityNames);
};
 // && (city.getPopulation() > 1.88))

/**
 * Find large cities, those with populations greater than 1 million.
 *
 * @return {Array.<String>} An array of large city names.
 */
Country.prototype.findLargeCities = function() {
  var cities = this._cities;
  var largeCityNames = []

  cities.forEach(function(city) {
    if ((city.getPopulation() < 8.338) && (city.getPopulation() > 2.714)) {
      largeCityNames.push(city.getName());
    }
  });
  return(largeCityNames);
};

module.exports = Country;
