module.exports = {
	stories: ["../src/**/*.stories.tsx"],
	addons: ["@storybook/addon-storysource"],
	// we need to add aliases to webpack so it knows how to follow
	// to the source of the packages rather than the built version (dist)
	webpackFinal: async (config) => ({
		...config,
		resolve: {
			...config.resolve,
			alias: {
				...config.resolve.alias,
				// ...convertTsConfigPathsToWebpackAliases(),
			},
		},
	}),
};
