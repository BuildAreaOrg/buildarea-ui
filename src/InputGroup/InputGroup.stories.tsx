import {
	Flex,
	Input,
	InputGroup,
	InputLeftAddon,
	InputLeftElement,
	InputRightAddon,
	InputRightElement,
} from "../index";
import { PhoneIcon, EnvelopeIcon } from "../Icons";

export const DeafultInputGroup = () => {
	return (
		<Flex dir="column">
			<InputGroup>
				<InputLeftElement>
					<PhoneIcon />
				</InputLeftElement>
				<Input type="text" placeholder="Phone Number" css={{ padding: "2rem" }} />
			</InputGroup>

			<InputGroup>
				<Input type="email" placeholder="Email" />
				<InputRightElement>
					<EnvelopeIcon />
				</InputRightElement>
			</InputGroup>

			<InputGroup>
				<InputLeftAddon>https://</InputLeftAddon>
				<Input type="password" placeholder="website" />
			</InputGroup>

			<InputGroup css={{ color: "green" }}>
				<Input type="password" placeholder="website" />
				<InputRightAddon>.com</InputRightAddon>
			</InputGroup>

			<InputGroup>
				<InputLeftAddon>https://</InputLeftAddon>
				<Input type="password" placeholder="website" />
				<InputRightAddon>.com</InputRightAddon>
			</InputGroup>
		</Flex>
	);
};
export default {
	title: "InputGroup",
};
