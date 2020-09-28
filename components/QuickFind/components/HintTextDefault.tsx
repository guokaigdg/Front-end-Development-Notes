import React from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';

const Root = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: '5px 14px',
});

const Icon = styled('div')({
  height: 15,
  marginRight: 8,
});

const Text = styled('span')({
  height: 15,
  fontSize: 12,
  marginRight: 16,
});

const Enter = styled('span')({
  height: 15,
  fontSize: 13.2,
  marginRight: 4,
});

const useThemeStyles = makeStyles(theme => {
  const HintTextDefault =
    theme && (theme as any).components.workspace.QuickFind.HintTextDefault;
  return {
    root: {
      color: HintTextDefault.root.color,
    },
    icon: {
      color: HintTextDefault.icon.color,
    },
  };
});

function HintTextDefault() {
  const themeClasses = useThemeStyles();
  return (
    <Root className={themeClasses.root}>
      <Icon className={themeClasses.icon}>
        <ArrowUpwardIcon style={{ fontSize: 16 }} />
        <ArrowDownwardIcon style={{ fontSize: 16 }} />
      </Icon>
      <Text>选择</Text>
      <Enter className={themeClasses.icon}>Enter</Enter>
      <Text>打开</Text>
      <Enter className={themeClasses.icon}> ⌘+Enter</Enter>
      <Text>新标签中打开</Text>
    </Root>
  );
}

export default HintTextDefault;
