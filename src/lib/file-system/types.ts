export interface ITimestampz {
	createdAt: Date;
	updatedAt: Date;
}

export interface IConfig {}
export type ID = string;
export type RefID = `${ID}_ref`;
export enum JSONDocumentType {
	folder = "folder",
	file = "file",
}
export enum JSONDocumentExtType {
	text,
	diagram,
}
export type JSONDocumentContentRef = `${ID}_content.json`;

export interface IJSONDocumentFolder extends ITimestampz {
	id: ID;
	type: JSONDocumentType.folder;
	parent: RefID;
	children: ID[];
}

export interface IJSONDocumentFile extends ITimestampz {
	id: ID;
	type: JSONDocumentType.file;
	parent: RefID;
	ext: JSONDocumentType;
}
export type JSONDocument =
	| IJSONDocumentFolder
	| IJSONDocumentFile;

export interface IProjects extends ITimestampz {
	data: Array<{
		name: string;
		id: string;
		files: RefID[];
	}>;
}
