var da = new Date();
var year = da.getFullYear();
var dayt =da.getDay();

var days = new Array("Sunday" , "Monday" , "Tuesday", "Wednesday" , "Thursday" , "Friday" , "Saturday");
   day = days[dayt];

   var tdate = da.getDate();
var cmonth = da.getMonth()+1;
   switch(cmonth)
      {
          case 1:
              { cmonth="January"; break;}
          case 2:
                { cmonth="Feburary"; break;}   
         case 6:
            {cmonth="june"; break;}
          case 9:
                { cmonth="September"; break;} 
          default:{ cmonth="December"; break; }
      }
document.writeln("<br/>Today is: "+ day + ", "+ tdate+" "+cmonth +" "+ year);


function parT(){
	num1 = 10;
	num2=30;
	sum=num1=num2
	return yes;
}


function startClock(){
     setInterval(curTime, 1000);
    curTime();
  }
 function curTime() {
      var ti = new Date;
      var hh = ti.getHours();
      var mi = ti.getMinutes(); 
      var ss = ti.getSeconds();

      document.getElementById("hh").innerHTML=hh;
      document.getElementById("mi").innerHTML=mi;
      document.getElementById("ss").innerHTML=ss;
  }

  function MulTable(num) {
       var num 
       /*
       for(i = 1; i <= 10; i++ )
       {
           var mul = i * num ;
           document.write("<br>" + num + " x " + i + " = " + mul);
       }
       */
       i=1;
       while(i<=10)
       {
        var mul = i * num ;
        document.write("<br>" + num + " x " + i + " = " + mul);
        i++;
       }

       
}
function randomBanner()
{
  Images = ["slider1.jpg", "slider2.jpg", "slider3.jpg", "slider4.jpg", "slider5.jpg", "slider6.jpg", "slider7.jpg", "slider8.jpg"];
  indexnum =  Math.floor(Math.random()*(Images.length));
  console.log("INdex NUmber is" + indexnum);
  document.banner.src="images/"+Images[indexnum];
}
