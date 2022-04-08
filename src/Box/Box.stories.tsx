import { Box } from "./Box";
export default { title: "Box" };

export const NormalBox = () => {
	return <Box css={{ boxSize: "$space$40", backgroundColor: "$gray400" }}>Hey</Box>;
};

export const FlexboxWithBox = () => {
	return (
		<Box css={{ display: "flex", gap: "$8" }}>
			<NormalBox />
			<NormalBox />
			<NormalBox />
		</Box>
	);
};
