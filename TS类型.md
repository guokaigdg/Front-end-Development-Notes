# 写组件必须用到的 React 类型

## 创建 ts 项目 createreactapp myapp typescript

https://www.jianshu.com/p/5ba6d409131e

### 设置默认值

```js
static defaultProps = {
duration: 2000
}
```

## TypeScript 类型

### #. { useState } 定义

```
const [state, setState] = useState < HTMLDivElement > ( null );
const [state, setState] = useState < HTMLInputElement >( null );
```

### 1. string / number / boolean | object;

```js
name?:string;
num?: number;
isOpen?:boolean

```

### 2. (...args: any) => any;

```js
onClick: (...args: any) => any;
```

### 3.onChange

```js
onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

```

### 4.React.ReactNode;

```js
 children?: React.ReactNode;
```

### 5. 事件 (event: React.SyntheticEvent) => void;

```js
 onClick?: (event: React.SyntheticEvent) => void;
```

### 6. React.MouseEventHandler<SVGElement> / React.MouseEventHandler<SVGElement> / React.MouseEventHandler<JSX.Element | HTMLElement>

```js

 onClick: React.MouseEventHandler<SVGElement>
 onClick?: React.MouseEventHandler<HTMLElement>;
 onClick?: React.MouseEventHandler<JSX.Element | HTMLElement>;
```

5. React.CSSProperties;

```js
 style?: React.CSSProperties;
```

```js
  bulletOnClick?({
      item,
      itemIndex,
      currentIndex,
  }: {
      item: ReactImageGalleryItem;
      itemIndex: number;
      currentIndex: number;
  }): void;
  renderItem?(item?: ReactImageGalleryItem): React.ReactNode;
  renderThumbInner?(item?: ReactImageGalleryItem): React.ReactNode;

}
```

```js
items: ReactImageGalleryItem[];
onSlide?: (currentIndex: number) => void;##
onScreenChange?: (fullScreenElement: Element) => void;
onPause?: (currentIndex: number) => void;
onPlay?: (currentIndex: number) => void;
onClick?: (event: React.MouseEventHandler<HTMLDivElement>) => void;
onThumbnailError?: (event: React.ReactEventHandler<HTMLImageElement>) => void;
onThumbnailClick?: (event: React.MouseEventHandler<HTMLAnchorElement>, index: number) => void;
renderCustomControls?: () => React.ReactNode;
renderLeftNav?: (onClick: React.MouseEventHandler<HTMLElement>, isDisabled: boolean) => React.ReactNode;
renderRightNav?: (onClick: React.MouseEventHandler<HTMLElement>, isDisabled: boolean) => React.ReactNode;
renderPlayPauseButton?: (onClick: React.MouseEventHandler<HTMLElement>, isPlaying: boolean) => React.ReactNode;
renderFullscreenButton?: (onClick: React.MouseEventHandler<HTMLElement>, isFullscreen: boolean) => React.ReactNode;
renderItem?: (item: ReactImageGalleryItem) => React.ReactNode;
renderThumbInner?: (item: ReactImageGalleryItem) => React.ReactNode;
```
