module.exports = writeAll;

var write = require('../write');

// writeAll( detailsList ): Writes a list of flexbox details back to their respective elements.
function writeAll(detailsList) {
	detailsList.forEach(function (details) {
		write(details);
	});
}
