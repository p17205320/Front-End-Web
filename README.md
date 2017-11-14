# Front-End-Web

Git Repository for Front End Web Project.

Portfolio of previous work. Single page app using javascript to load html.

Using HTML5, CSS3 and Javascript

# Issues 
##1. Main content buttons where not working
###Cause: DOM Mutation making event listener not work
###Fix: Preload the buttons instead of injecting them. have them hidden by default

##2. CSS animations won't activate if content is injected
###Cause(?): Javascript inserts the style as inline to the html.
###Initial fix: use javascript Web Animation animations
###Dropped because: low compatibilty and slowness
###Actual Fix: ???