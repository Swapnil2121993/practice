window.addEventListener("scroll", throttle(parallax));

function parallax(event) {
  shiftForeground(window.scrollX);
  shiftBackground(window.scrollX);
}

function throttle(fn) {
  function cb() {
  let start;
  const timeStamp = something - start
  if(timeStamp < 200) {
      window.requestAnimationFrame(cb)
  }
}
  return cb
}

// const express = require("express");
// const app = express();

// const rendered = {};

// app.get("/items/:id", async (req, res) => {
//   const itemID = req.params.id;
//   const content = rendered[itemID]; 
  
//   if (!content) {
//     const data = await getItemData(itemID);
//     content = rendered[itemID] = render(data);
//   }
  
//   res.send(content);
// });

// app.listen(8080);



// // API
// function sayHello(name, cb) {
//   cb(null, `Hello ${name}`);
// }


// const yourHello = (name) => {
//   return new Promise((resolve, reject) => {
//     sayHello('helloooooo', (err, data) => {
//       resolve(data)
//     })
//   })
// }
     
// console.log('>>>>>', sayHello('helloooooo', (err, data) => {
//     console.log(data)
// }))

// // consumer
// yourHello('Dmytro').then(data => console.log(data)).catch(err => console.error(err)) // >>      Hello Dmytro      
                   
/*

<html>
  <head>
    <style>
      body {           
        background-color: #1d2126;
        color: white;
      }
      
      .inner-boxes {
        display: grid;
        grid: 100px/auto;
        grid-gap: 10px;
        width: 20px;
        height: 20px;
        border: 1px solid red;
        padding: 5px;
        margin: 5px;
      }
      
      1 + 2 = 3
          
    </style>
    <script>
      const ticket = { 
        start: "",
        dest: ""
      }
      const tickets = [{start: "sf", dest: "la"}, {start: 'la', dest: 'vegas'}, { start: 'vegas', dest: 'ny'}];
      function getIten(tickets) {
        const mergedTicket = [];
        const currentStart = tickect[0].start
        const firstTicket = mergedTicket[tickets[0]];
        for(let i =1; i<tickets.length; i++) {
          const currentTicket = tickets[i];
          const startingPoint = tickets[i].start
          
          if(currentStart !== startingPoint) {
          if(currentTicket.start === firstTicket.start) {
            currentTicket.start = firstTicket.dest;
            mergedTicket.push(currentTicket) { start: "sf" dest: 'la'}
            }
          }
          
        return mergedTicket; [{start:'sf', dest: 'la'}, {start:'la', dest'
      }
      
      function addition(a,b) {
      var set = new Set();
      if(!set.hasOwnProperty(a)) {
          set.add(a)
      }
      else {
        set.get(a)
      }
        
        return set
      }
  </script>
  </head>
  <body>
    <div class="page-container">
      <div class="inner-boxes">
        <div class= "inner-boxes"></div>
        <div class= "inner-boxes"></div>
        <div class= "inner-boxes"></div>
        <div class= "inner-boxes"></div>
        <div class= "inner-boxes"></div>
      </div>
      <button onClick=addition(1,2)>plus</button>
      <button onClick=addition(1,2)>equals</button>
    </div>
  </body>
</html>


async const ABC = a => a



/**
 * Complete the FileManager class below
 */

// class FileManager {

//   /**
//     * Loads multiple files and returns the contents in the order requested.
//     * Use the "getFile" utility method found below the class.
//     *
//     * @param {Array} files - list of file names to be loaded
//     * @returns {Array} - list of file contents in the same order as they were requested
//     *
//     * Example input: ['file1', 'file2', 'file3']
//     * Example output: ['A', 'B', 'C']
//   */
//   async load(files) { // ['
//     const output = [];
//     for(let i=0; i<files.length; i++) {
//       const currentFile = files[i]
//       const getContent = await getFile(currentFile)
//       if(getContent) {
//         output.push(getContent)
//       }

//     }
//     return output
//   }
// }

  


// function getFile(file) {
//   return new Promise(function(resolve) {
//     fakeAjax(file, resolve);
//   });
// };
  
  
//   // const file  = new File
// // console.log('-----',getFile('file1').then(resp => resp))


// // Tests and test data below here

// function fakeAjax(url, cb) {
//   const fileConfigs = {
//     file1: {
//       timeout: 200,
//       content: 'A'
//     },
//     file2: {
//       timeout: 100,
//       content: 'B'
//     },
//     file3: {
//       timeout: 300,
//       content: 'C'
//     },
//     default: {
//       timeout: 0,
//       content: `invalid file: ${url}`
//     }
//   };
//   const fileData = fileConfigs[url] || fileConfig['default'];
//   setTimeout(() => {
//     cb(fileData.content);
//   }, fileData.timeout);
// }


// const chai = require('chai');
// const sinon = require('sinon');
// const sleep = require('util').promisify(setTimeout);
// const testInput = ['file1', 'file2', 'file3'];
// chai.should();

// async function runTests() {
//   let result;
//   const MyFileManager = new FileManager();
  
//   try {
//     result = await MyFileManager.load(testInput);
//     chai.assert.deepEqual(result, ['A','B','C'], 'Load files');

//     console.log('All tests passed!!!');
//   } catch(e) {
//     console.log('Tests failed!!!\n')
//     console.log(e);
//   }
// }

// runTests();