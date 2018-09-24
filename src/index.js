#!/usr/bin/env node

import namedColors from 'color-name-list';
import nearestColor from 'nearest-color'

const colors = namedColors.reduce((o, { name, hex }) => Object.assign(o, { [name]: hex }), {});
const nearest = nearestColor.from(colors);

((args) => {

    args.forEach(arg => {

      const currentColor = nearest(arg);

      if(currentColor) {
      console.log(`The ${arg} hexcode corresponds to the color ${currentColor.name}`);
    }
      else {
      console.log(`The ${arg} does not correspond to any color`);
      }
  })
})(process.argv.slice(2));
