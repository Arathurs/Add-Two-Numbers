# Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

# Method 1

In this method we solve the problem using native javascript operations such as turning the list into an array, and reversing that array to properly format the number. Then we can perform basic math operations. Unfortunately, this method only works for 99.9% of LC test cases. Due to JavaScript inherent reversion to exponential notation with high numbers it's difficult to get precise figures when the required sum is too great.