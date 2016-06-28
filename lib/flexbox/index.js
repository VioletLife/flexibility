module.exports = flexbox;

function flexbox(details) {
	// for each flex child
	details.children.forEach(function (child) {
		// process child styles as metrics
		require('./flex-direction')(child, details.style.flexDirection);
	});

	// process target styles as metrics
	require('./flex-direction')(details, details.style.flexDirection);

	// process ordering of items
	require('./order')(details);

	// process flexbox items into lines
	require('./flexbox-lines')(details);

	// process align-content item metrics
	require('./align-content')(details);

	// for each line of items in the target
	details.lines.forEach(function (line) {
		line.mainSpace = details.flexStyle.main - details.flexStyle.mainInnerBefore - details.flexStyle.mainInnerAfter - details.flexStyle.mainBorderBefore - details.flexStyle.mainBorderAfter - line.main;

		// process flex-grow item metrics
		require('./flex-grow')(line);

		// process flex-shrink item metrics
		require('./flex-shrink')(line);

		// process margin item metrics
		require('./margin-main')(line);
		require('./margin-cross')(line);

		// process justify-content item metrics
		require('./justify-content')(line, details.style.justifyContent, details);
	});

	// process align-items metrics
	require('./align-items')(details);
}
