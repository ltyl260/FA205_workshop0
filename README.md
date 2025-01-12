# FA205_workshop0
Creative Computing_Workshop Task 0
I have been using the processing foundations online p5js editor, i can code on my phone at work and actually see the results, its incredible!
I am lucky enouh to have some coding exerience so I used my prior expereince with java and the processing foundations documentation to make a beactiful rubber duck!
// making the duck was fairly simple, simple aranging circles and elipses into a duck shape, I used a common variable x to tie the duck together in preperation for getting my duck to move later on.
I decided to make a pond for my duck to float on, the chanllenge was to make a wave shape, get it moving an dget my duck to move in harmony with it.
I used a quad to fill in the lower water
to trace the curve for the waves on the water I used a circle moving in the y axis with a sin function and from 0 to width in the x axis on a while loop.
 // width of circle is 40px, want centre of circle to oscillate around height*0.8. 
 // i.e. speed*sin(x/20 - bob)+(height*0.8)
in the while loop I need to make sure to iterate the trace index otherwise the loop would be infinite.
When I exit the loop I need to reset the trace index to 0 so my sketch can adjust for the next iteration to give the illusion of movement.
I wanted to give an element of randomness to the ponds motion so my variable for speed id dictated by the rnadom function, giving teh duck a unique experience each time my sketch is loaded up.
// the speed ofthe pond is dictated by the multiplier of the sin function, I will make this variable constant between the bobboing of the duck and the speed of the water, and make it random to change the ducks speed each time you watch it.
// i.e. speed = random(20); 
Experiment with at least one of the following 2D primitive shapes from the p5.js documentationLinks to an external site.: line, triangle, quad, arc.

I am very happy with how this turned out.
I hope my ducks peaceful bobbing brings as much joy to you as it does to me!
