# LearningStuff 🧑‍🏫

![Logo](https://i.imgur.com/DpQco85.png)

LearningStuff is an e-learning platform created during The Hacking Project ReactJS bootcamp.
It brings together students, who are seeking to train in a specific skill, and teachers, who have mastered this skill.
Students can book a course or a program composed of several courses. Then they can access of all the lesson in their dashboard.

You can visit and test this platform at : https://learning-stuff-thp.herokuapp.com
This React app is calling a Rails API (https://prod-back-learningstuff.herokuapp.com)


![Image of site](https://i.imgur.com/gZQ2GN3.png)

# Table of content

1. [Database](#Database)
2. [Features](#Features)
    1. [Administrator](#Administrator)
    2. [Teacher](#Teacher)
    3. [Student](#Student)
3. [Next-Features](#Next-Features)
4. [Stacks](#Stacks)
5. [Authors](#Authors)


## Database

![Database](https://i.imgur.com/Wia9xi1.png)

## Features

For the purpose of THP jury, we have created several accounts.

### Administrator

You can sign up with either :

- admin1@learning.com
- admin2@learning.com
- admin3@learning.com
- admin4@learning.com
  and password: **bonjour**

  You will thus have Dashboard Admin access:

  ![Dasboard Admin](https://i.imgur.com/TfHoJsY.png)

On this **Admin Dashboard** you will be able to:


- create a course by retrieving the content of a Github repository
- create, modify and delete training categories
- create training courses by choosing and grouping courses
- validate (or not) the profile of someone who registers on the site and give him a role
- view the list of users and delete them
- see the list of training courses

### Teacher

You can sign up with either :

- teacher1@learning.com
- teacher2@learning.com
- teacher3@learning.com
- teacher4@learning.com
  and password: **bonjour**
  You can also create your account and select Teacher from the drop-down menu under the password forms. In this case, an administrator will have to validate your registration.

As a **Former**, you will be able to:

- be assigned to a course by the administrator
- on your profile, fill in your skills
- reply on the forum of a course where you are assigned, an icon will identify you as a teacher.

### Student 

You can sign up with either :

- student1@learning.com
- student2@learning.com
- student3@learning.com
- student4@learning.com
  and password: **bonjour**
  You can also create your account and select Learner from the drop-down menu under the password forms. In this case, an administrator will have to validate your registration.

As a **Student**, you will be able to:

You will thus have **Profil** access:

![Profil User](https://i.imgur.com/AP8EM36.png)




On this **Profil** you will be able to:

- register, log in, log out
- view your payments / invoices
- see the courses you have completed
- see your progress on a dashboard
- see all the courses you have registered for
- search for courses by name and category
- edit your profile and avatar

You can acces at pages Learning paths and courses 


![Courses ](https://i.imgur.com/ML72Cvt.png)



On this Pages you can : 

- register and pay for courses
- pay for training
- take a Lesson
- search a course with the searchbar or a with categories


To make a false payment with **Stripe** you enter these you card number like :

![Stripe](https://i.imgur.com/sIz9v5J.png)



and when you have pay for course you acces at this page : 




![Lesson](https://i.imgur.com/XQQKITo.png)

and here you can :

- see your course
- watch the video 
- complete a quiz
- ask a question in a lesson forum

By default, you'll already be booked to one program composed of four courses, and to one course.
Emails are sent after an account creation, validation and after a subscription to a course.

## Next Features

An administrator may:

- see different data on a dashboard
- filter training
- see the list of live sessions
- create, modify and delete live sessions

A professor may:

- see the list of past and upcoming live sessions
- offer live sessions

A student may:

- put several training courses in your basket to buy them at once
- upload a file in some lessons
- authenticate with Linkedin
- display the list of upcoming live sessions
- register for a live session
- give your opinion on a course
- receive notifications
- Newsletter subscription

A Company may:

- create an account and buy a training course
- see the progress of its employees


## Stacks

- **Back** : Ruby on Rails 6
- **Front** : React JS, Redux, HTML, CSS
- **API** : Stripe Github

## Authors

This application was created by:

[Charlotte Favier](https://github.com/cha-fa)

[Quentin Plaud](https://github.com/kentsbrockman)

[Dan Bertrand](https://github.com/DanBertrand)

[Paul Koo](https://github.com/Hyakon)

[Jeremy Querné](https://github.com/Queje)

[Louison Boisselier](https://github.com/Louison-Boi)
