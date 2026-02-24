export type VNode = {
  type: string | Function;
  props: Record<string, any>;
  children: (VNode | string)[];
};

export function h(
  type: string | Function,
  props: Record<string, any> | null = {},
  ...children: any[]
): VNode {
  return {
    type,
    props: props || {},
    children: children.flat().filter((c) => c != null),
  };
}

export function Fragment({ children }: { children: any }) {
  return children;
}

// JSX Runtime support
export const jsx = h;
export const jsxs = h;
export const jsxDEV = h;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    interface Element extends VNode { }
    interface ElementClass {
      render(): any;
    }
    interface ElementAttributesProperty {
      props: {};
    }
    interface ElementChildrenAttribute {
      children: {};
    }
  }
}