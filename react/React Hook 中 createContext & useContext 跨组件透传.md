## React Hook 中 createContext & useContext 跨组件透传

### createContext

- context-manager.js

```js
import React from "react";
export const MyContext = React.createContext(null);
```

### 父组件 createContext 中 Provider 提供上下文 value , setSelectId 可以被子组件获取使用

```js
const [selectId, setSelectId] = useState("all");

<MyContext.Provider value={{ setSelectId }}>
  <Trash select={selectId} />
</MyContext.Provider>;
```

## 子组件: 使用 useContext 获取上下文

```js
import { MyContext } from "./context-manager";
const { setSelectId } = useContext(MyContext); //子组件使用setSelectId直接改父组件数据
```
