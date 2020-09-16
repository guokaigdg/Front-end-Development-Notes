import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';

const Root = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '32px 0px',
});

const Title = styled('span')({
  lineHeight: `20px`,
  fontSize: 14,
  fontWeight: 500,
  color: 'rgba(55, 53, 47, 0.6)',
});

const Des = styled('span')({
  lineHeight: `16px`,
  marginTop: 2,
  fontSize: 14,
  color: 'rgba(55, 53, 47, 0.4)',
});

const useThemeStyles = makeStyles(theme => {
  const NotFindItem =
    theme && (theme as any).components.workspace.QuickFind.NotFindItem;
  return {
    title: {
      color: NotFindItem.title.color,
    },
    text: {
      color: NotFindItem.text.color,
    },
  };
});

interface NotFindItemProps {
  data?: any;
}

function NotFindItem(props: NotFindItemProps) {
  const { data } = props;
  const themeClasses = useThemeStyles();
  return (
    <Root>
      <Title className={themeClasses.title}>{data[0].title}</Title>
      <Des className={themeClasses.text}>{data[0].des}</Des>
    </Root>
  );
}

export default NotFindItem;
