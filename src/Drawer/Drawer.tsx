import React, { useEffect } from "react";
import { keyframes, styled } from "../stitches.config";
import * as Portal from "@radix-ui/react-portal";
import type { CSS, VariantProps } from "../stitches.config";
import { CloseIcon } from "../Icons";

const StyledDrawer = styled("div", {
	position: "fixed",
	left: 0,
	top: 0,
	width: "100%",
	height: "100%",
	zIndex: 1600,
});

export const DrawerOverlay = styled("div", {
	backgroundColor: "rgba(0,0,0,.4)",
	position: "fixed",
	left: 0,
	top: 0,
	width: "100%",
	height: "100%",
	zIndex: "inherit",
	pointerEvents: "none",
});

const drawerContentAnimation = keyframes({
	"0%": { transform: "translate(var(--translateValue))" },
});

export const DrawerContent = styled("div", {
	backgroundColor: "$bgLight100",
	position: "fixed",
	width: "100%",
	height: "100%",
	zIndex: "inherit",
	display: "flex",
	flexDirection: "column",
	animation: `${drawerContentAnimation} .4s ease-out`,
});

DrawerContent.className = "build-area-ui-drawer-content";

export const DrawerHeader = styled("header", {
	p: "$6",
	borderBottom: "1px solid $bgLight500",
	fontSize: "$base",
	fontWeight: "$semibold",
});

export const DrawerBody = styled("div", {
	flex: "1 1 0",
	overflow: "auto",
});

export const DrawerFooter = styled("footer", {
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	p: "$6",
	borderTop: "1px solid $bgLight500",
});

const StyleDrawerCloseBtn = styled("div", {
	position: "absolute",
	top: "1.4rem",
	right: "1rem",
	fontSize: "$2xl",
	height: "1.4rem",
	width: "1.4rem",
	cursor: "pointer",
});

type DrawerCloseBtnProps = React.HTMLProps<HTMLDivElement> &
	VariantProps<typeof StyleDrawerCloseBtn> & { css?: CSS };

export const DrawerCloseBtn = React.forwardRef<
	React.ElementRef<typeof StyleDrawerCloseBtn>,
	DrawerCloseBtnProps
>((props, ref) => {
	return (
		<StyleDrawerCloseBtn {...props} ref={ref}>
			<CloseIcon fontSize="2rem" />
		</StyleDrawerCloseBtn>
	);
});

DrawerCloseBtn.displayName = "DrawerCloseBtn";

type DrawerProps = {
	children?: React.ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
	position?: "left" | "right" | "top" | "bottom";
	size?: "xs" | "sm" | "md" | "lg" | "full";
};

export const Drawer = React.forwardRef<React.ElementRef<typeof StyledDrawer>, DrawerProps>(
	({ children, isOpen, onClose, position, size, ...props }, ref) => {
		useEffect(() => {
			//stop body scroll behaviour when the drawer state is open
			document.body.style.overflow = isOpen ? "hidden" : "auto";
		}, [isOpen]);

		if (!isOpen) return null;

		const validChildren = React.Children.toArray(children).filter((child) =>
			React.isValidElement(child)
		) as React.ReactElement[];

		const clones = validChildren.map((child: any) => {
			let css = {};

			if (child && child.type.className === "build-area-ui-drawer-content") {
				switch (position) {
					case "left":
						css = { top: 0, left: 0, maxWidth: `$${size || "xs"}`, "--translateValue": "-100%, 0" };
						break;
					case "right":
						css = { top: 0, right: 0, maxWidth: `$${size || "xs"}`, "--translateValue": "100%, 0" };
						break;
					case "top":
						css = {
							top: 0,
							width: "100%",
							maxHeight: `$${size || "xs"}`,
							"--translateValue": "0, -100%",
						};
						break;
					case "bottom":
						css = {
							bottom: 0,
							width: "100%",
							maxHeight: `$${size || "xs"}`,
							"--translateValue": "0, 100%",
						};
						break;
					default:
						css = { top: 0, left: 0, maxWidth: `$${size || "xs"}`, "--translateValue": "-100%, 0" };
				}
			}

			const childProps = {
				css: css,
			};

			return React.cloneElement(child, childProps);
		});

		return (
			<Portal.Root>
				<StyledDrawer ref={ref} {...props}>
					<StyledDrawer onClick={onClose} />
					{clones}
				</StyledDrawer>
			</Portal.Root>
		);
	}
);

Drawer.displayName = "Drawer";
