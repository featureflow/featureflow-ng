(function (Featureflow) {
'use strict';

Featureflow = Featureflow && 'default' in Featureflow ? Featureflow['default'] : Featureflow;

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
    this.context = {};
    this.init = function (apiKey, context){
        this.apiKey = apiKey;
        this.context = context;
    } ;
    this.$get = function() {
        var featureflow = Featureflow.init(this.apiKey, this.context);
        return featureflow;
    };
}

}(Featureflow));
