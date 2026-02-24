import { render } from "./render";
import { effect } from "./signal";
import { VNode } from "./h";

export function createApp(rootComponent: () => VNode) {
  return {
    mount(selector: string) {
      const container = document.querySelector(selector);
      if (!(container instanceof HTMLElement)) {
        throw new Error(`Container ${selector} not found or is not an HTMLElement`);
      }

      effect(() => {
        container.innerHTML = "";
        const vnode = rootComponent();
        render(vnode, container);
      });
    },
  };
}