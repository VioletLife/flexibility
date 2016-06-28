module.exports = function alignItems(target) {
	target.lines.forEach(function (line) {
		line.children.forEach(function (child) {
			var alignSelf = child.style.alignSelf;

			if (alignSelf === 'auto') {
				alignSelf = target.style.alignItems;
			}

			if (alignSelf === 'flex-start') {
				child.flexStyle.crossStart = line.crossStart;
			} else if (alignSelf === 'flex-end') {
				child.flexStyle.crossStart = line.crossStart + line.cross - child.flexStyle.crossOuter;
			} else if (alignSelf === 'center') {
				child.flexStyle.crossStart = line.crossStart + (line.cross - child.flexStyle.crossOuter) / 2;
			} else {
				child.flexStyle.crossStart = line.crossStart;
				child.flexStyle.crossOuter = line.cross;

				child.flexStyle.cross = child.flexStyle.crossOuter - child.flexStyle.crossBefore - child.flexStyle.crossAfter;
			}
		});
	});
};
