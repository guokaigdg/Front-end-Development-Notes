//可以给fiber添加一个副作用标识符，表示此fiber对应的DOM节点需要进行何种操作
export const NoFlags = 0b000000000000000000;//0
export const Placement = 0b000000000000000010;//2
export const Update = 0b000000000000000100;//4
export const PlacementAndUpdate = 0b000000000000000110;//6
export const Deletion = 0b000000000000001000;//8