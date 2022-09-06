import React from "react";
import { styled } from "../stitches.config";
import type { CSS, VariantProps } from "../stitches.config";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

export const RadioGroup = styled(RadioGroupPrimitive.Root, {
	display: "flex",
});

const StyledRadio = styled(RadioGroupPrimitive.Item, {
	$$fill: "#1F2939",
	$$wh: "18px",
	all: "unset",
	backgroundColor: "$$fill",
	width: "$$wh",
	height: "$$wh",
	borderRadius: "100%",
	boxShadow: "inset 0 0 0 4px #4C5461, 0 0 0 1px #4C5461",

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
	$$fontsize: "1rem",
	fontSize: "$$fontsize",

	variants: {
		size: {
			sm: {
				$$fontsize: ".9rem",
			},

			md: {
				$$fontsize: "1rem",
			},

			lg: {
				$$fontsize: "1.2rem",
			},

			xl: {
				$$fontsize: "1.4rem",
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
