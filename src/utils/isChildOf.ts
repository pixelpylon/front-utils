export function isChildOf(child: any, parent: any) {
    if (child.parentNode === parent) {
        return true
    }

    if (child.parentNode === null) {
        return false
    }

    return isChildOf(child.parentNode, parent)
}