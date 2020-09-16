import React, { FunctionComponent, useState, useRef, useCallback } from 'react';
import Input from './components/Input';
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import RecentPagesItem from './components/RecentPagesItem';
import RecentSearchesItem from './components/RecentSearchesItem';
import SearchResultsItem from './components/SearchResultsItem';
import HintTextDefault from './components/HintTextDefault';
import HintTextSearch from './components/HintTextSearch';
import ItemTitle from './components/ItemTitle';
import ItemSearchTitle from './components/ItemSearchTitle';
import NotFindItem from './components/NotFindItem';
import useNewChoosedResultItem from './hooks/useNewChoosedResultItem';
import useNewChoosedPageItem from './hooks/useNewChoosedPageItem';
import useNewChoosedSearchItem from './hooks/useNewChoosedSearchItem';
import useIsShowHintText from './hooks/useIsShowHintText';
import { QuickFindProps } from './QuickFindProps';

const RootWrap = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 100,
  width: '75%',
  maxWidth: 600,
  minWidth: 375,
  maxHeight: '80vh',
  minHeight: 50,
  boxShadow: '0px 2px 1px 0.5px rgba(0,0,0,0.1)',
});

const TopArea = styled('div')({
  width: '100%',
  paddingLeft: 14,
  paddingRight: 14,
});

const MidArea = styled('div')({
  width: '100%',
  maxHeight: 'calc(80vh - 80px)',
  minHeight: 0,
  flexWrap: 'wrap',
  overflow: 'auto',
  overflowY: 'scroll',
  overflowX: 'hidden',
  '&::-webkit-scrollbar': {
    width: 3,
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#8E9193FF',
    borderRadius: 2,
  },
  scrollbarWidth: 'thin',
  scrollbarColor: 'rgba(184,186,186,1) rgba(255,255,255,0)',
});

const BottomArea = styled('div')({
  width: '100%',
});

const Divider = styled('div')({
  height: 1,
});

const RecentPagesArea = styled('div')({
  marginBottom: 8,
});

const RecentSearchesArea = styled('div')({
  marginBottom: 8,
});

const SearchResultsArea = styled('div')({
  width: '100%',
  maxHeight: 'calc(70vh - 80px)',
  flexWrap: 'wrap',
  overflow: 'auto',
  overflowY: 'scroll',
  overflowX: 'hidden',
  '&::-webkit-scrollbar': {
    width: 3,
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#8E9193FF',
    borderRadius: 2,
  },
  scrollbarWidth: 'thin',
  scrollbarColor: 'rgba(184,186,186,1) rgba(255,255,255,0)',
});

const useThemeStyles = makeStyles(theme => {
  const QuickFind =
    theme && (theme as any).components.workspace.QuickFind.QuickFind;
  return {
    root: {
      backgroundColor: QuickFind.backgroundColor,
    },
    divider: {
      backgroundColor: QuickFind.Divider.color,
    },
  };
});

