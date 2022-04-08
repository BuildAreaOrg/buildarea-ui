import { styled } from "../stitches.config";

export const Heading = styled("h1", {
	// Reset
	lineHeight: 1,
	fontWeight: 700,

	variants: {
		fontSize: {
			"4": { fontSize: "$4xl", lineHeight: "2.5rem" },
			"3": { fontSize: "$5xl", lineHeight: "1" },
			"2": { fontSize: "$6xl", lineHeight: "1" },
			"1": { fontSize: "$7xl", lineHeight: "1" },
		},
	},

	defaultVariants: {
		fontSize: "base",
	},
});
