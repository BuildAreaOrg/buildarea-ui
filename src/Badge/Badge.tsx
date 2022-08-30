import { styled } from "../stitches.config";

export const Badge = styled("div", {
	$$primary: "hsl(0,0%,75%)",
	backgroundColor: "$$primary",
	color: "black",
	padding: "4px 8px",
	textTransform: "uppercase",
	fontSize: "$sm",

	variants: {
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
