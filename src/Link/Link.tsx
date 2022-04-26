import { styled } from "../stitches.config";
import { Text } from "../index";

export const Link = styled("a", {
	alignItems: "center",
	gap: "$1",
	flexShrink: 0,
	outline: "none",
	textDecorationLine: "none",
	textUnderlineOffset: "3px",
	textDecorationColor: "$slate400",
	WebkitTapHighlightColor: "rgba(0,0,0,0)",
	lineHeight: "inherit",
	cursor: "pointer",
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
	[`& ${Text}`]: {
		color: "inherit",
	},
	variants: {
		variant: {
			blue: {
				color: "$blue900",
				textDecorationColor: "$blue400",
				"&:focus": {
					outlineColor: "$blue800",
				},
			},
			subtle: {
				color: "$slate900",
				textDecorationColor: "$slate400",
				"&:focus": {
					outlineColor: "$slate800",
				},
			},
			contrast: {
				color: "black",
				textDecoration: "underline",
				textDecorationColor: "$slate400",
				"@hover": {
					"&:hover": {
						textDecorationColor: "$slate700",
					},
				},
				"&:focus": {
					outlineColor: "$slate800",
				},
			},
		},
	},
	defaultVariants: {
		variant: "contrast",
	},
});
