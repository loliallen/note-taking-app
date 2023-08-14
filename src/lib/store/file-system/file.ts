import fs from "fs";
import path from "path";

type FileMeta = {
	createdAt: Date;
	updatedAt: Date;
	name: string;
	ext: string;
	fullname: string;
};

class File {
	content?: any = null;
	meta?: FileMeta;
	saved: boolean = true;
	constructor(public path: string) {
		this.deserialize(fs.readFileSync(path));
	}

	deserialize(buff: Buffer) {}
	serialize() {
		const fileData = {
			meta: this.meta,
			content: this.content,
		};
		const strFileData = JSON.stringify(fileData);
		fs.writeFileSync(this.path, strFileData);
	}
}

export default File;
