function getBrie (item) {
  item.sellIn--;
  if (item.sellIn > 0) {
    return item.quality++;
  }
  else {
    return item.quality+= 2;
  }
};

function getBackstage(item) {
  item.sellIn--
  if (item.sellIn >= 10) {
    item.quality++;
  }
  else if (item.sellIn < 0) {
    item.quality = 0;
  }
  else if (item.sellIn < 5) {
    item.quality += 3;
  }
  else if (item.sellIn < 10) {
    item.quality += 2;
  }
};

function qcLimits(item) {
  if (item.quality > 50) {
    item.quality = 50;
  }
  else if (item.quality < 0) {
    item.quality = 0;
  }
};

class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  tick () {
//Legendary item Sulfuras never changes in quality
    if (this.name.includes('Sulfuras')) {
      this.quality = 80;
    }
    else if (this.name.includes('Brie')) {
      getBrie(this);
      qcLimits(this);
    }
    else if (this.name.includes('Backstage')) {
      getBackstage(this);
      qcLimits(this);
    }
    else if (this.name.includes('Conjured')) {
      getConjured(this);
      qcLimits(this);
    }


  }
}

//   tick () {
//     if (this.name != 'Aged Brie' && this.name != 'Backstage passes to a TAFKAL80ETC concert') {
//       if (this.quality > 0) {
//         if (this.name != 'Sulfuras, Hand of Ragnaros' && !this.name.includes('Conjured')) {
//           this.quality = this.quality - 1;
//         } else if (this.name.includes('Conjured')) {
//           this.quality = this.quality - 2;
//         }
//       }
//     } else {
//       if (this.quality < 50) {
//         this.quality = this.quality + 1;
//         if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
//           if (this.sellIn < 11) {
//             if (this.quality < 50) {
//               this.quality = this.quality + 1;
//             }
//           }
//           if (this.sellIn < 6) {
//             if (this.quality < 50) {
//               this.quality = this.quality + 1;
//             }
//           }
//         }
//       }
//     }
//     if (this.name != 'Sulfuras, Hand of Ragnaros') {
//       this.sellIn = this.sellIn - 1;
//     }
//     if (this.sellIn < 0) {
//       if (this.name != 'Aged Brie') {
//         if (this.name != 'Backstage passes to a TAFKAL80ETC concert') {
//           if (this.quality > 0) {
//             if (this.name != 'Sulfuras, Hand of Ragnaros' && !this.name.includes('Conjured')) {
//               this.quality = this.quality - 1;
//             } else if (this.name != 'Sulfuras, Hand of Ragnaros' && this.name.includes('Conjured')) {
//               this.quality = this.quality - 2;
//             }
//           }
//         } else {
//           this.quality = this.quality - this.quality;
//         }
//       } else {
//         if (this.quality < 50) {
//           this.quality = this.quality + 1;
//         }
//       }
//     }
//   }
// }

export { GildedRose };
