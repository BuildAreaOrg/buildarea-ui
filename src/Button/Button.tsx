import React from "react";
import { styled } from "../stitches.config";
import { CSS, keyframes, VariantProps } from "@stitches/react";
import { Span } from "../Span";

// https://github.com/modulz/stitches/issues/947
const StyledButton = styled("button", {
	// mini reset
	all: "unset",

	// for drag and drop, otherwise we wouldn't be able to drag button
	userSelect: "element",
	WebkitUserDrag: "element",

	// Custom Reset
	display: "inline-flex",
	flexShrink: 0,
	justifyContent: "center",
	alignItems: "center",
	flexGrow: 0,
	WebkitTapHighlightColor: "rgba(0,0,0,0)",
	cursor: "pointer",
	$$primary: "$colors$primary",
	backgroundColor: "$$primary",
	borderRadius: "6px",
	fontWeight: "$semibold",
	color: "$buttonTextPrimary",

	"&:hover": {
		$$primary: "$colors$primary400",
		outline: "2px solid $colors$primary",
		outlineOffset: "3px",
	},
	"&:active": {
		$$primary: "$colors$primary",
	},

	variants: {
		outline: {
			true: {
				backgroundColor: "transparent",
				boxShadow: "inset 0 0 0 1px $$primary",
				"&:hover": {
					outline: "none",
					outlineOffset: "0",
				},
			},
		},
		disabled: {
			true: {
				color: "$textLight100",
				opacity: 0.6,
				pointerEvents: "none",
				cursor: "not-allowed",
			},
		},
		size: {
			sm: {
				fontSize: "$xs",
				height: "$space$8",
				px: "$space$4",
			},
			md: {
				fontSize: "$sm",
				height: "$space$10",
				px: "$space$4",
			},
			lg: {
				fontSize: "$sm",
				height: "$space$12",
				px: "$space$8",
			},
		},
		buttonType: {
			secondary: {
				$$primary: "$colors$secondary",
				color: "$buttonTextSecondary",

				"&:hover": {
					$$primary: "$colors$secondary400",
					outline: "2px solid $colors$secondary",
					outlineOffset: "3px",
				},
				"&:active": {
					$$primary: "$colors$secondary500",
				},
			},
		},
	},

	compoundVariants: [
		{
			outline: true,
			size: "sm",
			css: {
				color: "$$primary",
			},
		},
		{
			outline: true,
			size: "md",
			css: {
				color: "$$primary",
			},
		},
		{
			outline: true,
			size: "lg",
			css: {
				color: "$$primary",
			},
		},
	],

	defaultVariants: {
		size: "md",
	},
});

const loading = keyframes({
	"0%": { transform: "rotate(0)" },
	"100%": { transform: "rotate(360deg)" },
});

const StyledLoader = styled("span", {
	display: "inline-block",
	width: "16px",
	height: "16px",
	borderRadius: "50%",
	border: "2px solid currentColor",
	borderLeft: 0,
	animation: `${loading} .4s linear infinite`,
});

type ButtonProps = React.ComponentProps<typeof StyledButton> &
	VariantProps<typeof StyledButton> & {
		children: React.ReactNode;
		leftIcon?: React.ReactElement;
		rightIcon?: React.ReactElement;
		css?: CSS;
		isLoading?: boolean;
		loadingText?: string;
	};

export const Button = React.forwardRef<React.ElementRef<typeof StyledButton>, ButtonProps>(
	({ children, leftIcon, rightIcon, css, isLoading, loadingText, ...props }, ref) => {
		const gap = `${leftIcon || rightIcon || loadingText ? "$space$2" : 0}`;

		let styles = {};

		if (css) {
			styles = { gap: gap, ...css };
		} else {
			styles = { gap: gap };
		}

		if (isLoading) {
			return (
				<Span css={{ cursor: "not-allowed" }}>
					<StyledButton ref={ref} {...props} css={styles} disabled>
						<StyledLoader />
						<Span>{loadingText}</Span>
					</StyledButton>
				</Span>
			);
		}

		return (
			<Span css={{ cursor: "not-allowed" }}>
				<StyledButton ref={ref} {...props} css={styles}>
					{leftIcon && leftIcon}
					{children}
					{rightIcon && rightIcon}
				</StyledButton>
			</Span>
		);
	}
);

Button.displayName = "Button";
