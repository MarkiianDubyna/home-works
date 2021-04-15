import {INC_COUNTER_TWO, DEC_COUNTER_TWO, RESET_COUNTER_TWO} from "../action-types";

const initialStateCounterTwo = {
    counter: 0,
}
const counter2Reducer = (state = initialStateCounterTwo, action) => {
    switch (action.type) {
        case INC_COUNTER_TWO: {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case DEC_COUNTER_TWO: {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case RESET_COUNTER_TWO: {
            return {
                ...state,
                counter: 0
            }
        }
        default: {
            return state
        }
    }
}
export default counter2Reducer