import React from "react";
import { styled } from "../stitches.config";
import type { CSS, VariantProps } from "../stitches.config";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
	all: "unset",
	boxSizing: "border-box",
	userSelect: "none",
	"&::before": {
		boxSizing: "border-box",
	},
	"&::after": {
		boxSizing: "border-box",
	},
	width: "$space$5",
	height: "$space$5",
	borderRadius: "3px",
	alignItems: "center",
	appearance: "none",
	display: "inline-flex",
	justifyContent: "center",
	lineHeight: "1",
	margin: "0",
	backgroundColor: "$bgLight400",
	outline: "none",
	padding: "0",
	WebkitTapHighlightColor: "rgba(0,0,0,0)",
	color: "hsla(216, 44%, 13%, 1)",
	boxShadow: "inset 0 0 0 1px $colors$slate700",
	overflow: "hidden",
	"@hover": {
		"&:hover": {
			boxShadow: "inset 0 0 0 1px $colors$slate800",
		},
	},
	"&:focus": {
		outline: "none",
		borderColor: "$red700",
	},
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
	alignItems: "center",
	display: "flex",
	height: "100%",
	justifyContent: "center",
	width: "100%",
	backgroundColor: "$primary300",
	color: "$bgLight300",
});

type CheckboxPrimitiveProps = React.ComponentProps<typeof CheckboxPrimitive.Root>;
type CheckboxVariants = VariantProps<typeof StyledCheckbox>;
type CheckboxProps = CheckboxPrimitiveProps & CheckboxVariants & { css?: CSS };

export const Checkbox = React.forwardRef<React.ElementRef<typeof StyledCheckbox>, CheckboxProps>(
	(props, forwardedRef) => (
		<StyledCheckbox {...props} ref={forwardedRef}>
			<StyledIndicator>
				<CheckIcon />
			</StyledIndicator>
		</StyledCheckbox>
	)
);

Checkbox.displayName = "Checkbox";
