import { keyframes, styled } from "../stitches.config";
import * as ModalPrimitive from "@radix-ui/react-dialog";
import type { ComponentProps, ReactNode } from "react";
import * as React from "react";

const overlayShow = keyframes({
	"0%": { opacity: 0 },
	"100%": { opacity: 1 },
});

const contentShow = keyframes({
	"0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
	"100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

type ModalProps = ComponentProps<typeof ModalPrimitive.Root> & {
	children?: ReactNode;
};

const StyledOverlay = styled(ModalPrimitive.Overlay, {
	backgroundColor: "rgba(0,0,0,.5)",
	position: "fixed",
	inset: 0,
	"@media (prefers-reduced-motion: no-preference)": {
		animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
	},
});

const StyledContent = styled(ModalPrimitive.Content, {
	backgroundColor: "white",
	borderRadius: 6,
	boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
	position: "fixed",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "90vw",
	maxWidth: "450px",
	maxHeight: "85vh",
	padding: 25,
	"@media (prefers-reduced-motion: no-preference)": {
		animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
	},
	"&:focus": { outline: "none" },
});

function Content({ children, ...props }: ModalProps) {
	return (
		<ModalPrimitive.Portal>
			<StyledOverlay />
			<StyledContent {...props}>{children}</StyledContent>
		</ModalPrimitive.Portal>
	);
}

const StyledTitle = styled(ModalPrimitive.Title, {
	margin: 0,
	fontWeight: 600,
	color: "$slate700",
	fontSize: "$base",
});

const StyledDescription = styled(ModalPrimitive.Description, {
	margin: "10px 0 20px",
	color: "$slate900",
	fontSize: 15,
	lineHeight: 1.5,
});

// Exports
export const Modal = ModalPrimitive.Root;
export const ModalTrigger = ModalPrimitive.Trigger;
export const ModalContent = Content;
export const ModalTitle = StyledTitle;
export const ModalDescription = StyledDescription;
export const ModalClose = ModalPrimitive.Close;
