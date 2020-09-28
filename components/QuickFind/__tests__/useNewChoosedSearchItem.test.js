function useNewChoosedSearchItem({
  event,
  newChoosedSearchItem, //当前的选项
  searchesLeng,
}) {
  let num = newChoosedSearchItem;

  if (event === 'ArrowUp') {
    num--;
  } else if (event === 'ArrowDown') {
    num++;
    if (num > searchesLeng - 1) {
      num = searchesLeng - 1;
    }
  }
  return num;
}

describe('Item at Top', () => {
  it('Keyboard ArrowUp', () => {
    const res = useNewChoosedSearchItem({
      event: 'ArrowUp',
      newChoosedSearchItem: 0,
      searchesLeng: 10,
    });
    expect(res).toBe(-1);
  });
  it('Keyboard ArrowDown', () => {
    const res = useNewChoosedSearchItem({
      event: 'ArrowDown',
      newChoosedSearchItem: 0,
      searchesLeng: 10,
    });
    expect(res).toBe(1);
  });
});

describe('Item at Mid', () => {
  it('Keyboard ArrowUp', () => {
    const res = useNewChoosedSearchItem({
      event: 'ArrowUp',
      newChoosedSearchItem: 10,
      searchesLeng: 20,
    });
    expect(res).toBe(9);
  });
  it('Keyboard ArrowDown', () => {
    const res = useNewChoosedSearchItem({
      event: 'ArrowDown',
      newChoosedSearchItem: 10,
      searchesLeng: 20,
    });
    expect(res).toBe(11);
  });
});

describe('Item at Bottom', () => {
  it('Keyboard ArrowUp', () => {
    const res = useNewChoosedSearchItem({
      event: 'ArrowUp',
      newChoosedSearchItem: 10,
      searchesLeng: 11,
    });
    expect(res).toBe(9);
  });
  it('Keyboard ArrowDown', () => {
    const res = useNewChoosedSearchItem({
      event: 'ArrowDown',
      newChoosedSearchItem: 10,
      searchesLeng: 11,
    });
    expect(res).toBe(10);
  });
});
