import { Button } from "./Button";
import { Box } from "../Box";
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
		primary: "$colors$neutral800",
	},
});

export const OverwriteTheme = () => {
	return (
		<Box className={theme} css={{ display: "flex", gap: "$4" }}>
			<Button>Button</Button>
			<Button outline>Button</Button>
		</Box>
	);
};
export const AllSizesButton = () => {
	return (
		<>
			<Box css={{ display: "flex", gap: 8 }}>
				<Button size="sm">Small Button</Button>
				<Button size="md">Medium Button</Button>
				<Button size="lg">Large Button</Button>
			</Box>
			<Box css={{ display: "flex", gap: 8, mt: "2rem" }}>
				<Button type="secondary" size="sm">
					Button
				</Button>
				<Button type="secondary" size="md">
					Button
				</Button>
				<Button type="secondary" size="lg">
					Button
				</Button>
			</Box>
		</>
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

export const DisabledButton = () => {
	return <Button disabled>Button</Button>;
};
