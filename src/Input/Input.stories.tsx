import { Flex } from "../Flex";
import { Input } from "./Input";

export const InputDemo = () => {
	return (
		<>
			<Flex align="start" css={{ gap: "$6" }}>
				<Input size="1" placeholder="Size 1" />
				<Input size="2" placeholder="Size 2" />
			</Flex>
			<Flex align="start" css={{ gap: "$6", mt: "$6" }}>
				<Input size="1" placeholder="Ghost" variant="ghost" />
				<Input size="2" placeholder="Ghost" variant="ghost" />
			</Flex>
			<Flex align="start" css={{ gap: "$6", mt: "$6" }}>
				<Input placeholder="Invalid" state="invalid" />
				<Input placeholder="Valid" state="valid" />
			</Flex>
			<Flex align="start" css={{ gap: "$6", mt: "$6" }}>
				<Input placeholder="Cursor default" cursor="default" />
				<Input placeholder="Cursor text" cursor="text" />
			</Flex>
			<Flex align="start" css={{ gap: "$6", mt: "$6" }}>
				<Input placeholder="Read only placeholder" readOnly />
				<Input placeholder="Read only value" defaultValue="100" readOnly />
				<Input placeholder="Disabled placeholder" disabled />
				<Input placeholder="Disabled value" defaultValue="100" disabled />
			</Flex>
		</>
	);
};
export default {
	title: "Input",
};
