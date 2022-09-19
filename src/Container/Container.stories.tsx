import { Container, Flex } from "../index";

export default { title: "Container" };

export const Default = () => {
	return (
		<Flex dir="column" css={{ gap: "4rem", width: "100vw" }}>
			<Container css={{ bg: "$primary", p: "$4" }}>auto</Container>
			<Container maxW="sm" css={{ bg: "$primary", p: "$4" }}>
				xs
			</Container>
			<Container maxW="sm" css={{ bg: "$primary", p: "$4" }}>
				sm
			</Container>
			<Container maxW="md" css={{ bg: "$primary", p: "$4" }}>
				md
			</Container>
			<Container maxW="lg" css={{ bg: "$primary", p: "$4" }}>
				lg
			</Container>
			<Container maxW="xl" css={{ bg: "$primary", p: "$4" }}>
				xl
			</Container>
			<Container maxW="2xl" css={{ bg: "$primary", p: "$4" }}>
				2xl
			</Container>
		</Flex>
	);
};
