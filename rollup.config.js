import uglify from 'rollup-plugin-uglify';

export default [{
  entry: 'src/featureflow-ng.js',
  dest: 'dist/featureflow-ng.js',
  format: 'iife',
  globals: {
    "featureflow-client" : "Featureflow"
  },
  external: [ 'featureflow-client' ]
},{
  entry: 'src/featureflow-ng.js',
  dest: 'dist/featureflow-ng.min.js',
  format: 'iife',
  globals: {
    "featureflow-client" : "Featureflow"
  },
  external: [ 'featureflow-client' ],
  plugins:[
    uglify()
  ]
}];