import { Flex } from "../Flex";
import { Avatar } from "../Avatar";
import { AvatarGroup } from "./AvatarGroup";
import { IMAGES } from "../utils/constant";

export default { title: "AvatarGroup" };

export const Default = () => {
	return (
		<AvatarGroup>
			<Avatar name={IMAGES[0].name} src={IMAGES[0].src} />
			<Avatar name={IMAGES[1].name} src={IMAGES[1].src} />
			<Avatar name={IMAGES[2].name} src={IMAGES[2].src} />
			<Avatar name={IMAGES[3].name} src={IMAGES[3].src} />
		</AvatarGroup>
	);
};

export const AllSizesAvatarGroup = () => {
	return (
		<Flex dir="column">
			<AvatarGroup size="sm">
				<Avatar name={IMAGES[0].name} src={IMAGES[0].src} />
				<Avatar name={IMAGES[1].name} src={IMAGES[1].src} />
				<Avatar name={IMAGES[2].name} src={IMAGES[2].src} />
				<Avatar name={IMAGES[3].name} src={IMAGES[3].src} />
			</AvatarGroup>

			<AvatarGroup size="md">
				<Avatar name={IMAGES[0].name} src={IMAGES[0].src} />
				<Avatar name={IMAGES[1].name} src={IMAGES[1].src} />
				<Avatar name={IMAGES[2].name} src={IMAGES[2].src} />
				<Avatar name={IMAGES[3].name} src={IMAGES[3].src} />
			</AvatarGroup>

			<AvatarGroup size="lg">
				<Avatar name={IMAGES[0].name} src={IMAGES[0].src} />
				<Avatar name={IMAGES[1].name} src={IMAGES[1].src} />
				<Avatar name={IMAGES[2].name} src={IMAGES[2].src} />
				<Avatar name={IMAGES[3].name} src={IMAGES[3].src} />
			</AvatarGroup>

			<AvatarGroup size="xl">
				<Avatar name={IMAGES[0].name} src={IMAGES[0].src} />
				<Avatar name={IMAGES[1].name} src={IMAGES[1].src} />
				<Avatar name={IMAGES[2].name} src={IMAGES[2].src} />
				<Avatar name={IMAGES[3].name} src={IMAGES[3].src} />
			</AvatarGroup>
		</Flex>
	);
};

export const AvatarWithMaxProp = () => {
	return (
		<AvatarGroup max={2}>
			<Avatar name={IMAGES[0].name} src={IMAGES[0].src} />
			<Avatar name={IMAGES[1].name} src={IMAGES[1].src} />
			<Avatar name={IMAGES[2].name} src={IMAGES[2].src} />
			<Avatar name={IMAGES[3].name} src={IMAGES[3].src} />
		</AvatarGroup>
	);
};
