import { styled } from "../stitches.config";

export const Flex = styled("div", {
	display: "flex",

	gap: "$4",
	variants: {
		dir: {
			row: {
				flexDirection: "row",
			},
			column: {
				flexDirection: "column",
			},
			rowReverse: {
				flexDirection: "row-reverse",
			},
			columnReverse: {
				flexDirection: "column-reverse",
			},
		},
		align: {
			start: {
				alignItems: "flex-start",
			},
			center: {
				alignItems: "center",
			},
			end: {
				alignItems: "flex-end",
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
				justifyContent: "flex-start",
			},
			center: {
				justifyContent: "center",
			},
			end: {
				justifyContent: "flex-end",
			},
			between: {
				justifyContent: "space-between",
			},
			around: {
				justifyContent: "space-around",
			},
			evenly: {
				justifyContent: "space-evenly",
			},
		},
		wrap: {
			noWrap: {
				flexWrap: "nowrap",
			},
			wrap: {
				flexWrap: "wrap",
			},
			wrapReverse: {
				flexWrap: "wrap-reverse",
			},
		},
	},
	defaultVariants: {
		dir: "row",
		align: "stretch",
		justify: "start",
		wrap: "noWrap",
	},
});
