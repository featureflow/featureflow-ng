(function()
{
    'use strict';
    angular
        .module('ng-featureflow', [])
        .provider('featureflow', featureflowProvider);

    /**
     * Very simple angular 1 wrapper for featureflow javascript SDK
     *
     * 1. Include via npm or bower
     * 2. Import the module
     * 3. Init auto with anonymous context
     * 4. Update context with variables
     * 5. Provide you own evaluated controls (eg in code from a preloaded user object or templated page)
     * 6. Can retrieve controls from custom URL (eg your own rest URL)
     * 7. evaluate waits for ready
     * 8. Maps all into $q responses (eg for ui-router resolve etc)
     *
     * @param $q
     * @constructor
     */
    function featureflowProvider(){
        this.key = "";
        this.context = {};
        this.config = {};
        this.setConfig = function (key, context, config){
            this.key = key;
            this.context = context;
            this.config = config;
        } ;
        this.$get = function() {
            var featureflow = Featureflow.init(this.key, this.context, this.config);
            return featureflow;
        };
    }
})();