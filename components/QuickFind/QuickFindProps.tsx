import React from 'react';

export interface notFindTextType {
  title: string;
  des: string;
}
[];

export interface recentSearchesDataType {
  text: string;
}
[];

export interface recentPagesDataType {
  icon: string;
  title: string;
}
[];

export interface searchResultsDataType {
  length: string | number | undefined;
  icon: string;
  title: string;
  des: string;
}
[];

export interface QuickFindProps {
  isLoding?: boolean;
  isNotFind?: boolean;
  placeholder?: string;
  notFindText?: notFindTextType | null;
  recentPagesData?: recentPagesDataType | null;
  recentSearchesData?: recentSearchesDataType | null;
  searchResultsData?: searchResultsDataType | null;
  onSearch?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onSortRules: (...args: any) => any;
  onClickItem: (...args: any) => any;
}
