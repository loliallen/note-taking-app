import { fileSystem } from "../../lib/store";
import { observer } from "mobx-react-lite";
import clsx from "clsx";
import {
	AiOutlineProject,
	AiOutlineFolderAdd,
	AiOutlineFileAdd,
} from "react-icons/ai";

export const Sidebar = observer(() => {
	console.log(fileSystem.current);
	return (
		<section
			id="side-bar"
			className="w-[200px] bg-container-300 px-2 shadow-inner"
		>
			{fileSystem.tree.children?.map((e, i) => {
				const isOpened =
					fileSystem.current &&
					fileSystem.current.path === e.path;
				return (
					<section key={i}>
						<button
							className="my-1 flex w-full items-center gap-2 rounded-lg border border-container-500 bg-container-100 px-4 py-2"
							onClick={() => {
								fileSystem.setCurrent(
									e.path,
								);
							}}
						>
							<AiOutlineProject />
							<span>{e.name}</span>
						</button>
						<div
							className={clsx(
								"h-0 pl-1 transition-[height]",
								isOpened && "h-full",
							)}
						>
							{isOpened && (
								<>
									{fileSystem.current?.children?.map(
										(e) => (
											<div
												key={e.path}
												className="ml-1"
											>
												{e.name}
												{e.children &&
													e.children.map(
														(
															e,
														) => (
															<div>
																{
																	e.name
																}
															</div>
														),
													)}
											</div>
										),
									)}
									<button className="my-1 flex w-full items-center gap-2 rounded-lg border border-container-500 px-2 py-1">
										<AiOutlineFileAdd />
										Add File
									</button>
								</>
							)}
						</div>
					</section>
				);
			})}
			<section className="flex w-full items-center justify-center">
				<button
					className="my-1 rounded-full border border-container-500 bg-container-100 p-2"
					onClick={() => {
						// fileSystem.createNewProject(e.path);
					}}
				>
					<AiOutlineFolderAdd
						style={{
							width: "24px",
							height: "24px",
							fontSize: "24px",
							lineHeight: "24px",
						}}
					/>
				</button>
			</section>
		</section>
	);
});
