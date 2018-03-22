/*A real time clock.*/
	
// display to the screen
var heading = document.getElementsByClassName("heading")[0];
var mySpan = document.createElement("span");
	mySpan.id="timer";
	mySpan.style.float="right";
	mySpan.style.color="#4676c9";
	mySpan.style.border="3px solid #111";
	mySpan.style.fontWeight="bold";
	mySpan.innerHTML ="<span>00:00:00</span>";

	heading.appendChild(mySpan);


// Global variables
var timerID = null;
var timerRunning = false;
// stop the clock
function stopclock() {
	if (timerRunning) {
	clearTimeout(timerID);
	timerRunning = false;
	}
}
// start the clock
function startclock() {
	// make sure the clock is stopped
	stopclock();
	showtime();
}
// actually display the time
function showtime() {
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();

	var timeValue = "" + ((hours>12)?hours-12: hours);
		timeValue += ((minutes<10)?":0" : ":") + minutes;
		timeValue += ((seconds<10)?":0" : ":") + seconds;
		timeValue += ((hours>=12)?" P.M." : " A.M.");
	
	var timeplace = document.getElementById("timer");
		timeplace.innerHTML = timeValue;
		timerID = setTimeout("showtime()", 1000);
		timerRunning = true;
}
/*Greetings according to the time of the day:*/
/*A different color background according to the greetings.
*/	
var now = new Date();
var hours = now.getHours();
var body = document.getElementsByTagName("body")[0];
var greet = document.getElementById("greet");
if (hours >= 0 && hours <=6) 
  {

  greet.innerHTML = "What are you doing that early?";
  body.style.backgroundColor="#B2B460";
  }
if (hours > 6 && hours <=12) 
  {
  greet.innerHTML = "Good Morning";
  body.style.backgroundColor="#b5c8d8";
   
  }
if (hours > 12 && hours <=18) 
  {
  greet.innerHTML = "Good Afternoon";
  body.style.backgroundColor="#DECDD5";

  }
if (hours > 18 && hours <=24) 
  {
  greet.innerHTML = "Good Evening";
  body.style.backgroundColor="#F6E164";
  
  }
/*A random quote each time the page is loaded (use at least 4 quotes).*/
function Testimonial(text, name){
            this.text = text;
            this.name = name;
            /*Include a method to display the properties.*/
            this.show = function(){
            	var spanText = document.getElementById("text");
            	spanText.innerHTML =this.text;
            	
            	var spanName= document.getElementById("name");
            	spanName.innerHTML =this.name;
            	
            };
}
function display(testimonialArray){
	/*generate random number between 0 to 4*/
	;
	var index= Math.floor(Math.random()*testimonialArray.length);
	/*Display the link to the URL.*/
	testimonialArray[index].show();
}
/*Make instance of the object, at least 5.*/
  var testimonial1 = new Testimonial("I want to deeply congratulate all of you for this outstanding achievement, despite the last changes, the roadblocks and the tight schedule. I know the tremendous effort you’ve put in these last months, and the dedication all the team has demonstrated for this project ", "Ms. Kathy");
  var testimonial2 = new Testimonial("We’re so glad that this project has been as rewarding for you as it has been for us. We are *thrilled* with what you’ve helped us to accomplish, and often find ourselves falling in love with the enhancements all over again ", "Heather");
  var testimonial3 = new Testimonial("The ideas of the design team are innovative, creative, and really bring out the individual style and personality of each homeowner. ", "Orren");
  var testimonial4 = new Testimonial("You are, as I tell everyone, the best. That you came up with such brilliant solutions as quickly and painlessly as you did continues to dazzle me-even as the solutions themselves elicit an ongoing chorus of oooh and ahhhs.", "Lucia");
  var testimonial5 = new Testimonial("We want to write and tell you how much pleasure we are experiencing in our home and thank you for making such a significant contribution to that pleasure.", "Janet ");
/*Create an array of the instances.
*/
var testimonialArray = new Array(testimonial1,testimonial2,testimonial3,testimonial4,testimonial5);
/*call onload*/
display(testimonialArray);
/*A calendar for the current month and year (e.g. if the page is loaded on November 17, 2012, display the calendar with the highlighted day).
*/
var monthnames = new Array(
"January", "Februrary", "March", "April",
"May", "June", "July", "August", "September",
"October", "November", "December");

var linkcount=0;
function addlink(month, day, href) {
var entry = new Array(3);
entry[0] = month;
entry[1] = day;
entry[2] = href;
this[linkcount++] = entry;
}

Array.prototype.addlink = addlink;

linkdays = new Array();
monthdays = new Array(12);
monthdays[0]=31;
monthdays[1]=28;
monthdays[2]=31;
monthdays[3]=30;
monthdays[4]=31;
monthdays[5]=30;
monthdays[6]=31;
monthdays[7]=31;
monthdays[8]=30;
monthdays[9]=31;
monthdays[10]=30;
monthdays[11]=31;

todayDate=new Date();
thisday=todayDate.getDay();
thismonth=todayDate.getMonth();
thisdate=todayDate.getDate();

thisyear = todayDate.getYear();
thisyear = thisyear % 100;

thisyear = ((thisyear < 50) ? (2000 + thisyear) : (1900 + thisyear));

if (((thisyear % 4 == 0)
&& !(thisyear % 100 == 0))
||(thisyear % 400 == 0)) monthdays[1]++;

startspaces = thisdate;
while (startspaces > 7) startspaces -=7;
startspaces = thisday - startspaces + 1;

if (startspaces < 0) startspaces +=7;

var html;

html = "<table class='table-condensed table-bordered table-striped' style='background-color:#f9f9f9;width:100%'>";
html +="<thead>";
html += "<tr><th colspan='7' ><a class='btn'><i class='fa fa-circle'></i></a><a class='btn' style='width:69%'>"+ monthnames[thismonth] + " " + thisyear+ "</a><a class='btn'><i class='fa fa-circle'></i></a></th></tr>";
html += "<tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr>";
html +="</thead>";
html +="<tr>";

for (i=0;i<startspaces;i++) {
html +="<td> </td>";
}

count=1;
while (count <= monthdays[thismonth]) {
for (b = startspaces;b<7;b++) {
linktrue=false;
html +="<td>";

for (c=0;c<linkdays.length;c++) {
if (linkdays[c] != null) {
if ((linkdays[c][0]==thismonth + 1) && (linkdays[c][1]==count)) {
//document.write("<a href=\"" + linkdays[c][2] + "\">");
html +=linkdays[c][2];
linktrue=true;
      }
   }
}

if (count==thisdate) {
html +="<strong><span style='color:red'>";
}

if (count <= monthdays[thismonth]) {
html +=count;
}
else {
html +=" ";
}

if (count==thisdate) {
html +="</span></strong>";
}

if (linktrue)
//document.write("</a>");
html +="</td>";
count++;
}
html +="</tr>";
html +="<tr>";
startspaces=0;
}
html +="</table>";


var  calendar_div = document.getElementById("calendar");
calendar_div.innerHTML = html;
