interface Params {
  event: React.SyntheticEvent<HTMLInputElement>;
  newChoosedPageItem: number;
}

function useNewChoosedPageItem({ event, newChoosedPageItem }: Params): number {
  let num = newChoosedPageItem;

  if ((event as any).key === 'ArrowUp') {
    num--;
    if (num < 0) {
      num = 0;
    }
  } else if ((event as any).key === 'ArrowDown') {
    num++;
  }
  return num;
}

export default useNewChoosedPageItem;
