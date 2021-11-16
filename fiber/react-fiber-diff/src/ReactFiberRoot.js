
import { createHostRootFiber } from './ReactFiber';
import { initializeUpdateQueue } from './ReactUpdateQueue';
export function createFiberRoot(containerInfo) {
    const fiberRoot = { containerInfo };//fiberRoot指的就是容器对象containerInfo div#root
    //创建fiber树的根节点 
    const hostRootFiber = createHostRootFiber();
    //当前的fiberRoot的curent指向这个根fiber
    fiberRoot.current = hostRootFiber;
    //让此根fiber的真实DOM节点指向fiberRoot  div#root   stateNode就是指的真实DOM的意思
    hostRootFiber.stateNode = fiberRoot;
    initializeUpdateQueue(hostRootFiber);
    return fiberRoot;
}