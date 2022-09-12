import React from "react";
import { UserIcon } from "../Icons";
import { styled } from "../stitches.config";
import type { CSS, VariantProps } from "../stitches.config";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

export const StyledAvatar = styled(AvatarPrimitive.Root, {
	$$size: "3rem",
	width: "$$size",
	height: "$$size",
	borderRadius: "50%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "$primary100",
	boxSizing: "border-box",

	variants: {
		size: {
			sm: {
				$$size: "2rem",
			},
			md: {
				$$size: "3rem",
			},
			lg: {
				$$size: "4rem",
			},
			xl: {
				$$size: "6rem",
			},
		},
	},

	defaultVariants: {
		size: "md",
	},
});

const StyledImg = styled(AvatarPrimitive.Image, {
	width: "100%",
	height: "100%",
	objectFit: "cover",
	borderRadius: "inherit",
});

const StyledAvatarFallBack = styled(AvatarPrimitive.Fallback, {
	width: "100%",
	height: "100%",
	display: "flex",
	alignItems: "center",
	color: "$bgLight400",
	justifyContent: "center",
});

type AvatarPrimitiveProps = React.ComponentProps<typeof AvatarPrimitive.Root>;
type AvatarProps = AvatarPrimitiveProps &
	VariantProps<typeof StyledAvatar> & {
		children?: never;
		src?: string;
		name?: string;
		css?: CSS;
		fallback?: React.ReactNode;
		onError?: () => void;
	};

export const Avatar = React.forwardRef<React.ElementRef<typeof StyledAvatar>, AvatarProps>(
	({ src, name, fallback, onError, ...props }, ref) => {
		const onLoadingStatusChange = (status: string) => {
			if (onError && status === "error") {
				onError();
			}
		};

		return (
			<StyledAvatar {...props} ref={ref}>
				<StyledImg onLoadingStatusChange={onLoadingStatusChange} alt={name} src={src} />
				<StyledAvatarFallBack>
					{fallback || <UserIcon width="60%" height="60%" color="#eee" />}
				</StyledAvatarFallBack>
			</StyledAvatar>
		);
	}
);

Avatar.displayName = "Avatar";
