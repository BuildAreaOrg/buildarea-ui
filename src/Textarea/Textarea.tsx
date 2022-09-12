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
	backgroundColor: "$bgLight200",
	boxShadow: "inset 0px 0px 0px 1px $colors$bgLight400",
	fontVariantNumeric: "tabular-nums",
	position: "relative",
	borderRadius: "6px",
	color: "$textLight100",

	"&:focus": {
		boxShadow: "inset 0px 0px 0px 1px $colors$primary",
		zIndex: "1",
		color: "$primary",
	},
	"&::placeholder": {
		color: "rgba(0,0,0,.4)",
	},
	"&:disabled": {
		pointerEvents: "none",
		color: "$overlay100",
		borderColor: "$colors$overlay100",
		cursor: "not-allowed",
		opacity: 0.5,
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
