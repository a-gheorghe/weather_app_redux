import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
    case FETCH_WEATHER:
        // concat returns a new array
        // return state.concat([action.payload.data])

        // create a new array with param1 and flattened prev state
        return [ action.payload.data, ...state ]
    }
    return state;
}
