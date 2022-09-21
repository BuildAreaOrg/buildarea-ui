import { Button, Flex } from "../index";
import { EnvelopeIcon } from "../Icons";
import type { ComponentStory } from "@storybook/react";
import { createTheme } from "../stitches.config";

export default { title: "Button" };

const Template: ComponentStory<typeof Button> = (args: any) => {
	return <Button {...args}>Button</Button>;
};

export const Default = Template.bind({});

Default.args = { size: "md" };

const theme = createTheme({
	colors: {
		primary: "hotpink",
	},
});

export const OverwriteTheme = () => {
	return (
		<Flex className={theme} css={{ gap: "$4" }}>
			<Button>Button</Button>
			<Button outline>Button</Button>
		</Flex>
	);
};
export const AllSizesButton = () => {
	return (
		<>
			<Flex css={{ gap: 8 }}>
				<Button size="sm"> Button</Button>
				<Button size="md"> Button</Button>
				<Button size="lg"> Button</Button>
			</Flex>
			<Flex css={{ gap: 8, mt: "2rem" }}>
				<Button buttonType="secondary" size="sm">
					Button
				</Button>
				<Button buttonType="secondary" size="md">
					Button
				</Button>
				<Button buttonType="secondary" size="lg">
					Button
				</Button>
			</Flex>
		</>
	);
};

export const AllOutlineButton = () => {
	return (
		<Flex css={{ gap: 8 }}>
			<Button size="sm" outline>
				Button
			</Button>
			<Button size="md" outline>
				Button
			</Button>
			<Button size="lg" outline>
				Button
			</Button>
		</Flex>
	);
};

export const DisabledButton = () => {
	return (
		<Flex css={{ gap: "$4" }}>
			<Button disabled>Button</Button>
			<Button buttonType="secondary" disabled>
				Button
			</Button>
		</Flex>
	);
};

export const ButtonWithIcons = () => {
	return (
		<Flex css={{ gap: "$4" }}>
			<Button leftIcon={<EnvelopeIcon />}>Button</Button>
			<Button rightIcon={<EnvelopeIcon />}>Button</Button>
		</Flex>
	);
};

export const ButtonWithLoading = () => {
	return (
		<Flex css={{ gap: "$4" }}>
			<Button isLoading>Button</Button>
			<Button isLoading loadingText="Submiting">
				Button
			</Button>
			<Button isLoading outline>
				Button
			</Button>
			<Button isLoading loadingText="Submiting" outline>
				Button
			</Button>
		</Flex>
	);
};
