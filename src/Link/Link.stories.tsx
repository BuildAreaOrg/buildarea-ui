import { Flex } from "../index";
import { Link } from "./Link";

export const LinkDemo = () => (
	<Flex>
		<Link href="#" variant="blue">
			Variant blue
		</Link>
		<Link variant="contrast">Variant contrast</Link>
		<Link variant="subtle">Variant subtle</Link>
	</Flex>
);
export default {
	title: "Link",
};
