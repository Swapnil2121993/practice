// difference between first function call 
// and next function call is 300ms than only
// make function call
// calling after certain interval time

const expensiveFunciton = () => {
    console.log('expensivvveee')
}

const throttle = function(fn, limit) {
    let flag = true;
    return function () {
        fn();
        flag = false
        setTimeout(() => {
           flag=true
        }, limit);
    }
}

const betterExpensiveFunction = throttle(expensiveFunciton, 300)
window.addEventListener('resize',  betterExpensiveFunction)


