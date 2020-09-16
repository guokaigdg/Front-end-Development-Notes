import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DoneIcon from '@material-ui/icons/Done';
import { styled } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';

const CustomButoon = withStyles({
  root: {
    height: 20,
    fontSize: 12,
    fontWeight: 400,
    borderRadius: 3,
    padding: `0px 4px`,
    color: '#eee',
    '&:hover': {
      backgroundColor: '#eee',
    },
    '&:active': {
      backgroundColor: '#eee',
    },
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const ItemList = styled('div')({
  backgroundColor: '#eee',
});

const Item = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 200,
  height: 28,
  lineHeight: '28px',
  fontSize: 14,
  padding: `0px 14px`,
  color: '#eee',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#eee',
  },
  '&:active': {
    backgroundColor: '#eee',
  },
});

const useThemeStyles = makeStyles(theme => {
  const SortButton =
    theme && (theme as any).components.workspace.QuickFind.SortButton;
  return {
    button: {
      color: SortButton.button.color,
      '&:hover': {
        backgroundColor: SortButton.button.hover.backgroundColor,
      },
      '&:active': {
        backgroundColor: SortButton.button.active.backgroundColor,
      },
    },
    itemList: {
      backgroundColor: SortButton.itemList.backgroundColor,
    },
    item: {
      color: SortButton.item.color,
      '&:hover': {
        backgroundColor: SortButton.item.hover.backgroundColor,
      },
      '&:active': {
        backgroundColor: SortButton.item.active.backgroundColor,
      },
    },
  };
});

const CheckedIcon = () => {
  return <DoneIcon style={{ fontSize: 14, color: 'rgb(46, 170, 220)' }} />;
};

interface SortButtonProps {
  onClick: (...args: any) => any;
}

function SortButton(props: SortButtonProps) {
  const { onClick } = props;
  const [option, setOption] = useState('bestmatches');
  const [newTitle, setNewTitle] = useState('默认最佳排序');

  const code: string[] = [
    'bestMatches',
    'newestFirstLastEdited',
    'oldestFirstLastEdited',
    'newestFirstCreated',
    'oldestFirstCreated',
  ];
  const name: string[] = [
    '默认最佳排序',
    '最新编辑排序',
    '最晚编辑排序',
    '最晚创建时间排序',
    '最早创建时间排序',
  ];
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickItem = (index: number) => {
    onClick(code[index]);
    setOption(code[index]);
    setNewTitle(name[index]);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const themeClasses = useThemeStyles();

  return (
    <div>
      <CustomButoon
        className={themeClasses.button}
        aria-describedby={id}
        onClick={handleClick}
      >
        {newTitle}
        <ExpandMoreIcon style={{ fontSize: 12 }} />
      </CustomButoon>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <ItemList className={themeClasses.itemList}>
          {name.map((item: string, index: number) => (
            <Item
              key={index}
              className={themeClasses.item}
              onClick={() => handleClickItem(index)}
            >
              {item}
              {option === code[index] && <CheckedIcon />}
            </Item>
          ))}
        </ItemList>
      </Popover>
    </div>
  );
}

export default SortButton;
