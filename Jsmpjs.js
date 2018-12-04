function assignGrade()
{
    var grade = Number(document.project3.input1.value);

    if (grade > '100')
    {
        return "You went for the extra credit";
    }

    else if(grade > '95')
    {
        return "A+, you did gud child";
    }

    else if(grade == '95')
    {
        return "A for Abrar level not really";
    }

    else if(grade >= '90')
    {
        return "A- the only A I will get in math/english";
    }
    else if (grade >= '85')
    {
        return "B+ which is pretty much A- which is pretty much in A which is pretty much an A+...good job";
    }

    else if (grade == '85')
    {
        return "B for bob yea";
    }
    else if (grade >= '80')
    {
        return "B- Barley made it";
    }
    else if (grade >= '75')
    {
        return "C+ pretty normal";
    }
    else if (grade == '75')
    {
        return "C a little less then pretty normal";
    }
    else if (grade >= '70')
    {
        return "C- YOU DIDNT FAIL";
    }
    else if (grade >= '65')
    {
        return "D+ Its okay";
    }
    else if (grade == '65')
    {
        return "D To be Honest doesn't feel too different from D+";
    }
    else if (grade >= '60')
    {
        return "D- Barely making it rip";
    }
    else if (grade >= '0')
    {
        return "F+ OOOOOOOF better then a 0 though";
    }
    else if (grade == '0')
    {
        return "F- Hide child";
    }
    else if (grade <= '0')
    {
        return "...did you get a 0 and get the extra debit right?";
    }
}



function temperature()
{
    var degree = Number(document.projectTemp.num1.value);  //with help from cousin in NC
    if(degree > '130')
    {
        document.getElementById("temp").src = "pic/Texas.png";
        return "Texas trying to fit in and is failing"
    }
    else if (degree > '100')
    {
        document.getElementById("temp").src = "pic/desert.jpg";
        return "Congratulations, YOUR IN A DESSERT"
    }
    else if(degree > '70')
    {
        document.getElementById("temp").src = "pic/summer.gif";
        return "It's summer *Play Phineas and Ferb intro*"
    }

    else if(degree > '50')
    {
        document.getElementById("temp").src = "pic/spring.png";
        return "It is sPRING , what more does one need to say"
    }
    else if (degree > '35')
    {
        document.getElementById("temp").src = "pic/fall.jpg";
        return "It's autumn if you wanna sound smart...wait is that PUMPKIN SPICE LATTE GOTTA GO"
    }
    else if (degree >= '0')
    {
        document.getElementById("temp").src = "pic/winter.jpg";
        return "Its Winter, also its Canada in a nutshell not including Hockey, Drake, Shawn Mendes and, Syrup/LumberJacks"
    }
    else if (degree < '0')
    {
        document.getElementById("temp").src = "pic/penguin.jpg";
        return "...poor soul so cold that penguins gave you their tuxedos";
    }

}

