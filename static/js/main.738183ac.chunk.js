(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Bulbasaur",image:"https://img.pokemondb.net/artwork/vector/large/bulbasaur.png"},{id:2,name:"Charmander",image:"https://img.pokemondb.net/artwork/vector/large/charmander.png"},{id:3,name:"Squirtle",image:"https://img.pokemondb.net/artwork/vector/large/squirtle.png"},{id:4,name:"Pikachu",image:"https://img.pokemondb.net/artwork/vector/large/pikachu-alt2.png"},{id:5,name:"Furret",image:"https://img.pokemondb.net/artwork/vector/large/furret.png"},{id:6,name:"Jigglypuff",image:"https://img.pokemondb.net/artwork/vector/large/jigglypuff.png"},{id:7,name:"Duskull",image:"https://img.pokemondb.net/artwork/vector/large/duskull.png"},{id:8,name:"Mr. Mime",image:"https://img.pokemondb.net/artwork/vector/large/mr-mime.png"},{id:9,name:"Monferno",image:"https://img.pokemondb.net/artwork/vector/large/monferno.png"},{id:10,name:"Mewtwo",image:"https://img.pokemondb.net/artwork/vector/large/mewtwo.png"},{id:11,name:"Munchlax",image:"https://img.pokemondb.net/artwork/vector/large/munchlax.png"},{id:12,name:"Meowth",image:"https://img.pokemondb.net/artwork/vector/large/meowth.png"}]},,,,,,,,function(e,t,n){e.exports=n(27)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),i=(n(15),n(4)),m=n(5),s=n(7),l=n(6),u=n(8),g=(n(17),function(e){return a.a.createElement("div",{className:"wrapper"},e.children)}),d=(n(19),function(e){return a.a.createElement("div",{className:"titleBox"},a.a.createElement("h1",null,e.children))}),p=(n(21),function(e){return a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"img-container"},a.a.createElement("span",{onClick:function(){return e.selectPokemon(e.id)},className:0===e.CurrentScore?"pokedex-entry":""},a.a.createElement("img",{className:"dexter",alt:e.name,src:e.image}))))}),k=(n(23),function(e){return a.a.createElement("div",{className:" nav navBarThingy nav-justified"},a.a.createElement("div",{className:"col-md-4",id:"classLink"},"  ",a.a.createElement("a",{href:"/"},"Clicky Game")),a.a.createElement("div",{className:"col-md-4"},e.message),a.a.createElement("div",{className:"col-md-4",id:"scoreTick"},"Score: ",e.currentScore," | Top Score: ",e.topScore))}),f=(n(25),n(1)),h=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={message:"Begin by clicking on an image!",currentScore:0,topScore:0,pokemon:f,unselectedMon:f},n.shufflePokemon=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e},n.selectPokemon=function(e){if(void 0===n.state.unselectedMon.find(function(t){return t.id===e}))n.setState({message:"Not very effective",currentScore:0,topScore:n.state.currentScore>n.state.topScore?n.state.currentScore:n.state.topScore,pokemon:f,unselectedMon:f});else{var t=n.state.unselectedMon.filter(function(t){return t.id!==e});n.setState({message:"It's super effective!",currentScore:n.state.currentScore+1,pokemon:f,unselectedMon:t})}n.shufflePokemon(f)},n}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(g,null,a.a.createElement(d,null,"Clicky Game: Pok\xe9mon Edition"),a.a.createElement(k,{message:this.state.message,currentScore:this.state.currentScore,topScore:this.state.topScore}),this.state.pokemon.map(function(t){return a.a.createElement(p,{key:t.id,id:t.id,name:t.name,image:t.image,selectPokemon:e.selectPokemon,currentScore:e.state.currentScore})}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.738183ac.chunk.js.map