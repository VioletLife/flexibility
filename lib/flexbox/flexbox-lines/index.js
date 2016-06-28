module.exports = function flexboxLines(target) {
	var line;

	target.lines = [line = {
		main:  0,
		cross: 0,
		children: []
	}];

	target.children.forEach(function (child) {
		if (
			target.style.flexWrap === 'nowrap' ||
			line.children.length === 0 ||
			target.flexStyle.main === 'auto' ||
			target.flexStyle.main - target.flexStyle.mainInnerBefore - target.flexStyle.mainInnerAfter - target.flexStyle.mainBorderBefore - target.flexStyle.mainBorderAfter >= line.main + child.flexStyle.mainOuter
		) {
			line.main += child.flexStyle.mainOuter;
			line.cross = Math.max(line.cross, child.flexStyle.crossOuter);
		} else {
			target.lines.push(line = {
				main:  child.flexStyle.mainOuter,
				cross: child.flexStyle.crossOuter,
				children: []
			});
		}

		line.children.push(child);
	});

	target.flexStyle.mainLines = target.lines.reduce(function (mainLines, item) {
		return Math.max(mainLines, item.main);
	}, 0);

	target.flexStyle.crossLines = target.lines.reduce(function (crossLines, item) {
		return crossLines + item.cross;
	}, 0);

	if (target.flexStyle.main === 'auto') {
		target.flexStyle.main = Math.max(target.flexStyle.mainOffset, target.flexStyle.mainLines + target.flexStyle.mainInnerBefore + target.flexStyle.mainInnerAfter + target.flexStyle.mainBorderBefore + target.flexStyle.mainBorderAfter);
	}

	if (target.flexStyle.cross === 'auto') {
		target.flexStyle.cross = Math.max(target.flexStyle.crossOffset, target.flexStyle.crossLines + target.flexStyle.crossInnerBefore + target.flexStyle.crossInnerAfter + target.flexStyle.crossBorderBefore + target.flexStyle.crossBorderAfter);
	}

	target.flexStyle.crossSpace = target.flexStyle.cross - target.flexStyle.crossInnerBefore - target.flexStyle.crossInnerAfter - target.flexStyle.crossBorderBefore - target.flexStyle.crossBorderAfter - target.flexStyle.crossLines;

	target.flexStyle.mainOuter  = target.flexStyle.main  + target.flexStyle.mainBefore  + target.flexStyle.mainAfter;
	target.flexStyle.crossOuter = target.flexStyle.cross + target.flexStyle.crossBefore + target.flexStyle.crossAfter;
};
