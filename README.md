# Frontend Mentor - Contact Form Solution

This is my solution to the [Contact Form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj).  
This project helped me practice accessible form validation, responsive design, and DOM manipulation using plain JavaScript.

---

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success message upon successful submission
- Receive validation messages if:
  - A required field is empty
  - The email address is not valid
- Submit the form using only the keyboard
- Have all inputs, error messages, and success messages announced for accessibility
- View an optimal layout depending on their screen size (mobile-first responsive)
- See hover and focus states for all interactive elements

---

### Screenshot

![Contact form screenshot](/Image%20solutions/desktop%20solution.JPG)

---

### Links

- Solution URL: [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/contact-form-with-html-css-and-vanilla-javascript-validation-XXXXX)
- Live Site URL: [Live Preview](https://innerweb404-web.github.io/contact-form-main/)

---

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript (for validation and success message)

---

### What I learned

This project helped me understand how to handle **custom form validation** using JavaScript without relying on the browser’s default validation messages.  

I also learned how to:
- Use `aria-describedby` for accessibility
- Dynamically show and hide error messages
- Smoothly scroll back to the top after submission
- Display and auto-hide a success message

Here's an example of my border-red error message:

```js
if (input.value.trim() === "") {
  errorSpan.textContent = "This field is required";
  errorSpan.classList.add("show");
  input.style.borderColor = "red";
}
```
Here’s an example of my validation logic:


```js
if (isValid) {
  form.reset();
  successMessage.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => successMessage.style.display = "none", 5000);
}
```
## Continued development

In future projects, I'd like to:
- improve accessibility with ARIA roles and live regions

- Add more advanced input types (dropdowns)

- Explore reusable validation logic to reduce repetition

- Transition to React or Typescript for better scalability

## Useful resources

MDN Web Docs – Form validation
-  Helped me understand how to customize validation.

CSS Tricks – Accessible form patterns

- A great guide for making form validation accessible.

Frontend Mentor Slack Community
- For discussing accessibility and responsive tips.

## Author


Frontend Mentor – @innerweb404-web

Twitter – @brightWeb_3

## Acknowledgments

A big thanks to ChatGPT for helping me debug and refine my JavaScript validation logic and accessibility flow.
Also, thanks to the Frontend Mentor community for feedback and best practices.
