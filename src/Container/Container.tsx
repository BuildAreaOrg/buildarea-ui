import { styled } from "../stitches.config";

export const Container = styled("div", {
	width: "100%",
	margin: "auto",
	variants: {
		maxW: {
			xs: {
				maxWidth: "320px",
			},
			sm: {
				maxWidth: "640px",
			},
			md: {
				maxWidth: "768px",
			},
			lg: {
				maxWidth: "1024px",
			},
			xl: {
				maxWidth: "1280px",
			},
			"2xl": {
				maxWidth: "1536px",
			},
		},
	},
});
