import { styled } from "../stitches.config";

export const Input = styled("input", {
	// Reset
	appearance: "none",
	borderWidth: "0",
	boxSizing: "border-box",
	fontFamily: "inherit",
	margin: "0",
	outline: "none",
	padding: "0",
	width: "200px",
	WebkitTapHighlightColor: "rgba(0,0,0,0)",
	"&::before": {
		boxSizing: "border-box",
	},
	"&::after": {
		boxSizing: "border-box",
	},

	// Custom
	backgroundColor: "$bgDark200",
	color: "white",
	fontVariantNumeric: "tabular-nums",
	border: "1px solid $colors$bgLight400",
	borderRadius: "7px",
	p: "10px",

	"&:focus": {
		color: "hsl(202, 81%, 56%)",
		borderColor: "hsl(202, 81%, 56%)",
	},
	"&::placeholder": {
		color: "$slate900",
	},
	"&:disabled": {
		pointerEvents: "none",
		backgroundColor: "$overlay500",
		color: "$overlay100",
		borderColor: "$colors$overlay100",
		cursor: "not-allowed",
		"&::placeholder": {
			color: "$slate700",
		},
	},
	"&:read-only": {
		backgroundColor: "$bgDark200",
	},

	variants: {
		size: {
			"1": {
				fontSize: "16px",
				lineHeight: "1rem",
			},
			"2": {
				fontSize: "20px",
			},
		},

		state: {
			success: {
				color: "$success300",
				borderColor: "$colors$success300",
			},
			warning: {
				color: "$warning300",
				borderColor: "$colors$warning300",
			},
			error: {
				color: "$error300",
				borderColor: "$colors$error300",
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
