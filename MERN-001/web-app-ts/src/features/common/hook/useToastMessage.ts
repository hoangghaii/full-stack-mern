import { toast } from "react-toastify";
import { MessageType } from "../types";

export const useToastMessage = () => {
	const showToastbar = (
		message: string | JSX.Element | Error,
		type: MessageType
	) => {
		switch (type) {
			case "success":
				return toast.success(`✔️ ${message}`);
			case "info":
				return toast.info(`ℹ️ ${message}`);
			case "warn":
				return toast.warn(`⚠️ ${message}`);
			case "error":
				return toast.error(`⚠️ ${message}`);
			default:
				return toast.success(`✔️ ${message}`);
		}
	};
	return showToastbar;
};
