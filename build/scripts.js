/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");

/** Íslenskir samhljóðar */
const VOWELS = "aeiouyáéýúíóöæ".split("");

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === "string";

// Prófum fallið
console.assert(isString("hi") === true, "isString: skilar `true` fyrir streng");
console.assert(isString(42) === false, "isString: skilar `false` fyrir tölu");
console.assert(isString(null) === false, "isString: skilar `false` fyrir null");

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = " ") {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

function teljaVowCon(str, check) {
  let fjöldi = 0;
  for (const char of str.toLowerCase()) {
    if (check.includes(char)) {
      fjöldi++;
    }
  }
  return fjöldi;
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (isString(str)) {
    const split = str.split(" ");
    let longest = "";
    for (const word of split) {
      //console.log(word,word.length);
      if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest;
  }
  return null;
}

console.assert(longest("hæ hallo") === "hallo");
console.assert(longest("hallo heimur!") === "heimur!", "greinarmerki eru með");
console.assert(longest("a i") === "a", "skilar fyrsta lengsta");
console.assert(longest(12) === null);
console.assert(longest("") == "");

function shortest(str) {
  // Útfæra
  if (isString(str)) {
    const split = str.split(" ");
    let shortest = split[0];
    for (const word of split) {
      //console.log(word,word.length);
      if (word.length < shortest.length) {
        shortest = word;
      }
    }
    return shortest;
  }
  return null;
}
console.assert(shortest("hæ hallo") === "hæ");
console.assert(longest("a i") === "a", "skilar fyrsta stysta");

function reverse(str) {
  if (isString(str)) {
    const split = str.split("");
    const reversed = split.reverse();
    return reversed.join("");
  }
  return null;
}
console.assert(reverse("hæ") === "æh", "reverse: snýr við einföldum streng");
console.assert(
  reverse(false) === null,
  "reverse: ef ekki strengur, skila null"
);
console.assert(reverse("") == "");

function palindrome(str) {
  if (isString(str) && str != "") {
    const strr = str.toLowerCase();
    const a = strr.split("");
    const b = reverse(strr).split("");
    return a.join("") === b.join("");
  }
  return false;
}
console.assert(palindrome("abba") === true, "skilar true ef samhverfur");
console.assert(
  palindrome("abbar") === false,
  "skilar false ef ekki samhverfur"
);
console.assert(
  palindrome("Abba") === true,
  "hástafir og lágstafir skipta ekki máli"
);
console.assert(palindrome("") === false, "tómur strengur er ekki samhverfur");
console.assert(palindrome("hah hah hah") === true, "bil skipta engu");

//nota hjálparfallið teljaVowCon fyrir vowels og consonants
function vowels(str) {
  if (isString(str)) {
    return teljaVowCon(str, VOWELS);
  }
  return null;
}
console.assert(vowels("hallo heimur") === 5, "skilar sérhljóðum");
console.assert(vowels("stf") === 0, "ef engir, skila núll");

function consonants(str) {
  if (isString(str)) {
    return teljaVowCon(str, CONSONANTS);
  }
  return null;
}
console.assert(consonants("hallo heimur") === 6, "skilar samhljóðum");
console.assert(consonants("eyyy") === 0, "ef engir, skila núll");

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert(
    "Velkomin! Nú munt þú fá tækifæri til að slá inn streng og fá ýmsar upplýsingar um hann " +
      "eins og lengsta og stysta orð, öfugan strenginn, fjölda sam- og sérhljóða og hvort strengurinn sé samhverfur. " +
      "Vinsamlegast ýttu á OK til að halda áfram."
  );
  const input = prompt("Sláðu inn streng:");

  if (isString(input) && input.trim() !== "") {
    const lengsta = longest(input);
    const stysta = shortest(input);
    const reversed = reverse(input);
    const vowelFjoldi = vowels(input);
    const consonantFjoldi = consonants(input);
    const erPalindrome = palindrome(input);

    alert(
      `Niðurstöður fyrir strenginn: ${input}\n` +
        "\n" +
        `Lengsta orð: ${lengsta}\n` +
        `Stysta orð: ${stysta}\n` +
        `Öfugur strengur: ${reversed}\n` +
        `Fjöldi sérhljóða: ${vowelFjoldi}\n` +
        `Fjöldi samhljóða: ${consonantFjoldi}\n` +
        `Er strengurinn samhverfur: ${erPalindrome}`
    );

    console.info(`Niðurstöður fyrir strenginn: "${input}"`);
    console.info(`Lengsta orð: ${lengsta}`);
    console.info(`Stysta orð: ${stysta}`);
    console.info(`Öfugur strengur: ${reversed}`);
    console.info(`Fjöldi sérhljóða: ${vowelFjoldi}`);
    console.info(`Fjöldi samhljóða: ${consonantFjoldi}`);
    console.info(`Er strengurinn samhverfur: ${erPalindrome ? "Já" : "Nei"}`);
    
    const aftur = confirm("Viltu prófa aftur? Ýttu þá á OK, annars cancel.");
    if (aftur) {
      start();
    }
  }
}
