# Book Cupid


## Overview 

Book Cupid is an interactive app that mimics the experience of popular dating apps such as Hinge, Bumble, and Tinder to find their next favourite book! The app will utilize simple questionnaires, React’s swipe feature, and quirky illustrations to create a personalized book recommendation. Book Cupid is not about judging a book by its cover but instead, encouraging others to step out of their comfort zone and discover new voices in the book world.


### Problem

With the rise of social media and the popular hashtag, #booktok, reading has increasingly become many peoples’ favourite pastimes. However, certain books, stories, and authors take precedence on the internet. There is an opportunity in the book industry to better highlight authors and stories from marginalized communities. This is where Book Cupid comes in! Instead of offering book recommendations that are already trending on social media, this app will recommend books that highlight the BIPOC and/or 2SLGBTQIA+ experience that are often overlooked.

### User Profile
The targeted demographic for Book Cupid are users who already participate in social media trends such as #booktok, which predominantly consist of millennial and Gen Z women. With this in mind, I made sure to incorporate colours, illustrations, and design aestehtics that appeal to this demographic. 

### Features

The most important feature of this app will be React’s swipe feature https://www.google.com/search?q=react+swipe&oq=react+swipe&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg70gEIMzU3NGowajmoAgCwAgE&sourceid=chrome&ie=UTF-8  as this will provide the “online dating simulation”. Similar to dating apps where you fill out basic questionnaires to narrow down your match, Book Cupid will implement a similar structure where the users’ answers will dictate which “matches” they get to swipe left or right on. 

### Tech Stack

- React 
- Node and Express
- MySql to create my own database of books

Originally, I was going to implement the use of GoodReads api, but unfortunately, they discontinued their api for developers. I ultimately decided to create my own database of books to contain the scope of the project and keep it manageable. This also allowed me to rule out problematic books and/or authors that are harmful to  BIPOC and 2SLGBTQIA+ community. However, the limitation of this method, is that the database I create will inevitably be biased in some way. I understand in creating my own database of books that fulfills my criteria for this project that ironically, I am also limiting stories and authors that I may have missed in my research. However,  given the scope and timeline of the project, I know this a project that can easily be reworked with a better database .

### APIs

I will be creating my own database with MySQL.

### Sitemap
* Landing Page
    Beginning of the user’s experience with the Book Cupid Logo and buttons guiding the user to continue.
* Questionnaire #1/ “What the vibe?”
    The first questionnaire page asks the user to choose a “vibe”
    6 illustrations will be shown that are related to a specific genre of books.
* Questionnaire #2/ “Which quote resonates with you?”
    Based on user’s last answer, this page will populate a list of of quotes from popular books, television shows, and movies that are related to the “vibe” they picked.
* Book Profiles/ Swipe Feautre
    Based on their answers, they will be given a list of book “profiles” that they will swipe on until they find their match.
    Instead of pictures, however, the profiles will most likely be structured like “Hi I’m a romantic read with a historical influence and dash of mystery”. This is something I’m still working on as I build up the database and site, but the point is that I don’t want the user to judge a book on its cover so I will not be using images or illustrations here.
* Book Match
    When the user swipes right on a book, they are led to the book match.
    This page will reveal the title of the book, its genres, description, and a link to goodreads so that the user can save for later. Hopefully, it can also reveal the book cover as well, but I am still trying to figure out the best way to implement this. For now, in my data and in this proposal, I have left it out.
* More Book Recommendations
    This is page where other similar books will be listed that the user may also be interested in. 
* End
    A page just thanking the user for playing.

### Mockups

![mockup of app](<public/assets/Images/Screenshot 2024-07-06 at 2.30.16 PM.png>)
