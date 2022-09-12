import { styled } from "../stitches.config";

export const Heading = styled("h1", {
	// Reset
	fontSize: "$xl",
	lineHeight: "inherit",
	fontWeight: "$medium",

	variants: {
		fontSize: {
			xl: { fontSize: "$xl", lineHeight: "$lg" },
			"2xl": { fontSize: "$2xl", lineHeight: "$2xl" },
			"3xl": { fontSize: "$3xl", lineHeight: "$3xl" },
			"4xl": { fontSize: "$4xl", lineHeight: "$4xl" },
			"5xl": { fontSize: "$5xl", lineHeight: "1" },
			"6xl": { fontSize: "$6xl", lineHeight: "1" },
			"7xl": { fontSize: "$7xl", lineHeight: "1" },
			"8xl": { fontSize: "$8xl", lineHeight: "1" },
			"9xl": { fontSize: "$9xl", lineHeight: "1" },
		},
		fontWeight: {
			thin: { fontWeight: "$thin" },
			extralight: { fontWeight: "$extralight" },
			light: { fontWeight: "$light" },
			normal: { fontWeight: "$normal" },
			medium: { fontWeight: "$medium" },
			semibold: { fontWeight: "$semibold" },
			bold: { fontWeight: "$bold" },
			extrabold: { fontWeight: "$extrabold" },
			black: { fontWeight: "$black" },
		},
	},

	defaultVariants: {
		fontSize: "base",
	},
});
