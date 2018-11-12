import createHistory from "history/createBrowserHistory";
import { files } from "./generated.js";

const urlHistory = createHistory();
const path = "./content/";
let automaticallyDownload = true;


function clear() {
	const container = document.getElementById("container");
	document.body.removeChild(container);
}

function displayGrid() {
	automaticallyDownload = false;
	const container = document.createElement("div");
	container.setAttribute("id","container");
	container.setAttribute("class","grid");
	files.forEach( function(name) {
		const element = document.createElement("div");
		element.addEventListener("mousedown", function() {
			urlHistory.push({search:name});
		}, true);
		const img = document.createElement("img");
		element.appendChild(img);
		const url = path + name;
		img.src = url;
		img.setAttribute("width","100%");
		img.setAttribute("height","100%");
		container.appendChild(element);
	});
	document.body.appendChild(container);
}

function download(url,name) {
	const link = document.createElement("a");
	link.href = url;
	link.download = name;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

function displayDetail(name) {
	document.title = name;
	const url = path + name;
	const container = document.createElement("div");
	container.setAttribute("id","container");
	container.setAttribute("class","detail");
	const img = document.createElement("img");
	img.src = url;
	img.setAttribute("width","100%");
	img.setAttribute("height","100%");
	container.appendChild(img);
	document.body.appendChild(container);
	container.addEventListener("mousedown", function() {
		download(url,name);
	}, true);
	window.addEventListener("keydown", function(e) {
		const keyCode = e.keyCode;
		if (e.keyCode === 27) { // esc
			clear();
			displayGrid();
		}
	}, true);
	if (automaticallyDownload) download(url,name);
}

function currentItem() {
	let search = urlHistory.location.search;
	if (search) {
		if (search.substring(0,1) === "?") search = search.substring(1); // shouldn't be necessary according to queryString.parse docs
		const length = search.length;
		if (length) {
			const name = (length < 4 || search.substring(length-4) !== ".svg") ? search + ".svg" : search;
			return name;
		}
	}
	return null;
}

function display() {
	const item = currentItem();
	if (item) displayDetail(item);
	else displayGrid();
}

const item = currentItem();
if (item && urlHistory.length < 2) { // insert grid in history before this one. Bug (also happens if this is disabled), initial grid gets replaced with the wrong search query at some point
	const current = urlHistory.location.search;
	urlHistory.replace({search:""});
	urlHistory.push(current);
}

urlHistory.listen((location, action) => {
	clear();
	display();
});

display();
