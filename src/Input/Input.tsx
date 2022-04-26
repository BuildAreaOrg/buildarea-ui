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
	width: "100%",
	WebkitTapHighlightColor: "rgba(0,0,0,0)",
	"&::before": {
		boxSizing: "border-box",
	},
	"&::after": {
		boxSizing: "border-box",
	},

	// Custom
	backgroundColor: "$loContrast",
	boxShadow: "inset 0 0 0 1px $colors$slate700",
	color: "black",
	fontVariantNumeric: "tabular-nums",

	"&:-webkit-autofill": {
		boxShadow: "inset 0 0 0 1px $colors$blue600, inset 0 0 0 100px $colors$blue300",
	},

	"&:-webkit-autofill::first-line": {
		fontFamily: "$untitled",
		color: "black",
	},

	"&:focus": {
		boxShadow: "inset 0px 0px 0px 1px $colors$blue800, 0px 0px 0px 1px $colors$blue800",
		"&:-webkit-autofill": {
			boxShadow:
				"inset 0px 0px 0px 1px $colors$blue800, 0px 0px 0px 1px $colors$blue800, inset 0 0 0 100px $colors$blue300",
		},
	},
	"&::placeholder": {
		color: "$slate900",
	},
	"&:disabled": {
		pointerEvents: "none",
		backgroundColor: "$slate200",
		color: "$slate800",
		cursor: "not-allowed",
		"&::placeholder": {
			color: "$slate700",
		},
	},
	"&:read-only": {
		backgroundColor: "$slate200",
		"&:focus": {
			boxShadow: "inset 0px 0px 0px 1px $colors$slate700",
		},
	},

	variants: {
		size: {
			"1": {
				borderRadius: "$sm",
				height: "$space$5",
				fontSize: "$base",
				p: "$3",
				lineHeight: "1rem",
				"&:-webkit-autofill::first-line": {
					fontSize: "$1",
				},
			},
			"2": {
				borderRadius: "$md",
				height: "$space$6",
				fontSize: "$lg",
				p: "$4",
				lineHeight: "1.2rem",
				"&:-webkit-autofill::first-line": {
					fontSize: "$lg",
				},
			},
		},
		variant: {
			ghost: {
				boxShadow: "none",
				backgroundColor: "transparent",
				"@hover": {
					"&:hover": {
						boxShadow: "inset 0 0 0 1px $colors$slate700",
					},
				},
				"&:focus": {
					backgroundColor: "$loContrast",
					boxShadow: "inset 0px 0px 0px 1px $colors$blue800, 0px 0px 0px 1px $colors$blue800",
				},
				"&:disabled": {
					backgroundColor: "transparent",
				},
				"&:read-only": {
					backgroundColor: "transparent",
				},
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
