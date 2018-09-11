
export default (app)=>{
  //data sources
  const mongoDs = app.dataSources.mongoDS; // 'name' of your mongo connector, you can find it in datasource.json
  const mysqlDs = app.dataSources.mysqlDS;
  //create reviewers
  async function createReviewers(){
    await mongoDs.automigrate('Reviewer');
      const Reviewer = app.models.Reviewer;
      await Reviewer.create([{
        email: 'foo@bar.com',
        password: 'foobar'
      }, {
        email: 'john@doe.com',
        password: 'johndoe'
      }, {
        email: 'jane@doe.com',
        password: 'janedoe'
      }]);
  }
  //create coffee shops
  async function createCoffeeShops() {
    await mongoDs.automigrate('CoffeeShop');
      const CoffeeShop = app.models.CoffeeShop;
      await CoffeeShop.create([{
        name: 'Bel Cafe',
        city: 'Vancouver'
      }, {
        name: 'Three Bees Coffee House',
        city: 'San Mateo'
      }, {
        name: 'Caffe Artigiano',
        city: 'Vancouver'
      }, ]);
  }
  //create reviews
    async function createReviews(reviewers, coffeeShops){
      await mongoDs.automigrate('Review');
      var Review = app.models.Review;
      var DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
      await Review.create([{
        date: Date.now() - (DAY_IN_MILLISECONDS * 4),
        rating: 5,
        comments: 'A very good coffee shop.',
        publisherId: reviewers[0].id,
        coffeeShopId: coffeeShops[0].id,
      }, {
        date: Date.now() - (DAY_IN_MILLISECONDS * 3),
        rating: 5,
        comments: 'Quite pleasant.',
        publisherId: reviewers[1].id,
        coffeeShopId: coffeeShops[0].id,
      }, {
        date: Date.now() - (DAY_IN_MILLISECONDS * 2),
        rating: 4,
        comments: 'It was ok.',
        publisherId: reviewers[1].id,
        coffeeShopId: coffeeShops[1].id,
      }, {
        date: Date.now() - (DAY_IN_MILLISECONDS),
        rating: 4,
        comments: 'I go here everyday.',
        publisherId: reviewers[2].id,
        coffeeShopId: coffeeShops[2].id,
      }]);
  }
  createReviewers();
  createCoffeeShops(); 
};