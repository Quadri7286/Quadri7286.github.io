
function pnum(p1, p2) //wroks
{
    return Math.pow(p1, p2);
}
function sqrtNum(p1) //works kinda
{
    var num = document.calculator.calcWindow.value;
    return Math.sqrt(num);
}
function per(p1) //works
{
    return p1/10;
}
function back() //YAS FINALLY SLICE IS THE ANSWER TO ACTUALLY EVERYTHING
{
    return document.calculator.calcWindow.value.slice(0,-1);
}

function insert(num)
{
    document.calculator.calcWindow.value = document.calculator.calcWindow.value+num
}
function equal()
{

    var firstNum = Number(document.calculator.calcWindow.value.substr(0,1));
    var operator = document.calculator.calcWindow.value.substr(1,1);
    var secondNum = Number(document.calculator.calcWindow.value.substr(2,1));

    if(operator === '^')
    {
        alert(pnum(firstNum, secondNum));
        document.calculator.calcWindow.value = pnum(firstNum, secondNum);

    }
    else if(operator === '%')
    {
        document.calculator.calcWindow.value = per(firstNum);
    }
    else
    {
        return document.calculator.calcWindow.value = eval(document.calculator.calcWindow.value);
    }
}





