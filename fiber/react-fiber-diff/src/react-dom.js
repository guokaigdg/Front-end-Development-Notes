
import { createFiberRoot } from './ReactFiberRoot';
import { updateContainer } from './ReactFiberReconciler';
function render(element, container) {
    let fiberRoot = createFiberRoot(container);
    updateContainer(element, fiberRoot);
}
const ReactDOM = {
    render
}
export default ReactDOM;