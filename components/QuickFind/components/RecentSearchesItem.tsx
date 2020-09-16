import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';

const Root = styled('div')({});

const CustomMenuItem = withStyles({
  root: {
    height: 35,
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0)',
    },
    '&:active': {
      backgroundColor: 'rgba(0,0,0,0)',
    },
  },
})(MenuItem);

const IteamArea = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `8px 14px`,
  width: '100%',
  color: 'rgba(0, 0, 0, 0)',
});
const LeftArea = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const EmojiIcon = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 19,
  height: 19,
  fontSize: 18,
  marginRight: 8,
});

const Title = styled('div')({
  fontSize: 14,
  fontWeight: 500,
  lineHeight: '19px',
  color: 'rgba(55, 53, 47, 0.6)',
  width: 'calc(75vw - 71px)',
  maxWidth: 529,
  minWidth: 304,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const useThemeStyles = makeStyles(theme => {
  const RecentSearchesItem =
    theme && (theme as any).components.workspace.QuickFind.RecentSearchesItem;
  return {
    itemChoosed: {
      color: RecentSearchesItem.keyboardReturnIcon.color,
      backgroundColor: RecentSearchesItem.itemChoosed.backgroundColor,
    },
    icon: {
      color: RecentSearchesItem.icon.color,
    },
    title: {
      color: RecentSearchesItem.title.color,
    },
  };
});

interface RecentSearchesItemProps {
  data?: any;
  onClick: (...args: any) => any;
  choosedItem?: string | number;
  onMouseEvent: (...args: any) => any;
}

function RecentSearchesItem(props: RecentSearchesItemProps) {
  const { data, choosedItem, onMouseEvent, onClick } = props;
  const themeClasses = useThemeStyles();
  return (
    <>
      {data.map((item: any, index: number) => (
        <Root
          key={index}
          onClick={() => {
            onClick(item);
          }}
        >
          <CustomMenuItem disableGutters={true}>
            <IteamArea
              className={
                choosedItem === index ? themeClasses.itemChoosed : undefined
              }
              onMouseEnter={() => onMouseEvent(index)}
              onMouseLeave={() => onMouseEvent(index)}
            >
              <LeftArea>
                <EmojiIcon className={themeClasses.icon}>
                  <SearchIcon style={{ fontSize: 19 }} />
                </EmojiIcon>
                <Title className={themeClasses.title}> {item.text} </Title>
              </LeftArea>
              <KeyboardReturnIcon style={{ fontSize: 16 }} />
            </IteamArea>
          </CustomMenuItem>
        </Root>
      ))}
    </>
  );
}

export default RecentSearchesItem;
