import createHistory from "history/createBrowserHistory";
import { files } from "./generated.js";

const text = document.createTextNode(string);
const urlHistory = createHistory();
let search = urlHistory.location.search;

function loadGrid() {
	document.body.className = "grid";
	files.forEach( function(name) {
		const element = document.createElement("div");
		const img = document.createElement("img");
		element.appendChild(img);
		const url = "./content/" + name;
		img.src = url;
		img.removeAttribute("viewBox");
		img.setAttribute("width","100%");
		img.setAttribute("height","100%");
		document.body.appendChild(element);
	});
}

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
	} else loadGrid();
} else loadGrid();
