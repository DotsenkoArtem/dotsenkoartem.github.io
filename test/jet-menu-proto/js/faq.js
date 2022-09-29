/*FAQ*/
window.addEvent('domready', function(){
var accordion = new Accordion($$('.question'), $$('.answer'), {
opacity: 1,
show : -1,
onActive: function(toggler, element){
toggler.setStyle('color', '#135CAE');
},
onBackground: function(toggler, element){
toggler.setStyle('color', '#AAAA94');
}

}, $('questions'));
});