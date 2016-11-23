import Ember from 'ember';

export default Ember.Component.extend({

quotes: {data: [
  {id: 1, text: 'I like eggs', author: 'radio skit'},
  {id: 2, text: 'Be Nice!', author: 'Religion'}
]},
quote: {id: 3, text: 'Placeholder', author: 'Matt'},
number: {value: 0},
actions: {
  nextQuote() {
    console.log('In nextQuote')
    var number = Ember.get(this.number, 'value')+1;
    var data = Ember.get(this.quotes, 'data');
    console.log(data.length);
    number = number % data.length;
    Ember.set(this.number, 'value', number);
    console.log('data='+data[number].text);
    Ember.set(this.quote,'text',data[number].text);
  }
}

});
