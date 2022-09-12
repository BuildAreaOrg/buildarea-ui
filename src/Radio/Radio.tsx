import React from "react";
import { styled } from "../stitches.config";
import type { CSS, VariantProps } from "../stitches.config";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

export const RadioGroup = styled(RadioGroupPrimitive.Root, {
	display: "flex",
});

const StyledRadio = styled(RadioGroupPrimitive.Item, {
	$$outlineColor: "$colors$bgLight500",
	$$wh: "18px",
	all: "unset",
	width: "$$wh",
	height: "$$wh",
	borderRadius: "100%",
	boxShadow: "inset 0 0 0 2px $$outlineColor, 0 0 0 1px $$outlineColor",

	variants: {
		size: {
			sm: {
				$$wh: "15px",
			},
			md: {
				$$wh: "18px",
			},

			lg: {
				$$wh: "20px",
			},

			xl: {
				$$wh: "22px",
			},
		},
	},
});

const StyledRadioIndicator = styled(RadioGroupPrimitive.Indicator, {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	height: "100%",
	position: "relative",

	"&::after": {
		content: '""',
		display: "block",
		width: "inherit",
		height: "inherit",
		borderRadius: "50%",
		backgroundColor: "transparent",
		boxShadow: "inset 0 0 0 5px $colors$primary200,0 0 0 1.5px $colors$primary200",
	},
});

const RadioGroupWrapper = styled("div", {
	display: "flex",
	alignItems: "center",
	gap: ".5rem",
	cursor: "pointer",

	"& *": {
		cursor: "pointer",
	},

	variants: {
		disabled: {
			true: {
				cursor: "not-allowed",
				opacity: 0.5,
				"& *": {
					cursor: "not-allowed",
				},
			},
		},
	},
});

const StyledText = styled("label", {
	$$fontsize: "$fontSizes$base",
	fontSize: "$$fontsize",
	color: "$textLight200",

	variants: {
		size: {
			sm: {
				$$fontsize: "$fontSizes$sm",
			},

			md: {
				$$fontsize: "$fontSizes$base",
			},

			lg: {
				$$fontsize: "$fontSizes$lg",
			},

			xl: {
				$$fontsize: "$fontSizes$xl",
			},
		},
	},
});

type RadioVariants = VariantProps<typeof StyledRadio>;
type RadioGroupItemPrimitiveProps = React.ComponentProps<typeof RadioGroupPrimitive.Item>;
type RadioProps = RadioGroupItemPrimitiveProps & RadioVariants & { children?: string; css?: CSS };

export const Radio = React.forwardRef<React.ElementRef<typeof StyledRadio>, RadioProps>(
	({ children, ...props }, ref) => {
		return (
			<RadioGroupWrapper disabled={props?.disabled}>
				<StyledRadio {...props} ref={ref}>
					<StyledRadioIndicator />
				</StyledRadio>
				<StyledText size={props?.size} htmlFor={props?.id}>
					{children}
				</StyledText>
			</RadioGroupWrapper>
		);
	}
);

Radio.displayName = "Radio";
