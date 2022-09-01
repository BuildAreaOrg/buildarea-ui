import { Flex } from "../Flex";
import { Avatar } from "../Avatar";
import { AvatarGroup } from "./AvatarGroup";

export default { title: "AvatarGroup" };

export const Default = () => {
	return (
		<AvatarGroup>
			<Avatar
				name="John"
				src="https://t4.ftcdn.net/jpg/02/86/91/07/360_F_286910763_zOX9bUhDQPUvk45vWOaNsGAvDf18oSod.jpg"
			/>
			<Avatar
				name="Alex"
				src="https://t4.ftcdn.net/jpg/02/13/79/33/360_F_213793387_Jy9VGwWWJD2Meogv70pj0gDe3hUWLpuU.jpg"
			/>
			<Avatar
				name="Sara"
				src="https://media.istockphoto.com/photos/smiling-young-woman-beauty-close-up-portrait-picture-id1280113805?k=20&m=1280113805&s=612x612&w=0&h=4axzFdjwxVoxSCYGDZGgx0ipyhmOd7N4_OEyokFcZiU="
			/>
			<Avatar
				name="Miller"
				src="https://bcnphotographer.com/wp-content/uploads/2019/10/WCLC3-1328.jpg"
			/>
		</AvatarGroup>
	);
};

export const AllSizesAvatarGroup = () => {
	return (
		<Flex dir="column">
			<AvatarGroup size="sm">
				<Avatar
					name="John"
					src="https://t4.ftcdn.net/jpg/02/86/91/07/360_F_286910763_zOX9bUhDQPUvk45vWOaNsGAvDf18oSod.jpg"
				/>
				<Avatar
					name="Alex"
					src="https://t4.ftcdn.net/jpg/02/13/79/33/360_F_213793387_Jy9VGwWWJD2Meogv70pj0gDe3hUWLpuU.jpg"
				/>
				<Avatar
					name="Sara"
					src="https://media.istockphoto.com/photos/smiling-young-woman-beauty-close-up-portrait-picture-id1280113805?k=20&m=1280113805&s=612x612&w=0&h=4axzFdjwxVoxSCYGDZGgx0ipyhmOd7N4_OEyokFcZiU="
				/>
				<Avatar
					name="Miller"
					src="https://bcnphotographer.com/wp-content/uploads/2019/10/WCLC3-1328.jpg"
				/>
			</AvatarGroup>

			<AvatarGroup size="md">
				<Avatar
					name="John"
					src="https://t4.ftcdn.net/jpg/02/86/91/07/360_F_286910763_zOX9bUhDQPUvk45vWOaNsGAvDf18oSod.jpg"
				/>
				<Avatar
					name="Alex"
					src="https://t4.ftcdn.net/jpg/02/13/79/33/360_F_213793387_Jy9VGwWWJD2Meogv70pj0gDe3hUWLpuU.jpg"
				/>
				<Avatar
					name="Sara"
					src="https://media.istockphoto.com/photos/smiling-young-woman-beauty-close-up-portrait-picture-id1280113805?k=20&m=1280113805&s=612x612&w=0&h=4axzFdjwxVoxSCYGDZGgx0ipyhmOd7N4_OEyokFcZiU="
				/>
				<Avatar
					name="Miller"
					src="https://bcnphotographer.com/wp-content/uploads/2019/10/WCLC3-1328.jpg"
				/>
			</AvatarGroup>

			<AvatarGroup size="lg">
				<Avatar
					name="John"
					src="https://t4.ftcdn.net/jpg/02/86/91/07/360_F_286910763_zOX9bUhDQPUvk45vWOaNsGAvDf18oSod.jpg"
				/>
				<Avatar
					name="Alex"
					src="https://t4.ftcdn.net/jpg/02/13/79/33/360_F_213793387_Jy9VGwWWJD2Meogv70pj0gDe3hUWLpuU.jpg"
				/>
				<Avatar
					name="Sara"
					src="https://media.istockphoto.com/photos/smiling-young-woman-beauty-close-up-portrait-picture-id1280113805?k=20&m=1280113805&s=612x612&w=0&h=4axzFdjwxVoxSCYGDZGgx0ipyhmOd7N4_OEyokFcZiU="
				/>
				<Avatar
					name="Miller"
					src="https://bcnphotographer.com/wp-content/uploads/2019/10/WCLC3-1328.jpg"
				/>
			</AvatarGroup>

			<AvatarGroup size="xl">
				<Avatar
					name="John"
					src="https://t4.ftcdn.net/jpg/02/86/91/07/360_F_286910763_zOX9bUhDQPUvk45vWOaNsGAvDf18oSod.jpg"
				/>
				<Avatar
					name="Alex"
					src="https://t4.ftcdn.net/jpg/02/13/79/33/360_F_213793387_Jy9VGwWWJD2Meogv70pj0gDe3hUWLpuU.jpg"
				/>
				<Avatar
					name="Sara"
					src="https://media.istockphoto.com/photos/smiling-young-woman-beauty-close-up-portrait-picture-id1280113805?k=20&m=1280113805&s=612x612&w=0&h=4axzFdjwxVoxSCYGDZGgx0ipyhmOd7N4_OEyokFcZiU="
				/>
				<Avatar
					name="Miller"
					src="https://bcnphotographer.com/wp-content/uploads/2019/10/WCLC3-1328.jpg"
				/>
			</AvatarGroup>
		</Flex>
	);
};

export const AvatarWithMaxProp = () => {
	return (
		<AvatarGroup max={2}>
			<Avatar
				name="John"
				src="https://t4.ftcdn.net/jpg/02/86/91/07/360_F_286910763_zOX9bUhDQPUvk45vWOaNsGAvDf18oSod.jpg"
			/>
			<Avatar
				name="Alex"
				src="https://t4.ftcdn.net/jpg/02/13/79/33/360_F_213793387_Jy9VGwWWJD2Meogv70pj0gDe3hUWLpuU.jpg"
			/>
			<Avatar
				name="Sara"
				src="https://media.istockphoto.com/photos/smiling-young-woman-beauty-close-up-portrait-picture-id1280113805?k=20&m=1280113805&s=612x612&w=0&h=4axzFdjwxVoxSCYGDZGgx0ipyhmOd7N4_OEyokFcZiU="
			/>
			<Avatar
				name="Miller"
				src="https://bcnphotographer.com/wp-content/uploads/2019/10/WCLC3-1328.jpg"
			/>
		</AvatarGroup>
	);
};
