import { styled } from "../stitches.config";

export const Badge = styled("div", {
	$$primary: "$colors$primary300",
	backgroundColor: "$$primary",
	color: "$colors$textDark200",
	textTransform: "capitalize",
	padding: "5px 9px",
	fontSize: "$sm",
	borderRadius: "3px",

	variants: {
		secondary: {
			true: {
				$$primary: "$colors$secondary300",
			},
		},
		outline: {
			true: {
				backgroundColor: "transparent",
				boxShadow: "inset 0 0 0 1px $$primary",
				color: "$$primary",
			},
		},
		rounded: {
			true: {
				borderRadius: "99999px",
			},
		},
	},
});
