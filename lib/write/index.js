module.exports = write;

var translate = require('../flexbox');

// write( details ): Writes flexbox details back to their respective elements.
function write(details) {
	translate(details);

	var runtimeStyle = details.element.style;

	var angle = details.mainAxis === 'inline' ? ['main', 'cross'] : ['cross', 'main'];

	runtimeStyle.boxSizing = 'content-box';
	runtimeStyle.display = 'block';
	runtimeStyle.position = 'relative';

	runtimeStyle.width  = normalize(details.flexStyle[angle[0]] - details.flexStyle[angle[0] + 'InnerBefore'] - details.flexStyle[angle[0] + 'InnerAfter'] - details.flexStyle[angle[0] + 'BorderBefore'] - details.flexStyle[angle[0] + 'BorderAfter']);
	runtimeStyle.height = normalize(details.flexStyle[angle[1]] - details.flexStyle[angle[1] + 'InnerBefore'] - details.flexStyle[angle[1] + 'InnerAfter'] - details.flexStyle[angle[1] + 'BorderBefore'] - details.flexStyle[angle[1] + 'BorderAfter']);

	details.children.forEach(function (childDetails) {
		var childRuntimeStyle = childDetails.element.style;

		var childAngle = childDetails.mainAxis === 'inline' ? ['main', 'cross'] : ['cross', 'main'];

		childRuntimeStyle.boxSizing = 'content-box';
		childRuntimeStyle.display = 'block';
		childRuntimeStyle.position = 'absolute';

		childRuntimeStyle.width  = normalize(childDetails.flexStyle[childAngle[0]] - childDetails.flexStyle[childAngle[0] + 'InnerBefore'] - childDetails.flexStyle[childAngle[0] + 'InnerAfter'] - childDetails.flexStyle[childAngle[0] + 'BorderBefore'] - childDetails.flexStyle[childAngle[0] + 'BorderAfter']);
		childRuntimeStyle.height = normalize(childDetails.flexStyle[childAngle[1]] - childDetails.flexStyle[childAngle[1] + 'InnerBefore'] - childDetails.flexStyle[childAngle[1] + 'InnerAfter'] - childDetails.flexStyle[childAngle[1] + 'BorderBefore'] - childDetails.flexStyle[childAngle[1] + 'BorderAfter']);

		childRuntimeStyle.top  = normalize(childDetails.flexStyle[childAngle[1] + 'Start']);
		childRuntimeStyle.left = normalize(childDetails.flexStyle[childAngle[0] + 'Start']);

		childRuntimeStyle.marginTop    = normalize(childDetails.flexStyle[childAngle[1] + 'Before']);
		childRuntimeStyle.marginRight  = normalize(childDetails.flexStyle[childAngle[0] + 'After']);
		childRuntimeStyle.marginBottom = normalize(childDetails.flexStyle[childAngle[1] + 'After']);
		childRuntimeStyle.marginLeft   = normalize(childDetails.flexStyle[childAngle[0] + 'Before']);
	});
}

function normalize(value) {
	return typeof value === 'string' ? value : value + 'px';
}
