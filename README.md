# domino-placement
given any board, is there at least one way to cover all valid spaces with dominoes?

## INTRODUCTION ##
Problem statement: Given a matrix representing an n X n board, such as in chess, is there a solution to the problem of placing 2 X 1 dominoes on the board such that the entire board is covered?

If the input board has predefined "invalid" positions, such as that described in Gayle MacDowell's "Cracking the Coding Interview" where two opposing corner positions are removed from an 8 X 8 board, the logic of this solution should/will account for these missing positions and determine if a solution is possible, given these "removed" board spaces.

## File Structure ##

The primary focus of this repository is to create the logic necessary to determine whether a solution exists to the problem

The secondary focus of this repository is to create a visual display and interactive application to allow users to prompt with input boards, and receive feedback as to whether a possible solution exists in a dynamic page.
