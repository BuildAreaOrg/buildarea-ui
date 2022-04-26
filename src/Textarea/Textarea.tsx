import { styled } from "../stitches.config";

export const Textarea = styled("textarea", {
	// Reset
	appearance: "none",
	borderWidth: "0",
	fontFamily: "inherit",
	margin: "0",
	outline: "none",
	p: "$1",
	width: "100%",
	WebkitTapHighlightColor: "rgba(0,0,0,0)",
	backgroundColor: "$slate50",
	boxShadow: "inset 0 0 0 1px $colors$slate700",
	color: "black",
	fontVariantNumeric: "tabular-nums",
	position: "relative",
	minHeight: 80,
	resize: "vertical",

	"&:focus": {
		boxShadow: "inset 0px 0px 0px 1px $colors$blue800, 0px 0px 0px 1px $colors$blue800",
		zIndex: "1",
	},
	"&::placeholder": {
		color: "$slate900",
	},
	"&:disabled": {
		pointerEvents: "none",
		backgroundColor: "$slate100",
		color: "$slate800",
		cursor: "not-allowed",
		resize: "none",
		"&::placeholder": {
			color: "$slate700",
		},
	},
	"&:read-only": {
		backgroundColor: "$slate100",
		"&:focus": {
			boxShadow: "inset 0px 0px 0px 1px $colors$slate700",
		},
	},

	variants: {
		size: {
			"1": {
				borderRadius: "$sm",
				fontSize: "$sm",
				lineHeight: "16px",
				px: "$1",
			},
			"2": {
				borderRadius: "$md",
				fontSize: "$base",
				lineHeight: "20px",
				px: "$1",
			},
			"3": {
				borderRadius: "$xl",
				fontSize: "$lg",
				lineHeight: "23px",
				px: "$2",
			},
		},
		state: {
			invalid: {
				boxShadow: "inset 0 0 0 1px $colors$red700",
				"&:focus": {
					boxShadow: "inset 0px 0px 0px 1px $colors$red800, 0px 0px 0px 1px $colors$red800",
				},
			},
			valid: {
				boxShadow: "inset 0 0 0 1px $colors$green700",
				"&:focus": {
					boxShadow: "inset 0px 0px 0px 1px $colors$green800, 0px 0px 0px 1px $colors$green800",
				},
			},
		},
		cursor: {
			default: {
				cursor: "default",
				"&:focus": {
					cursor: "text",
				},
			},
			text: {
				cursor: "text",
			},
		},
	},
	defaultVariants: {
		size: "1",
	},
});
