import { styled } from "../stitches.config";

export const Textarea = styled("textarea", {
	// Reset
	appearance: "none",
	borderWidth: "0",
	fontFamily: "inherit",
	margin: "0",
	outline: "none",
	p: "20px",
	WebkitTapHighlightColor: "rgba(0,0,0,0)",
	backgroundColor: "hsl(120, 1%, 14%)",
	boxShadow: "inset 0 0 0 1px $colors$slate700",
	color: "white",
	fontVariantNumeric: "tabular-nums",
	position: "relative",

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
		color: "white",
		cursor: "not-allowed",
		resize: "none",
		"&::placeholder": {
			color: "white",
		},
	},
	"&:read-only": {
		backgroundColor: "hsl(120, 1%, 14%)",
		color: "white",

		"&:focus": {
			boxShadow: "inset 0px 0px 0px 1px $colors$slate700",
		},
	},

	variants: {
		size: {
			"1": {
				fontSize: "$sm",
				lineHeight: "16px",
				width: 400,
				height: 150,
			},
			"2": {
				fontSize: "$base",
				lineHeight: "20px",
				width: 600,
				height: 225,
			},
			"3": {
				fontSize: "$lg",
				lineHeight: "23px",
				width: 1000,
				height: 200,
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
