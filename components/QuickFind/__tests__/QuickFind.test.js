import React from 'react';
import QuickFind from '../QuickFind';
import { ThemeWrap } from '@solidoc/theme-ui';
import { mount } from 'enzyme';
import { mountTest, renderTest } from '../../../../../tests/common/mountTest';
import {
  recentPagesData,
  recentSearchesData,
  searchResultsData,
  notFindText,
} from './data';

describe('QuickFind Correctly ', () => {
  mountTest(() => <QuickFind />);
  renderTest(() => <QuickFind />);
});

describe('QuickFind 渲染 ', () => {
  it('render()', () => {
    const wrapper = mount(
      <ThemeWrap>
        <QuickFind />
      </ThemeWrap>,
    );
    expect(wrapper.render()).toMatchSnapshot();
  });
});

describe('参数渲染', () => {
  it('不传递参数', () => {
    expect(
      <ThemeWrap>
        <QuickFind />
      </ThemeWrap>,
    ).toMatchSnapshot();
  });

  it('参数 isLoding | placeholder', () => {
    const wrapper = mount(
      <ThemeWrap>
        <QuickFind
          isLoding={true}
          isNotFind={false}
          notFindText={notFindText}
          placeholder="Search 工作区.."
          onSearch={() => {}}
          recentPagesData={recentPagesData}
          recentSearchesData={recentSearchesData}
          searchResultsData={null}
          onSortRules={() => {}}
          onClickItem={() => {}}
        />
      </ThemeWrap>,
    );
    expect(wrapper.render()).toMatchSnapshot();
    expect(wrapper.find('QuickFind').at(0).props().isLoding).toBe(true);
    expect(wrapper.find('QuickFind').at(0).props().placeholder).toBe(
      'Search 工作区..',
    );
  });

  it('参数 isNotFind | notFindText ', () => {
    const wrapper = mount(
      <ThemeWrap>
        <QuickFind
          isLoding={true}
          isNotFind={true}
          notFindText={notFindText}
          placeholder="Search 工作区.."
          onSearch={() => {}}
          recentPagesData={recentPagesData}
          recentSearchesData={null}
          searchResultsData={null}
          onSortRules={() => {}}
          onClickItem={() => {}}
        />
      </ThemeWrap>,
    );
    expect(wrapper.render()).toMatchSnapshot();
    expect(wrapper.find('Styled(span)').at(0).text()).toBe('没有找到匹配项');
    expect(wrapper.find('Styled(span)').at(1).text()).toBe(
      '请尝试不同的搜索关键词',
    );
  });

  it('参数searchResultsData ', () => {
    const wrapper = mount(
      <ThemeWrap>
        <QuickFind
          isLoding={true}
          isNotFind={false}
          notFindText={notFindText}
          placeholder="Search 工作区.."
          onSearch={e => {
            setValue(e.target.value);
          }}
          recentPagesData={null}
          recentSearchesData={null}
          searchResultsData={searchResultsData}
          onSortRules={() => {}}
          onClickItem={() => {}}
        />
      </ThemeWrap>,
    );
    expect(wrapper.render()).toMatchSnapshot();
    // expect(wrapper.find('QuickFind').at(0).props().isLoding).toBe(true);
    // expect(wrapper.find('QuickFind').at(0).props().isNotFind).toBe(true);
  });
});

describe('onChange事件', () => {
  it('onChange 函数回调', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <ThemeWrap>
        <QuickFind
          isLoding={true}
          isNotFind={false}
          notFindText={notFindText}
          placeholder="Search 工作区.."
          onSearch={onChange}
          recentPagesData={recentPagesData}
          recentSearchesData={recentSearchesData}
          searchResultsData={null}
          onSortRules={() => {}}
          onClickItem={() => {}}
        />
      </ThemeWrap>,
    );
    wrapper.find('input').at(0).simulate('keydown');
    wrapper.find('input').at(0).simulate('change');
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(1);
    wrapper.find('input').at(0).simulate('change');
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(2);
    jest.clearAllMocks();
  });
});

