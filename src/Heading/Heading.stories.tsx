import { Box, Heading } from "../index";

export default {
	title: "Heading",
};

export const HeadingTag = () => <Heading as="h1">Heading 1</Heading>;

const FONT_SIZES_VARIANTS: any = ["xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"];

export const HeadingSizes = () => {
	return (
		<Box css={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
			{FONT_SIZES_VARIANTS.map((e: any) => (
				// TODO: add proper types to Heading variant
				// @ts-ignore
				<Heading key={`${e}-variant`} fontSize={e}>
					Font-Size {e} Looks cool lor
				</Heading>
			))}
		</Box>
	);
};

const FONT_WIEGHTS: any = ["medium", "semibold", "bold", "extrabold", "black"];

export const HeadingFontWeights = () => {
	return (
		<Box css={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
			{FONT_WIEGHTS.map((e: any) => (
				// TODO: add proper types to Heading variant
				// @ts-ignore
				<Heading key={`${e}-variant`} fontWeight={e}>
					Font-Size {e} Looks cool.
				</Heading>
			))}
		</Box>
	);
};
