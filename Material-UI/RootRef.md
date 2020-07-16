### RootRef

https://material-ui.com/zh/api/root-ref/#rootref-api

```js
import RootRef from "@material-ui/core/RootRef";
```

```js
function SidebarSwitch(props: SidebarSwitchProps) {
  const { icon, text, onClick } = props;
  const handleClick = () => {
    onClick(ref.current);
  };
  const ref = useRef();
  const themeClasses = useThemeStyles();
  return (
    <RootRef rootRef={ref}>
      <CustomMenuItem disableGutters={true} onClick={handleClick}>
        <Root className={themeClasses.root}>
          <Icon>{icon}</Icon>
          <Title className={themeClasses.title}>{text}</Title>
          <HintIcon>
            <UnfoldMoreIcon style={{ fontSize: 15 }} />
          </HintIcon>
        </Root>
      </CustomMenuItem>
    </RootRef>
  );
}
```
