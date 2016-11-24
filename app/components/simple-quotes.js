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
  {id: 6, text: `A purpose of human life, no matter who is controlling it,
    is to love whoever is around to be loved.`,
  author: `Kurt Vonnegut`},
  {id: 7, text: `Here we are, trapped in the amber of the moment. There is no why.`,
  author: `Kurt Vonnegut`},
  {id: 8, text: `True terror is to wake up one morning and discover that your high school class is running the country.`,
  author: `Kurt Vonnegut`},
  {id: 9, text: `Maturity is a bitter disappointment for which no remedy exists,
    unless laughter can be said to remedy anything.`,
  author: `Kurt Vonnegut`},
  {id: 10, text: `Tiger got to hunt, bird got to fly;
    Man got to sit and wonder, 'Why, why, why?' Tiger got to sleep,
    bird got to land; Man got to tell himself he understand.`,
  author: `Kurt Vonnegut`},
  {id: 11, text: ` There's only one rule that I know of, babies—God damn it,
    you've got to be kind.`,
  author: `Kurt Vonnegut`},
  {id: 12, text: `She was a fool, and so am I, and so is anyone who thinks
    he sees what God is doing.`,
  author: `Kurt Vonnegut`},
  {id: 13, text: `Many people need desperately to receive this message:
    'I feel and think much as you do, care about many of the things
    you care about, although most people do not care about them.
    You are not alone.`,
  author: `Kurt Vonnegut`},
  {id: 14, text: `There are plenty of good reasons for fighting,
    but no good reason ever to hate without reservation,
    to imagine that God Almighty Himself hates with you, too.`,
  author: `Kurt Vonnegut`},
  {id: 15, text: `Since Alice had never received any religious
    instruction, and since she had led a blameless life, she never
    thought of her awful luck as being anything but accidents in a
    very busy place. Good for her.`,
  author: `Kurt Vonnegut`},
  {id: 16, text: `That is my principal objection to life, I think:
    It's too easy, when alive, to make perfectly horrible mistakes.`,
  author: `Kurt Vonnegut`},
  {id: 17, text: `Literature should not disappear up its own asshole, so to speak.`,
  author: `Kurt Vonnegut`},
  {id: 18, text: `So it goes.`,
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
