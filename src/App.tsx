import { useState } from "react";
import { Sidebar } from "./components/sidebar";
import { Canvas } from "./components/canvas";
import { Tabs } from "./components/tabs";
import { FileEditor } from "./components/file-editor";
// console.log(fileSystem.projects);

function App() {
	return (
		<>
			<header id="header"></header>
			<div className="flex h-[100vh]">
				<Sidebar />
				<section
					id="content"
					className="grid flex-1 grid-rows-[auto_1fr] bg-container-300 pt-2"
				>
					<Tabs />
					<section className="scrollbar-rounded-md overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-container-300">
						<FileEditor />
					</section>
				</section>
			</div>
		</>
	);
}

export default App;
