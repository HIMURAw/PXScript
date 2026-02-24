function h(tag: string, props: any = {}, ...children: any[]) {
  const el = document.createElement(tag)

  for (const key in props) {
    const value = props[key]

    if (key.startsWith("on") && typeof value === "function") {
      el.addEventListener(key.substring(2).toLowerCase(), value)
    } else {
      el.setAttribute(key, value)
    }
  }

  children.forEach(child => {
    if (typeof child === "string") {
      el.appendChild(document.createTextNode(child))
    } else if (child instanceof Node) {
      el.appendChild(child)
    }
  })

  return el
}

export { h };