# featureflow-ng

[![][npm-img]][npm-url]

[![][dependency-img]][dependency-url]

> Featureflow NG Angular 1 Provider

Get your Featureflow account at [featureflow.io](http://www.featureflow.io)

## Get Started

The easiest way to get started is to follow the [Featureflow quick start guides](http://docs.featureflow.io/docs)


## Change Log

Please see [CHANGELOG](https://github.com/featureflow/featureflow-ng/blob/master/CHANGELOG.md).

## Installation

Using NPM
```bash
$ npm install --save featureflow-ng
```

Using bower
```bash
$ bower install featureflow-ng
```

## Usage

### Adding Featureflow

##### Webpack
If you are using `webpack`, you can require the code using
```js
var FeatureflowProvider = require('featureflow-ng');
```
or using es6 syntax
```js
import FeatureflowProvider from 'featureflow-ng';
```

##### Bower
Install both the `featureflow-client` and `featureflow-ng` components.
```bash
$ bower install featureflow-client
$ bower install featureflow-ng
```
 Include the following script in HTML file. This will expose the global variable `FeatureflowProvider`.
 You must also include the bower `featureflow-client` script.

```html
<script crossorigin="anonymous" src="bower_components/featureflow-client/dist/featureflow.min.js"></script>
<script crossorigin="anonymous" src="bower_components/featureflow-ng/dist/featureflow-ng.min.js"></script>
```
Note: It is recommended to use build tools to manage your bower dependencies.
Please see the [bower website](https://bower.io/#use-packages) for more details.

##### CDN
Include the following script in HTML file. This will expose the global variable `Featureflow`
```html
<script crossorigin="anonymous" src="https://cdn.featureflow.io/featureflow.js"></script>
<script crossorigin="anonymous" src="https://cdn.featureflow.io/featureflow-ng.js"></script>
```

This plugin will expose the entire featureflow client interface. 

#### Getting Started

Add the ng-featureflow to your `app.module` and initialize it in your config.

```javascript
var FF_API_KEY = '<js-featureflow-key>';

angular.module('sampleApp', ['ng-featureflow'])
.config(['featureflowProvider', function(featureflowProvider) {
		featureflowProvider.init(FF_API_KEY, {});
}]);
```
Access the featureflow client instance using the following code in your controller.

```javascript
angular.module('sampleApp')
.controller('ExampleController', function(featureflow) {
		//user featureflow like you would the normal client
		if (featureflow.evaluate('my-key').isOn()){
		  //do something
		}
});
```

Please see the [featureflow-javascript-sdk](https://github.com/featureflow/featureflow-javascript-sdk) for further details about how to use the featureflow instance.

## Roadmap
- [x] Write documentation
- [x] Release to npm
- [x] Release to bower
- [x] Automate release to bower on `npm prepublish`
- [ ] Automate release script to cdn on `npm prepublish`

## License

Apache-2.0

[npm-url]: https://nodei.co/npm/featureflow-ng
[npm-img]: https://nodei.co/npm/featureflow-ng.png

[dependency-url]: https://www.featureflow.io
[dependency-img]: https://www.featureflow.io/wp-content/uploads/2016/12/featureflow-web.png