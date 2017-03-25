// learn Promise
//typeof Promise == 'function'
//prototype ==> then/catch
//静态方法 ==> all/race/resolve/reject

//first step: new Promise

var t = Promise.resolve(1);
var another = Promise.resolve({
    then: function(resolve,reject){
        reject(2)
    }
});
//another.then(val=>console.log(val));
another.catch(val=>console.log(val));
console.log(another);