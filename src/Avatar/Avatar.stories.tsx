import { Flex } from "../Flex";
import { Avatar } from "../Avatar";

export default { title: "Avatar" };

export const Default = () => {
	return (
		<Flex>
			<Avatar />
			<Avatar
				name="Sara"
				src="https://media.istockphoto.com/photos/smiling-young-woman-beauty-close-up-portrait-picture-id1280113805?k=20&m=1280113805&s=612x612&w=0&h=4axzFdjwxVoxSCYGDZGgx0ipyhmOd7N4_OEyokFcZiU="
			/>
		</Flex>
	);
};

export const AllSizesAvatar = () => {
	return (
		<Flex>
			<Avatar
				size="sm"
				name="Sara"
				src="https://media.istockphoto.com/photos/smiling-young-woman-beauty-close-up-portrait-picture-id1280113805?k=20&m=1280113805&s=612x612&w=0&h=4axzFdjwxVoxSCYGDZGgx0ipyhmOd7N4_OEyokFcZiU="
			/>
			<Avatar
				name="Sara"
				src="https://media.istockphoto.com/photos/smiling-young-woman-beauty-close-up-portrait-picture-id1280113805?k=20&m=1280113805&s=612x612&w=0&h=4axzFdjwxVoxSCYGDZGgx0ipyhmOd7N4_OEyokFcZiU="
			/>

			<Avatar
				size="lg"
				name="Sara"
				src="https://media.istockphoto.com/photos/smiling-young-woman-beauty-close-up-portrait-picture-id1280113805?k=20&m=1280113805&s=612x612&w=0&h=4axzFdjwxVoxSCYGDZGgx0ipyhmOd7N4_OEyokFcZiU="
			/>

			<Avatar
				size="xl"
				name="Sara"
				src="https://media.istockphoto.com/photos/smiling-young-woman-beauty-close-up-portrait-picture-id1280113805?k=20&m=1280113805&s=612x612&w=0&h=4axzFdjwxVoxSCYGDZGgx0ipyhmOd7N4_OEyokFcZiU="
			/>
		</Flex>
	);
};

export const AvatarOnErrorProp = () => {
	//If there is no src or failed to load src we can detet by onError and do some stuff.
	return <Avatar onError={() => alert("Faild to load image")} />;
};
