// algoexpert
// Time: O(nlogn)
// space: O(1)

//sampleInput
// redShirtHeights: [5,8,1,3,4]
// blueShirtHeights: [6,9,2,4,5]


function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a,b) => b- a)
  blueShirtHeights.sort((a,b) => b - a)
	
	const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE'
	for(let idx=0; idx<redShirtHeights.length; idx++) {
		const redShirtHeight = redShirtHeights[idx]
		const blueShirtHeight = blueShirtHeights[idx]
		
		if(shirtColorInFirstRow === 'RED') {
				if(redShirtHeight >= blueShirtHeight) return false
			} else if(blueShirtHeight >= redShirtHeight) return false
		}
  // Write your code here.
  return true;
}

console.log(classPhotos([5,8,1,3,4],[6,9,2,4,5]))
