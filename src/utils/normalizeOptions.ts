import { SelectOption, SelectOptions } from "../types";

export const normalizeOptions = (options: SelectOptions): SelectOption[] => {
    if (options.length === 0) {
        return []
    }

    if (typeof options[0] === 'object') {
        return options as SelectOption[]
    }

    return options.map((item) => {
        return {
            label: String(item),
            value: String(item),
        }
    })
}