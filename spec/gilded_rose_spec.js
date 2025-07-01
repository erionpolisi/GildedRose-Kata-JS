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

it("should increase Quality of Aged Brie as it gets older", function() {
  items = [ new Item("Aged Brie", 2, 0) ];
  update_quality();
  expect(items[0].sell_in).toEqual(1);
  expect(items[0].quality).toEqual(1);
});

it("should increase Quality of Aged Brie by 2 after sell date", function() {
  items = [ new Item("Aged Brie", 0, 40) ];
  update_quality();
  expect(items[0].sell_in).toEqual(-1);
  expect(items[0].quality).toEqual(42);
});

it("should not increase Quality of Aged Brie beyond 50", function() {
  items = [ new Item("Aged Brie", 2, 50) ];
  update_quality();
  expect(items[0].quality).toEqual(50);
});

it("should not change SellIn or Quality for Sulfuras", function() {
  items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];
  update_quality();
  expect(items[0].sell_in).toEqual(0);
  expect(items[0].quality).toEqual(80);
});

it("should increase Quality by 1 for Backstage passes when SellIn > 10", function() {
  items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ];
  update_quality();
  expect(items[0].sell_in).toEqual(14);
  expect(items[0].quality).toEqual(21);
});


});
