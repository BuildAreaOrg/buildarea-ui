import { Flex, Input } from "../index";
import { Label } from "./Label";

export const Labels = () => (
	<Flex align="center" css={{ padding: "0 20px", w: "$full" }}>
		<Label htmlFor="companyName" css={{ lineHeight: "1rem", flexGrow: 2, width: "200px" }}>
			Company Name
		</Label>
		<Input type="text" id="companyName" defaultValue="Buildarea" />
	</Flex>
);

export default {
	title: "Label",
};
