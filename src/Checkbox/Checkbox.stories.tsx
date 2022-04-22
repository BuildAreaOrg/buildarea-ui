import { Flex } from "../Flex";
import { Checkbox } from "./Checkbox";

export const CheckboxDemo = () => (
	<Flex css={{ height: "$space$4", width: "$full" }}>
		<Checkbox css={{ bg: "$blue600", color: "$slate200" }} defaultChecked>
			Hey
		</Checkbox>
		<Checkbox checked />
	</Flex>
);
export default {
	title: "Checkbox",
};
