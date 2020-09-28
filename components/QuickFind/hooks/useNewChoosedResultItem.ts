/**
 * 搜索结果list项目键盘事件跳转
 * @param {listItemHeight[num] } 子项目高度数组
 * @param {listWrapHeight}  可显示的父级高度
 * @param {newChoosedResultItem} 当前选中项目index(下标)
 * @param {① listItemOffsetTop[num]} 子项目距离顶部高度数组 (高度固定)
 * @param {② listWrapScrollTop} 父级滚动过去的距离
 * @param {③ listItemOffsetTop[0]}  (第一个子项目距离顶部高度)
 * @param {④ AltitudeDifference} 子项目顶部距离父级显示区域顶部高度(用来判断临界条件)
 * @param AltitudeDifference = listItemOffsetTop[n] -  listWrapScrollTop - listItemOffsetTop[0] (即① - ② - ③ )
 * @returns
 */

interface Params {
  event: React.SyntheticEvent<HTMLInputElement>;
  DivEl: any;
  newChoosedResultItem: number;
  searchResultsData: any;
  listItemOffsetTop: any;
  listItemHeight: any;
}

function useNewChoosedResultItem({
  event,
  DivEl,
  newChoosedResultItem,
  searchResultsData,
  listItemOffsetTop,
  listItemHeight,
}: Params): number {
  const listWrapHeight = (DivEl.current as any).clientHeight;
  const listWrapScrollTop = (DivEl.current as any).scrollTop;

  let num = newChoosedResultItem;
  let leng = searchResultsData.length;

  if ((event as any).key === 'ArrowUp') {
    num--;
    if (num < 0) {
      num = 0;
    }
    const AltitudeDifference =
      listItemOffsetTop[num] - listWrapScrollTop - listItemOffsetTop[0];
    if (AltitudeDifference < 0) {
      (DivEl.current as any).scrollBy(0, AltitudeDifference);
    }
  } else if ((event as any).key === 'ArrowDown') {
    num++;
    if (num > leng - 1) {
      num = leng - 1;
    }
    const AltitudeDifference =
      listItemOffsetTop[num] - listWrapScrollTop - listItemOffsetTop[0];
    if (AltitudeDifference + listItemHeight[num] > listWrapHeight) {
      (DivEl.current as any).scrollBy(
        0,
        AltitudeDifference + listItemHeight[num] - listWrapHeight,
      );
    }
  }
  return num;
}

export default useNewChoosedResultItem;
