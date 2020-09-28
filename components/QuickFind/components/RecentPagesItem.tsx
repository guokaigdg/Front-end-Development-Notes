import React from 'react';
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

const ItemArea = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: `8px 14px`,
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
  color: '#eee',
});

const Title = styled('div')({
  fontSize: 14,
  fontWeight: 500,
  lineHeight: '20px',
  color: 'rgba(55, 53, 47, 0.6)',
  width: 'calc(75vw - 71px)',
  maxWidth: 529,
  minWidth: 304,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const useThemeStyles = makeStyles(theme => {
  const RecentPagesItem =
    theme && (theme as any).components.workspace.QuickFind.RecentPagesItem;
  return {
    itemChoosed: {
      color: RecentPagesItem.keyboardReturnIcon.color,
      backgroundColor: RecentPagesItem.itemChoosed.backgroundColor,
    },

    title: {
      color: RecentPagesItem.title.color,
    },
  };
});

interface RecentPagesItemProps {
  data?: any;
  choosedItem?: string | number;
  onClick: (...args: any) => any;
  onMouseEvent: (...args: any) => any;
}

function RecentPagesItem(props: RecentPagesItemProps) {
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
            <ItemArea
              className={
                choosedItem === index ? themeClasses.itemChoosed : undefined
              }
              onMouseEnter={() => onMouseEvent(index)}
              onMouseLeave={() => onMouseEvent(index)}
            >
              <LeftArea>
                <EmojiIcon> {item.icon} </EmojiIcon>
                <Title className={themeClasses.title}> {item.title} </Title>
              </LeftArea>
              <KeyboardReturnIcon style={{ fontSize: 16 }} />
            </ItemArea>
          </CustomMenuItem>
        </Root>
      ))}
    </>
  );
}

export default RecentPagesItem;
