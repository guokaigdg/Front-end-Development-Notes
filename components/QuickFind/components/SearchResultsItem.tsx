import React, { useRef, useEffect } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';

const Root = styled('div')({});

const CustomMenuItem = withStyles({
  root: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0)',
    },
  },
})(MenuItem);

const ItemList = styled('div')({
  width: '100%',
  padding: `8px 14px`,
  color: 'rgba(0, 0, 0, 0)',
});

const TopArea = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const LeftArea = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const BottomArea = styled('div')({
  marginLeft: 27,
  marginRight: 19,
});

const EmojiIcon = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 19,
  height: 19,
  fontSize: 18,
  marginRight: 8,
  color: 'rgb(0, 0, 0)',
});

const Title = styled('div')({
  width: 518,
  fontSize: 14,
  fontWeight: 500,
  color: '#eee',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const Text = styled('span')({
  fontSize: 12,
  fontWeight: 500,
  color: 'rgba(55, 53, 47, 0.6)',
  whiteSpace: 'pre-wrap',
});

const useThemeStyles = makeStyles(theme => {
  const SearchResultsItem =
    theme && (theme as any).components.workspace.QuickFind.SearchResultsItem;
  return {
    itemChoosed: {
      color: SearchResultsItem.keyboardReturnIcon.color,
      backgroundColor: SearchResultsItem.itemChoosed.backgroundColor,
    },
    title: {
      color: SearchResultsItem.title.color,
    },
    des: {
      color: SearchResultsItem.des.color,
    },
  };
});

interface SearchResultsItemProps {
  data?: any;
  choosedItem?: number;
  onClick: (...args: any) => any;
  onMouseEvent: (...args: any) => any;
  getListItemHeight: (...args: any) => any;
  getListItemOffsetTop: (...args: any) => any;
  getOnMouseMove: (...args: any) => any;
  isOnKeyDown?: boolean;
}

function SearchResultsItem(props: SearchResultsItemProps) {
  const {
    data,
    choosedItem,
    onMouseEvent,
    onClick,
    getListItemHeight,
    getListItemOffsetTop,
    isOnKeyDown,
    getOnMouseMove,
  } = props;
  const themeClasses = useThemeStyles();
  const itemsRef = useRef([]);
  useEffect(() => {
    const listHight: number[] = [];
    itemsRef.current = itemsRef.current.slice(0, data.length);
    for (let i = 0; i < data.length; i++) {
      listHight.push((itemsRef.current as any)[i].clientHeight);
    }
    getListItemHeight(listHight);
  }, [data]);

  useEffect(() => {
    const listoffsetTop: number[] = [];
    itemsRef.current = itemsRef.current.slice(0, data.length);
    for (let i = 0; i < data.length; i++) {
      listoffsetTop.push((itemsRef.current as any)[i].offsetTop);
    }
    getListItemOffsetTop(listoffsetTop);
  }, [data]);

  return (
    <>
      {data.map((item: any, index: number) => (
        <Root
          key={index}
          ref={el => {
            (itemsRef.current as any)[index] = el;
          }}
          onClick={() => {
            onClick(item);
          }}
        >
          <CustomMenuItem disableGutters={true}>
            <ItemList
              className={
                choosedItem === index ? themeClasses.itemChoosed : undefined
              }
              onMouseEnter={() => {
                if (!isOnKeyDown) {
                  onMouseEvent(index);
                }
              }}
              onMouseLeave={() => {
                if (!isOnKeyDown) {
                  onMouseEvent(index);
                }
              }}
              onMouseMove={() => {
                getOnMouseMove(true);
              }}
            >
              <TopArea>
                <LeftArea>
                  <EmojiIcon>{item.icon}</EmojiIcon>
                  <Title className={themeClasses.title}> {item.title} </Title>
                </LeftArea>
                <KeyboardReturnIcon style={{ fontSize: 16 }} />
              </TopArea>
              <BottomArea>
                <Text className={themeClasses.des}>{item.des}</Text>
              </BottomArea>
            </ItemList>
          </CustomMenuItem>
        </Root>
      ))}
    </>
  );
}

export default SearchResultsItem;
