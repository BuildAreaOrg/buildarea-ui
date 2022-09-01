import { Flex } from "../Flex";
import { Avatar } from "../Avatar";
import { IMAGES } from "../utils/constant";

export default { title: "Avatar" };

const image = IMAGES[0];

export const Default = () => {
	return (
		<Flex>
			<Avatar />
			<Avatar name={image.name} src={image.src} />
		</Flex>
	);
};

export const AllSizesAvatar = () => {
	return (
		<Flex>
			<Avatar size="sm" name={image.name} src={image.src} />
			<Avatar name={image.name} src={image.src} />

			<Avatar size="lg" name={image.name} src={image.src} />

			<Avatar size="xl" name={image.name} src={image.src} />
		</Flex>
	);
};

export const AvatarOnErrorProp = () => {
	//If there is no src or failed to load src we can detet by onError and do some stuff.
	return <Avatar onError={() => alert("Faild to load image")} />;
};
