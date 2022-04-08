import { Box } from "../Box";
import { Heading } from "./Heading";

export default {
	title: "Heading",
};

export const HeadingTag = () => (
	<Heading as="h1" fontSize="1">
		Heading 1
	</Heading>
);

const FONT_SIZES_VARIANTS: any = ["1", "2", "3", "4"];

export const HeadingList = () => {
	return (
		<Box css={{ display: "flex", flexDirection: "column" }}>
			{FONT_SIZES_VARIANTS.map((e: any) => (
				// TODO: add proper types to Heading variant
				// @ts-ignore
				<Heading as={`h${e}`} key={`${e}-variant`} fontSize={e}>
					Font-Size {e} Looks cool
				</Heading>
			))}
		</Box>
	);
};

HeadingList.parameters = {
	layout: "padded",
};
