module.exports = function flexGrow(line) {
	if (line.mainSpace > 0) {
		var growFactor = line.children.reduce(function (lastGrowFactor, child) {
			return lastGrowFactor + parseFloat(child.style.flexGrow);
		}, 0);

		if (growFactor > 0) {
			line.main = line.children.reduce(function (main, child) {
				if (child.flexStyle.main === 'auto') {
					child.flexStyle.main = child.flexStyle.mainOffset + parseFloat(child.style.flexGrow) / growFactor * line.mainSpace;
				} else {
					child.flexStyle.main += parseFloat(child.style.flexGrow) / growFactor * line.mainSpace;
				}

				child.flexStyle.mainOuter = child.flexStyle.main + child.flexStyle.mainBefore + child.flexStyle.mainAfter;

				return main + child.flexStyle.mainOuter;
			}, 0);

			line.mainSpace = 0;
		}
	}
};