describe('onMouseEvent事件', () => {
  it('onMouseEvent', () => {
    const wrapper = mount(
      <ThemeWrap>
        <QuickFind
          isLoding={true}
          isNotFind={false}
          notFindText={notFindText}
          placeholder="Search 工作区.."
          recentPagesData={recentPagesData}
          recentSearchesData={recentSearchesData}
          searchResultsData={null}
          onSortRules={() => {}}
          onClickItem={() => {}}
        />
      </ThemeWrap>,
    );
    const RecentPagesItemBefore = wrapper.html();
    wrapper.find('div').at(10).simulate('mouseMove');
    const RecentPagesItemAfter = wrapper.html();
    expect(RecentPagesItemBefore).not.toEqual(RecentPagesItemAfter);
    wrapper.find('div').at(10).simulate('mouseLeave');
    const RecentPagesItemMouseleaveAfter = wrapper.html();
    expect(RecentPagesItemBefore).toEqual(RecentPagesItemMouseleaveAfter);

    // const RecentSearchesItemBefore = wrapper.html();
    // wrapper.find('div').at(19).simulate('mouseMove');
    // const RecentSearchesItemAfter = wrapper.html();
    // expect(RecentSearchesItemBefore).not.toEqual(RecentSearchesItemAfter);
    // wrapper.find('div').at(19).simulate('mouseLeave');
    // const mouseleaveAfter = wrapper.html();
    // expect(RecentSearchesItemBefore).toEqual(mouseleaveAfter);
  });

  it('onClick 清除', () => {
    const wrapper = mount(
      <ThemeWrap>
        <QuickFind
          isLoding={true}
          isNotFind={false}
          notFindText={notFindText}
          placeholder="Search 工作区.."
          recentPagesData={recentPagesData}
          recentSearchesData={recentSearchesData}
          searchResultsData={null}
          onSortRules={() => {}}
          onClickItem={() => {}}
        />
      </ThemeWrap>,
    );
    // wrapper.find('div').at(10).simulate('mouseMove');
    // console.log(wrapper.debug());
    // const RecentPagesItemBefore = wrapper.html();
    // wrapper.find('ItemTitle').at(0).simulate('click');
    // const RecentPagesItemAfter = wrapper.html();
    // expect(RecentPagesItemBefore).not.toEqual(RecentPagesItemAfter);
    // const RecentSearchesItemBefore = wrapper.html();
    // wrapper.find('ItemTitle').at(1).simulate('click');
    // const RecentSearchesItemAfter = wrapper.html();
    // expect(RecentSearchesItemBefore).not.toEqual(RecentSearchesItemAfter);
  });
});

describe('点击事件', () => {
  it('onSortRules / onClickItem 事件', () => {
    const onChange = jest.fn();
    const onSortRules = jest.fn();
    const onClickItem = jest.fn();
    const wrapper = mount(
      <ThemeWrap>
        <QuickFind
          isLoding={true}
          isNotFind={false}
          notFindText={notFindText}
          placeholder="Search 工作区.."
          onSearch={onChange}
          recentPagesData={null}
          recentSearchesData={null}
          searchResultsData={null}
          onSortRules={onSortRules}
          onClickItem={onClickItem}
        />
      </ThemeWrap>,
    );
    // wrapper.find('QuickFind').at(0).simulate('click');
    // expect(onSortRules).toHaveBeenCalled();
    // expect(onSortRules).toHaveBeenCalledTimes(1);
    // wrapper.find('QuickFind').at(0).simulate('click');
    // expect(onSortRules).toHaveBeenCalled();
    // expect(onSortRules).toHaveBeenCalledTimes(2);
    // wrapper.find('QuickFind').at(0).simulate('click');
    // expect(onClickItem).toHaveBeenCalled();
    // expect(onClickItem).toHaveBeenCalledTimes(1);
    // wrapper.find('QuickFind').at(0).simulate('click');
    // expect(onClickItem).toHaveBeenCalled();
    // expect(onClickItem).toHaveBeenCalledTimes(2);
    // jest.clearAllMocks();
  });
});
