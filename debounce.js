// search box firest search query
// which will make api call and in 
// response get you matching search results
// using debounce can reduce api call on 
// network and improve performance

//call a function after reaching certain 
//threshold limit ex >duration between 
// keyup event is greater than 1000 ms
// in below case for lesser time just
// remove timer that is created using 
// cleartimeout
//differnce between two events is greater than 
// 1000 ms thn make function call

let counter = 0
const getData = () => {
    // api call and get the data
    console.log('fetching data', counter++)
}

const debounce = function(fn, limit) {
    let context = this, args = arguments
    let timer
    return function() {
    clearTimeout(timer)
    timer = setTimeout(() => {
        getData.apply(context, args)
    }, limit);
}}

const betterVersion = debounce(getData, 1000)
