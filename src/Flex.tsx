import { Box, BoxProps, packSx, Sx } from "@mantine/core";
import * as React from "react";
import type { Property } from "csstype";

interface Props extends BoxProps {
	justify?: Property.JustifyContent;
	align?: Property.AlignItems;
	dir?: "row" | "column";
	sx?: Sx | (Sx | undefined)[];
}
export function Flex({
	children,
	justify = "start",
	align = "start",
	dir = "row",
	sx,
	...props
}: Props) {
	return (
		<Box
			sx={[
				{
					display: "flex",
					flexDirection: dir,
					justifyContent: justify,
					alignItems: align,
				},
				...packSx(sx),
			]}
			{...props}
		>
			{children}
		</Box>
	);
}
