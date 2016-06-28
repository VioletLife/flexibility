module.exports = function flexShrink(line) {
	if (line.mainSpace < 0) {
		var shrinkFactor = line.children.reduce(function (lastShrinkFactor, child) {
			return lastShrinkFactor + parseFloat(child.style.flexShrink);
		}, 0);

		if (shrinkFactor > 0) {
			line.main = line.children.reduce(function (main, child) {
				child.flexStyle.main += parseFloat(child.style.flexShrink) / shrinkFactor * line.mainSpace;

				child.flexStyle.mainOuter = child.flexStyle.main + child.flexStyle.mainBefore + child.flexStyle.mainAfter;

				return main + child.flexStyle.mainOuter;
			}, 0);

			line.mainSpace = 0;
		}
	}
};
