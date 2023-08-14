import fs from "fs";
import { FileType, getFilename } from "./utils";
import {
	DocumentRef,
	DocumentTypeEnum,
	FolderRef,
	WriteDocumentData,
} from "./types";

class VFS {
	constructor() {}

	writeFile(
		id: string,
		data: Partial<WriteDocumentData>,
	) {
		const refFile = fs.readFileSync(
			getFilename(id, FileType.ref),
		);
		const ref: DocumentRef = JSON.parse(
			refFile.toString(),
		);
		if (data.name) ref.name = data.name;
		if (data.parent) {
			const oldParentFolderRef = fs.readFileSync(
				getFilename(ref.parent, FileType.folder),
			);
			const oldParentFolder: FolderRef = JSON.parse(
				oldParentFolderRef.toString(),
			);
			const newParentFolderRef = fs.readFileSync(
				getFilename(data.parent, FileType.folder),
			);
			const newParentFolder: FolderRef = JSON.parse(
				newParentFolderRef.toString(),
			);
			const oldFolderIndex =
				oldParentFolder.children.indexOf(
					ref.parent,
				);
			oldParentFolder.children =
				oldParentFolder.children.splice(
					oldFolderIndex,
					1,
				);
			newParentFolder.children.push() // push new value
		}
	}
}
