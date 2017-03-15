function sayHi(other) {
  console.log('I am ' + this.name + '!', 'hello ' + other.name);
}

function revealIdentify(other) {
  console.log('My real name is ' + this.realName + ', hello '+ other.realName);
}

var spiderman = {
  name: 'Spiderman',
  realName: 'Peter Parker',
  sayHi: sayHi
};


var superman = {
  name: 'Superman',
  realName: 'Clark Kent',
  sayHi: sayHi
};

function showInfo(){

}

spiderman.sayHi(superman);
revealIdentify.apply(superman,[spiderman]);
revealIdentify.apply(spiderman, [superman]);


var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black',
  showInfo: function(){
    for(var i in this){
      if(typeof this[i] !== "function"){
        console.log(i+": ", this[i]);
      }
    }
  }

};
var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

daughter.__proto__ = mom;
mom.showInfo();
daughter.showInfo();

function Person(name) {
  var this = {
    name: name,
    friends: []
  };
  this.greet = function(other) {
    console.log(this.createGreeting(other));
  };

  this.addFriend = function(friend) {
    friends.push(friend);
    console.log("i\'m doing it");
  };

  this.createGreeting = function(other) {
    return 'Yo ' + other.name + '! from ' + this.name + '.';
  };

  this.createGreetingsForFriends = function(){
    this.friends.forEach(function(friend){
      console.log(this.createGreeting(friend));
    });
  };

  return this;

}

var alfie = new Person('Alfie');
var anushka = new Person('Anushka');
var henrique = new Person('Henrique');
alfie.addFriend(anushka);
alfie.addFriend(henrique);
alfie.createGreetingsForFriends();
