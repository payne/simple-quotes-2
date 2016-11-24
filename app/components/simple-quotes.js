import Ember from 'ember';

export default Ember.Component.extend({

quotes: {data: [
  {id: 0, text: `I urge you to please notice when you are happy,
    and exclaim or murmur or think at some point,
    “If this isn’t nice, I don’t know what is.”`,
    author: `Kurt Vonnegut`},
  {id: 1, text: `I tell you, we are here on Earth to fart around, and don't let anybody tell you different.`,
  author: `Kurt Vonnegut`},
  {id: 2, text: `We are what we pretend to be, so we must be careful about what we pretend to be.`,
  author: `Kurt Vonnegut`},
  {id: 3, text: `I want to stay as close to the edge as I can without going over.
     Out on the edge you see all kinds of things you can't see from the center.`,
  author: `Kurt Vonnegut`},
  {id: 4, text: `Laughter and tears are both responses to
    frustration and exhaustion. I myself prefer to laugh,
    since there is less cleaning up to do afterward.`,
  author: `Kurt Vonnegut`},
  {id: 5, text: `Everything was beautiful and nothing hurt.`,
  author: `Kurt Vonnegut`},
  {id: 5, text: `A purpose of human life, no matter who is controlling it,
    is to love whoever is around to be loved.`,
  author: `Kurt Vonnegut`},
  {id: 5, text: `Here we are, trapped in the amber of the moment. There is no why.`,
  author: `Kurt Vonnegut`},
  {id: 5, text: `True terror is to wake up one morning and discover that your high school class is running the country.`,
  author: `Kurt Vonnegut`},
  {id: 5, text: `Maturity is a bitter disappointment for which no remedy exists,
    unless laughter can be said to remedy anything.`,
  author: `Kurt Vonnegut`},
  {id: 5, text: `Everything was beautiful and nothing hurt.`,
  author: `Kurt Vonnegut`}
]},
quote: {id: 0, text: `I urge you to please notice when you are happy,
    and exclaim or murmur or think at some point,
    “If this isn’t nice, I don’t know what is.”`,
    author: `Kurt Vonnegut`},
number: {value: 0},
actions: {
  nextQuote() {
    console.log('In nextQuote');
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
