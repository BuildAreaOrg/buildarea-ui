import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { styled, keyframes } from "../stitches.config";
import type { CSS, VariantProps } from "../stitches.config";
import React, { forwardRef } from "react";
import type { ElementRef, ComponentProps } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const StyledAccordion = styled(AccordionPrimitive.Root, {
	borderRadius: 6,
	width: "30rem",
	color: "$primary200",
});

type AccordionPrimitiveProps = ComponentProps<typeof AccordionPrimitive.Root>;
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

Accordion.displayName = "Accordion";

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
	padding: "$space$8",
	height: 45,
	flex: 1,
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	fontSize: "$base",
	lineHeight: 1,
	color: "white",
	backgroundColor: "$overlayLight200",

	variants: {
		triggerType: {
			primary: {
				color: "$primary200",
			},
			secondary: {
				color: "$secondary200",
			},
		},
	},

	defaultVariants: {
		triggerType: "primary",
	},
});

const StyledContent = styled(AccordionPrimitive.Content, {
	overflow: "hidden",
	fontSize: "$base",
	color: "$textLight100",
	backgroundColor: "$overlayLight100",

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

type AccordionTriggerPrimitiveProps = ComponentProps<typeof AccordionPrimitive.Trigger>;
type AccordionTriggerProps = AccordionTriggerPrimitiveProps & { css?: CSS } & VariantProps<
		typeof StyledTrigger
	>;

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
