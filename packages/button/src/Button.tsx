import { styled } from "@buildarea-ui/core";

// @ts-ignore typescript v4.6.2 issue with length
// https://github.com/modulz/stitches/issues/947
export const Button = styled("button", {
	// mini reset
	all: "unset",

	// for drag and drop, otherwise we wouldn't be able to drag button
	userSelect: "element",
	WebkitUserDrag: "element",

	// Custom Reset
	display: "inline-flex",
	flexShrink: 0,
	justifyContent: "center",
	alignItems: "center",
	lineHeight: "1",
	WebkitTapHighlightColor: "rgba(0,0,0,0)",

	border: "1px solid $gray300",

	$$primary: "blueviolet",
	backgroundColor: "$$primary",
	color: "white",

	borderRadius: "$default",
	variants: {
		outline: {
			true: {
				backgroundColor: "transparent",
				borderColor: "$$primary",
			},
		},
		size: {
			sm: {
				height: "$space$6",
				fontSize: "$fontSizes$base",
				px: "$2",
			},
			md: {
				height: "$space$8",
				fontSize: "$fontSizes$lg",
				px: "$3",
			},
			lg: {
				height: "$space$10",
				fontSize: "$fontSizes$xl",
				px: "$4",
			},
		},
	},

	compoundVariants: [
		{
			outline: true,
			size: "sm",
			css: {
				color: "$$primary",
			},
		},
		{
			outline: true,
			size: "md",
			css: {
				color: "$$primary",
			},
		},
		{
			outline: true,
			size: "lg",
			css: {
				color: "$$primary",
			},
		},
	],

	defaultVariants: {
		size: "md",
	},
});
