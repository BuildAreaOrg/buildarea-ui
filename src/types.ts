import { CSSObject, MantineTheme } from "@mantine/styles";

export interface ThemeComponent {
	defaultProps?: Record<string, any>;
	classNames?: Record<string, string>;
	styles?:
		| Record<string, CSSObject>
		| ((theme: MantineTheme, params: any) => Record<string, CSSObject>);
}
