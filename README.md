**Assignment: Command-Line Tic Tac Toe in JavaScript**  

---

## Overview

Your task is to create a command-line version of Tic Tac Toe in JavaScript. This project will help you practice a systematic design process to produce clear, well-structured, and thoroughly tested code. After completing a 3×3 version with **X** and **O**, you will create a second version using a 4×4 board with **Y** and **N**.

> **Note**: You will need the [`prompt-sync`](https://www.npmjs.com/package/prompt-sync) library to prompt users in the terminal.  
> - Install it with:  
>   ```bash
>   npm install prompt-sync
>   ```  
> - Require and use it in your code:
>   ```js
>   const prompt = require('prompt-sync')();
>   let name = prompt('What is your name? ');
>   console.log(`Hello, ${name}!`);
>   ```

---

## Design Recipe (Step-by-Step)

Below is a **six-step** design recipe you should apply when developing your program. While these steps are often demonstrated using functions, the same principles can be applied to **any component of your code** (e.g., entire modules, classes, or game loops). The process guides you from identifying the problem to testing your final solution.

1. **Analyze the Problem and Define the Data**  
   - Describe what the program or component needs to do.  
   - Identify which pieces of real-world information must be represented as data.  
   - Define how you will represent this data (e.g., arrays, objects, strings).

2. **Signature, Purpose Statement, and Header**  
   - **Signature**: Precisely state the types of data your component consumes and produces.  
   - **Purpose Statement**: Explain in one or two sentences what the component is supposed to do.  
   - **Header / Stub**: Provide a minimal outline or placeholder definition.

3. **Functional Examples**  
   - Work through concrete examples (inputs) and show the expected results (outputs).  
   - Use these examples to clarify and validate your understanding of the component’s purpose.

4. **Function (or Component) Template**  
   - Outline the structure of your component based on the data it operates on.  
   - Identify and plan the core steps or transformations needed.

5. **Definition / Implementation**  
   - Fill in your template with the actual logic.  
   - Use your purpose statement and examples to ensure correctness.

6. **Testing**  
   - Convert your examples into automated tests.  
   - Run your code or component against these tests to confirm correctness.  
   - Create additional test cases if necessary (edge cases, invalid inputs, etc.).

---

## Part 1: 3×3 Tic Tac Toe (X vs. O)

1. **Build a 3×3 grid** where two players, **X** and **O**, alternate placing marks.  
2. **Announce a winner** if they complete a row, column, or diagonal with the same mark.  
3. **Stop the game** as soon as a winner emerges (or if all spaces are filled).  
4. **Use `prompt-sync`** to interact with players in the terminal.  
5. **Display the board** in a clear, text-based format, for example:
   ```
   X| | 
   ------
    |X| 
   ------
    | | 
   ```
   This kind of ASCII representation helps players see the current state of the board and which moves have been made.

---

## Part 2: Extend the Game

Once you have a working 3×3 Tic Tac Toe using **X** and **O**, you will create a second version that is:

- A **4×4** grid.  
- Uses **Y** and **N** instead of X and O.

Your assignment is to **make any necessary modifications** to your original design to accommodate these changes.  

*(No additional guidance on specific changes is provided; you should determine what modifications are needed.)*

---

## README Instructions

Provide a short **README** explaining:

1. **Design Recipe Usage**: Summarize how you applied each step of the design recipe to your program or its components.  
2. **Data Definitions**: Note how you adapted or extended your data definitions to accommodate the new board size and new marks.  
3. **Testing**: Describe any new or modified tests you introduced to verify correctness in the 4×4 version.  
4. **Insights**: Briefly mention any challenges or interesting discoveries you made during the process.

---

## Submission & Grading

1. **Source Code**:  
   - A file (or files) for your 3×3 version.  
   - A file (or files) for your extended 4×4 version.

2. **Test Suite**:  
   - Automated tests demonstrating that your functions (or other components) work properly in both versions.

3. **README**:  
   - A short document describing how you applied the design recipe, any data definition changes, and your testing approach.

Your work will be assessed on **clarity**, **correctness**, **use of the design recipe**, and **thorough testing**.  

**Good luck, and have fun building and testing your Tic Tac Toe game!**
