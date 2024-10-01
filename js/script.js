// 1)Parametr olaraq gelen stringi tersine ceviren method yazin. Meselen: Cavid gelirse divaC qaytarsin.

const strfunction = (str) => {
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str.split("").reverse().join("");
};

console.log(strfunction("fidan"));
