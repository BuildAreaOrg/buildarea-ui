import { Flex, Button } from "../index";
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogCancel,
	AlertDialogAction,
	AlertDialogTitle,
} from "./AlertDialog";

export const DefaultAlertDialog = () => (
	<AlertDialog>
		<AlertDialogTrigger asChild>
			<Button>Delete account</Button>
		</AlertDialogTrigger>
		<AlertDialogContent>
			<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
			<AlertDialogDescription>
				This action cannot be undone. This will permanently delete your account and remove your data
				from our servers.
			</AlertDialogDescription>
			<Flex css={{ justifyContent: "flex-end" }}>
				<AlertDialogCancel asChild>
					<Button css={{ marginRight: 25 }}>Cancel</Button>
				</AlertDialogCancel>
				<AlertDialogAction asChild>
					<Button css={{ $$primary: "red" }}>Yes, delete account</Button>
				</AlertDialogAction>
			</Flex>
		</AlertDialogContent>
	</AlertDialog>
);

export default { title: "AlertDialog" };
