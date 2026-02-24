function h(tag: string, props: any = {}, ...children: any[]) {
    const el = document.createElement(tag);

    for (const key in props) {
        el[key] = props[key];
    }

    children.forEach(child => {
        if (typeof child === 'string') {
            el.appendChild(document.createTextNode(child));
        } else {
            el.appendChild(child);
        }
    });

    return el;
}

export { h };