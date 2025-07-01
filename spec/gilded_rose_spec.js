describe("Gilded Rose", function() {

  it("should decrease SellIn and Quality by 1 for normal items", function() {
  items = [ new Item("Elixir of the Mongoose", 5, 7) ];
  update_quality();
  expect(items[0].sell_in).toEqual(4);
  expect(items[0].quality).toEqual(6);
});

it("should decrease Quality by 2 when SellIn is below 0 for normal items", function() {
  items = [ new Item("Elixir of the Mongoose", 0, 10) ];
  update_quality();
  expect(items[0].sell_in).toEqual(-1);
  expect(items[0].quality).toEqual(8);
});

it("should not decrease Quality below 0", function() {
  items = [ new Item("Elixir of the Mongoose", 5, 0) ];
  update_quality();
  expect(items[0].quality).toEqual(0);
});

});
