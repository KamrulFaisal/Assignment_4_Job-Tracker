Answers to the questions in a consecutive order:

1. getElementById selects only one element using its unique id, so it is very direct and fast when I already know the exact element I want. getElementsByClassName selects multiple elements that share the same class name and returns a live collection, which means it can change if the DOM changes. querySelector is more flexible because it allows me to use CSS selectors and returns the first matching element, while querySelectorAll also uses CSS selectors but returns all matches as a static list.

2. To create and insert a new element into the DOM, I first create the element using document.createElement(), then I add content like text or classes to it, and finally I place it inside a parent using methods such as appendChild() or append(). This is how JavaScript can dynamically add new things to the page without reloading.

3. Event Bubbling is when an event starts from the element that was clicked and then moves upward through its parent elements automatically. For example, if I click a button inside a div, the click event happens on the button first and then also affects the div and even higher elements unless I stop it.

4. Event Delegation is a technique where I attach one event listener to a parent element instead of adding listeners to many child elements. It is useful because it makes the code simpler, improves performance, and also works for elements that are added later dynamically.

5. preventDefault() stops the browser’s default behavior, like preventing a form from submitting or stopping a link from opening, while stopPropagation() stops the event from moving up to parent elements during bubbling, so only the targeted element reacts.