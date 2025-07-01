function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

//=============================== REFACTORED CODE ==============================

function update_quality() {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (isSulfuras(item)) {
      continue; // Sulfuras bleibt unverändert
    }

    updateSellIn(item);

    if (isAgedBrie(item)) {
      increaseQuality(item, item.sell_in < 0 ? 2 : 1);
    }

    else if (isBackstagePass(item)) {
      if (item.sell_in < 0) {
        item.quality = 0;
      } else if (item.sell_in < 5) {
        increaseQuality(item, 3);
      } else if (item.sell_in < 10) {
        increaseQuality(item, 2);
      } else {
        increaseQuality(item, 1);
      }
    }

    else {
      const degradation = isConjured(item) ? 2 : 1;
      decreaseQuality(item, item.sell_in < 0 ? degradation * 2 : degradation);
    }
  }
}

// ==== Hilfsfunktionen ====

function isAgedBrie(item) {
  return item.name === "Aged Brie";
}

function isBackstagePass(item) {
  return item.name.startsWith("Backstage passes");
}

function isSulfuras(item) {
  return item.name === "Sulfuras, Hand of Ragnaros";
}

function isConjured(item) {
  return item.name.toLowerCase().includes("conjured");
}

function updateSellIn(item) {
  item.sell_in -= 1;
}

function increaseQuality(item, amount) {
  item.quality = Math.min(50, item.quality + amount);
}

function decreaseQuality(item, amount) {
  item.quality = Math.max(0, item.quality - amount);
}

//==============================================================


