import createHistory from "history/createBrowserHistory";
import { files } from "./generated.js";

const urlHistory = createHistory();

function clear() {
	const container = document.getElementById("container");
	document.body.removeChild(container);
}

function displayGrid() {
	const container = document.createElement("div");
	container.setAttribute("id","container");
	container.setAttribute("class","grid");
	files.forEach( function(name) {
		const element = document.createElement("div");
		element.addEventListener("mousedown", function() {
			const query = "?" + name;
			urlHistory.push(query);
		}, true);
		const img = document.createElement("img");
		element.appendChild(img);
		const url = "./content/" + name;
		img.src = url;
		img.removeAttribute("viewBox");
		img.setAttribute("width","100%");
		img.setAttribute("height","100%");
		container.appendChild(element);
	});
	document.body.appendChild(container);
}

function displayItem(name) {
	document.title = name;
	const url = "./content/" + name;
	const iframe = document.createElement("iframe");
	iframe.id = "container";
	iframe.src = url;
	document.body.appendChild(iframe);
	const link = document.createElement("a");
	link.href = url;
	link.download = name;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

function display() {
	let search = urlHistory.location.search;
	if (search) {
		if (search.substring(0,1) === "?") search = search.substring(1); // shouldn't be necessary according to queryString.parse docs
		const length = search.length;
		if (length) {
			const name = (length < 4 || search.substring(length-4) !== ".svg") ? search + ".svg" : search;
			displayItem(name);
		} else displayGrid();
	} else displayGrid();
}

urlHistory.listen((location, action) => {
	clear();
	display();
	console.log("doc",document.body.offsetHeight);
	console.log("cont",document.getElementById("container").offsetHeight);
});
display();
