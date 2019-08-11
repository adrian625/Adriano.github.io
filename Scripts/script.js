document.getElementById("imgDisp").onload = function() {cycle()};
function runCode(number){
    alert(fibonacci(number));
}
function fibonacci(number){
    if(number <= 2){
        return 1;
    } 
    return (fibonacci(number - 1) + fibonacci(number - 2));
}
function cycle(){
    var images = ["git.png", "home.png", "video.png"]
    var i = 0;
    while(i < 2){
        document.getElementById("imgDisp").src = "../Images/" + images[i];
        i++;
    }
}
