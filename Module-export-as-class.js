module.exports = class {
  voice(sentences){
    return console.log(sentences);
  }
  run(){
    return console.log("I'm running!");
  }
  sleep(){
    return console.log("I'm sleeping");
  }
  _fyi() {
    return console.log('This is private!');
  }
}