import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { styled } from "@stitches/react";

const StyledContent = styled(ContextMenuPrimitive.Content, {
	minWidth: 220,
	backgroundColor: "white",
	borderRadius: 6,
	overflow: "hidden",
	padding: 5,
	boxShadow:
		"0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

const itemStyles = {
	all: "unset",
	fontSize: 13,
	lineHeight: 1,
	color: "black",
	borderRadius: 3,
	display: "flex",
	alignItems: "center",
	height: 25,
	padding: "0 5px",
	position: "relative",
	paddingLeft: 25,
	userSelect: "none",

	"&[data-disabled]": {
		color: "$slate700",
		pointerEvents: "none",
	},

	"&:focus": {
		backgroundColor: "$colors$primary100",
		color: "black",
	},
};

const StyledItem = styled(ContextMenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(ContextMenuPrimitive.CheckboxItem, { ...itemStyles });
const StyledRadioItem = styled(ContextMenuPrimitive.RadioItem, { ...itemStyles });
const StyledTriggerItem = styled(ContextMenuPrimitive.TriggerItem, {
	'&[data-state="open"]': {
		backgroundColor: "$violet400",
		color: "$violet900",
	},
	...itemStyles,
});

const StyledLabel = styled(ContextMenuPrimitive.Label, {
	paddingLeft: 25,
	fontSize: 12,
	lineHeight: "25px",
	color: "$gray900",
});

const StyledSeparator = styled(ContextMenuPrimitive.Separator, {
	height: 1,
	backgroundColor: "$violet600",
	margin: 5,
});

const StyledItemIndicator = styled(ContextMenuPrimitive.ItemIndicator, {
	position: "absolute",
	left: 0,
	width: 25,
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
});

// Exports
export const ContextMenu = ContextMenuPrimitive.Root;
export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
export const ContextMenuContent = StyledContent;
export const ContextMenuItem = StyledItem;
export const ContextMenuCheckboxItem = StyledCheckboxItem;
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
export const ContextMenuRadioItem = StyledRadioItem;
export const ContextMenuItemIndicator = StyledItemIndicator;
export const ContextMenuTriggerItem = StyledTriggerItem;
export const ContextMenuLabel = StyledLabel;
export const ContextMenuSeparator = StyledSeparator;
