import { AiOutlineClose } from "react-icons/ai";
export type TabProps = {
	label?: string;
	onClose?: () => void;
};
export const Tab = ({ label, onClose }: TabProps) => {
	return (
		<div className="flex items-center justify-between gap-4 rounded-t-lg border-r border-r-container-700 bg-container-100 pl-4 pr-2 py-1 hover:cursor-pointer">
			<span>{label}</span>
			<button
				className="text-container-100 transition hover:text-container-500"
				onClick={onClose}
			>
				<AiOutlineClose />
			</button>
		</div>
	);
};
