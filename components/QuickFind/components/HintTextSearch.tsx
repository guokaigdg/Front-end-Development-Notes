import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';

const Root = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: '5px 14px',
});

const Count = styled('span')({
  fontSize: 12,
  lineHeight: `15px`,
  fontWeight: 500,
  color: 'rgba(55, 53, 47, 0.6)',
  marginRight: 3,
});

const Text = styled('span')({
  lineHeight: `15px`,
  fontSize: 12,
  marginRight: 6,
});

const useThemeStyles = makeStyles(theme => {
  const HintTextSearch =
    theme && (theme as any).components.workspace.QuickFind.HintTextSearch;
  return {
    count: {
      color: HintTextSearch.count.color,
    },
    text: {
      color: HintTextSearch.text.color,
    },
  };
});

interface HintTextSearchProps {
  count?: number | string;
  isLoding?: boolean;
}

function HintTextSearch(props: HintTextSearchProps) {
  const { count, isLoding } = props;
  const themeClasses = useThemeStyles();
  return (
    <Root>
      <Count className={themeClasses.count}>{count}</Count>
      <Text className={themeClasses.text}>results</Text>
      {isLoding && (
        <CircularProgress
          className={themeClasses.text}
          color="inherit"
          size={10}
        />
      )}
    </Root>
  );
}

export default HintTextSearch;
