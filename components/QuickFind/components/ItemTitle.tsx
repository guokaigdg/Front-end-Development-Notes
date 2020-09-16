import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';

const Root = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 30,
  marginTop: 2,
  marginLeft: 14,
  marginRight: 14,
  userSelect: 'none',
});

const Title = styled('div')({
  display: 'flex',
  alignItems: 'center',
  fontSize: 11,
  fontWeight: 500,
  color: 'rgba(55, 53, 47, 0.6)',
});

const Button = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  fontSize: 11,
  fontWeight: 500,
  width: 35,
  height: 20,
  borderRadius: 3,
  color: 'rgba(55, 53, 47, 0.6)',
  cursor: 'pointer',
});

const useThemeStyles = makeStyles(theme => {
  const ItemTitle =
    theme && (theme as any).components.workspace.QuickFind.ItemTitle;
  return {
    title: {
      color: ItemTitle.title.color,
    },
    button: {
      color: ItemTitle.button.color,
      '&:hover': {
        backgroundColor: ItemTitle.button.hover.backgroundColor,
      },
      '&:active': {
        backgroundColor: ItemTitle.button.active.backgroundColor,
      },
    },
  };
});

interface ItemTitleProps {
  text?: string;
  isShowButton?: boolean;
  onClick: (...args: any) => any;
}

function ItemTitle(props: ItemTitleProps) {
  const { text, isShowButton, onClick } = props;
  const themeClasses = useThemeStyles();
  return (
    <Root>
      <Title className={themeClasses.title}>{text}</Title>
      {isShowButton && (
        <Button className={themeClasses.button} role="button" onClick={onClick}>
          清除
        </Button>
      )}
    </Root>
  );
}

export default ItemTitle;
