import { createWorkInProgress } from './ReactFiber';
//当前正在更新的根
let workInProgressRoot = null;
//当前正在更新fiber节点
let workInProgress = null;
/**
 * 不管如何更新，不管谁来更新，都会调度到这个方法里
 * 
 * @param {*} fiber 
 */
export function scheduleUpdateOnFiber(fiber) {
    const fiberRoot = markUpdateLaneFromFiberToRoot(fiber);
    performSyncWorkOnRoot(fiberRoot);
}
/**
 * 根据老的fiber树和更新对象创建新的fiber树，然后根据新的fiber树更新真实DOM
 * @param {*} fiberRoot 
 */
function performSyncWorkOnRoot(fiberRoot) {
    workInProgressRoot = fiberRoot;
    workInProgress = createWorkInProgress(workInProgressRoot.current);
    console.log(workInProgress);
}

function markUpdateLaneFromFiberToRoot(sourceFiber) {
    let node = sourceFiber;
    let parent = node.return;
    while (parent) {
        node = parent;
        parent = parent.parent;
    }
    //node其实肯定fiber树的根节点，其实就是 hostRootFiber .stateNode div#root
    return node.stateNode;
}