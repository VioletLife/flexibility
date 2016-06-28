module.exports = function alignContent(target) {
	var start;
	var factor;

	var inset = target.flexStyle.crossInnerBefore;

	if (target.lines.length < 2 || target.style.alignContent === 'stretch' || target.style.alignContent === 'normal') {
		factor = target.flexStyle.crossSpace / target.lines.length;
		start = inset;

		target.lines.forEach(function (line) {
			line.crossStart = start;
			line.cross += factor;

			start += line.cross;
		});
	} else if (target.style.alignContent === 'flex-start') {
		start = 0;

		target.lines.forEach(function (line) {
			line.crossStart = start;

			start += line.cross;
		});
	} else if (target.style.alignContent === 'flex-end') {
		start = target.flexStyle.crossSpace;

		target.lines.forEach(function (line) {
			line.crossStart = start;

			start += line.cross;
		});
	} else if (target.style.alignContent === 'center') {
		start = target.flexStyle.crossSpace / 2;

		target.lines.forEach(function (line) {
			line.crossStart = start;

			start += line.cross;
		});
	} else if (target.style.alignContent === 'space-between') {
		factor = target.flexStyle.crossSpace / (target.lines.length - 1);
		start = 0;

		target.lines.forEach(function (line) {
			line.crossStart = start;

			start += line.cross + factor;
		});
	} else if (target.style.alignContent === 'space-around') {
		factor = target.flexStyle.crossSpace * 2 / (target.lines.length * 2);
		start = factor / 2;

		target.lines.forEach(function (line) {
			line.crossStart = start;

			start += line.cross + factor;
		});
	}
};
