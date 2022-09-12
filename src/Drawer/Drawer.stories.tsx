import {
	Box,
	Button,
	Drawer,
	DrawerContent,
	DrawerOverlay,
	DrawerHeader,
	DrawerFooter,
	DrawerBody,
	DrawerCloseBtn,
	useDisclosure,
} from "../index";

export default { title: "Drawer" };

export const Default = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<Box>
			<Drawer position="left" isOpen={isOpen} onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseBtn onClick={onClose} />
					<DrawerHeader>Header</DrawerHeader>
					<DrawerBody>Content for body</DrawerBody>
					<DrawerFooter>
						<Button>Button</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
			<Button onClick={onOpen}>Open</Button>
		</Box>
	);
};
