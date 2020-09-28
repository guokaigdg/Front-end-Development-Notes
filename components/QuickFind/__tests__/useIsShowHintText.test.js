import useIsShowHintText from '../hooks/useIsShowHintText';
import { recentPagesData, recentSearchesData } from './data';

describe('recentPagesData: null, recentSearchesData: null,', () => {
  test('最近文章不存在,最近搜索不存在', () => {
    const testData = {
      recentPagesData: null,
      recentSearchesData: null,
      isShowReactPages: true,
      isShowReactSearches: true,
    };
    const res = useIsShowHintText(testData);
    expect(res).toEqual(false);
  });

  it('最近文章不存在,最近搜索不存在', () => {
    const testData = {
      recentPagesData: null,
      recentSearchesData: null,
      isShowReactPages: true,
      isShowReactSearches: false,
    };
    const res = useIsShowHintText(testData);
    expect(res).toEqual(false);
  });

  it('最近文章不存在,最近搜索不存在', () => {
    const testData = {
      recentPagesData: null,
      recentSearchesData: null,
      isShowReactPages: false,
      isShowReactSearches: true,
    };
    const res = useIsShowHintText(testData);
    expect(res).toEqual(false);
  });

  it('最近文章不存在,最近搜索不存在', () => {
    const testData = {
      recentPagesData: null,
      recentSearchesData: null,
      isShowReactPages: false,
      isShowReactSearches: false,
    };
    const res = useIsShowHintText(testData);
    expect(res).toEqual(false);
  });
});

describe('recentPagesData: recentPagesData, recentSearchesData: null,', () => {
  it('最近文章存在,展示', () => {
    const testData = {
      recentPagesData: recentPagesData,
      recentSearchesData: null,
      isShowReactPages: true,
      isShowReactSearches: true,
    };
    const res = useIsShowHintText(testData);
    expect(res).toEqual(true);
  });

  it('最近文章存在,展示', () => {
    const testData = {
      recentPagesData: recentPagesData,
      recentSearchesData: null,
      isShowReactPages: true,
      isShowReactSearches: false,
    };
    const res = useIsShowHintText(testData);
    expect(res).toEqual(true);
  });

  it('最近文章存在,不展示', () => {
    const testData = {
      recentPagesData: recentPagesData,
      recentSearchesData: null,
      isShowReactPages: false,
      isShowReactSearches: true,
    };
    const res = useIsShowHintText(testData);
    expect(res).toEqual(false);
  });

  it('最近文章存在,不展示', () => {
    const testData = {
      recentPagesData: recentPagesData,
      recentSearchesData: null,
      isShowReactPages: false,
      isShowReactSearches: false,
    };
    const res = useIsShowHintText(testData);
    expect(res).toEqual(false);
  });
});

describe('recentPagesData: null, recentSearchesData: recentSearchesData,', () => {
  it('最近搜索存在,展示', () => {
    const testData = {
      recentPagesData: null,
      recentSearchesData: recentSearchesData,
      isShowReactPages: true,
      isShowReactSearches: true,
    };
    const res = useIsShowHintText(testData);
    expect(res).toEqual(true);
  });

  it('最近搜索存在,不展示', () => {
    const testData = {
      recentPagesData: null,
      recentSearchesData: recentSearchesData,
      isShowReactPages: true,
      isShowReactSearches: false,
    };
    const res = useIsShowHintText(testData);
    expect(res).toEqual(false);
  });

  it('最近搜索存在,展示', () => {
    const testData = {
      recentPagesData: null,
      recentSearchesData: recentSearchesData,
      isShowReactPages: false,
      isShowReactSearches: true,
    };
    const res = useIsShowHintText(testData);
    expect(res).toEqual(true);
  });

  it('最近搜索存在,不展示', () => {
    const testData = {
      recentPagesData: null,
      recentSearchesData: recentSearchesData,
      isShowReactPages: false,
      isShowReactSearches: false,
    };
    const res = useIsShowHintText(testData);
    expect(res).toEqual(false);
  });
});

describe('recentPagesData: recentPagesData, recentSearchesData: recentSearchesData,', () => {
  it('最近文章存在,展示, 最近搜索存在,展示', () => {
    const testData = {
      recentPagesData: recentPagesData,
      recentSearchesData: recentSearchesData,
      isShowReactPages: true,
      isShowReactSearches: true,
    };
    const res = useIsShowHintText(testData);
    expect(res).toEqual(true);
  });

  it('最近文章存在,展示, 最近搜索存在,不展示', () => {
    const testData = {
      recentPagesData: recentPagesData,
      recentSearchesData: recentSearchesData,
      isShowReactPages: true,
      isShowReactSearches: false,
    };
    const res = useIsShowHintText(testData);
    expect(res).toEqual(true);
  });

  it('最近文章存在,不展示, 最近搜索存在,展示', () => {
    const testData = {
      recentPagesData: recentPagesData,
      recentSearchesData: recentSearchesData,
      isShowReactPages: false,
      isShowReactSearches: true,
    };
    const res = useIsShowHintText(testData);
    expect(res).toEqual(true);
  });

  it('最近文章存在,不展示, 最近搜索存在,不展示', () => {
    const testData = {
      recentPagesData: recentPagesData,
      recentSearchesData: recentSearchesData,
      isShowReactPages: false,
      isShowReactSearches: false,
    };
    const res = useIsShowHintText(testData);
    expect(res).toEqual(false);
  });
});
