import { ADD_TOPPING, ADD_NEW_PIZZA } from "../actions";

const initialState = {
    pizzas: [
        {
            bleh: 100
        }
    ]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TOPPING:
            return state
        case ADD_NEW_PIZZA:
            return state
        default:
            return state
    }
}