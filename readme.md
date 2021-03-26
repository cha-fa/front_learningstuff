# LearningStuff 🧑‍🏫

![Logo](github.com/cha-fa/front_learningstuff/src/assets/logo.png?raw=true)

LearningStuff is an e-learning platform created during The Hacking Project ReactJS bootcamp.
It brings together students, who are seeking to train in a specific skill, and teachers, who have mastered this skill.
Students can book a course or a program composed of several courses. Then they can access of all the lesson in their dashboard.

You can visit and test this platform at : https://learning-stuff-thp.herokuapp.com
This React app is calling a Rails API (https://prod-back-learningstuff.herokuapp.com)

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

### Students

You can sign up with either :

- student1@learning.com
- student2@learning.com
- student3@learning.com
- student4@learning.com
  and password: **bonjour**
  You can also create your account and select Learner from the drop-down menu under the password forms. In this case, an administrator will have to validate your registration.

As a **Student**, you will be able to:

- see the courses you have completed
- register and pay for courses
- see your progress on a dashboard
- view your payments / invoices
- see all the courses you have registered for
- search for courses by name and category
- edit your profile and avatar
- pay for training
- take a Lesson
- register, log in, log out
- ask a question in a lesson forum
- complete a quiz

By default, you'll already be booked to one program composed of four courses, and to one course.
Emails are sent after an account creation, validation and after a subscription to a course.

## Next Feature

## Stack

**Back** : Ruby on Rails 6
**Front** : React JS, Redux, HTML, CSS
**API** : Stripe Github

## Author

This application was created by:
