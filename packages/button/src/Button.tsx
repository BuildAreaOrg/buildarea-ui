// Button package

import { styled } from "@buildarea-ui/core";

export const Button = styled("button", {
	// mini reset
	all: "reset",

	// for drag and drop, otherwise we wouldn't be able to drag button
	userSelect: "element",
	WebkitUserDrag: "element",

	// Custom Reset
	display: "inline-flex",
	flexShrink: 0,
	justifyContent: "center",
	lineHeight: "1",
	WebkitTapHighlightColor: "rgba(0,0,0,0)",

	variants: {
		size: {
			sm: {
				height: "$space$6",
				fontSize: "$fontSizes$base",
				borderRadius: "$sm",
				px: "$2",
			},
			md: {
				height: "$space$8",
				fontSize: "$fontSizes$lg",
				borderRadius: "$default",
				px: "$3",
			},
			lg: {
				height: "$space$10",
				fontSize: "$fontSizes$xl",
				borderRadius: "$default",
				px: "$4",
			},
		},
	},
});
