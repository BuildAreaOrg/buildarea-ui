import { styled } from "../stitches.config";

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

	$$primary: "$colors$primary200",
	backgroundColor: "$$primary",
	color: "white",

	py: "8px",
	borderRadius: "7px",
	"&:hover": {
		$$primary: "$colors$primary300",
	},
	"&:active": {
		$$primary: "$colors$primary100",
		color: "black",
	},

	variants: {
		outline: {
			true: {
				backgroundColor: "transparent",
				borderColor: "$$primary",
			},
		},
		disabled: {
			true: {
				backgroundColor: "hsl(217, 12%, 34%)",
				color: "black",
			},
		},
		size: {
			sm: {
				height: "$space$6",
				fontSize: "$fontSizes$base",
				px: "16px",
			},
			md: {
				height: "$space$8",
				fontSize: "$fontSizes$lg",
				px: "20px",
			},
			lg: {
				height: "$space$10",
				fontSize: "$fontSizes$xl",
				px: "20px",
			},
		},
		type: {
			secondary: {
				$$primary: "$colors$secondary200",
				color: "black",
				"&:hover": {
					$$primary: "$colors$secondary400",
					color: "white",
				},
				"&:active": {
					$$primary: "$colors$secondary300",
					color: "white",
				},
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
