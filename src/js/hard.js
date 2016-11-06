// determines if quality is within valid range of 0 to 50
function validQuality (quality) {
  return quality >= 0 && quality <= 50;
};

class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  tick () {

    if (this.name.includes('Sulfuras')) {
      this.quality = 80;
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
