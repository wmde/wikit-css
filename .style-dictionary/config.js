const StyleDictionary = require( 'style-dictionary' ).extend( {
	include: ['node_modules/wikimedia-ui-base/tokens.json'],
	source: ['properties/**/*.json'],
	platforms: {
		scss: {
			transformGroup: 'scss',
			buildPath: 'dist/tokens/',
			files: [{
				destination: '_variables.scss',
				format: 'scss/variables'
			}]
		},
		css: {
			transformGroup: 'css',
			buildPath: 'dist/tokens/',
			files: [{
				destination: 'variables.css',
				format: 'css/variables'
			}]
		},
		less: {
			transformGroup: 'less',
			buildPath: 'dist/tokens/',
			files: [{
				destination: '_variables.less',
				format: 'less/variables'
			}]
		},
		js: {
			transformGroup: 'js',
			buildPath: 'dist/tokens/',
			files: [{
				destination: 'index.js',
				format: 'javascript/es6'
			}]
		},
		'less-dev': {
			transformGroup: 'less',
			buildPath: 'src/tokens/',
			files: [{
				destination: '_variables.less',
				format: 'less/variables'
			}]
		},
		json: {
			transformGroup: 'web',
			buildPath: 'dist/tokens/',
			files: [{
				destination: 'index.json',
				format: 'json'
			}]
		}
	}
} );

StyleDictionary.buildAllPlatforms();
