javascript:

document.getElementById("footer").remove();

document.getElementById("left-sidebar").remove();



var items = new Array("top-bar js-top-bar top-bar__network _fixed",
"everyonelovesstackoverflow everyoneloves__inline-sidebar",
"show-votes","module tex2jax_ignore",
"orange tagged tex2jax_ignore x-rem clc-jobs-multi",
"blue tagged tex2jax_ignore x-rem clc-jobs-multi",
"everyonelovesstackoverflow everyoneloves__top-sidebar",
"orange tagged tex2jax_ignore clc-jobs-multi",
"amp-mode-mouse",
"js-add-answer-component post-form",
"bottom-notice",
"amp-mode-mouse",
"everyonelovesstackoverflow everyoneloves__top-leaderboard","everyonelovesstackoverflow everyoneloves__mid-leaderboard");

for (var i=0; i<items.length; ++i){
	var el = document.getElementsByClassName(items[i]);
for (var m=0; m<el.length; ++m){
    el[m].remove();}
}

var mElmClass = document.getElementsByClassName('answer accepted-answer');
for (var i=0; i<mElmClass.length; ++i){
    mElmClass[i].style.color='#FFC0CB';
    mElmClass[i].style.background='#7FFF00';}
	
	function DES() {
document.scripts[0].remove();
}
for (var i=0; i<100; ++i){
    setTimeout(DES, 5000);}