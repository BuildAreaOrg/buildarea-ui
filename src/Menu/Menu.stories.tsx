import { styled } from "../stitches.config";
import { Box } from "../Box";
import {
	Menu,
	MenuTrigger,
	MenuItem,
	MenuContent,
	MenuTriggerItem,
	MenuSeparator,
	MenuCheckboxItem,
	MenuItemIndicator,
	MenuLabel,
	MenuRadioGroup,
	MenuRadioItem,
	MenuArrow,
} from "./Menu";
import {
	HamburgerMenuIcon,
	DotFilledIcon,
	CheckIcon,
	ChevronRightIcon,
} from "@radix-ui/react-icons";

const RightSlot = styled("div", {
	marginLeft: "auto",
	paddingLeft: 20,
	color: "$slate900",
	":focus > &": { color: "white" },
	"[data-disabled] &": { color: "$slate700" },
});

const IconButton = styled("button", {
	all: "unset",
	fontFamily: "inherit",
	borderRadius: "100%",
	height: 35,
	width: 35,
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	color: "$violet900",
	backgroundColor: "white",
	boxShadow: `0 2px 10px $colors$gray700`,
	"&:hover": { backgroundColor: "$violet300" },
	"&:focus": { boxShadow: `0 0 0 2px black` },
});

export const MenuDemo = () => {
	return (
		<Box>
			<Menu>
				<MenuTrigger asChild>
					<IconButton aria-label="Customise options">
						<HamburgerMenuIcon />
					</IconButton>
				</MenuTrigger>

				<MenuContent sideOffset={5}>
					<MenuItem>
						New Tab <RightSlot>⌘+T</RightSlot>
					</MenuItem>
					<MenuItem>
						New Window <RightSlot>⌘+N</RightSlot>
					</MenuItem>
					<MenuItem disabled>
						New Private Window <RightSlot>⇧+⌘+N</RightSlot>
					</MenuItem>
					<Menu>
						<MenuTriggerItem>
							More Tools
							<RightSlot>
								<ChevronRightIcon />
							</RightSlot>
						</MenuTriggerItem>
						<MenuContent sideOffset={2} alignOffset={-5}>
							<MenuItem>
								Save Page As… <RightSlot>⌘+S</RightSlot>
							</MenuItem>
							<MenuItem>Create Shortcut…</MenuItem>
							<MenuItem>Name Window…</MenuItem>
							<MenuSeparator />
							<MenuItem>Developer Tools</MenuItem>
						</MenuContent>
					</Menu>
					<MenuSeparator />
					<MenuCheckboxItem checked>
						<MenuItemIndicator>
							<CheckIcon />
						</MenuItemIndicator>
						Show Bookmarks <RightSlot>⌘+B</RightSlot>
					</MenuCheckboxItem>
					<MenuCheckboxItem>
						<MenuItemIndicator>
							<CheckIcon />
						</MenuItemIndicator>
						Show Full URLs
					</MenuCheckboxItem>
					<MenuSeparator />
					<MenuLabel>People</MenuLabel>
					<MenuRadioGroup>
						<MenuRadioItem value="pedro">
							<MenuItemIndicator>
								<DotFilledIcon />
							</MenuItemIndicator>
							Pedro Duarte
						</MenuRadioItem>
						<MenuRadioItem value="colm">
							<MenuItemIndicator>
								<DotFilledIcon />
							</MenuItemIndicator>
							Colm Tuite
						</MenuRadioItem>
					</MenuRadioGroup>
					<MenuArrow offset={12} />
				</MenuContent>
			</Menu>
		</Box>
	);
};

export default {
	title: "Menu",
};
