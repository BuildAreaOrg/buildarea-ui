import { Flex, Link } from "../index";

export const Links = () => (
	<Flex dir="column">
		<Link href="#">Primary link</Link>
		<Link href="#" secondary>
			Secondary link
		</Link>
	</Flex>
);

export default {
	title: "Link",
};
