import Route from '@ember/routing/route';

export default class RecipesRoute extends Route {
  model() {
    return [
      { name: 'Yummy Burger' },
      { name: 'Footlong Hot Dog' },
      { name: 'Crispy Chicken Sandwich' },
    ]
  }
}
