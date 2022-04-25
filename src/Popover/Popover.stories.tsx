import { Cross2Icon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import React from "react";
import { Input, Label } from "../index";
import { styled } from "../stitches.config";
import { Popover, PopoverArrow, PopoverClose, PopoverContent, PopoverTrigger } from "./Popover";
const Flex = styled("div", { display: "flex" });

const IconButton = styled("button", {
	all: "unset",
	fontFamily: "inherit",
	borderRadius: "100%",
	height: 35,
	width: 35,
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	color: "$violet700",
	backgroundColor: "white",
	boxShadow: `0 2px 10px $gray700`,
	"&:hover": { backgroundColor: "$vio400" },
	"&:focus": { boxShadow: `0 0 0 2px black` },
});
const Fieldset = styled("fieldset", {
	all: "unset",
	display: "flex",
	gap: 20,
	alignItems: "center",
});

const Text = styled("div", {
	margin: 0,
	color: "$slate900",
	fontSize: 15,
	lineHeight: "19px",
	variants: {
		faded: {
			true: { color: "$slate800" },
		},
		bold: {
			true: { fontWeight: 500 },
		},
	},
});

export const PopoverDemo = () => (
	<Popover>
		<PopoverTrigger asChild>
			<IconButton aria-label="Update dimensions">
				<MixerHorizontalIcon />
			</IconButton>
		</PopoverTrigger>
		<PopoverContent sideOffset={5}>
			<Flex css={{ flexDirection: "column", gap: 10 }}>
				<Text bold css={{ marginBottom: 10 }}>
					Dimensions
				</Text>
				<Fieldset>
					<Label htmlFor="width">Width</Label>
					<Input id="width" defaultValue="100%" />
				</Fieldset>
				<Fieldset>
					<Label htmlFor="maxWidth">Max. width</Label>
					<Input id="maxWidth" defaultValue="300px" />
				</Fieldset>
				<Fieldset>
					<Label htmlFor="height">Height</Label>
					<Input id="height" defaultValue="25px" />
				</Fieldset>
				<Fieldset>
					<Label htmlFor="maxHeight">Max. height</Label>
					<Input id="maxHeight" defaultValue="none" />
				</Fieldset>
			</Flex>
			<PopoverArrow />
			<PopoverClose aria-label="Close">
				<Cross2Icon />
			</PopoverClose>
		</PopoverContent>
	</Popover>
);

export default {
	title: "Popover",
};
