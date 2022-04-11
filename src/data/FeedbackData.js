const FeedbackData = [
    {
        id: 1,
        rating: 8,
        description: 'Selection Sort: The algorithm divides the input array into two parts: the sublist of already-sorted elements, which is built up from left to right, and the sublist of the remaining elements that occupy the rest of the list and need to be sorted.\n' +
            '\n' +
            'Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.\n' +
            '\n' +
            'In other words, this algorithm works by iterating over the array and swapping each element with the minimum element found in the rest of the array.'
    },
    {
        id: 2,
        rating: 8,
        description: 'Bubble Sort: This is another famous sorting algorithm also known as “sinking sort”. It works by comparing adjacent pairs of elements and swapping them if they are in the wrong order. This is repeated until the array is sorted.\n' +
            '\n' +
            'Think of it this way: a bubble passes over the array and “catches” the maximum/minimum element and brings it over to the right side.'
    },
    {
        id: 3,
        rating: 8,
        description: 'Insertion Sort: Insertion sort is another very famous sorting algorithm, and it works the way you would naturally sort items in real life.\n' +
            '\n' +
            'It iterates over the given array, figures out what the correct position of every element is, and inserts each element in its place.'
    },
    {
        id: 4,
        rating: 8,
        description: 'Merge Sort: Merge sort is a typical text-book example of a recursive algorithm. The idea is very simple: We divide the array into two equal parts, sort them recursively, and then combine the two sorted arrays. The base case for recursion occurs when the size of the array reaches a single element. An array consisting of a single element is already sorted.\n' +
            '\n' +
            'We\'ll determine the time complexity of merge sort by unrolling the recursive calls made by the algorithm to itself, and examining the cost at each level of recursion. The total cost is the sum of individual costs at each level.\n' +
            '\n' +
            'The running time for a recursive solution is expressed as a recurrence equation (an equation or inequality that describes a function in terms of its own value on smaller inputs). The running time for a recursive algorithm is the solution to the recurrence equation. The recurrence equation for recursive algorithms usually takes on the following form:\n' +
            '\n' +
            'Running Time = Cost to divide into n subproblems + n * Cost to solve each of the n problems + Cost to merge all n problems\n' +
            '\n' +
            'In the case of merge sort, we divide the given array into two arrays of equal size, i.e. we divide the original problem into sub-problems to be solved recursively.\n' +
            '\n' +
            'Following is the recurrence equation for merge sort.\n' +
            '\n' +
            'Running Time = Cost to divide into 2 unsorted arrays + 2 * Cost to sort half the original array + Cost to merge 2 sorted arrays'
    },
    {
        id: 5,
        rating: 8,
        description: 'Quicksort: is the fastest known comparison-based sorting algorithm for arrays in the average case.\n' +
            '\n' +
            'Caveat: Merge sort works better on linked lists, and there are other non-comparison based algorithms that outperform quicksort. Start with an array of n elements.\n' +
            '\n' +
            'Choose a pivot element from the array to be sorted.\n' +
            '\n' +
            'Partition the array into two unsorted subarrays, such that all elements in one subarray are less than the pivot and all the elements in the other subarray are greater than the pivot.\n' +
            '\n' +
            'Elements that are equal to the pivot can go in either subarray.\n' +
            '\n' +
            'Sort each subarray recursively to yield two sorted subarrays.\n' +
            '\n' +
            'Concatenate the two sorted subarrays and the pivot to yield one sorted array.\n' +
            '\n' +
            '\n'
    }
]

export default FeedbackData