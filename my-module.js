function test(){
  console.log('hello from test');
}
module.exports = {
  asd: "123",
  print: function(){
    console.log('hello from module');
  },
  test: test() // invoke self
};