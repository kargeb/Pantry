<h1 style="text-align: center"> Pantry </h1>
<div style="text-align: center">
<img src="https://i.ibb.co/NFHqnHC/Multiple-Device-latest-without-bg-edited.png" width="90%">
</div>

<!-- ![Multiple devices](https://i.ibb.co/NFHqnHC/Multiple-Device-latest-without-bg-edited.png) -->

## Demo

[https://pantry.pl/](https://pantry.pl/)

## General info

Application allows you control number of any kind of stuff in your pantry/stock/office or any place you need.

- add and delete products and categories
- you can set the minimum quantity of each product and when it is exceeded this item will be added automatically to the shopping list
- all data is stored in the cloud.

<!-- ## Table of contents

- [General info and inspiration](#general-info-and-inspiration)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features) -->
<!-- - [Status](#status) -->
<!-- - [Contact](#contact) -->

## Inspiration

Application idea was born during the online event called "React 10days challenge" witch was organized by eduweb.pl website. It was one of the project proposals that participants had to pick and develop within 10 days.

At the end of the event, first version of this app got very good reviews, which motivated me to keep improving it. Finally, after a few months of works, I think it's worth to show it to the world and You :)

## Main application requirements:

- add, delete and edit products that is their names, units, and current and minimum quantity
- amount of products should be easily seen and has easy to way to modify it
- when quantity of specific product will be lower than it's minimum, this item should be automatically added to the shopping list
- separate view for the shopping list, where you can also change products quantity and thus make them disappear from it

## Additional features

- product categories
- saving all data in the cloud (Firestore)
- responsibility
- settings view including:
  - dark mode
  - insert sample data
  - category manager where you can add and remove them

## Screenshots

 <img style="margin-bottom: 16px;" src="https://i.ibb.co/Mg1T41M/Pantry-main-pc.jpg" width="100%" alt="Main view" >

<p float="left" align="center">
  <img src="https://i.ibb.co/ZdpbZR8/Settings-pc.jpg" width="360px" alt="Settings">
  <img  src="https://i.ibb.co/1qz99sT/shopping-list-PC.jpg" width="360px"alt="Dark mode">
</p>

<p float="left" align="center">
  <img style="margin-bottom: 16px;" src="https://i.ibb.co/m5qS23M/New-product-PC.jpg" width="360" alt="New product" > 
  <img style="margin-bottom: 16px;" src="https://i.ibb.co/gD95c7r/Categories-PC.jpg" width="360" alt="Shopping list">
  <img style="margin-bottom: 16px;" src="https://i.ibb.co/Bg13tL7/dark-mode-MOBILE.jpg" width="360px" alt="Categories">
</p>

## Technologies

- React - version 1.0
- Firebase: Cloud Firestore
- Styled-components - version 2.0

## Setup

Instructions how to run this application using your own database:

1. Create Cloud Firestore Database in your [Firebase console](https://firebase.google.com/products/firestore)
1. Copy database credentials
1. Copy content of `.env-sample` and create new file named `.env`
1. Update your database credentials in `.env`
1. Run: `npm install`
1. Run: `npm start`
1. Enjoy my app at [http://localhost:3000](http://localhost:3000) :)

<!-- ## Status

Project is: _in progress_, _finished_, _no longer continue_ and why?

To-do list:

- Wow improvement to be done 1
- Wow improvement to be done 2 -->
