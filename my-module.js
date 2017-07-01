function test(){
  console.log('hello from test');
}
module.exports = {
  asd: "123",
  pi: 3.14159,
  print: function(){
    console.log('hello from module');
  },
  testasd: test() // invoke self
};