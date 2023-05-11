# React 组件用到的 ts 类型

## 创建 ts 项目 createreactapp myapp typescript

https://www.jianshu.com/p/5ba6d409131e

### 设置默认值

```js
static defaultProps = {
    duration: 2000
}
```

## TypeScript 类型

### React 事件类型

| 情况             | 类别                |
| ---------------- | ------------------- |
| 点击事件         | React.MouseEvent    |
| 键盘事件         | React.keyboardEvent |
| 拖拽事件         | React.DragEvent     |
| 焦点事件         | React.FocusEvent    |
| 表单域值变更事件 | React.ChangeEvent   |
| 表单提交事件     | React.FormEvent     |
| 鼠标滚动事件     | React.WheelEvent    |
| 触摸事件         | React.TouchEvent    |

###  useState 定义

```
const [state, setState] = useState<HTMLDivElement>(null);
const [state, setState] = useState<HTMLInputElement>(null);
```

### 1. string / number / boolean ;

```js
name?:string;
num?: number;
isOpen?:boolean
```

### 2. 点击事件

```js
onClick:(event:React.MouseEvent<HTMLButtonElement>)=>void;

onClick?: (event: React.SyntheticEvent) => void;

onClick: (...args: any) => any;

// React.MouseEventHandler<HTMLAnchorElement>
onClick: React.MouseEventHandler<HTMLAnchorElement>;

// React.MouseEventHandler<SVGElement>
onClick: React.MouseEventHandler<SVGElement>;

// React.MouseEventHandler<HTMLElement>
onClick?: React.MouseEventHandler<HTMLElement>;

// React.MouseEventHandler<JSX.Element | HTMLElement>
onClick?: React.MouseEventHandler<JSX.Element | HTMLElement>;
```

### 3.表单事件

```js
onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
```

### 4.元素类型

```js
 children?: React.ReactNode;
```
| 情况          | 类别               |
| ------------- | ------------------ |
| 字符串、数字  | React.ReactText    |
| 单个 jsx 元素 | React.ReactElement |
| 多个 jsx 元素 | React.ReactNode    |
| portal        | React.ReactPortal  |



### 5. React.CSSProperties;

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

### 🌰 例子

```js
renderCustomControls?: () => React.ReactNode;
renderItem?: (item: ReactImageGalleryItem) => React.ReactNode;
items: ReactImageGalleryItem[];
onScreenChange?: (fullScreenElement: Element) => void;
onPause?: (currentIndex: number) => void;
onClick?: (event: React.MouseEventHandler<HTMLDivElement>) => void;
onThumbnailError?: (event: React.ReactEventHandler<HTMLImageElement>) => void;
onThumbnailClick?: (event: React.MouseEventHandler<HTMLAnchorElement>, index: number) => void;
renderLeftNav?: (onClick: React.MouseEventHandler<HTMLElement>, isDisabled: boolean) => React.ReactNode;
```

