import fs from "node:fs";
import path from "node:path";
import {
	IConfig,
	JSONDocument,
	IProjects,
	ID,
	JSONDocumentType,
} from "./types";

class VirtualFileSystem {
	private readonly configFilePath: string =
		"_config.json";
	private readonly projectsFilePath: string =
		"_projects.json";

	private config: IConfig;
	private root: string;
	public projects: IProjects;

	constructor() {
		this.root = "";
		const configData = fs.readFileSync(
			path.join(
				this.root,
				"data",
				this.configFilePath,
			),
		);
		const projectsData = fs.readFileSync(
			path.join(
				this.root,
				"data",
				this.projectsFilePath,
			),
		);
		this.config = JSON.parse(configData.toString());
		this.projects = JSON.parse(projectsData.toString());
	}

	public readProject(projectId: string) {
		const project = this.projects.data.find(
			(el) => el.id === projectId,
		);
		if (!project)
			throw new Error("Project doesn't exsits");
		const files = this.readProjectFiles(project.files);
		return { project, files };
	}
	private readProjectFiles(refFiles: ID[]) {
		const result: JSONDocument[] = [];
		for (let ref of refFiles) {
			const refFileData = fs.readFileSync(
				path.join(this.root, ref),
			);
			const refFile: JSONDocument = JSON.parse(
				refFileData.toString(),
			);
			result.push(refFile);
		}
		return result;
	}
}
