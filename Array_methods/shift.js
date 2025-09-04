let marvel=["spider","iron","loki"];
let dc=["super","aqua"];
let indian=["shakti","krish"];
marvel.unshift("captain");
dc.unshift("woman");
indian.unshift("salman");

let heros=marvel.concat(indian,dc);


console.log(heros.shift());
console.log(heros);

