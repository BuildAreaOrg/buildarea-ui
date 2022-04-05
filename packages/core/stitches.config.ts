import { createStitches } from "@stitches/react";
import { colors, space, fontSizes } from "./theme";
import type * as Stitches from "@stitches/react";

export type { VariantProps } from "@stitches/react";

export type CSS = Stitches.CSS<typeof config>;

export const {
	styled,
	css,
	theme,
	createTheme,
	getCssText,
	globalCss,
	keyframes,
	config,
	reset,
} = createStitches({
	theme: {
		colors,
		space,

		fontSizes,
		sizes: {
			full: "100%",
		},
		radii: {
			none: "0px",
			sm: "0.125rem",
			default: "0.25rem",
			md: "0.375rem",
			lg: "0.5rem",
			xl: "0.75rem",
			"2xl": "1rem",
			"3xl": "1.5rem",
			pill: "9999px",
			full: "50%",
		},
	},
	utils: {
		boxSize: (value: Stitches.PropertyValue<"width">) => ({
			width: value,
			height: value,
		}),
		bg: (value: Stitches.PropertyValue<"backgroundColor">) => ({
			backgroundColor: value,
		}),
		w: (value: Stitches.PropertyValue<"width">) => ({
			width: value,
		}),
		h: (value: Stitches.PropertyValue<"width">) => ({
			height: value,
		}),
		p: (value: Stitches.PropertyValue<"padding">) => ({
			padding: value,
		}),
		pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
			paddingTop: value,
		}),
		pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
			paddingRight: value,
		}),
		pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
			paddingBottom: value,
		}),
		pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
			paddingLeft: value,
		}),
		px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		py: (value: Stitches.PropertyValue<"paddingTop">) => ({
			paddingTop: value,
			paddingBottom: value,
		}),

		m: (value: Stitches.PropertyValue<"margin">) => ({
			margin: value,
		}),
		mt: (value: Stitches.PropertyValue<"marginTop">) => ({
			marginTop: value,
		}),
		mr: (value: Stitches.PropertyValue<"marginRight">) => ({
			marginRight: value,
		}),
		mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
			marginBottom: value,
		}),
		ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
			marginLeft: value,
		}),
		mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
			marginLeft: value,
			marginRight: value,
		}),
		my: (value: Stitches.PropertyValue<"marginTop">) => ({
			marginTop: value,
			marginBottom: value,
		}),
	},
});
