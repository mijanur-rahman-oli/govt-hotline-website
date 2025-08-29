1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
getElementById: It uses for select elemnets by id name.
getElementsByClassName: It uses for select All elements by class name. it returns HTMLCollection.
querySelector: It selects only first element of any css selectors.
querySelectorAll: It selects all elements of any css selector, it retruns NodeList.


2. How do you create and insert a new element into the DOM?

Answer:
let new = document.createElement("div");
new.textContent = "Emergency Hotline";
document.body.appendChild(new);


3. What is Event Bubbling and how does it work?

Answer: When click an element, first runs that element then bubble up for it's parent then parents parent. it's called event bubbling.


4. What is Event Delegation in JavaScript? Why is it useful?

Answer: it's uses by parent elements, attach one addEvenlistener to parent element for handle event of child element.


5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: 
preventDefault(): Stops the default action, example: when we use form we use it for pretend auto refreshing event.
stopPropagation(): Stops the event from bubbling up.
