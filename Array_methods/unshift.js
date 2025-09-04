// add array in first.
let marvelHeros=["Thor","IronMan","SpiderMAn","Loki"];
let dcHeros=["SuperMan","WonderWoman","AquaMan"];
let indianHeros=["ShaktiMan","Krish"];
marvelHeros.unshift("Dr.Strange");
let heros=indianHeros.concat(dcHeros,marvelHeros);
console.log(heros);