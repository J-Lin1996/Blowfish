Team 22 BLOWFISH

Team Info
----------------------
Lydia Kim (A00958404)
Johnny Ng (A00871726)
Born Lee (A00963515)
Jordan Lin (A00934771)
Lei Pei (A00924846)



Project Overview
----------------------
Title : Blowfish
- The Blowfish is a memory training game to assist users in improving
  the short-term memory in a fun and easy way. The gameplay has a score,
  timer, and a list of food items that the blowfish has to eat in a
  certain order. More food items and less time limit will be implemented
  as the level increases. 



Code Structure
----------------------
The base structure of our game is our HTML pages. We have 3 separate HTML
files; "index", "tutorial1", and "tutorial2". The index.html contains all
of our game content which includes the objects that the user can see and
interact with: timers, level counters, food display, and food items. Each
of these items are held within their own div boxes to allow for easy positioning
and easy access to calling our javascript functions. The tutorial pages are
simple html webpages which contain the instructions to play our game. The
leaderboard pages have been put into a separate "templates" folder.

Our game functionality has been coded using JavaScript and jQuery which is
held in the js/ folder. Each aspect has been separated into their own .js files
according to their functions: the easter egg functions is all contained in the egg.js etc.

As for our database, we have used SQL-Server and ASP.net to link our game to
the database. Our main folder contains the ashx files that link our game to
the database to write and retrieve data through the leaderboard page as well as
the submission page.

Technologies
----------------------
HTML: To structure the web pages of our game
CSS: To style the HTML documents
JavaScript: To make the game functional
JQuery: To animate the food items
SQL Server: To structure the leaderboard
ASP.NET: To create forms connecting to database
Photoshop: To edit the blowfish and food image
Paint.NET: To make the images transparent


Issues/Problems
----------------------
Mobile-friendly
- The game is only compatible on Iphone 6 Plus
 because the CSS is hardcoded only for that size.
Using bootstrap may cover up our problem of 
mobile-compatible on multiple devices. 


