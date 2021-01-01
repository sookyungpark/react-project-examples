export const OPEN_SIDEBAR = 'OPEN_SIDEBAR'
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR'

export function open() {
    return { type: OPEN_SIDEBAR }
}

export function close() {
    return { type: CLOSE_SIDEBAR }
}