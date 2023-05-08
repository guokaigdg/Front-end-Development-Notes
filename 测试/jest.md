## 1. 官网jest

[Mock Functions · Jest](https://jestjs.io/docs/en/mock-functions)

### 1.1 相关文档

[使用jest+enzyme进行react项目测试 - 测试手法篇](http://echizen.github.io/tech/2017/02-12-jest-enzyme-method)

[Jest & enzyme 进行react单元测试](https://juejin.im/post/6844903763526828045#heading-1)

[使用 enzyme + jest 测试 React 组件](https://juejin.im/post/6844903938001469448#heading-2)



[](https://www.bilibili.com/video/av711807984?p=1)

[](https://www.bilibili.com/video/av711807984?p=1)

```jsx

it('test', () => {
    const container = document.createElement('div');
    ReactDOM.render(<ItremList items={[]} />, container);
    expect(container.textContent).toMatch('no item');
});

```

## 2. 基础断言类型匹配

> toBe()    ===
> 

匹配器，是在工作中最常用的一种匹配器，简单的理解它就是相等。这个相当是等同于===的，也就是我们常说的严格相等。

> toEqual()   ==
> 

那你说我想让上面的测试结果是正确的，这时候我需要使用什么匹配器那？那就是使用toEqual()匹配器。可以把它理解成只要内容相等，就可以通过测试，比如修改代码如下: <👿>所以说当你不严格匹配但要求值相等时时就可以使用toEqual（）匹配器。

> toBeNull()
> 

匹配器只匹配null值，需要注意的是不匹配undefined的值。我们复制上面的代码，然后把代码修改成如下形式：

> toBeUndifined()
> 

那我们要匹配undefined时，就可以使用toBeUndifined()匹配器，比如写成如下代码。

> toBeDefined()
> 

匹配器的意思是只要定义过了，都可以匹配成功，例如下面的代码：

> toBeTruthy()
> 

这个是`true`和`false`匹配器，就相当于判断真假的。比如说写下面这样一段代码:

> toBeFalsy()
> 

有真就有假，跟toBeTruthy()对应的就是toBeFalsy,这个匹配器只要是返回的false就可以通过测试。

## 如何判定输出包括的内容

## **`toContain(item)`**

Use `.toContain` when you want to check that an item is in an array. For testing the items in the array, this uses `===`, a strict equality check. `.toContain` can also check whether a string is a substring of another string.

使用。当你想检查一个项目是否在一个数组中时。对于测试数组中的项，这使用 = = = ，一个严格的相等性检查。.toContain 还可以检查一个字符串是否是另一个字符串的子字符串。

## 钩子函数

> beforeAll()
> 

钩子函数的意思是在所有测试用例之前进行执行。

```jsx
afterAll(()=>{
    console.log('在所有测试用例之前进行执行')
})
```

> afterAll()
> 

钩子函数是在完成所有测试用例之后才执行的函数。

> beforeEach()
> 

钩子函数，是在每个测试用例前都会执行一次的钩子函数

> afterEach()
> 

钩子函数，是在每次测试用例完成测试之后执行一次的钩子函数，比如下面的代码。

## .length

```jsx
import { shallow } from 'enzyme';

const toDoList = shallow(<ToDoList tasks={tasks} />); 
expect(toDoList.find('li').length).toEqual(tasks.length);

```

# 测试React组件我们采用`Enzyme`工具库，它提供3种组件渲染方式：

1. `Shallow`：不会渲染子组件
2. `Mount`: 渲染子组件，同时包含生命周期函数如`componentDidMount`
3. `Render`: 渲染子组件，但不会包含生命周期，同时可用的API也会减少比如`setState()`

# 应该正确的呈现（渲染）

### render

```jsx

**it('should render correctly', () => { 
	const wrapper = render(
		<Radio *className*="customized">Test</Radio>
	);
  expect(wrapper).toMatchSnapshot(); 
});

// 二  引入import
import toJson from 'enzyme-to-json';
it('should render correctly', () => {
    const wrapper = render(
      <ThemeWrap>
        <BorderTitleView />
      </ThemeWrap>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });**
```

### mount

```jsx
**it('mount correctly', () => { 
	expect(() => mount(<Button>Follow</Button>)).not.toThrow(); 
});**
```

# State 改变值测试、

### 点击完成UI显示的会变化

```jsx
test('Change value of name', () => {
    // 先確認 input 的 value 屬性
    expect(counter.find('div').find('input').props().value).toBe('無名氏')
    // setState
    counter.setState({ name: '神Ｑ超人' })
    // 確認 sate 及 span 中的文字是否改變
    expect(counter.find('div').find('input').props().value).toBe('神Ｑ超人')
    expect(counter.find('div').find('span').text()).toBe('神Ｑ超人點了 1 下')
})
```

```jsx
const keyInput = enzymeWrapper.find('input').at(1)
keyInput.simulate('change', { target: { value: 'RoleKey' } })
```

# UI交互测试

### snapshot

snapshot 快照测试第一次运行的时候会将 React 组件在不同情况下的渲染结果保存一份快照文件。后面每次运行快照测试的时候，都会和第一次比较，想要生成新的快照文件添加 `u` 参数生成新的快照文件。快照文件是以 `.snap` 结尾的文件，会在运行测试的时候存放在 `__snapshots__` 文件夹下。

## 测试点击事件

```jsx
describe('点击事件', () => {
  it('多次点击事件记录', () => {
    const num = [];
    const wrapper = mount(
      <ThemeWrap>
        <Button type="primary">点击</Button>
      </ThemeWrap>,
    );
    wrapper.find('button').simulate('click');
    num.push(1);
    wrapper.find('button').simulate('click');
    num.push(2);
    console.log(num);
    let numleng = expect(num.length).toBe(2);
  });
});
```

```jsx
describe('点击事件', () => {
  it('按钮 onClick 事件', () => {
    let state = 'default';
    const handleClick = res => {
      state = res;
    };
    const wrapper = mount(
      <ThemeWrap>
        <SettingRoundRadioButtonGroupView
          data={[
            {
              language: '中文',
              country: '简体中文(中国)',
              icon:
                'https://discordapp.com/assets/b2da62f020089ccee92860e4defafdb4.png',
            },
            {
              language: '日本語',
              country: '日语',
              icon:
                'https://discordapp.com/assets/f23c5c28c4429691f7c54af93876d661.png',
            },
          ]}
          onClick={res => handleClick(res)}
        />
      </ThemeWrap>,
    );
    wrapper.find('Styled(div)').at(1).simulate('click');
    expect(state.language).toBe('中文');
  });
});
```

```jsx
it('弹窗中 onClose 按钮', () => {
    let state = 'default';
    const onClose = () => {
      state = 'onClose';
    };
    const wrapper = mount(
      <ThemeWrap>
        <ConfirmDialog onClose={onClose} />
      </ThemeWrap>,
    );
    wrapper.find('PrimaryButton').at(0).simulate('click');
    expect(state).toBe('onClose');
  });
```

## onChange

```jsx
test('pass a selected value to the onChange handler', () => {
    const value = '2';
    const onChange = jest.fn();
    const wrapper = shallow(
        <Select items={ITEMS} onChange={onChange} />
    );

    expect(wrapper).toMatchSnapshot();

        wrapper.find('select').simulate('change', {
        target: { value },
    });

    expect(onChange).toBeCalledWith(value);
});

```

# Dom  中元素匹配

```jsx
//wrapper.text()
  it('should not insert space to link or text button', () => {
    const wrapper = mount(
      <ThemeWrap>
        <Button type="text">123</Button>
      </ThemeWrap>,
    );
    expect(wrapper.text()).toBe('123');
  });
```

获取Dom中的值

```jsx
//组件带引号
console.log(wrapper.find('ForwardRef(Backdrop)').at(0).props().open);

//组件不带引号也可以
console.log(wrapper.find(SettingContainer).text());
```

```jsx
<EmojiIcon size={100} symbol="🍉" onClick={[Function: onClick]}>
          <Styled(span) className="makeStyles-root-10 makeStyles-root-11" role="img" aria-label="" aria-hidden="true" onClick={[Function: onClick]}>
            <span className="span-root-12 makeStyles-root-10 makeStyles-root-11" role="img" aria-label="" aria-hidden="true" onClick={[Function: onClick]}>
              🍉
            </span>
          </Styled(span)>
        </EmojiIcon>

console.log(wrapper.find(EmojiIcon).props().size); // 100

//相同Dom结构时候取数据

it('should warning correctly', () => {
    const wrapper = mount(
      <ThemeWrap>
        <Input type="default" />
        <Input type="warning" />
      </ThemeWrap>,
    );
    expect(wrapper.find(Input).at(0).props().type).toBe('default');
    expect(wrapper.find(Input).at(1).props().type).toBe('warning');
  });
```

## toJson

```jsx
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Input correctly ', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <ThemeWrap>
        <Input />
      </ThemeWrap>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
```

## onClick事件

```jsx
it('选中按钮 onClick 事件', () => {
    const onClickItem = jest.fn();
    const wrapper = mount(
      <ThemeWrap>
        <SettingDirectory
          select={'/setting/usersettingsaccount'}
          data={data}
          onClick={onClickItem}
        />
      </ThemeWrap>,
    );
    wrapper.find('DirectoryButton').at(0).simulate('click');
    expect(onClickItem).toHaveBeenCalled();
    expect(onClickItem).toHaveBeenCalledTimes(1);
    wrapper.find('DirectoryButton').at(0).simulate('click');
    expect(onClickItem).toHaveBeenCalled();
    expect(onClickItem).toHaveBeenCalledTimes(2);
    jest.clearAllMocks();
  });
```

```jsx
it('onChange get value', () => {
    let eventObject;
    let eventObjectValue;
    const onChange = e => {
      eventObject = e;
      eventObjectValue = e.target.value;
    };
    const wrapper = mount(
      <ThemeWrap>
        <SettingInput value="value测试数据" onChange={onChange} />
      </ThemeWrap>,
    );
    expect(wrapper.find('SettingInput').props().value).toBe('value测试数据');
    wrapper.find('input').simulate('change');
    expect(eventObject.type).toBe('change');
    expect(eventObjectValue).toBe('value测试数据');
  });
});
```

```jsx
import {
  mountTest,
  renderTest,
} from '../../../../../../tests/common/mountTest';

describe('DirectoryButton Correctly ', () => {
  mountTest(() => <DirectoryButton />);
  renderTest(() => <DirectoryButton />);
});
```

```jsx
export interface notFindTextType {
  title: string;
  des: string;
}
[];
```

## 前后DOM变化对比

```jsx
const enterBefore = wrapper.html();
    wrapper.find(Tree).find('.div-root-371').at(0).simulate('mouseEnter');
    const enterAfter = wrapper.html();
    expect(enterBefore).not.toEqual(enterAfter);
```

```jsx
it('warning if set `value`', () => {
    resetWarned();

    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    mount(<Checkbox value />);
    expect(errorSpy).toHaveBeenCalledWith(
      'Warning: [antd: Checkbox] `value` is not a valid prop, do you mean `checked`?',
    );
    errorSpy.mockRestore();
  });
```

## 发现的问题

传递 Data 不存在问题 ，null 如何处理 data.length() 没有数据就报错 data && 

1. 接口数据类型定义不明确，由原来any改成 具体类型
2. 删除组件接口/函数参数多余的无用类型定义
3. 涉及input标签的组件， 存在有value无onChange现警告问题
4. 文本过长显示异常问题，做缩略显示处理


