import { TEST1, TEST2 } from '../actions_types'

let initState = 'hello'

export default function test(preState = initState, action) {
    const { type, date } = action
    let newState
    switch (key) {
        case TEST1:
            newState = preState + data
            return newState
        case TEST2:
            newState = preState + data + '!'
            return newState

        default:
            return preState
    }
}