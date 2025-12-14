/** @type {@import("stylelint").Config} */
export default {
	extends: [ "stylelint-config-standard-scss" ],
	plugins: [
		"stylelint-scss",
		"stylelint-order",
	],
	validate: ["css", "scss"],
	"rules": {
		"order/properties-order": [
			[
				"position",
				"top",
				"right",
				"bottom",
				"left",

				"display",
				"flex",
				"flex-direction",
				"align-items",
				"justify-content",

				"width",
				"height",
				"max-width",
				"min-width",

				"margin",
				"padding",

				"font",
				"font-size",
				"font-weight",
				"line-height",
				"color",

				"background",
				"border",
				"border-radius",

				"opacity",
				"transform",
				"transition"
			],
			{
				"unspecified": "bottom"
			}
		]
	}
};