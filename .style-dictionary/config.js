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
			transforms: [
				'name/cti/kebab',
				'attr/tokenList'
			],
			buildPath: 'dist/tokens/',
			files: [{
				destination: 'index.json',
				format: 'json'
			}]
		}
	}
} );

StyleDictionary.registerTransform( {
	name: 'attr/tokenList',
	type: 'attribute',
	transformer: ( prop, options ) => {
		const matchedVariables = prop.original.value.match( /{.+?}/g );
		const removeCurlyBraces = s => s.substr( 1, s.length - 2 );
		const removeVariableSuffix = s => s.substr( 0, s.length - '.value'.length )

		return {
			// in node >= 12: [...prop.original.value.matchAll(/\{\s*(.+?)\s*\}/g)].map(([fullMatch, groupMatch]) => groupMatch)
			tokens: ( matchedVariables || [] ).map( match => removeVariableSuffix( removeCurlyBraces(match).trim() ) )
		}
	}
} );

StyleDictionary.buildAllPlatforms();
