import { sentenceCase } from 'change-case';

export const getPizzaSummary = (toppings) => {
  const chosenToppings = Object.keys(toppings).filter((topping) => toppings[topping]);
  const sentenceCased = chosenToppings.map((topping) => sentenceCase(topping).toLowerCase());
  const summary = sentenceCased.join(', ');

  return summary ? `${summary[0].toUpperCase()}${summary.slice(1)}` : 'Just Cheese';
};
