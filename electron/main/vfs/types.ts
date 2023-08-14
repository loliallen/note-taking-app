export interface ITimestampz {
	createdAt: Date;
	updatedAt: Date;
}
export enum DocumentTypeEnum {
	folder = "folder",
	file = "file",
}
export const DOCUMENT_TYPES = {
	[DocumentTypeEnum.folder]: "folder",
	[DocumentTypeEnum.file]: "file",
} as const;

export type DocumentType =
	(typeof DOCUMENT_TYPES)[DocumentTypeEnum];

export interface FolderRef extends ITimestampz {
	name: string;
	type: DocumentTypeEnum.folder;
	parent: string;
	children: string[];
}

export interface FileRef extends ITimestampz {
	name: string;
	type: DocumentTypeEnum.file;
	parent: string;
	ext: string;
}

export type DocumentRef = FileRef | FolderRef;

export type WriteFileData = {
	name: string;
	parent: string;
	content: string;
};
export type WriteFolderData = {
	name: string;
	parent: string;
	children: string[];
};
export type WriteDocumentData =
	| WriteFileData
	| WriteFolderData;
