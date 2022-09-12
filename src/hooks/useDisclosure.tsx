import { useState } from "react";

export const useDisclosure = () => {
	const [state, setState] = useState(false);
	const onClose = () => setState(false);
	const onOpen = () => setState(true);
	const onToggle = () => setState((prevState) => !prevState);
	return { isOpen: state, onClose, onOpen, onToggle };
};
