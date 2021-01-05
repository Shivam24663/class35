class Form{
 constructor(){

 }   

 display(){
var button=createButton('PLAY');
var title=createElement('h2');
var input=createInput('name');
var greeting=createElement('h3');

title.html('car racing game');

title.position(130,0);
input.position(130,160);
button.position(250,200);

button.mousePressed(function(){
input.hide();
button.hide();
var name=input.value();
playerCount=playerCount+1;
greeting.html('HELLO '+name);
greeting.position(130,160);
}
);

 }


}