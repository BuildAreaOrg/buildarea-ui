import { keyframes, styled } from "../stitches.config";
import * as MenuPrimitive from "@radix-ui/react-dropdown-menu";

const slideUpAndFade = keyframes({
	"0%": { opacity: 0, transform: "translateY(2px)" },
	"100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
	"0%": { opacity: 0, transform: "translateX(-2px)" },
	"100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
	"0%": { opacity: 0, transform: "translateY(-2px)" },
	"100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
	"0%": { opacity: 0, transform: "translateX(2px)" },
	"100%": { opacity: 1, transform: "translateX(0)" },
});

const StyledContent = styled(MenuPrimitive.Content, {
	minWidth: 220,
	backgroundColor: "white",
	borderRadius: 6,
	padding: 5,
	boxShadow:
		"0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
	"@media (prefers-reduced-motion: no-preference)": {
		animationDuration: "400ms",
		animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
		animationFillMode: "forwards",
		willChange: "transform, opacity",
		'&[data-state="open"]': {
			'&[data-side="top"]': { animationName: slideDownAndFade },
			'&[data-side="right"]': { animationName: slideLeftAndFade },
			'&[data-side="bottom"]': { animationName: slideUpAndFade },
			'&[data-side="left"]': { animationName: slideRightAndFade },
		},
	},
});

const itemStyles = {
	all: "unset",
	fontSize: 13,
	lineHeight: 1,
	color: "$violet900",
	borderRadius: 3,
	display: "flex",
	alignItems: "center",
	height: 25,
	padding: "0 5px",
	position: "relative",
	paddingLeft: 25,
	userSelect: "none",

	"&[data-disabled]": {
		color: "$slate800",
		pointerEvents: "none",
	},

	"&:focus": {
		backgroundColor: "$violet800",
		color: "$violet100",
	},
};

const StyledItem = styled(MenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(MenuPrimitive.CheckboxItem, { ...itemStyles });
const StyledRadioItem = styled(MenuPrimitive.RadioItem, { ...itemStyles });
const StyledTriggerItem = styled(MenuPrimitive.TriggerItem, {
	'&[data-state="open"]': {
		backgroundColor: "$violet400",
		color: "$violet900",
	},
	...itemStyles,
});

const StyledLabel = styled(MenuPrimitive.Label, {
	paddingLeft: 25,
	fontSize: 12,
	lineHeight: "25px",
	color: "$slate900",
});

const StyledSeparator = styled(MenuPrimitive.Separator, {
	height: 1,
	backgroundColor: "$violet500",
	margin: 5,
});

const StyledItemIndicator = styled(MenuPrimitive.ItemIndicator, {
	position: "absolute",
	left: 0,
	width: 25,
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
});

const StyledArrow = styled(MenuPrimitive.Arrow, {
	fill: "white",
});

// Exports
export const Menu = MenuPrimitive.Root;
export const MenuTrigger = MenuPrimitive.Trigger;
export const MenuContent = StyledContent;
export const MenuItem = StyledItem;
export const MenuSeparator = StyledSeparator;

/**
 * NOTE: In future if these items need particular design system related styles
 * then use forwardRef. For reference you can see the Accordion component
 */
export const MenuCheckboxItem = StyledCheckboxItem;
export const MenuRadioGroup = MenuPrimitive.RadioGroup;
export const MenuRadioItem = StyledRadioItem;
export const MenuItemIndicator = StyledItemIndicator;
export const MenuTriggerItem = StyledTriggerItem;
export const MenuLabel = StyledLabel;
export const MenuArrow = StyledArrow;
