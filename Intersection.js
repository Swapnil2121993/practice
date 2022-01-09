//Write a function to find the rectangular intersection of two given love 
//rectangles.

//As with the example above, love rectangles are always "straight" and never "
//diagonal." More rigorously: each side is parallel with either the x-axis or 
//the y-axis.

// const myRectangle = {

//     // Coordinates of bottom-left corner
//     leftX: 1,
//     bottomY: 1,

//     // Width and height
//     width: 6,
//     height: 3,
//   };

//   Your output rectangle should use this format as well.

function findOverlapRanges(point1, length1, point2, length2) {

    // Find the highest start point and lowest end point.
    // The highest ("rightmost" or "upmost") start point is
    // the start point of the overlap.
    // The lowest end point is the end point of the overlap.
    const highestStartPoint = Math.max(point1, point2);
    const lowestEndPoint = Math.min(point1 + length1, point2 + length2)

    // Return null overlap if there is no overlap
    if (highestStartPoint >= lowestEndPoint) {
        return { startPoint: null, overlapLength: null }
    }

    // Compute the overlap length
    const overlapLength = lowestEndPoint - highestStartPoint;
    return { startPoint: highestStartPoint, overlapLength: overlapLength }
}

function findRectangularOverlap(rect1, rect2) {
    // Get the x and y overlap points and lengths

    const xOverlap = findOverlapRanges(rect1.leftX, rect1.width, rect2.leftX, rect2.width)
    const yOverlap = findOverlapRanges(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height)

    if (!xOverlap.overlapLength || !yOverlap.overlapLength) {
        return {
            leftX: null,
            bottomY: null,
            width: null,
            height: null,
        };
    }
    return {
        leftX: xOverlap.startPoint,
        bottomY: yOverlap.startPoint,
        width: xOverlap.overlapLength,
        height: yOverlap.overlapLength
    };
}

// Breakdown
// Let's break this problem into subproblems. How can we divide this problem into 
//smaller parts?

// We could look at the two rectangles’ "horizontal overlap" or "x overlap" 
//separately from their "vertical overlap" or "y overlap."

// Lets start with a helper function findXOverlap().

// Need help finding the x overlap?

//Since we’re only working with the x dimension, we can treat the two rectangles' 
//widths as ranges on a 1-dimensional number line.

//Let's start with the first 2 cases. How do we compute the overlapping range?

//One of our ranges starts "further to the right" than the other. We don't 
//know ahead of time which one it is, but we can check the starting points of 
//each range to see which one has the highestStartPoint. That highestStartPoint 
//is always the left-hand side of the overlap, if there is one.

// Not convinced? Draw some examples!

// Similarly, the right-hand side of our overlap is always the lowestEndPoint. 
//That may or may not be the end point of the same input range that had the 
//highestStartPoint—compare cases (1) and (2).

// This gives us our x overlap! So we can handle cases (1) and (2). How do we know 
//when there is no overlap?

// If highestStartPoint > lowestEndPoint, the two rectangles do not overlap.

// But be careful—is it just greater than or is it greater than or equal to?

// It depends how we want to handle case (4) above.

// If we use greater than, we treat case (4) as an overlap. This means we 
//could end up returning a rectangle with zero width, which ... may or may not be 
//what we're looking for. You could make an argument either way.

// Let's say a rectangle with zero width (or zero height) isn't a rectangle at 
//all, so we should treat that case as "no intersection."

// Solution
// We divide the problem into two halves:

// The intersection along the x-axis
// The intersection along the y-axis
// Both problems are basically the same as finding the intersection of two "ranges" on a 1-dimensional number line.

// So we write a helper function findRangeOverlap() that can be used to find 
//both the x overlap and the y overlap, and we use it to build the rectangular 
//overlap:

