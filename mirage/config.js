export default function() {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/categories', function() {
    return {
      categories: [
      {
        name: 'Shoes',
        topThree: [
          {name: 'foo', imgUrl: ''},
          {name: 'foo', imgUrl: ''},
          {name: 'foo', imgUrl: ''},
        ]
      },
      {
        name: 'Hats',
        topThree: [
          {name: 'foo', imgUrl: ''},
          {name: 'foo', imgUrl: ''},
          {name: 'foo', imgUrl: ''},
        ]
      },
      {
        name: 'Coats',
        topThree: [
          {name: 'foo', imgUrl: ''},
          {name: 'foo', imgUrl: ''},
          {name: 'foo', imgUrl: ''},
        ]
      },
      ],
      currentPromotion: {
        title: 'CURRENT PROMOTION',
        imgUrl: '',
        expires: (Date.now() + 100000),
      }
    }
  });


  this.get('products', function() {
    return [
      {name: 'product1', imgUrl: ''},
      {name: 'product1', imgUrl: ''},
      {name: 'product1', imgUrl: ''},
      {name: 'product1', imgUrl: ''},
      {name: 'product1', imgUrl: ''},
      {name: 'product1', imgUrl: ''},
    ]
  })


  /*
    Shorthand cheatsheet:

    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
