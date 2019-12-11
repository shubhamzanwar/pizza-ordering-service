import produce from 'immer';
import { TOGGLE_TOPPING, ADD_NEW_PIZZA, DELETE_PIZZA } from '../actions';
import { defaultToppings } from '../../constants/pizza';

export const initialState = {
  pizzas: [{ ...defaultToppings }],
};

export default produce((state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TOPPING: {
      const { index, topping } = action.payload;
      state.pizzas[index][topping] = !state.pizzas[index][topping];
      break;
    }
    case ADD_NEW_PIZZA:
      state.pizzas.push({ ...defaultToppings });
      break;
    case DELETE_PIZZA: {
      const { index } = action.payload;
      state.pizzas.splice(index, 1);
      break;
    }
    default:
  }
});
