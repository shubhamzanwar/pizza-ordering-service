import { TOGGLE_TOPPING, ADD_NEW_PIZZA, DELETE_PIZZA } from '../actions';
import { defaultToppings } from '../../constants/pizza';

const initialState = {
  pizzas: [{ ...defaultToppings }],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TOPPING: {
      const { pizzas } = state;
      const { index, topping } = action.payload;
      pizzas[index] = {
        ...pizzas[index],
        [topping]: !pizzas[index][topping],
      };
      return {
        ...state,
        pizzas: [...pizzas],
      };
    }
    case ADD_NEW_PIZZA:
      return {
        ...state,
        pizzas: [
          ...state.pizzas,
          { ...defaultToppings },
        ],
      };
    case DELETE_PIZZA: {
      const { index } = action.payload;
      const { pizzas } = state;
      pizzas.splice(index, 1);
      return {
        ...state,
        pizzas: [...pizzas],
      };
    }
    default:
      return state;
  }
};
