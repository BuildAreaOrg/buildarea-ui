import { Flex } from "../Flex";
import { Switch } from "../Switch";

export default { title: "Switch" };

export const Default = () => {
	return (
		<Flex>
			<Switch />
			<Switch fill defaultChecked />
		</Flex>
	);
};

export const DefaultChecked = () => {
	return (
		<Flex>
			<Switch defaultChecked />
			<Switch fill defaultChecked />
		</Flex>
	);
};

export const Checked = () => {
	return (
		<Flex>
			{/* If you pass checked we can't be able to toggle */}
			<Switch checked />
			<Switch fill checked />
		</Flex>
	);
};

export const DisabledState = () => {
	return (
		<Flex>
			<Switch disabled />
			<Switch fill disabled />
			<Switch checked disabled />
			<Switch checked fill disabled />
		</Flex>
	);
};

export const AllSizes = () => {
	return (
		<Flex dir="column" css={{ gap: "40px" }}>
			<Flex align="center">
				<Switch size="sm" />
				<Switch size="md" />
				<Switch size="lg" />
				<Switch size="xl" />
			</Flex>
			<Flex align="center">
				<Switch size="sm" fill />
				<Switch size="md" fill />
				<Switch size="lg" fill />
				<Switch size="xl" fill />
			</Flex>

			<Flex align="center">
				<Switch size="sm" defaultChecked />
				<Switch size="md" defaultChecked />
				<Switch size="lg" defaultChecked />
				<Switch size="xl" defaultChecked />
			</Flex>

			<Flex align="center">
				<Switch size="sm" fill defaultChecked />
				<Switch size="md" fill defaultChecked />
				<Switch size="lg" fill defaultChecked />
				<Switch size="xl" fill defaultChecked />
			</Flex>
		</Flex>
	);
};