const QuickFind: FunctionComponent<QuickFindProps> = props => {
  const {
    isLoding,
    isNotFind,
    recentPagesData,
    recentSearchesData,
    searchResultsData,
    onSearch,
    notFindText,
    placeholder,
    onClickItem,
    onSortRules,
  } = props;

  const [isShowPageClearButton, setIsShowPageClearButton] = useState(false);
  const [isShowSearchClearButton, setIsShowSearchClearButton] = useState(false);
  const [isShowReactPages, setIsShowReactPages] = useState(true);
  const [isShowReactSearches, setIsShowReactSearches] = useState(true);
  const [newChoosedPageItem, setNewChoosedPageItem] = useState(-1);
  const [newChoosedSearchItem, setNewChoosedSearchItem] = useState(-1);
  const [newChoosedResultItem, setNewChoosedResultItem] = useState(-1);
  const [listItemHeight, setListItemHeight] = useState([]);
  const [listItemOffsetTop, setListItemOffsetTop] = useState([]);
  const [isOnKeyDown, setIsOnKeyDown] = useState(false);
  const [itemsType, setItemsType] = useState(
    recentPagesData ? 'page' : 'search',
  );
  const themeClasses = useThemeStyles();
  const isShowHintText = useIsShowHintText({
    recentPagesData,
    recentSearchesData,
    isShowReactPages,
    isShowReactSearches,
  });
  const DivEl = useRef(null);

  const handleOnKeyDown = (
    event: React.SyntheticEvent<HTMLInputElement>,
    recentPagesData?: any,
    recentSearchesData?: any,
    searchResultsData?: any,
  ) => {
    setIsOnKeyDown(true);
    const key = (event as any).key;
    //搜索结果页面 ( 如果存在searchResultsData搜索数据 )
    if (searchResultsData) {
      const num = useNewChoosedResultItem({
        event,
        DivEl,
        newChoosedResultItem,
        searchResultsData,
        listItemOffsetTop,
        listItemHeight,
      });
      setNewChoosedResultItem(num);
      if (key === 'Enter') {
        onClickItem(searchResultsData[num]);
      }
    }
    //默认首页
    else {
      let pageLeng = recentPagesData ? recentPagesData.length : 0;
      let searchesLeng = recentSearchesData ? recentSearchesData.length : 0;
      if (itemsType === 'page') {
        setIsShowPageClearButton(true);
        let num = useNewChoosedPageItem({
          event,
          newChoosedPageItem,
        });
        if (num > pageLeng - 1) {
          if (recentPagesData && recentSearchesData) {
            num = -1;
            setNewChoosedSearchItem(0);
            setItemsType('search');
            setIsShowPageClearButton(false);
            setIsShowSearchClearButton(true);
          } else {
            num = pageLeng - 1;
          }
        }
        if (key === 'Enter') {
          onClickItem(recentPagesData[num]);
        }
        setNewChoosedPageItem(num);
      }

      if (itemsType === 'search') {
        setIsShowSearchClearButton(true);
        let num = useNewChoosedSearchItem({
          event,
          newChoosedSearchItem,
          searchesLeng,
        });
        if (num < 0) {
          if (recentPagesData && recentSearchesData) {
            num = -1;
            setNewChoosedPageItem(pageLeng - 1);
            setItemsType('page');
            setIsShowPageClearButton(true);
            setIsShowSearchClearButton(false);
          } else {
            num = 0;
          }
        }
        if (key === 'Enter') {
          onClickItem(recentSearchesData[num]);
        }
        setNewChoosedSearchItem(num);
      }
    }
  };

  const handlePageItemMouseEvent = useCallback(
    (res: number) => {
      setItemsType('page');
      setNewChoosedPageItem(res);
      setNewChoosedSearchItem(-1);
    },
    [newChoosedPageItem],
  );

  const handleSearchItemMouseEvent = useCallback(
    (res: number) => {
      setItemsType('search');
      setNewChoosedSearchItem(res);
      setNewChoosedPageItem(-1);
    },
    [newChoosedSearchItem],
  );

  if (isNotFind) {
    return (
      <RootWrap>
        <Root className={themeClasses.root}>
          <TopArea>
            <Input
              isLoding={isLoding}
              onChange={onSearch}
              placeholder={placeholder}
            />
          </TopArea>
          <Divider className={themeClasses.divider} />
          <NotFindItem data={notFindText} />
        </Root>
      </RootWrap>
    );
  }

  return (
    <RootWrap>
      <Root className={themeClasses.root}>
        <TopArea>
          <Input
            isLoding={isLoding}
            onChange={onSearch}
            placeholder={placeholder}
            onKeyDown={event =>
              handleOnKeyDown(
                event,
                recentPagesData,
                recentSearchesData,
                searchResultsData,
              )
            }
          />
        </TopArea>
        {isShowHintText && <Divider className={themeClasses.divider} />}
        <MidArea>
          {isShowReactPages && recentPagesData && !searchResultsData && (
            <div ref={DivEl}>
              <RecentPagesArea
                onMouseMove={() => setIsShowPageClearButton(true)}
                onMouseLeave={() => setIsShowPageClearButton(false)}
              >
                <ItemTitle
                  text="最近页面"
                  isShowButton={isShowPageClearButton}
                  onClick={() => {
                    setIsShowReactPages(false);
                  }}
                />
                <RecentPagesItem
                  choosedItem={newChoosedPageItem}
                  data={recentPagesData}
                  onClick={onClickItem}
                  onMouseEvent={res => handlePageItemMouseEvent(res)}
                />
              </RecentPagesArea>
            </div>
          )}
          {isShowReactSearches && recentSearchesData && !searchResultsData && (
            <div ref={DivEl}>
              <RecentSearchesArea
                onMouseMove={() => setIsShowSearchClearButton(true)}
                onMouseLeave={() => setIsShowSearchClearButton(false)}
              >
                <ItemTitle
                  text="最近搜索"
                  isShowButton={isShowSearchClearButton}
                  onClick={() => {
                    setIsShowReactSearches(false);
                  }}
                />
                <RecentSearchesItem
                  choosedItem={newChoosedSearchItem}
                  data={recentSearchesData}
                  onClick={onClickItem}
                  onMouseEvent={res => handleSearchItemMouseEvent(res)}
                />
              </RecentSearchesArea>
            </div>
          )}
        </MidArea>
        {searchResultsData && (
          <>
            <ItemSearchTitle text="Sort: " onClick={onSortRules} />
            <SearchResultsArea ref={DivEl}>
              <SearchResultsItem
                choosedItem={newChoosedResultItem}
                isOnKeyDown={isOnKeyDown}
                data={searchResultsData}
                onClick={onClickItem}
                onMouseEvent={res => {
                  setNewChoosedResultItem(res);
                }}
                getListItemHeight={list => {
                  setListItemHeight(list);
                }}
                getListItemOffsetTop={res => {
                  setListItemOffsetTop(res);
                }}
                getOnMouseMove={isOnMouseMove => {
                  setIsOnKeyDown(!isOnMouseMove);
                }}
              />
            </SearchResultsArea>
          </>
        )}
        <BottomArea>
          {searchResultsData ? (
            <>
              <Divider className={themeClasses.divider} />
              <HintTextSearch
                count={searchResultsData.length}
                isLoding={isLoding}
              />
            </>
          ) : (
            isShowHintText && (
              <>
                <Divider className={themeClasses.divider} />
                <HintTextDefault />
              </>
            )
          )}
        </BottomArea>
      </Root>
    </RootWrap>
  );
};

QuickFind.defaultProps = {
  isLoding: false,
  isNotFind: false,
  placeholder: 'Search 工作区...',
  notFindText: null,
  searchResultsData: null,
  recentPagesData: null,
  recentSearchesData: null,
  onSortRules: () => {},
  onClickItem: () => {},
};

export default QuickFind;
