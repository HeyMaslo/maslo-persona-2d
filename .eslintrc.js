
module.exports = {
	"extends": ["airbnb-base"],
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaVersion": 8,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true,
			"modules": false,
			"globalReturn": false
		}
	},
	"plugins": ["import"],
	"rules": {
		"camelcase": 2,
		"indent": ["warn", 4, { "SwitchCase": 1 }],
		"quotes": [2, "single"],
		"no-unused-vars": 1,
		"no-use-before-define": "warn",
		"no-console": 1,
		"no-continue": 0,
		"no-plusplus": 1,
		"no-tabs": 0,
		"no-var": 1,
		"linebreak-style": ["warn", process.platform === 'win32' ? 'windows' : "unix"],
		"lines-between-class-members": 0,
		"prefer-destructuring": 1,
		"prefer-template": 1,
		"global-require": 1,
		"import/prefer-default-export": 0,
		"no-param-reassign": 1,
		"func-names": 0,
		"prefer-arrow-callback": 0,
		"no-underscore-dangle": 0,
		"class-methods-use-this": 1,
		"no-unused-expressions": 1,
		"arrow-parens": 0,
		"nonblock-statement-body-position": 0,
		"curly": 0,
		"padded-blocks": 0,
		"no-multi-spaces": 0,
		"object-shorthand": 1,
		"max-len": [1, { "comments": 150 }, {"code": 120}],
	},
	// "settings": {
	// 	"import/resolver": "webpack"
	// },
	"env": {
		"es6": true,
		"node": true,
		"browser": true
	}
};