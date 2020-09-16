function useNewChoosedResultItem({
  event,
  DivEl,
  newChoosedResultItem,
  searchResultsData,
  listItemOffsetTop,
  listItemHeight,
}) {
  const listWrapHeight = DivEl.current.clientHeight;
  const listWrapScrollTop = DivEl.current.scrollTop;

  let num = newChoosedResultItem;
  let leng = searchResultsData.length;

  if (event === 'ArrowUp') {
    num--;
    if (num < 0) {
      num = 0;
    }
    const AltitudeDifference =
      listItemOffsetTop[num] - listWrapScrollTop - listItemOffsetTop[0];
    if (AltitudeDifference < 0) {
      DivEl.current.scrollBy(0, AltitudeDifference);
    }
  } else if (event === 'ArrowDown') {
    num++;
    if (num > leng - 1) {
      num = leng - 1;
    }
    const AltitudeDifference =
      listItemOffsetTop[num] - listWrapScrollTop - listItemOffsetTop[0];
    if (AltitudeDifference + listItemHeight[num] > listWrapHeight) {
      DivEl.current.scrollBy(
        0,
        AltitudeDifference + listItemHeight[num] - listWrapHeight,
      );
    }
  }
  return num;
}

const testListItemOffsetTop = [100, 150, 170, 200, 255, 300, 500, 340, 240];
const testListItemHeight = [60, 50, 70, 100, 60, 60, 60, 120, 140, 40];
const testDivEl = {
  current: {
    clientHeight: 100,
    scrollTop: 150,
    scrollBy: (level, height) => {
      return level + height;
    },
  },
};
const testSearchResultsData = {
  length: 200,
};

describe('Item at Top', () => {
  it('Keyboard ArrowUp', () => {
    const res = useNewChoosedResultItem({
      event: 'ArrowUp',
      DivEl: testDivEl,
      newChoosedResultItem: 0,
      searchResultsData: testSearchResultsData,
      listItemOffsetTop: testListItemOffsetTop,
      listItemHeight: testListItemHeight,
    });
    expect(res).toBe(0);
  });
  it('Keyboard ArrowDown', () => {
    const res = useNewChoosedResultItem({
      event: 'ArrowDown',
      DivEl: testDivEl,
      newChoosedResultItem: 0,
      searchResultsData: testSearchResultsData,
      listItemOffsetTop: testListItemOffsetTop,
      listItemHeight: testListItemHeight,
    });
    expect(res).toBe(1);
  });
});

describe('Item at Mid', () => {
  it('Keyboard ArrowUp', () => {
    const res = useNewChoosedResultItem({
      event: 'ArrowUp',
      DivEl: testDivEl,
      newChoosedResultItem: 10,
      searchResultsData: testSearchResultsData,
      listItemOffsetTop: testListItemOffsetTop,
      listItemHeight: testListItemHeight,
    });
    expect(res).toBe(9);
  });

  it('Keyboard ArrowDown', () => {
    const res = useNewChoosedResultItem({
      event: 'ArrowDown',
      DivEl: testDivEl,
      newChoosedResultItem: 10,
      searchResultsData: testSearchResultsData,
      listItemOffsetTop: testListItemOffsetTop,
      listItemHeight: testListItemHeight,
    });
    expect(res).toBe(11);
  });
});

describe('Item at Bottom', () => {
  it('Keyboard ArrowUp', () => {
    const res = useNewChoosedResultItem({
      event: 'ArrowUp',
      DivEl: testDivEl,
      newChoosedResultItem: 199,
      searchResultsData: testSearchResultsData,
      listItemOffsetTop: testListItemOffsetTop,
      listItemHeight: testListItemHeight,
    });
    expect(res).toBe(198);
  });

  it('Keyboard ArrowDown', () => {
    const res = useNewChoosedResultItem({
      event: 'ArrowDown',
      DivEl: testDivEl,
      newChoosedResultItem: 199,
      searchResultsData: testSearchResultsData,
      listItemOffsetTop: testListItemOffsetTop,
      listItemHeight: testListItemHeight,
    });
    expect(res).toBe(199);
  });
});
test('toEqual匹配器', () => {
  const one = 0.1;
  const two = 0.2;
  expect(one + two).toBeCloseTo(0.3);
});
