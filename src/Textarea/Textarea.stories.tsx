import { Flex } from "../Flex";
import { Textarea } from "./Textarea";

export const TextareaDemo = () => {
	return (
		<>
			<Flex css={{ ai: "flex-start", gap: "$6" }}>
				<Textarea size="1" placeholder="Size 1"></Textarea>
				<Textarea size="2" placeholder="Size 1"></Textarea>
				<Textarea size="3" placeholder="Size 1"></Textarea>
			</Flex>
			<Flex css={{ ai: "flex-start", gap: "$6", mt: "$6" }}>
				<Textarea size="2" placeholder="Size 1" disabled></Textarea>
				<Textarea size="2" placeholder="Size 1" readOnly defaultValue="eihuweofjew"></Textarea>
			</Flex>
		</>
	);
};

export default {
	title: "Textara",
};
