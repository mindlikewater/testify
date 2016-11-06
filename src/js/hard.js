// determines if quality is within valid range of 0 to 50
function validQuality (quality) {
  return quality >= 0 && quality <= 50;
};

function getBrie (myObj) {
  myObj.sellIn--;
  if (myObj.sellIn > 0) {
    return myObj.quality++;
  }
  else {
    return myObj.quality+= 2;
  }
}

function CheckLimits(myObj) {
  if (myObj.quality >50) {
    myObj.quality = 50;
  }
  else if (myObj.quality < 0) {
    myObj.quality = 0;
  }
}

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
      CheckLimits(this);
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
