// 添加类名
function AddClass(element: HTMLElement | null, newClass: string): void {
    // function body
    if (element != null)
        element.classList.add(newClass);
}

// 移除类名
function RemoveClass(element: HTMLElement | null, newClass: string): void {
    // function body
    if (element != null)
        element.classList.remove(newClass);
}

// 移除某个id所有子元素类名
function RemoveAllChildClass(id: string, className: string) {
    let parentElement = document.getElementById(id);

    if (parentElement) {
        let childElements = parentElement.childNodes;
        for (let i = 0; i < childElements.length; i++) {
            if (childElements[i].nodeType === 1) { // check if it is an element node
                RemoveClass(childElements[i] as HTMLElement, className as string);
            }
        }
    }
}

// 给某个id所有子元素添加类名
function AddAllChildClass(id: string, className: string) {
    let parentElement = document.getElementById(id);

    if (parentElement) {
        let childElements = parentElement.childNodes;
        for (let i = 0; i < childElements.length; i++) {
            if (childElements[i].nodeType === 1) { // check if it is an element node
                AddClass(childElements[i] as HTMLElement, className as string);
            }
        }
    }
}



export { RemoveClass, AddClass,AddAllChildClass,RemoveAllChildClass}