import useSWR from "swr";
import {
	queryDedupingInterval,
	queryRetryCount,
	queryRetryInterval,
} from "../config";
import { ErrorHandlerType } from "../types";

export const useCachedAsyncFunction = <T>(
	param: string | string[] | null,
	asyncFunction: (...param: string[]) => Promise<T>,
	errorHandler: ErrorHandlerType,
	dedupingInterval?: number
) => {
	const { data } = useSWR(param, asyncFunction, {
		dedupingInterval: dedupingInterval ?? queryDedupingInterval,
		onErrorRetry: (err, key, config, revalidate, { retryCount }) => {
			const count = retryCount ?? 0; // avoid re-fetch for 5 minutes
			if (count >= queryRetryCount) {
				// if still error after retry, set error
				errorHandler(err);
				return;
			}
			setTimeout(() => revalidate({ retryCount: count }), queryRetryInterval);
		},
	});
	return data as T;
};
