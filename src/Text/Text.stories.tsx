import { Box } from "../Box";
import { Text } from "./Text";

export default {
	title: "Text",
};

export const HeadingTag = () => (
	<Text as="h1" fontSize="4xl">
		Heading 1
	</Text>
);

const FONT_SIZES_VARIANTS: any = [
	"xs",
	"sm",
	"base",
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

export const HeadingList = () => {
	return (
		<Box css={{ display: "flex", flexDirection: "column" }}>
			{FONT_SIZES_VARIANTS.map((e: any) => (
				<Text key={`${e}-variant`} fontSize={e}>
					Lorem ipsum dolor sit amet.
				</Text>
			))}
		</Box>
	);
};

HeadingList.parameters = {
	layout: "padded",
};
