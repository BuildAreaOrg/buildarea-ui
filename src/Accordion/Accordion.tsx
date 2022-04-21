import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { styled, keyframes } from "../stitches.config";
import type { CSS } from "../stitches.config";
import { forwardRef } from "react";
import type { ElementRef, ComponentProps } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const StyledAccordion = styled(AccordionPrimitive.Root, {
	borderRadius: 6,
	width: 300,
	backgroundColor: "$slate100",
	boxShadow: `0 2px 10px $slate900`,
});

type AccordionPrimitiveProps = React.ComponentProps<typeof AccordionPrimitive.Root>;
type AccordionProps = AccordionPrimitiveProps & { css?: CSS };

const slideDown = keyframes({
	from: { height: 0 },
	to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
	from: { height: "var(--radix-accordion-content-height)" },
	to: { height: 0 },
});

export const Accordion = forwardRef<ElementRef<typeof StyledAccordion>, AccordionProps>(
	({ children, ...props }, forwardedRef) => (
		<StyledAccordion
			ref={forwardedRef}
			{...props}
			{...(props.type === "single" ? { collapsible: true } : {})}
		>
			{children}
		</StyledAccordion>
	)
);

const StyledItem = styled(AccordionPrimitive.Item, {
	overflow: "hidden",
	marginTop: 1,

	"&:first-child": {
		marginTop: 0,
		borderTopLeftRadius: 4,
		borderTopRightRadius: 4,
	},

	"&:last-child": {
		borderBottomLeftRadius: 4,
		borderBottomRightRadius: 4,
	},

	"&:focus-within": {
		position: "relative",
		zIndex: 1,
		boxShadow: `0 0 0 2px $slate900`,
	},
});

const StyledHeader = styled(AccordionPrimitive.Header, {
	all: "unset",
	display: "flex",
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
	all: "unset",
	fontFamily: "inherit",
	backgroundColor: "transparent",
	padding: "0 20px",
	height: 45,
	flex: 1,
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	fontSize: 15,
	lineHeight: 1,
	color: "$violet700",
	boxShadow: `0 1px 0 $slate900`,
	'&[data-state="closed"]': { backgroundColor: "white" },
	'&[data-state="open"]': { backgroundColor: "white" },
	"&:hover": { backgroundColor: "$slate50" },
});

const StyledContent = styled(AccordionPrimitive.Content, {
	overflow: "hidden",
	fontSize: 15,
	color: "$slate900",
	backgroundColor: "$slate100",

	'&[data-state="open"]': {
		animation: `${slideDown} 250ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
	},
	'&[data-state="closed"]': {
		animation: `${slideUp} 250ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
	},
});

const StyledChevron = styled(ChevronDownIcon, {
	color: "$violet500",
	boxSize: "$space$4",
	transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
	"[data-state=open] &": { transform: "rotate(180deg)" },
});

export const AccordionItem = StyledItem;
Accordion.displayName = "Accordion";

type AccordionTriggerPrimitiveProps = ComponentProps<typeof AccordionPrimitive.Trigger>;
type AccordionTriggerProps = AccordionTriggerPrimitiveProps & { css?: CSS };

export const AccordionTrigger = forwardRef<ElementRef<typeof StyledTrigger>, AccordionTriggerProps>(
	({ children, ...props }, forwardedRef) => (
		<StyledHeader>
			<StyledTrigger {...props} ref={forwardedRef}>
				{children}
				<StyledChevron aria-hidden />
			</StyledTrigger>
		</StyledHeader>
	)
);

AccordionTrigger.displayName = "AccordionTrigger";

const StyledContentText = styled("div", {
	padding: "15px 20px",
});
type AccordionContentPrimitiveProps = ComponentProps<typeof AccordionPrimitive.Content>;
type AccordionContentProps = AccordionContentPrimitiveProps & { css?: CSS };

export const AccordionContent = forwardRef<ElementRef<typeof StyledContent>, AccordionContentProps>(
	({ children, ...props }, forwardedRef) => (
		<StyledContent {...props} ref={forwardedRef}>
			<StyledContentText>{children}</StyledContentText>
		</StyledContent>
	)
);

AccordionContent.displayName = "AccordionContent";
