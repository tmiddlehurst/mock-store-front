import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
  async model() {
    const { categories, currentPromotion } = await fetch('/categories').then(res => res.json());
    // console.log(categories, currentPromotion);
    return {
      categories,
      currentPromotion,
    }
  }
});
