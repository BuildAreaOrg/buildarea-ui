import { useState, useEffect } from "react";
import { Flex } from "../Flex";
import { ProgressBar } from "./ProgressBar";
export const ProgressDemo = () => {
	const [progress, setProgress] = useState(13);

	useEffect(() => {
		const timer = setTimeout(() => setProgress(66), 5000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<Flex dir="column" css={{ width: 300 }}>
			<ProgressBar value={progress} />
			<ProgressBar variant="blue" value={progress} />
			<ProgressBar variant="gradient" value={progress} />
		</Flex>
	);
};

export default {
	title: "ProgressBar",
};
