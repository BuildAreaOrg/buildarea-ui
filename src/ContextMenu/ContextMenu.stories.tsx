import React from "react";
import { Box, Input } from "../index";
import {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuItem,
	ContextMenuContent,
	ContextMenuSeparator,
	ContextMenuCheckboxItem,
	ContextMenuItemIndicator,
	ContextMenuLabel,
	ContextMenuTriggerItem,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
} from "./ContextMenu";
import { styled } from "../stitches.config";
import { DotFilledIcon, CheckIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const Instruction = styled("div", {
	border: `2px red dashed`,
	color: "red",
	borderRadius: 4,
	fontSize: 15,
	userSelect: "none",
	padding: "45px 0",
	width: 300,
	textAlign: "center",
});

const RightSlot = styled("div", {
	marginLeft: "auto",
	paddingLeft: 20,
	color: "$gray800",
	":focus > &": { color: "white" },
	"[data-disabled] &": { color: "$gray600" },
});
export default { title: "Context Menu" };

export const Default = () => {
	const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
	const [urlsChecked, setUrlsChecked] = React.useState(false);
	const [person, setPerson] = React.useState("pedro");

	return (
		<Box>
			<ContextMenu>
				<ContextMenuTrigger>
					<Instruction>Right click here.</Instruction>
				</ContextMenuTrigger>
				<ContextMenuContent sideOffset={5}>
					<Input type="text" />
					<ContextMenuItem>
						Back <RightSlot>⌘+[</RightSlot>
					</ContextMenuItem>
					<ContextMenuItem disabled>
						Foward <RightSlot>⌘+]</RightSlot>
					</ContextMenuItem>
					<ContextMenuItem>
						Reload <RightSlot>⌘+R</RightSlot>
					</ContextMenuItem>
					<ContextMenu>
						<ContextMenuTriggerItem>
							More Tools
							<RightSlot>
								<ChevronRightIcon />
							</RightSlot>
						</ContextMenuTriggerItem>
						<ContextMenuContent sideOffset={2} alignOffset={-5}>
							<ContextMenuItem>
								Save Page As… <RightSlot>⌘+S</RightSlot>
							</ContextMenuItem>
							<ContextMenuItem>Create Shortcut…</ContextMenuItem>
							<ContextMenuItem>Name Window…</ContextMenuItem>
							<ContextMenuSeparator />
							<ContextMenuItem>Developer Tools</ContextMenuItem>
						</ContextMenuContent>
					</ContextMenu>
					<ContextMenuSeparator />
					<ContextMenuCheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
						<ContextMenuItemIndicator>
							<CheckIcon />
						</ContextMenuItemIndicator>
						Show Bookmarks <RightSlot>⌘+B</RightSlot>
					</ContextMenuCheckboxItem>
					<ContextMenuCheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
						<ContextMenuItemIndicator>
							<CheckIcon />
						</ContextMenuItemIndicator>
						Show Full URLs
					</ContextMenuCheckboxItem>
					<ContextMenuSeparator />
					<ContextMenuLabel>People</ContextMenuLabel>
					<ContextMenuRadioGroup value={person} onValueChange={setPerson}>
						<ContextMenuRadioItem value="pedro">
							<ContextMenuItemIndicator>
								<DotFilledIcon />
							</ContextMenuItemIndicator>
							Pedro Duarte
						</ContextMenuRadioItem>
						<ContextMenuRadioItem value="colm">
							<ContextMenuItemIndicator>
								<DotFilledIcon />
							</ContextMenuItemIndicator>
							Colm Tuite
						</ContextMenuRadioItem>
					</ContextMenuRadioGroup>
				</ContextMenuContent>
			</ContextMenu>
		</Box>
	);
};
