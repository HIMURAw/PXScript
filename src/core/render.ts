import { VNode } from "./h";

export function render(vnode: VNode | string, container: HTMLElement) {
  if (typeof vnode === "string") {
    container.appendChild(document.createTextNode(vnode));
    return;
  }

  const { type, props, children } = vnode;

  if (typeof type === "function") {
    const subVnode = type({ ...props, children });
    render(subVnode, container);
    return;
  }

  const el = document.createElement(type as string);

  for (const [key, value] of Object.entries(props)) {
    if (key.startsWith("on") && typeof value === "function") {
      el.addEventListener(key.substring(2).toLowerCase(), value);
    } else if (key === "className") {
      el.setAttribute("class", value);
    } else {
      el.setAttribute(key, value);
    }
  }

  children.forEach((child) => render(child, el));

  container.appendChild(el);
}