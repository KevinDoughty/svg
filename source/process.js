var fs = require('fs');
var path = require( 'path' );

var content = "export const files = [";

fs.readdir( __dirname+"/../content", function( err, files ) {
	if (err) console.log(err);
	var count = 0;
	files.forEach( function( file, index ) {
		if (file.substring(file.length-4) === ".svg") { // only svg files
			if (count) content += ", "; // can't use index, first might be a folder
			content += '"'+file+'"';
			count++;
		}
	});
	content += "];";
	fs.writeFile(__dirname+"/generated.js", content, function(err) {
		if (err) console.log(err);
	});
});
