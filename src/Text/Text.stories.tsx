import { Text, Box } from "../index";

export default {
	title: "Text",
};

export const DefaultText = () => <Text as="h1">Default Text</Text>;

const FONT_SIZES_VARIANTS: any = [
	"xs",
	"sm",
	"lg",
	"xl",
	"2xl",
	"3xl",
	"4xl",
	"5xl",
	"6xl",
	"7xl",
	"8xl",
	"9xl",
];

export const TextList = () => {
	return (
		<Box css={{ display: "flex", flexDirection: "column" }}>
			{FONT_SIZES_VARIANTS.map((e: any) => (
				<Text key={`${e}-variant`} fontSize={e}>
					{e} Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Veritatis corporis sint, suscipit ducimus pariatur animi repudiandae asperiores quisquam
					accusantium aliquam non molestiae, dicta itaque fuga, repellat saepe enim rem! Ducimus!
				</Text>
			))}
		</Box>
	);
};

const FONT_WIEGHTS: any = [
	"thin",
	"extralight",
	"light",
	"normal",
	"medium",
	"semibold",
	"bold",
	"extrabold",
	"black",
];

export const TextFontWeights = () => {
	return (
		<Box css={{ display: "flex", flexDirection: "column" }}>
			{FONT_WIEGHTS.map((e: any) => (
				<Text key={`${e}-variant`} fontSize="xl" fontWeight={e}>
					{e} Lorem ipsum dolor sit amet.
				</Text>
			))}
		</Box>
	);
};

TextList.parameters = {
	layout: "padded",
};
