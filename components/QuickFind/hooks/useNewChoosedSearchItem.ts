interface Params {
  event: React.SyntheticEvent<HTMLInputElement>;
  newChoosedSearchItem: number;
  searchesLeng: number;
}

function useNewChoosedSearchItem({
  event,
  newChoosedSearchItem,
  searchesLeng,
}: Params): number {
  let num = newChoosedSearchItem;

  if ((event as any).key === 'ArrowUp') {
    num--;
  } else if ((event as any).key === 'ArrowDown') {
    num++;
    if (num > searchesLeng - 1) {
      num = searchesLeng - 1;
    }
  }
  return num;
}

export default useNewChoosedSearchItem;
