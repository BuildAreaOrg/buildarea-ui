import { styled } from "@stitches/react";
import * as LabelPrimitive from "@radix-ui/react-label";

const StyledLabel = styled(LabelPrimitive.Root, {
	fontSize: "$base",
	fontWeight: 600,
	userSelect: "none",
});

// Exports
export const Label = StyledLabel;
