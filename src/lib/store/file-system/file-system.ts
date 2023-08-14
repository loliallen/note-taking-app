import { ipcRenderer } from "electron";
import { readdirSync, lstatSync } from "node:fs";
import { join } from "node:path";
import { makeObservable, observable, action } from "mobx";
import tree from "directory-tree";

class FileSystem {
	@observable
	root: string = "";
	@observable
	tree: tree.DirectoryTree<Record<string, any>>;
	@observable
	current?: tree.DirectoryTree<Record<string, any>>;
	
	constructor() {
		makeObservable(this);
		this.tree = tree(join(this.root, "projects"), {
			normalizePath: true,
		});
		this.read();
	}
	@action
	async read() {
		this.root = await ipcRenderer.invoke("get-root");

		console.log(this.tree.children);
	}

	@action
	setCurrent(path: string) {
		this.current = tree(path);
		console.log(this.current);
	}
}

export default FileSystem;
