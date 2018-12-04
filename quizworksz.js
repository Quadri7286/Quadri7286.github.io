
function checkAnswers()
{
    var score=0;
    var feedback=[];
    var Q1Answer = document.quiz.a1.value.toLowerCase();
    if(Q1Answer === 'bidoof')
    {
        //increase score by 1
        score++; //which is score plus 1
        //push feedback to array
        feedback.push("Question 1 is correct!!");
    }

    else
    {
        feedback.push("question 1 ur wrong");
    }

    if (document.quiz.a2.value === 'Ivysaur')
    {
        score++;
        feedback.push("Question two is right");
    }
    else
    {
        feedback.push(" question 2 Thats what you thought ");
    }

    if (document.quiz.a3A.checked === true && document.quiz.a3C.checked === true && document.quiz.a3D.checked === false && document.quiz.a3E.checked === true && document.quiz.a3B.checked === false)
    {
        score++;
        feedback.push(" Question 3 is right")
    }
    else
    {
        feedback.push("Question 3 So close yet so far away")
    }
    if(document.quiz.a4.value.toLowerCase() === 'squirtle')
    {
        score++;
        feedback.push("Question 4 is right");
    }
    else
    {
        feedback.push("Question 4 is wrong");
    }
    if (document.quiz.a5.value === 'Weedle')
    {
        score++;
        feedback.push("Question 5 is right");
    }
    else
    {
        feedback.push(" Question 5 is wrong");
    }
    if (document.quiz.a6A.checked === true && document.quiz.a6C.checked === false && document.quiz.a6D.checked === true && document.quiz.a6B.checked === true)
    {
        score++;
        feedback.push(" Question 6 is right")
    }
    else
    {
        feedback.push("Question 6 is Wrong")
    }
    if(document.quiz.a7.value.toLowerCase() === 'arbok')
    {
        score++;
        feedback.push("Question 7 is right");
    }
    else
    {
        feedback.push("Question 7 is Wrong")
    }
    if (document.quiz.a8.value === 'Nidorino')
    {
        score++;
        feedback.push("Question 8 is right");
    }
    else
    {
        feedback.push(" question 8 is wrong");
    }
    if (document.quiz.a9A.checked === true && document.quiz.a9C.checked === true && document.quiz.a9D.checked === false && document.quiz.a9E.checked === false && document.quiz.a9B.checked === true)
    {
        score++;
        feedback.push(" Question 9 is right")
    }
    else
    {
        feedback.push("Question 9 is wrong")
    }
    if(document.quiz.a10.value.toLowerCase() === 'cubone')
    {
        score++;
        feedback.push("Question 10 is right");
    }
    else
    {
        feedback.push("Question 10 is wrong");
    }
    if (document.quiz.a11.value === 'Pinsir')
    {
        score++;
        feedback.push("Question 11 is right");
    }
    else
    {
        feedback.push(" question 11 is wrong");
    }
    if (document.quiz.a12A.checked === true && document.quiz.a12C.checked === false && document.quiz.a12D.checked === false && document.quiz.a12E.checked === false && document.quiz.a12B.checked === false && document.quiz.a12F.checked === false && document.quiz.a12G.checked === false)
    {
        score++;
        feedback.push(" Question 12 is right")
    }
    else
    {
        feedback.push("Question 12 is wrong")
    }


    alert(score);
    alert(feedback);
}