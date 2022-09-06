import {
	InputGroup,
	InputLeftAddon,
	InputLeftElement,
	InputRightAddon,
	InputRightElement,
} from "./InputGroup";
import { PhoneIcon, EnvelopeIcon } from "../Icons";
import { Flex, Input } from "../index";

export const DeafultInputGroup = () => {
	return (
		<Flex dir="column">
			<InputGroup>
				<InputLeftElement css={{ color: "#ddd" }}>
					<PhoneIcon />
				</InputLeftElement>
				<Input type="text" placeholder="Phone Number" />
			</InputGroup>

			<InputGroup>
				<Input type="email" placeholder="Email" />
				<InputRightElement css={{ color: "#fafafa" }}>
					<EnvelopeIcon />
				</InputRightElement>
			</InputGroup>

			<InputGroup>
				<InputLeftAddon css={{ color: "#fafafa" }}>https://</InputLeftAddon>
				<Input type="password" placeholder="website" />
			</InputGroup>

			<InputGroup css={{ color: "green" }}>
				<Input type="password" placeholder="website" />
				<InputRightAddon css={{ color: "#fafafa" }}>.com</InputRightAddon>
			</InputGroup>

			<InputGroup>
				<InputLeftAddon css={{ color: "#fafafa" }}>https://</InputLeftAddon>
				<Input type="password" placeholder="website" />
				<InputRightAddon css={{ color: "#fafafa" }}>.com</InputRightAddon>
			</InputGroup>
		</Flex>
	);
};
export default {
	title: "InputGroup",
};
