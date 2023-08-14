import File from "./file";

class Folder {
	children: Array<Folder | File> = [];
	constructor() {}

	addFile(file: File) {
		this.children.push(file);
	}
}

export default Folder;
