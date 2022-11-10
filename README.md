# NYT's Top Stories
This application is built using the [New York Times API](https://developer.nytimes.com/docs/top-stories-product/1/overview). 

## Project Goals
This application is built for an evaluation in order to demonstrate foundational skills of:
* React JS and Front-End best practices
* Ability to prioritize MVP
* Hierarchy of information
* Clean, thoughtful code

## Planning Documents 
*JSON response example*

<img width="600" alt="Screenshot 2022-11-07 at 4 05 18 PM" src="https://user-images.githubusercontent.com/95593550/200425371-3d09b114-bcf4-44df-9e2f-f25afb934085.png">

*Component tree*

First iteration

<img width="532" alt="Screenshot 2022-11-08 at 2 21 40 PM" src="https://user-images.githubusercontent.com/95593550/200930525-af0f1d12-e11f-4bbc-9a07-e11d859dd311.png">

Second iteration

<img width="554" alt="Screenshot 2022-11-08 at 3 26 11 PM" src="https://user-images.githubusercontent.com/95593550/200678885-50865fdd-5e6d-432a-b057-0ac26abb721b.png">

*Wire-frame: Home Screen*

<img width="600" alt="Screenshot 2022-11-07 at 5 44 51 PM" src="https://user-images.githubusercontent.com/95593550/200439182-2b0bf521-8b2e-48c5-9f63-ee01b8eb9b08.png">

*Wire-frame: Article Detail Modal*

<img width="600" alt="Screenshot 2022-11-07 at 6 01 36 PM" src="https://user-images.githubusercontent.com/95593550/200441326-376a3124-5ef5-4302-bba5-9004bb08c909.png">

*Wire-frame: Phone Layout*

<img width="200" alt="Screenshot 2022-11-07 at 6 09 59 PM" src="https://user-images.githubusercontent.com/95593550/200442332-75a790e0-bb37-4508-9541-302227ba12ea.png">

## Screenshots

*14" Mac-book*

<img width="600" alt="Screenshot 2022-11-09 at 11 21 25 AM" src="https://user-images.githubusercontent.com/95593550/200897964-27390940-c752-4462-a083-8d9c36662d53.png">

*iPad Air*

<img width="300" alt="Screenshot 2022-11-09 at 11 19 19 AM" src="https://user-images.githubusercontent.com/95593550/200898163-466f31b7-5350-4d18-9db5-0c517dec567f.png">

*iPhone 12 Pro*

<img width="200" alt="Screenshot 2022-11-09 at 11 23 03 AM" src="https://user-images.githubusercontent.com/95593550/200898343-9cf83f7e-be87-49e6-afd8-29db8c4553fd.png">

## Process Notes

### Planning
* Focused on creating solid planning documentation for ease of production
* Iterated over planning documents during process
* Created User Stories to describe features
* Made tickets and PRs to demonstrate knowledge of GitHub workflow
* Utilized branches to show good version control habits

### UI
* Kept UI simple to in order to meet MVP in under 8hr time limit
* Responsive on computer, tablet and phone screens

### Features
* Modal displaying Article Details for quick user interactions
* Chronological feed can be sorted by user in both descending and ascending order
* User can visit newsfeed sections, sections use routing so user has access to back button

### Accessibility 
* Application can be navigated through with tabs
* Modal follows accessibility guidelines

<img width="400" alt="Screenshot 2022-11-09 at 10 56 51 AM" src="https://user-images.githubusercontent.com/95593550/200899906-3bb0440e-fa85-41eb-babe-59cfb87f5cc7.png">

### Testing
* Tested e2e with Cypress
* Shows examples of happy and sad path testing
* Stubs data from API
<img width="400" alt="Screenshot 2022-11-09 at 10 58 27 AM" src="https://user-images.githubusercontent.com/95593550/200900164-5651e0e9-bdca-46d0-b61b-98ddba4640e4.png">

## Reflection on Presentation Feedback 
### Refactoring Dates
* Introduced npm package to format dates: [date-fns](https://date-fns.org/)
  * Really cool package, will use again
  * Offers a bunch of tools for organizing and formatting dates
  * Took the guess work out of sorting dates

### Passed in Reference
* Since React props are objects, they are passed by reference
* Any state that is an Object or a Array is also passed by reference
  * [Link to more info about passed by value vs reference](https://medium.com/nodesimplified/javascript-pass-by-value-and-pass-by-reference-in-javascript-fcf10305aa9c)  
* When something is passed by reference the "address" of the object / array is passed
* The "address" means that the location of where the object / array lives in memory is passed vs the value
* If a value in an object or array is mutated, React doesn't know about it because it still sees the object / array as the same "address"
* In order for React to know a value in an array or object has been changes, you need to be sure to make a new copy of the value then mutate the new copy
* This will give you an object / array with a new "address" or place in memory

## Roadmap
* Add testing for modal
* Further style modal
* Have tab cursor move back up to first element when section is changed
* Add lazy loading of articles for better performance 













