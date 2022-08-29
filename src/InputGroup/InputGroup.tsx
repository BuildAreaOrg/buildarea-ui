import React from "react";
import { styled } from "../stitches.config";
import type { CSS } from "../stitches.config";

export const InputLeftElement = styled("div", {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "48px",
	minWidth: "48px",
	position: "absolute",
	top: "0",
	height: "100%",
	pointerEvents: "none",
	left: 0,
});

InputLeftElement.displayName = "InputLeftElement";

export const InputRightElement = styled("div", {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "48px",
	minWidth: "48px",
	position: "absolute",
	height: "100%",
	pointerEvents: "none",
	top: "0",
	right: "0",
});

InputRightElement.displayName = "InputRightElement";

const InputAddon = styled("div", {
	display: "flex",
	justifyContent: "start",
	alignItems: "center",
	position: "relative",
	padding: "0 8px",
	width: "auto",
	border: "1px solid $colors$bgLight400",
	backgroundColor: "$bgDark200",
});
export const InputLeftAddon = styled(InputAddon, {
	borderRight: "transparent",
	borderRadius: "7px 0 0 7px",
});
InputLeftAddon.displayName = "InputLeftAddon";

export const InputRightAddon = styled(InputAddon, {
	borderLeft: "transparent",
	borderRadius: "0 7px 7px 0",
});

InputRightAddon.displayName = "InputRightAddon";

const StyledInputGroup = styled("div", {
	position: "relative",
	display: "flex",
	width: "100%",
});

type InputGroupProps = React.HTMLProps<HTMLDivElement> & { css?: CSS };

export const InputGroup = React.forwardRef<
	React.ElementRef<typeof StyledInputGroup>,
	InputGroupProps
>(({ children, ...props }, ref) => {
	const style: CSS = {};

	React.Children.forEach(children, (child: any) => {
		if (child && child.type.displayName === "InputLeftElement") {
			style.paddingLeft = "40px";
		}
		if (child && child.type.displayName === "InputRightElement") {
			style.paddingRight = "40px";
		}
		if (child && child.type.displayName === "InputLeftAddon") {
			style.borderTopLeftRadius = "0";
			style.borderBottomLeftRadius = "0";
		}
		if (child && child.type.displayName === "InputRightAddon") {
			style.borderTopRightRadius = "0";
			style.borderBottomRightRadius = "0";
		}
	});

	const clones = React.Children.map(children, (child: any) => {
		if (child && child.type.displayName === "Input")
			return React.cloneElement(child, { css: { ...style } });
		return React.cloneElement(child);
	});

	return (
		<StyledInputGroup {...props} ref={ref}>
			{clones}
		</StyledInputGroup>
	);
});

InputGroup.displayName = "InputGroup";
