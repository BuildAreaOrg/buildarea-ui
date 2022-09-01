import React from "react";
import { StyledAvatar } from "../Avatar";
import { styled } from "../stitches.config";
import type { CSS, VariantProps } from "../stitches.config";

const StyledAvatarGroup = styled("div", {
	display: "flex",
	flexDirection: "row-reverse",
	justifyContent: "flex-end",
	[`& ${StyledAvatar}:nth-child(n+2)`]: {
		marginRight: "-.55rem",
	},

	[`& ${StyledAvatar}`]: {
		border: "2px solid $bgDark100",
	},
});

const StyledRemainChildrenSize = styled(StyledAvatar, {
	color: "#eee",
});

type AvatarGroupProps = React.HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof StyledAvatar> & {
		children: React.ReactNode;
		css?: CSS;
		max?: number;
	};

export const AvatarGroup = React.forwardRef<
	React.ElementRef<typeof StyledAvatarGroup>,
	AvatarGroupProps
>(({ children, max, size, ...props }, ref) => {
	//get olny valid children
	const validChildren = React.Children.toArray(children).filter((child) =>
		React.isValidElement(child)
	) as React.ReactElement[];

	const childrenWithinMax = max ? validChildren.slice(0, max) : validChildren;

	const remainChildrenSize = max ? validChildren.length - max : -1;

	const reversedChildren = childrenWithinMax.reverse();

	const clones = reversedChildren.map((child) => {
		const childProps = {
			size: size,
		};
		return React.cloneElement(child, childProps);
	});

	return (
		<StyledAvatarGroup {...props} ref={ref}>
			{remainChildrenSize > 0 && (
				<StyledRemainChildrenSize size={size}>+{remainChildrenSize}</StyledRemainChildrenSize>
			)}
			{clones}
		</StyledAvatarGroup>
	);
});

AvatarGroup.displayName = "AvatarGroup";
