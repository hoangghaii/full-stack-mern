/**
 * FIXME: loaded when windown onload
 * @returns
 */

export const useWindowLoaded = () => {
	const loadTime =
		window.performance.timing.domContentLoadedEventEnd -
		window.performance.timing.navigationStart;

	return loadTime;
};
