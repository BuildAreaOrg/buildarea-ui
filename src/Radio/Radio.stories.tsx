import { Text } from "../Text";
import { Flex } from "../Flex";
import { RadioGroup, Radio } from "./Radio";

export default { title: "Radio" };

export const Default = () => {
	return (
		<RadioGroup>
			<Radio value="1" />
		</RadioGroup>
	);
};

export const DefaultWithLabel = () => {
	return (
		<RadioGroup>
			<Radio value="1" id="radio">
				Radio
			</Radio>
		</RadioGroup>
	);
};

export const DefaultValue = () => {
	return (
		<RadioGroup defaultValue="1" css={{ gap: "1rem" }}>
			<Radio value="1" id="radio1">
				Radio-1
			</Radio>
			<Radio value="2" id="radio2">
				Radio-2
			</Radio>
		</RadioGroup>
	);
};

export const Disabled = () => {
	return (
		<RadioGroup defaultValue="1" css={{ gap: "1rem" }}>
			<Radio value="1" id="radio1" disabled>
				Radio
			</Radio>
			<Radio value="2" id="radio2" disabled>
				Radio
			</Radio>
		</RadioGroup>
	);
};

export const DefaultSelected = () => {
	return (
		<RadioGroup value="1">
			<Radio value="1" />
		</RadioGroup>
	);
};

export const DefaultSelectedWithLabel = () => {
	return (
		<RadioGroup value="1">
			<Radio value="1">Radio</Radio>
		</RadioGroup>
	);
};

export const AllSizes = () => {
	return (
		<Flex dir="column">
			<Flex align="center" css={{ gap: "24px" }}>
				<Text>Default: </Text>
				<RadioGroup>
					<Radio value="1" size="sm" />
				</RadioGroup>

				<RadioGroup>
					<Radio value="1" size="md" />
				</RadioGroup>

				<RadioGroup>
					<Radio value="1" size="lg" />
				</RadioGroup>
				<RadioGroup>
					<Radio value="1" size="xl" />
				</RadioGroup>
			</Flex>

			<Flex align="center" css={{ gap: "24px" }}>
				<Text>Default :</Text>
				<RadioGroup>
					<Radio value="1" id="radio-1" size="sm">
						Radio
					</Radio>
				</RadioGroup>

				<RadioGroup>
					<Radio value="1" id="radio-2" size="md">
						Radio
					</Radio>
				</RadioGroup>

				<RadioGroup>
					<Radio value="1" id="radio-3" size="lg">
						Radio
					</Radio>
				</RadioGroup>

				<RadioGroup>
					<Radio value="1" id="radio-4" size="xl">
						Radio
					</Radio>
				</RadioGroup>
			</Flex>
			<Flex align="center" css={{ gap: "24px" }}>
				<Text>Selected : </Text>
				<RadioGroup value="1">
					<Radio value="1" size="sm" />
				</RadioGroup>

				<RadioGroup value="1">
					<Radio value="1" size="md" />
				</RadioGroup>

				<RadioGroup value="1">
					<Radio value="1" size="lg" />
				</RadioGroup>
				<RadioGroup value="1">
					<Radio value="1" size="xl" />
				</RadioGroup>
			</Flex>
			<Flex align="center" css={{ gap: "24px" }}>
				<Text>Selected :</Text>
				<RadioGroup value="1">
					<Radio value="1" size="sm">
						Radio
					</Radio>
				</RadioGroup>

				<RadioGroup value="1">
					<Radio value="1" size="md">
						Radio
					</Radio>
				</RadioGroup>

				<RadioGroup value="1">
					<Radio value="1" size="lg">
						Radio
					</Radio>
				</RadioGroup>

				<RadioGroup value="1">
					<Radio value="1" size="xl">
						Radio
					</Radio>
				</RadioGroup>
			</Flex>
		</Flex>
	);
};

export const onValueChangeProp = () => {
	//whenever you select radio button onValueChange will be trigger.
	return (
		<RadioGroup onValueChange={(value: string) => alert(`current select radio value is ${value}`)}>
			<Radio value="1" />
			<Radio value="2" />
		</RadioGroup>
	);
};
