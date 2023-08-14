import { useState } from "react";
import { Canvas } from "../canvas";
import { Note } from "../note";

export const FileEditor = () => {
	const [file, setFile] = useState<any>({ note: false });

	if (file.note) return <Note />;
	return <Canvas />;
};
