import { Box } from "./index";
export default { title: "Box" };

export const NormalBox = () => {
	return <Box css={{ boxSize: "$space$40", backgroundColor: "$primary100" }}>Hey</Box>;
};

export const FlexboxWithBox = () => {
	return (
		<Box css={{ display: "flex", gap: "$8" }}>
			<NormalBox css={{ bg: "$primary100" }} />
			<NormalBox css={{ bg: "$primary100" }} />
			<NormalBox css={{ bg: "$primary100" }} />
		</Box>
	);
};
