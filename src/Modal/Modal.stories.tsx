import { styled } from "../stitches.config";
import {
	Modal,
	ModalTrigger,
	ModalDescription,
	ModalContent,
	ModalTitle,
	ModalClose,
} from "./Modal";
import { Button } from "../Button";
import { Flex } from "../Flex";
import { css } from "@stitches/react";

const IconButton = styled("button", {
	all: "unset",
	fontFamily: "inherit",
	borderRadius: "100%",
	height: 25,
	width: 25,
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	color: "$violet900",
	position: "absolute",
	top: 10,
	right: 10,

	"&:hover": { backgroundColor: "$slate500" },
	"&:focus": { boxShadow: `0 0 0 2px $violet700` },
});

const Fieldset = styled("fieldset", {
	all: "unset",
	display: "flex",
	gap: 20,
	alignItems: "center",
	marginBottom: 15,
});

const Label = styled("label", {
	fontSize: 15,
	color: "$slate800",
	width: 90,
	textAlign: "right",
});

const Input = styled("input", {
	all: "unset",
	width: "100%",
	flex: "1",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: 4,
	padding: "0 10px",
	fontSize: 15,
	lineHeight: 1,
	color: "$violet900",
	boxShadow: `0 0 0 1px $colors$violet200`,
	height: 35,

	"&:focus": { boxShadow: `0 0 0 2px $colors$violet300` },
});

export const Default = () => (
	<Modal>
		<ModalTrigger asChild>
			<Button key="button">Edit profile</Button>
		</ModalTrigger>
		<ModalContent>
			<ModalTitle>Edit profile</ModalTitle>
			<ModalDescription>
				Make changes to your profile here. Click save when you&amp;re done.
			</ModalDescription>
			<Fieldset>
				<Label htmlFor="name">Name</Label>
				<Input id="name" defaultValue="Buildarea UI" />
			</Fieldset>
			<Fieldset>
				<Label htmlFor="username">Username</Label>
				<Input id="username" defaultValue="@buildarea-ui" />
			</Fieldset>
			<Flex justify="end" css={{ marginTop: 25 }}>
				<ModalClose asChild>
					<Button
						aria-label="Close"
						outline
						css={{ bg: "$green200", color: "$green700", fontWeight: 600, borderColor: "$green200" }}
					>
						Save changes
					</Button>
				</ModalClose>
			</Flex>
			<ModalClose asChild>
				<IconButton>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className={css({ boxSize: "$6" })()}
						fill="none"
						viewBox="0 0 24 24"
						stroke="black"
						strokeWidth={2}
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</IconButton>
			</ModalClose>
		</ModalContent>
	</Modal>
);

export default { title: "ModalDemo" };
