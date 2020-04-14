import * as base32 from 'hi-base32';

const safe = (callback, ...args) => {
  try {
    return callback.apply(this, args);
  } catch {
    return '';
  }
};

const atobBestPossible = (value) =>
  value
    .match(/[A-Za-z0-9+/]{2,}={0,2}/gi)
    .map((elem) => safe(atob, elem))
    .join("");

const atobLineBreaked = (value) =>
  value
    .replace(/\n{2,}/, "\n")
    .split("\n")
    .map((elem) => safe(atobBestPossible, elem))
    .join("\n");

export const Base64Encoder = val => safe(btoa, val);
export const Base64Decoder = val => safe(atobLineBreaked, val);

function bytesToHex(bytes) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
}

function stringToUTF8Bytes(string) {
  return new TextEncoder().encode(string);
}

function hexToBytes(hex) {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i !== bytes.length; i++) {
    bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  }
  return bytes;
}

export const HexEncoder = val => safe(bytesToHex, stringToUTF8Bytes(val));
export const HexDecoder = val => new TextDecoder().decode(hexToBytes(val.replace(/[^A-fa-f0-9]/gi, "")));

const safeNotEmpty = (callback, ...args) => {
  if(!args[0]) return '';
  return safe(callback, ...args);
}

export const Base32Encoder = val => safeNotEmpty(base32.encode, val);
export const Base32Decoder = val => safeNotEmpty(base32.decode, val);

const caeser = (orig, shift) => {
  let newText = "";
  for (let i = 0; i < orig.length; i++) {
    let ord = orig.charCodeAt(i);
    if (65 <= ord && ord <= 90)
      newText += String.fromCharCode(65 + ((ord - 65 + shift) % 26));
    else if (97 <= ord && ord <= 122)
      newText += String.fromCharCode(97 + ((ord - 97 + shift) % 26));
    else newText += orig[i];
  }
  return newText;
};

const rot47 = (ct) => {
  const all94 = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  return Array.from(ct)
    .map((char) => all94[(all94.indexOf(char) + 47) % 94])
    .join("");
};

export const Rot13Encode = val => safe(caeser, val, 13);
export const Rot47Encode = val => safe(rot47, val);

export const CaeserCipher = (val, shift) => safe(caeser, val, shift);