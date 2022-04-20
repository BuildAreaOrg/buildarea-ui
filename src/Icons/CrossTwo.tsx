import { forwardRef } from "react";
import type { IconProps } from "./icontype";

export const CrossTwo = forwardRef<SVGSVGElement, IconProps>((props, forwardedRef) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
			{...props}
			ref={forwardedRef}
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
	);
});

CrossTwo.displayName = "CrossTwo";
export default CrossTwo;
