import Featureflow from 'featureflow-client';


angular
    .module('ng-featureflow', [])
    .provider('featureflow', featureflowProvider);

/**
 * Very simple angular 1 provider wrapper for the featureflow javascript SDK
 * See https://github.com/featureflow/featureflow-ng
 * and https://github.com/featureflow/featureflow-javascript-sdk
 *
 * @param $q
 * @constructor
 */
function featureflowProvider(){

    this.apiKey = "";
    this.user = {};
    this.init = function (apiKey, user){
        this.apiKey = apiKey;
        this.user = user;
    } ;
    this.$get = function() {
        var featureflow = Featureflow.init(this.apiKey, this.user);
        return featureflow;
    };
}