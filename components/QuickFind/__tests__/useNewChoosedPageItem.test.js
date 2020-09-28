function useNewChoosedPageItem(event, newChoosedPageItem) {
  let num = newChoosedPageItem;
  if (event === 'ArrowUp') {
    num--;
    if (num < 0) {
      num = 0;
    }
  } else if (event === 'ArrowDown') {
    num++;
  }
  return num;
}

describe('Item at Top ', () => {
  it('Keyboard ArrowUp ', () => {
    const res = useNewChoosedPageItem('ArrowUp', 0);
    expect(res).toBe(0);
  });

  it('Keyboard ArrowDown ', () => {
    const res = useNewChoosedPageItem('ArrowDown', 0);
    expect(res).toBe(1);
  });
});

describe('Item at Other', () => {
  it('Keyboard ArrowUp ', () => {
    const res = useNewChoosedPageItem('ArrowUp', 10);
    expect(res).toBe(9);
  });

  it('Keyboard ArrowDown ', () => {
    const res = useNewChoosedPageItem('ArrowDown', 10);
    expect(res).toBe(11);
  });
});
