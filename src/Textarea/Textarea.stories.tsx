import { Textarea, Flex } from "../index";

export const AllTextarea = () => {
	return (
		<>
			<Flex dir={"column"} css={{ ai: "flex-start", gap: "$6" }}>
				<Textarea size="1" placeholder="Size 1"></Textarea>
				<Textarea size="2" placeholder="Size 2"></Textarea>
				<Textarea size="3" placeholder="Size 3"></Textarea>
			</Flex>
			<Flex css={{ ai: "flex-start", gap: "$6", mt: "$6" }}>
				<Textarea size="1" placeholder="Size 1" disabled value={"disabled"} />
				<Textarea size="1" placeholder="Size 1" readOnly defaultValue="default Value" />
			</Flex>
		</>
	);
};

export default {
	title: "Textarea",
};
