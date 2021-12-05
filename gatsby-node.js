const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `Mdx`) {
		const value = createFilePath({ node, getNode });

		// let collection = parent.sourceInstanceName;

		createNodeField({
			name: `slug`,
			node,
			value,
		});

		// createNodeField({
		// 	name: `collection`,
		// 	node,
		// 	value: collection,
		// });
	}
};
