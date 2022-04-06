import { Button } from "./Button";
import { Box } from "@buildarea-ui/core";
import type { ComponentStory } from "@storybook/react";

export default { title: "Button" };

const Template: ComponentStory<typeof Button> = (args: any) => {
	return <Button {...args}>Button</Button>;
};

export const Default = Template.bind({});

Default.args = { size: "md" };

export const BlueButton = Template.bind({});
BlueButton.args = { css: { $$primary: "$colors$blue500" }, size: "md" };

export const AllSizesButton = () => {
	return (
		<Box css={{ display: "flex", gap: 8 }}>
			<Button size="sm">Button</Button>
			<Button size="md">Button</Button>
			<Button size="lg">Button</Button>
		</Box>
	);
};

export const AllOutlineButton = () => {
	return (
		<Box css={{ display: "flex", gap: 8 }}>
			<Button size="sm" outline>
				Button
			</Button>
			<Button size="md" outline>
				Button
			</Button>
			<Button size="lg" outline>
				Button
			</Button>
		</Box>
	);
};
