Function.bind

class XYZ extends React.Compoent {

constructor(props) {
	//this.onClick = this.OnClick.bind(this)
}

const onClick = () => {

}
onClick() {
	console.log(this);
}

<button onclick=this.onClick(this)/>
}

var salary = "1000$";
(function () {
   console.log("Original salary was " + salary); // 1000$
   let salary = "5000$";
   console.log("My New Salary " + salary); // 5000$
})();

Merge two sorted arrays. [1,4,5,12,18], [3,7,9,10] => [1,3,4,5,7,9,10,12,18]

const mergeSorted = (array1, array2) => {
	const array3 = array1.concat(array2)
  const sortedArray = array.sort((a,b) => a - b)
  return sortedArray // O(nlogn)
}

const mergedSorted1 = (array1, array2) => {
	const array1StartIndex = 0;
  const array2StartIndex = 0;
  const array1lastIndex = array2.length - 1;
  const array2lastIndx = array2.length -1;
  
  const isArray1Exhausted = array1StartIndex > array1lstIndex
  const isArray2Exhausted = array2StartIndex > array2lstIndex
  
  const array3  = [];
  
  
  if(isArray2Exhausted && (!isArray1Exhausted || array1[array1StartIndex] < array2[array2StartIndex])) {
  	array3.push(array1[array1StartIndex])
    array1StartIndex++;
  }
  
  else {
  	array3.push(array2[array2StartIndex])
  }
  
  return array3
  
}

O(n) // space complexity
O(1) // time complexity
