import { styled } from "../stitches.config";

export const Text = styled("p", {
	// Reset
	lineHeight: 1,
	fontWeight: 400,

	variants: {
		fontSize: {
			xs: { fontSize: "$xs", lineHeight: "1rem" },
			sm: { fontSize: "$sm", lineHeight: "1.25rem" },
			base: { fontSize: "$base", lineHeight: "1.5rem" },
			lg: { fontSize: "$lg", lineHeight: "1.75rem" },
			xl: { fontSize: "$xl", lineHeight: "1.75rem" },
			"2xl": { fontSize: "$2xl", lineHeight: "2rem" },
			"3xl": { fontSize: "$3xl", lineHeight: "2.25rem" },
			"4xl": { fontSize: "$4xl", lineHeight: "2.5rem" },
			"5xl": { fontSize: "$5xl", lineHeight: "1" },
			"6xl": { fontSize: "$6xl", lineHeight: "1" },
			"7xl": { fontSize: "$7xl", lineHeight: "1" },
			"8xl": { fontSize: "$8xl", lineHeight: "1" },
			"9xl": { fontSize: "$9xl", lineHeight: "1" },
		},
		color: {
			red: { color: "red" },
		},
	},

	defaultVariants: {
		fontSize: "base",
	},
});
