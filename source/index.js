import createHistory from "history/createBrowserHistory";
import { files } from "./generated.js";
//const string = JSON.stringify(files);
const string = "not a valid file";
const text = document.createTextNode(string);
const urlHistory = createHistory();
let search = urlHistory.location.search;
if (search) {
	if (search.substring(0,1) === "?") search = search.substring(1); // shouldn't be necessary according to queryString.parse docs
	const length = search.length;
	if (length) {
		const name = (length < 4 || search.substring(length-4) !== ".svg") ? search + ".svg" : search;
		document.title = name;
		const url = "./content/" + name;
		const iframe = document.createElement("iframe");
		iframe.src = url;
		document.body.appendChild(iframe);
		const link = document.createElement("a");
		link.href = url;
		link.download = name;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	} else document.body.appendChild(text);
} else document.body.appendChild(text);

// Should hitting the back button bring up the download prompt again? It currently does not, I think I prefer it. User can hit reload.

// If no query string is provided or file is not found, it would be nice to display every item in a grid of thumbnails and download on click!
// How do you enumerate contents of a directory from javascript?
// I don't need to enumerate the directory contents, at least not from the client.
// This should be possible from webpack!

// Must mangle search query, only allowed htmlEntities or whatever the allowed URL characters is called

// Page zoom should zoom in on the svg but does not.
// However, is responsive to window resize. html, body, & iframe are 100% width & height

// Of course I must test in IE / Edge
