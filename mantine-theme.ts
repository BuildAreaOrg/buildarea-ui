import { MantineTheme, Tuple } from "@mantine/core";

const colors: Record<string, Tuple<string, 10>> = {
	primary: [
		"#e7f0fe",
		"#b6d3fb",
		"#86b6f9",
		"#5598f7",
		"#247bf4",
		"#0b62db",
		"#084caa",
		"#063679",
		"#042149",
		"#010b18",
	],
	secondary: [
		"#ede7fe",
		"#c8b7fb",
		"#a487f8",
		"#7f57f5",
		"#5b27f2",
		"#410dd8",
		"#330aa8",
		"#240778",
		"#160448",
		"#070118",
	],
	// in neutral colors 0-4 is white 5-9 is black
	neutral: [
		"#FAF9FD",
		"#FAF9FC",
		"#F9F8FC",
		"#E0DFE3",
		"#C7C6CA",
		"#4D4D4D",
		"#363636",
		"#202020",
		"#1D1D1D",
		"#1A1A1A",
	],
};

export const mantineTheme: Partial<MantineTheme> = {
	respectReducedMotion: true,
	defaultRadius: "md",
	colors: colors,
	primaryColor: "primary",
	components: {
		Button: {},
	},
};
