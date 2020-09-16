interface Params {
  recentPagesData: any;
  recentSearchesData: any;
  isShowReactPages: boolean;
  isShowReactSearches: boolean;
}

function useIsShowHintText({
  recentPagesData,
  recentSearchesData,
  isShowReactPages,
  isShowReactSearches,
}: Params): boolean {
  if (recentPagesData && isShowReactPages) {
    return true;
  } else if (recentSearchesData && isShowReactSearches) {
    return true;
  } else {
    return false;
  }
}

export default useIsShowHintText;
