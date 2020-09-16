import React from 'react';
import QuickFind from '../QuickFind';
import { ThemeWrap } from '@solidoc/theme-ui';
import { mount } from 'enzyme';
import { recentPagesData, recentSearchesData, notFindText } from './data';

describe('QuickFind 渲染 ', () => {
  it('参数 recentPagesData = null  | recentSearchesData = null', () => {
    const wrapper = mount(
      <ThemeWrap>
        <QuickFind
          isLoding={false}
          notFindText={notFindText}
          placeholder="Search 工作区.."
          onSearch={() => {}}
          recentPagesData={null}
          recentSearchesData={null}
          searchResultsData={null}
          onSortRules={() => {}}
          onClickItem={() => {}}
        />
      </ThemeWrap>,
    );
    expect(wrapper.render()).toMatchSnapshot();
    // expect(wrapper.find('QuickFind').at(0).props().isLoding).toBe(false);
    // expect(wrapper.find('QuickFind').at(0).props().placeholder).toBe(
    //   'Search 工作区..',
    // );
  });

  it('参数 recentPagesData = data | recentSearchesData = null', () => {
    const wrapper = mount(
      <ThemeWrap>
        <QuickFind
          isLoding={false}
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
    // expect(wrapper.find('QuickFind').at(0).props().isLoding).toBe(false);
    // expect(wrapper.find('QuickFind').at(0).props().placeholder).toBe(
    //   'Search 工作区..',
    // );
  });

  it('参数 recentPagesData = null  | recentSearchesData = data', () => {
    const wrapper = mount(
      <ThemeWrap>
        <QuickFind
          isLoding={false}
          notFindText={notFindText}
          placeholder="Search 工作区.."
          onSearch={() => {}}
          recentPagesData={null}
          recentSearchesData={recentSearchesData}
          searchResultsData={null}
          onSortRules={() => {}}
          onClickItem={() => {}}
        />
      </ThemeWrap>,
    );
    expect(wrapper.render()).toMatchSnapshot();
    // expect(wrapper.find('QuickFind').at(0).props().isLoding).toBe(false);
    // expect(wrapper.find('QuickFind').at(0).props().placeholder).toBe(
    //   'Search 工作区..',
    // );
  });

  it('参数 recentPagesData = data  | recentSearchesData = data', () => {
    const wrapper = mount(
      <ThemeWrap>
        <QuickFind
          isLoding={false}
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
    // expect(wrapper.find('QuickFind').at(0).props().isLoding).toBe(false);
    // expect(wrapper.find('QuickFind').at(0).props().placeholder).toBe(
    //   'Search 工作区..',
    // );
  });
});
