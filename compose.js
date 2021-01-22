function f1(arg) {
    console.log("f1", arg);
    return arg;
}
function f2(arg) {
    console.log("f2", arg);
    return `comefromf2 ${arg}`;
}

// function compose(...funcs) {
//     console.log(funcs)
//     if(funcs.length == 0){
//         return arg => arg
//     }else if(funcs.length == 1){
//         return funcs[0]
//     }else{
//         return funcs.reduce((a,b) => (...args) => { a(b(...args)) })
//     }
// }
const compose = function(...args) {
    let length = args.length
    let count = length - 1
    let result
    return function f1 (...arg1) {
        console.log('------',...arg1)
        console.log('*******',arg1)
        result = args[count].apply(this, arg1)
        if (count <= 0) {
            count = length - 1
            return result
        }
        count--
        return f1.call(null, result)
    }
}

compose(f1, f2)('aaa')

//f1(f2('aaa'))

console.log('dev1-1')
console.log('dev1-2')