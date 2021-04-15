
import {INC_COUNTER_ONE, DEC_COUNTER_ONE, RESET_COUNTER_ONE} from "../action-types";

const initialStateCounterOne = {
    counter : 0,
}
const counter1Reducer = (state = initialStateCounterOne, action) => {
    switch (action.type) {
        case INC_COUNTER_ONE: {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case DEC_COUNTER_ONE: {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case RESET_COUNTER_ONE: {
            return {
                ...state,
                counter: 0
            }
        }
        default:
            return state
    }

}
export default counter1Reducer