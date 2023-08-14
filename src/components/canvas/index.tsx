import { useState, useEffect, ReactElement } from "react";
import { Excalidraw } from "@excalidraw/excalidraw";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
// type ExcalidrawElement = Awaited<
//   ReturnType<typeof import("@excalidraw/excalidraw")>
// >;
export type CanvasProps = {
	data?: File;
};
export const Canvas = () => {
	const [filename, setFilename] = useState("");
	const [data, setData] = useState<ExcalidrawElement[]>(
		[],
	);
	//   const [Excalidraw, setExcalidraw] = useState<any | null>(null);
	//   useEffect(() => {
	//     import("@excalidraw/excalidraw")
	//       .then(({ Excalidraw }) => setExcalidraw(Excalidraw))
	//       .catch((e) => console.log(e));
	//   }, []);{Excalidraw && <Excalidraw />}</div>;
	return (
		<Excalidraw
			theme="dark"
			onChange={(els) =>
				setData(els as ExcalidrawElement[])
			}
			renderSidebar={() => <></>}
			UIOptions={{
				canvasActions: {
					export: false,
					clearCanvas: false,
					changeViewBackgroundColor: false,
					toggleTheme: false,
					loadScene: false,
					saveAsImage: false,
					saveToActiveFile: false,
				},
			}}
		/>
	);
};
