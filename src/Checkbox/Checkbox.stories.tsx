import { Flex } from "../Flex";
import { Checkbox } from "./Checkbox";

export const CheckboxDemo = () => (
	<Flex css={{ height: "$space$4", width: "$full" }}>
		<Checkbox defaultChecked />
		<Checkbox checked />
	</Flex>
);
export default {
	title: "Checkbox",
};
