import { Input, Box, FormHelperText, FormErrorText, Flex } from "../index";

export const Inputs = () => {
	return (
		<>
			<Flex align="start" css={{ gap: "$6" }}>
				<Input placeholder="Input default" />
				<Input placeholder="Input" size={1} />
			</Flex>
			<Flex align="start" css={{ gap: "$6", mt: "$6" }}>
				<Input placeholder="Success" state="success" />
				<Input placeholder="Warning" state="warning" />
				<Input placeholder="Error" state="error" />
				<Input placeholder="disabled" state="disabled" />
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

export const InputWithHelperText = () => {
	return (
		<Flex dir="column" css={{ gap: "$4" }}>
			<Box>
				<Input placeholder="Input" />
				<FormHelperText>This is helper text</FormHelperText>
			</Box>
			<Box>
				<Input placeholder="Input" />
				<FormErrorText>Input is required!</FormErrorText>
			</Box>
		</Flex>
	);
};

export default {
	title: "Input",
};
