import { styled } from "../stitches.config";

export const Grid = styled("div", {
	display: "grid",
	gap: "$4",

	variants: {
		align: {
			start: {
				alignItems: "start",
			},
			center: {
				alignItems: "center",
			},
			end: {
				alignItems: "end",
			},
			stretch: {
				alignItems: "stretch",
			},
			baseline: {
				alignItems: "baseline",
			},
		},
		justify: {
			start: {
				justifyContent: "start",
			},
			center: {
				justifyContent: "center",
			},
			end: {
				justifyContent: "end",
			},
			between: {
				justifyContent: "space-between",
			},
		},
	},
	defaultVariants: {
		align: "start",
		justify: "start",
	},
});
