/**
 * 
 * @param {string[]} strings
 * @param {string[]} values
 */
export function html(strings, ...values) {
    let str = ''
    for (let i = 0; i < strings.length; i++) {
        str += strings[i]
        if (values.length > i) {
            const value = values[i]
            if (value instanceof Array) {
                str += value.join('')
            } else {
                str += values[i]
            }
        }
    }
    return str
}