export enum FileType {
	ref = "_ref.json",
	content = "_content.json",
	folder = "_ref.json",
}
export const getFilename = (id: string, type: FileType) =>
	id + type;
