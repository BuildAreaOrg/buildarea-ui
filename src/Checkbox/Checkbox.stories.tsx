import { Flex, Checkbox } from "../index";

export const CheckboxDemo = () => (
	<Flex css={{ height: "$space$4", width: "$full" }}>
		<Checkbox defaultChecked />
		<Checkbox checked />
	</Flex>
);
export default {
	title: "Checkbox",
};
