import { createStitches } from "@stitches/react";
import { colors, space, fontSizes, fontWeights, lineHeights } from "./theme";
import type * as Stitches from "@stitches/react";

export type { VariantProps } from "@stitches/react";

export type CSS = Stitches.CSS<typeof config>;

export const { styled, css, theme, createTheme, getCssText, globalCss, keyframes, config, reset } =
	createStitches({
		theme: {
			colors,
			space,
			fontSizes,
			fontWeights,
			lineHeights,
			sizes: {
				full: "100%",
				"3xs": "14rem",
				"2xs": "16rem",
				xs: "20rem",
				sm: "24rem",
				md: "28rem",
				lg: "32rem",
				xl: "36rem",
				"2xl": "42rem",
				"3xl": "48rem",
				"4xl": "56rem",
				"5xl": "64rem",
				"6xl": "72rem",
				"7xl": "80rem",
				"8xl": "90rem",
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
		media: {
			base: "(min-width: 320px)",
			sm: "(min-width:640px)",
			md: "(min-width:768px)",
			lg: "(min-width:1024px)",
			xl: "(min-width:1280px)",
			"2xl": "(min-width:1536px)",
		},
	});
