import { styled } from "../stitches.config";

export const Link = styled("a", {
	alignItems: "center",
	gap: "$1",
	flexShrink: 0,
	outline: "none",
	textDecorationLine: "none",
	textUnderlineOffset: "3px",
	textDecorationColor: "$primary",
	WebkitTapHighlightColor: "rgba(0,0,0,0)",
	cursor: "pointer",
	color: "$primary",
	fontSize: "$sm",
	fontWeight: "$medium",
	lineHeight: "inherit",

	"@hover": {
		"&:hover": {
			textDecorationLine: "underline",
		},
	},
	"&:focus": {
		outlineWidth: "2px",
		outlineStyle: "solid",
		outlineOffset: "2px",
		textDecorationLine: "none",
	},

	variants: {
		secondary: {
			true: {
				color: "$secondary",
			},
		},
	},
});
