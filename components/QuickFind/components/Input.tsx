import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import CancelIcon from '@material-ui/icons/Cancel';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import { styled } from '@material-ui/core/styles';

const Root = styled('div')(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  };
});

const Icon = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 18,
  height: 18,
  position: 'absolute',
  color: '#eee',
});

const Cancelicon = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  width: 22,
  height: 25,
  right: 6,
  cursor: 'pointer',
  color: '#eee',
});

const TrashInput = styled('input')({
  width: '100%',
  border: 'none',
  height: 52,
  paddingLeft: 28,
  paddingRight: 22,
  outline: 'none',
  fontSize: 16,
  fontWeight: 500,
  color: '#eee',
  backgroundColor: 'rgb(0,0,0,0)',
});

const useThemeStyles = makeStyles(theme => {
  const Input = theme && (theme as any).components.workspace.QuickFind.Input;
  return {
    input: {
      color: Input.input.color,
      '&::-webkit-input-placeholder': {
        color: Input.input.placeholder.color,
      },
      '&::-moz-placeholder': {
        color: Input.input.placeholder.color,
      },
      '&:-moz-placeholder': {
        color: Input.input.placeholder.color,
      },
      '&::-ms-input-placeholder': {
        color: Input.input.placeholder.color,
      },
    },
    icon: {
      color: Input.icon.color,
    },
    cancelIcon: {
      color: Input.cancelIcon.color,
    },
  };
});

export function resolveOnChange(
  e:
    | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    | React.MouseEvent<HTMLElement, MouseEvent>,
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void,
) {
  if (onChange) {
    let event = e;
    if (e.type === 'click') {
      event = Object.create(e);
      onChange(
        event as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      );
      return;
    }
    onChange(
      event as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    );
  }
}

interface InputProps {
  isLoding?: boolean;
  placeholder?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onKeyDown?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps) {
  const { isLoding, placeholder, onChange, ...other } = props;
  const [value, setValue] = useState('');
  const handleClearValue = () => {
    setValue('');
  };
  const themeClasses = useThemeStyles();
  const inputEl = useRef<HTMLInputElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    resolveOnChange(e, onChange);
    setValue(e.target.value);
  };
  useEffect(() => {
    inputEl.current && inputEl.current.focus();
  });
  return (
    <Root>
      <Icon className={themeClasses.icon}>
        {isLoding ? (
          <CircularProgress color="inherit" size={18} />
        ) : (
          <SearchIcon style={{ fontSize: 24 }} />
        )}
      </Icon>
      <TrashInput
        ref={inputEl}
        className={themeClasses.input}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...other}
      />
      <Cancelicon
        className={themeClasses.cancelIcon}
        onClick={handleClearValue}
      >
        {value !== '' && <CancelIcon style={{ fontSize: 16 }} />}
      </Cancelicon>
    </Root>
  );
}

export default Input;
