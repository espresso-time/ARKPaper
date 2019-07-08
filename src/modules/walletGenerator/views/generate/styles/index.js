import "./base.css";
import "./christmasPostcard.css";
import "./baseWallet.css";
import arkBlue from './images/ark-blue.png'
import arkDark from './images/ark-dark.png';
import chillPink from './images/chill-pink.png';
import christmasPostcard from './images/christmas-postcard.png';
import heartPink from './images/heart-pink.png';
import impressiveRed from './images/impressive-red.png';
import classicRed from './images/classic-red.png';

// You are probably wondering, what is this mess in this file...
// The backgrounds of the paper wallets have to be base 64encoded, instead of importing them right away.
// The reason behind this is that Electron messes up if the images are imported :/ so encoding them in base64
// Vote espresso for the creativity ;)

export default {
  // arkBlue.png
  arkBlue: {
    label: "Ark Blue",
    image: arkBlue,
    style: "baseWallet",
    message_length: 88
  },

  // arkDark.png
  arkDark: {
    label: "Ark Dark",
    image: arkDark,
    style: "baseWallet",
    message_length: 88
  },

  // chillPink.png
  chillPink: {
    label: "Chill Pink",
    image: chillPink,
    style: "baseWallet",
    message_length: 88
  },

  // classicRed.png
  classicRed: {
    label: "Classic Red",
    image: classicRed,
    style: "baseWallet",
    message_length: 88
  },

  // heartPink.png
  heartPink: {
    label: "Heart Pink",
    image: heartPink,
    style: "baseWallet",
    message_length: 88
  },

  //christmasPostcard.png
  christmasPostcard: {
    label: "Christmas Postcard",
    image: christmasPostcard,
    style: "christmasPostcard",
    message_length: 59
  },

  // impressiveRed.png
  impressiveRed: {
    label: "Impressive Red",
    image: impressiveRed,
    style: "baseWallet",
    message_length: 88
  }
};
