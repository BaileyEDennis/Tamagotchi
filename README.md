<head>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
</head>

![image](./img/siteimg.png)

# Tamagotchi
This project was meant as an entry into Sass. The project features four quadrants that display different things you can do with your Tamagotchi, including sleeping, fighting, eating, and playing! Each section also features a button that when clicked effects the energy level of each activity. It's a fun little project, please check it out and enjoy!

## Technology used
-HTML
-Javascript and Jquery
-Sass
-Webpack

## Netlify
[![Netlify Status](https://api.netlify.com/api/v1/badges/effdc51e-d3c6-40ce-a67c-a07404f3cda3/deploy-status)](https://app.netlify.com/sites/sharp-aryabhata-6c0aea/deploys)
Checkout [the project!](https://sharp-aryabhata-6c0aea.netlify.app/)

## Code Snippet
### Javascript <i class="fab fa-js-square"></i>
```javascript
const eatingButtons = () => {
  $('#goodFood').on('click', () => {
    $('#health').html('');
    $('#health').html(`<h2>${eatButtonGood()}</h2>`);
  });
  $('#badFood').on('click', () => {
    $('#health').html('');
    $('#health').html(`<h2>${eatButtonBad()}</h2>`);
  });
};

export default { eatingButtons, eatDom, full };
```
### Sass <i class="fab fa-sass"></i>
```scss
#app {
  display: flex;
  flex-wrap: wrap;
  .quad {
    width: 50%;
    height: 20rem;
  }
}
```
