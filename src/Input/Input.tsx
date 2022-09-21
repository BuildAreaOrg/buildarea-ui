import type { CSS, VariantProps } from "../stitches.config";
import React from "react";
import { styled } from "../stitches.config";

const StyledInput = styled("input", {
	// Reset
	appearance: "none",
	borderWidth: "0",
	boxSizing: "border-box",
	fontFamily: "inherit",
	margin: "0",
	outline: "none",
	px: "$4",
	py: "$2",
	WebkitTapHighlightColor: "rgba(0,0,0,0)",
	fontSize: "$sm",
	width: "100%",
	// Custom
	backgroundColor: "$bgLight200",
	color: "$textLight100",
	fontVariantNumeric: "tabular-nums",
	border: "1px solid $colors$bgLight400",
	borderRadius: "6px",

	"&::before": {
		boxSizing: "border-box",
	},
	"&::after": {
		boxSizing: "border-box",
	},

	"&:focus": {
		color: "$primary",
		borderColor: "$primary",
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
				width: "$sm",
			},
			"2": {
				width: "$md",
			},
			"3": {
				width: "$lg",
			},
			"4": {
				width: "$xl",
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
			disabled: {
				pointerEvents: "none",
				color: "$overlay100",
				borderColor: "$colors$overlay100",
				cursor: "not-allowed",
				"&::placeholder": {
					color: "$slate700",
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
});

export const FormHelperText = styled("span", {
	display: "block",
	color: "$textLight300",
	padding: "$1",
	fontSize: "$sm",
});

export const FormErrorText = styled("span", {
	display: "block",
	color: "$error300",
	padding: "$1",
	fontSize: "$sm",
});

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
	VariantProps<typeof StyledInput> & { css?: CSS };

export const Input = React.forwardRef<React.ElementRef<typeof StyledInput>, InputProps>(
	(props, ref) => {
		return (
			<StyledInput {...props} ref={ref} disabled={props?.state === "disabled" || props?.disabled} />
		);
	}
);

Input.displayName = "Input";
