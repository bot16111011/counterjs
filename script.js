var countInterval;

function startCounter(){
    var number=parseInt(document.getElementById("number").value);
    if  (isNaN(number)){
        alert("Please enter a number");
        clearInterval(countInterval);
        return;
    }
    if (number<1 || number >9){
        alert("Out of range number entered");
        clearInterval(countInterval)
        return;
    }
    var currentNo = document.querySelector(".counter .current");
    var nextNo=document.querySelector(".counter .next");
    var count=0;


    resetNumbers(currentNo,nextNo);
    clearInterval(countInterval);

    countInterval=setInterval(function(){
        if (count===number){
            clearInterval(countInterval);
            alert("Time Up!!");
            return;
        }
        increaseCount(currentNo,nextNo);
        count++;
    },1000);

}


function resetNumbers(currentNo,nextNo){
    currentNo.innerText=0;
    nextNo.innerText=1;
}

function increaseCount(currentNo,nextNo){
    nextNo.classList.add("animate");
    setTimeout(function(){
        currentNo.innerText=nextNo.innerText;
        nextNo.classList.remove("animate");
        nextNo.innerText=parseInt(nextNo.innerText)+1;
    },500);
}