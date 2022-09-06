import { Box } from "../Box";
import { Badge } from "./Badge";

export default { title: "Badge" };

export const DefaultBadge = () => {
	return (
		<Box css={{ display: "flex", gap: "$4" }}>
			<Badge>default</Badge>
			<Badge outline>default</Badge>
		</Box>
	);
};

export const CustomBadge = () => {
	return (
		<Box css={{ display: "flex", gap: "$4", flexDirection: "column" }}>
			<Box css={{ display: "flex", gap: "$4" }}>
				<Badge css={{ $$primary: "lightgreen" }}>success</Badge>
				<Badge css={{ $$primary: "lightgreen" }} outline rounded>
					success
				</Badge>
			</Box>
			<Box css={{ display: "flex", gap: "$4" }}>
				<Badge css={{ $$primary: "$colors$warning100" }}>Failed</Badge>
				<Badge css={{ $$primary: "$colors$warning100" }} outline rounded>
					Failed
				</Badge>
			</Box>
		</Box>
	);
};

export const DifferentSizes = () => {
	return (
		<Box css={{ display: "flex", gap: "$4", flexDirection: "column" }}>
			<Box css={{ display: "flex", gap: "$4", alignItems: "center" }}>
				<Badge css={{ $$primary: "lightgreen", fontSize: "10px" }}> Size 10px</Badge>
				<Badge css={{ $$primary: "lightgreen", fontSize: "10px" }} outline rounded>
					Size 10px
				</Badge>
			</Box>

			<Box css={{ display: "flex", gap: "$4", alignItems: "center" }}>
				<Badge css={{ $$primary: "lightgreen", fontSize: "12px" }}> Size 12px</Badge>
				<Badge css={{ $$primary: "lightgreen", fontSize: "12px" }} outline rounded>
					Size 12px
				</Badge>
			</Box>

			<Box css={{ display: "flex", gap: "$4", alignItems: "center" }}>
				<Badge css={{ $$primary: "lightgreen" }}>Default Size</Badge>
				<Badge css={{ $$primary: "lightgreen" }} outline rounded>
					Default Size
				</Badge>
			</Box>
		</Box>
	);
};
