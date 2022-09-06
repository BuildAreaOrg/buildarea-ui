import React from "react";
import { styled } from "../stitches.config";
import type { CSS, VariantProps } from "../stitches.config";
import * as SwitchPrimitive from "@radix-ui/react-switch";

const StyledThumb = styled(SwitchPrimitive.Thumb, {
	$$wh: "11px",
	$$bgColor: "#4C5461",
	position: "absolute",
	left: 0,
	top: 0,
	width: "100%",
	height: "100%",

	"&::after": {
		content: "",
		position: "absolute",
		left: "2px",
		top: "50%",
		width: "$$wh",
		height: "$$wh",
		backgroundColor: "$$bgColor",
		borderRadius: "9999px",
		transition: "left 100ms",
		transform: "translateY(-50%)",
		willChange: "left",
	},

	'&[data-state="checked"]': {
		"&::after": {
			left: "calc(100% - ( $$wh + 2px))",
			$$bgColor: "#34A7EA",
		},
	},
});

const StyledSwitch = styled(SwitchPrimitive.Root, {
	$$bgColor: "#1F2939",
	$$outlineColor: "#4C5461",
	$$width: "32px",

	all: "unset",
	width: "$$width",
	height: "calc( $$width / 2)",
	backgroundColor: "$$bgColor",
	borderRadius: "9999px",
	position: "relative",
	cursor: "pointer",
	boxShadow: "0 0 0 2px $$outlineColor",
	WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
	"&:focus": { boxShadow: "0 0 0 2px $$outlineColor" },
	'&[data-state="checked"]': { backgroundColor: "$$bgColor" },

	"&[data-disabled]": {
		opacity: 0.8,
		cursor: "not-allowed",
	},

	//overidding based on width of switch
	[`& ${StyledThumb}`]: {
		$$wh: "calc( $$width / 2 - 4px )",
	},

	variants: {
		fill: {
			true: {
				'&[data-state="checked"]': { $$bgColor: "#34A7EA", $$outlineColor: "#34A7EA" },

				[`& ${StyledThumb}`]: {
					'&[data-state="checked"]': {
						"&::after": {
							$$bgColor: "#fff",
						},
					},
				},
			},
		},

		size: {
			sm: {
				$$width: "28px",
			},
			md: {
				$$width: "32px",
			},
			lg: {
				$$width: "38px",
			},
			xl: {
				$$width: "46px",
			},
		},
	},
});

type SwitchVariants = VariantProps<typeof StyledSwitch>;
type SwitchPrimitiveProps = React.ComponentProps<typeof SwitchPrimitive.Root>;
type SwitchProps = SwitchPrimitiveProps & SwitchVariants & { css?: CSS };

export const Switch = React.forwardRef<React.ElementRef<typeof StyledSwitch>, SwitchProps>(
	(props, ref) => {
		return (
			<StyledSwitch {...props} ref={ref}>
				<StyledThumb />
			</StyledSwitch>
		);
	}
);

Switch.displayName = "Switch";