function calories()
{                                                              //All data found through Google and disclamer an accurate amount burned of calories burned are depended on weight and intensity
    var act = document.getElementById('work').value; // bball=13cal/min run=12cal/min jog=10cal swim=9cal/min soccer 9 cal/min football 11 cal/min volleyball 6 tennis 7
    var time = Number(document.projectCal.input2.value);      //badminton// 8 bolwing 3 gaming 1 golfing 3 biking 9 kayaking 4 ice skating/snowboard 6 rugby 11 baseball 7 lifting 4
                                                               //list.options[list.selectedIndex].value.toLowerCase()
    if (act == 'basketball')
    {
        return time * 13;
    }

    else if (act =='running')
    {
        return time * 12;
    }

    else if (act =='jogging')
    {
        return time * 10;
    }

    else if (act =='swimming')
    {
        return time * 12;
    }

    else if (act =='soccer')
    {
        return time * 9;
    }

    else if (act =='football')
    {
        return time * 11;
    }

    else if (act =='volleyball')
    {
        return time * 6;
    }

    else if (act =='tennis')
    {
        return time * 7;
    }

    else if (act =='badminton')
    {
        return time * 8;
    }

    else if (act =='bowling')
    {
        return time * 3;
    }

    else if (act =='gaming')
    {
        return time;
    }

    else if (act =='golfing')
    {
        return time * 3;
    }

    else if (act =='biking')
    {
        return time * 9;
    }

    else if (act =='kayaking')
    {
        return time * 4;
    }

    else if (act =='skating')
    {
        return time * 6;
    }

    else if (act =='snowboarding')
    {
        return time * 6;
    }

    else if (act =='rugby')
    {
        return time * 11;
    }

    else if (act =='baseball')
    {
        return time * 7;
    }

    else if (act =='lifting')
    {
        return time * 4;
    }

    else if (act =='lacrosse')
    {
        return time * 11;
    }
    else if (act =='martial arts')
    {
        return time * 12;
    }
    else if (act =='parkour')
    {
        return time * 15;
    }

    else if (act =='hockey')
    {
        return time * 8;
    }
    else if (act =='softball')
    {
        return time * 6;
    }

    else if (act =='gymnastics')
    {
        return time * 4;
    }
}

function tenToSmall (num,base)//convert a base- 10 number to a smaller base
{
// this function is expecting a number (num) in base 10
    //it will convert the number (num) to value of 'base'
    var num = Number(document.toBinary.input1.value);//number to convert
    var base = Number(document.toBinary.input2.value);//destination base
    smallNum=""; //store remainders here

    while (num > 0)//continue looping while num isn't zero
    {
        smallNum = num%base + smallNum;// 3 %5 =2///% returns remainders
        //setup num for the next iteration of the loop
        num= Math.floor (num/base);//Floor rounds remainder down
    }
    return smallNum;
}

function smallToTen (num,base)//convert a small- base number to base-10\
{
    var num =Number(document.toBase10.input1.value); //13
    var base=Number(document.toBase10.input2.value);//bases of 'num to convert to base 10
    tenNum=0; //stores number to be outputed
    numLength=num.toString().length; //convert num to a STRING, then counts the number of characters in the stringg
    // in this case, legth of '1101' is 4
    while (numLength > 0)
    {
        var denominator = Math.pow (10,(numLength-1)); //gets denominator of fraction
        // for 1101, denominators will be 1000,100,10,1
        var currentDigit = Math.floor(num/denominator); //captures a 1 or 0 to multiply by 2^ numLength
        //above means 1101/1000 =1... 101/100 =1.... 01/10=0... 1/1=1...
        tenNum=tenNum + currentDigit*Math.pow (base,numLength-1);
        //currentDigit*2^3 ... currentDigit *2^2....currentDigit*2^1... etc
        num= num%denominator; //reduce num for the next iteration
        //1101 -> 101 -> 01-> 1
        numLength--; //decrease the numLength value by 1... otherwise will loop infintely
    }
    return tenNum;
}


function bin (num,base)
{
   var num = Number(document.toAny.input1.value); //Number you wanna convert
   var baser = Number(document.toAny.input2.value.toString()); // OG base
   var base = Number(document.toAny.input3.value);//base its being turned into
    var f1 = smallToTen(num, base);


   if(baser == '10')
   {
       smallNum="";
       while (num > 0)
       {
           smallNum = num%base + smallNum;
           num= Math.floor (num/base);
       }
       return smallNum;
   }


   else
   {
       return f1
   }


  /* else
    {
        tenNum=0;
        numLength=num.toString().length;

        while (numLength > 0)
        {
            var denominator = Math.pow (10,(numLength-1));
            var currentDigit = Math.floor(num/denominator);
            tenNum=tenNum + currentDigit*Math.pow (base,numLength-1);
            num= num%denominator;
            numLength--;
        }
        return tenNum;
    } */


}

























