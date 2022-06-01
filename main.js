// function popalert() {
//     alert("whaassaapp")
// }

// function printMyName() {
//     console.log("Daniel Malede");
// }

// function changeSpanColor() {
//     var changecolor = document.getElementById("span_Color")
//     changecolor.style = "color: blue"
// }

// function changeH1Size() {
//     var chnageSize = document.getElementById("h1_size")
//     chnageSize.style = "font-size:10vh"
// }

// function changeText() {
//     var changeSpanText = document.getElementById("p_text")
//     changeSpanText.innerText = "thats is Goodd"
// }

// function printUserName() {
//     var userName = prompt("enter your name")
//     document.body.innerHTML+=("<input type="+userName"/>)
// }

// function chackTimeAndChangeColor() {
//     var mySetTime = new Date()
//     var newTime = mySetTime.getHours()
//     var titleh1 = document.getElementById("H1_color")
//     if (newTime<17) {
//         document.body.style.backgroundColor ="yellow"    
//         titleh1.innerText="good day"
//     }
//     else{
//         document.body.style.backgroundColor ="blue"    
//         titleh1.innerText="good evning"
//     }
// }

// function chackTimeAndChangeColor() {
//     var userAge = +prompt("enter your age")
//     var h1_Text = document.getElementById("welcome")
//     if (userAge>18) {
//         h1_Text.innerText = "Welacome"
//     h1_Text.style = "color: red"
//     }
//     else{
//         h1_Text.innerText = "Welacome"
//         h1_Text.style = "color: blue"
//     }
// }
// function hovercolor() {
//     var h1_Text = document.getElementById("welcome")
//     h1_Text.style = "color: green"
// }

function lotu() {
    var theButton = document.createElement("button")
    theButton.innerText = "click me"
    document.body.append(theButton)
    var h1 = document.getElementById("h1")
    var allUserNumber = []
    for ( i = 0; i < 5; i++) {
        var userNumber = +prompt("enter number")
        allUserNumber.push(userNumber) 
    }
    theButton.onclick =  function () {
        for (var j = 0; j < 5; j++) {
            h1.innerText+= (allUserNumber[j])
        }
    }
}
lotu()