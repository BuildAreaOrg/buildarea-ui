import { Box, Flex } from "../index";

export default {
	title: "Flex",
};

const List = () => {
	return (
		<>
			{new Array(3).fill("").map((e, i) => (
				<Box key={`${i}`} css={{ backgroundColor: "$primary", boxSize: "$space$10" }}>
					{i + 1}
				</Box>
			))}
		</>
	);
};

export const DefaultFlex = () => {
	return (
		<Flex>
			<List />
		</Flex>
	);
};
export const FlexColumn = () => {
	return (
		<Flex dir="column">
			<List />
		</Flex>
	);
};
export const JustifySpaceBetween = () => {
	return (
		<Flex justify="between" align="center" dir="column" css={{ h: "200px" }}>
			<List />
		</Flex>
	);
};
