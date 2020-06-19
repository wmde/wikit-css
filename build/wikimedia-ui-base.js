const fs = require( 'fs' );
const WIKIMEDIA_UI_BASE_DIR = `${__dirname}/../node_modules/wikimedia-ui-base`;
const lessToJson = require( 'less-to-json' );

/**
 * https://silvantroxler.ch/2018/object-string-property-nesting/
 */
function nestStringProperties( obj ) {
	if (!obj) {
		return {};
	}

	const isPlainObject = obj => !!obj && obj.constructor === {}.constructor;

	const getNestedObject = obj => Object.entries(obj).reduce((result, [prop, val]) => {
		const originalName = prop;
		prop = prop.replace( '--', '-' ); // WMDE was here
		prop.split('-').reduce((nestedResult, prop, propIndex, propArray) => {
			const lastProp = propIndex === propArray.length - 1;
			if (lastProp) {
				nestedResult[prop] = isPlainObject(val) ? getNestedObject(val) : {
					value: val,
					comment: `original name (WMF): ${originalName}`,
				}; // WMDE was here
			} else {
				nestedResult[prop] = nestedResult[prop] || {};
			}
			return nestedResult[prop];
		}, result);
		return result;
	}, {});

	return getNestedObject(obj);
}

const tokens = lessToJson( `${WIKIMEDIA_UI_BASE_DIR}/wikimedia-ui-base.less` );

fs.writeFileSync(
	`${WIKIMEDIA_UI_BASE_DIR}/tokens.json`,
	JSON.stringify( nestStringProperties( tokens ) ),
);
