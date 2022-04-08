import { Grid } from "./Grid";
import { Box } from "../Box";

export default {
	title: "Grid",
};

const List = () => {
	return (
		<>
			{new Array(3).fill("").map((e, i) => (
				<Box key={`${i}`} css={{ backgroundColor: "$amber300", boxSize: "$space$10" }}>
					{i + 1}
				</Box>
			))}
		</>
	);
};

export const DefaultGrid = () => {
	return (
		<Grid>
			<List />
		</Grid>
	);
};

export const TemplateColumns = () => {
	return (
		// You can add any css you like here.
		<Grid css={{ gridTemplateColumns: "repeat(3, 1fr)", w: "400px" }}>
			<List />
		</Grid>
	);
};
