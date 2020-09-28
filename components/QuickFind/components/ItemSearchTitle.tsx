import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import SortButton from './SortButton';

const Root = styled('div')({
  display: 'flex',
  alignItems: 'center',
  height: 32,
  marginLeft: 14,
  marginRight: 14,
  userSelect: 'none',
});

const Title = styled('div')({
  fontSize: 12,
  marginRight: 6,
  color: 'rgba(55, 53, 47, 0.4)',
});

const useThemeStyles = makeStyles(theme => {
  const ItemSearchTitle =
    theme && (theme as any).components.workspace.QuickFind.ItemSearchTitle;
  return {
    title: {
      color: ItemSearchTitle.title.color,
    },
  };
});

interface ItemSearchTitleProps {
  text?: string;
  onClick: (...args: any) => any;
}

function ItemSearchTitle(props: ItemSearchTitleProps) {
  const { text, onClick } = props;
  const themeClasses = useThemeStyles();
  return (
    <Root>
      <Title className={themeClasses.title}>{text}</Title>
      <SortButton onClick={onClick} />
    </Root>
  );
}

export default ItemSearchTitle;
