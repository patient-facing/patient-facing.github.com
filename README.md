Patient-facing Module
----------------
Patient-facing work (Medical Assistance System Application) is created by summer interns at Human Development Lab, CMU.

JSS - Medical Assistance System
--------
JSS (Jan Swastyha Sahyog) is a healthcare non-governmental organization, situated at Bilaspur, India. MAS is basically a medical information interface being designed for the non-literate user/patient.

Overview
--------
Currently, we are working on providing the following information to the user:
- Medicine Schedule : Which medicines have been prescribed, when to take them, what things should be kept in mind while taking the medicine
- Next Appointment : Reminders for the next deoctor's appointment
- General Instructions : General instructions provided by the doctor, such as what kind of diet the patient should stick to etc.

Why?
----
A large fraction of the Indian population is unable to read or write. The figures vary but they hover around 25%. Keeping this fact under consideration, we decided to develop a health-care module designed in such a way that the non-literate or semi-literate user can easily comprehend the information provided.

Usage
-----
This interface is being developed using Sencha Touch 2, a HTML5 mobile application framework.

Steps to set up the app
------------------------
Currently the app can be found at : http://patient-facing.github.com

The JSS medical assistance app can be viewed online on an  i-pad emulator. You can type in the address : 'patient-facing.github.com' in the emulator's address bar to run the app. 

However, if you find the emulator to be slow, you can download this repository from Github (https://github.com/Raxa/patient-facing) and test it out on your localhost.
 
Steps to host the app on the locahost:

1. Download (or clone) a copy of the code repository on to your computer from here.

2. You do not need to download or install Sencha separately to make the app run on your computer since the SDK is already included in the repo.

3. Set up your HTTP server. You can use WAMP (for Windows) or XAMPP (for Linux distros or Mac OS X). Installing WAMP or XAMPP is pretty easy. Follow the instructions on the respective websites and you should be ready to go. The steps are not detailed here as it is platform dependent. 

4. Once you have your HTTP server set up, place the downloaded in the localhost directory. (By default wamp uses a path like C:/wamp/www/ as it's localhost directory. XAMPP uses the htdocs folder for the same purpose). So, finally your directory structure should look something like (C:/wamp/www/patient-facing)

5. Fire up your webkit browser (Safari or Chrome).

6. Start the i-pad emulator.

7. Type in 'localhost' in the address bar and test out the app.

We are stressing on using the i-pad emulator for testing purposes because it emulates a 1024 X 768 resolution view. The app has been designed for this resolution.