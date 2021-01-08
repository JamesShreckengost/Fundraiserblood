
function askUserName(){
    // John
    let userName = prompt('Please Enter Your Name');
    // print John
    document.write(userName);
    // return John
    return userName;
}

// getUserName = 'John'
let getuserName = askUserName();


function checkName(){
    if (getuserName == 'James'){
    document.write('<h3>' + 'Welcome bloodhound' + '</h3>');
    } else if (getuserName != 'James'){
        document.write('<h3>' + 'Welcome Guest' + '</h3>')
    }
}

//let getUserName = askUserName();
//checkName( );

function likeDogs(){
    prompt('Do you like dogs?')
    }

    function printNumbers(){
        for(let i = 0; i <10; i++){
            document.write('<li>' + i + '</li>')
        }
    }
    
    let correctAnswer = 34;
    
    function guessingGame(){
        let userAnswer = prompt('Please pick a number 1 - 50');
        while (userAnswer < 1 || userAnswer > 100){
            userAnswer = prompt('Incorrect. Please select a number 1 - 50');
        }
        let numberofGuesses = 8
        for(let i = 0; i < numberofGuesses; i++){
            if (userAnswer == correctAnswer){
                alert('Great Job, you got it right');
                pitbullPicture();
                break;
         } 
                else if (userAnswer < correctAnswer){
                    alert('Sorry to low)');
                    userAnswer = prompt('Please select a number 1 - 50');
         }      else if (userAnswer > correctAnswer){
                    alert('Sorry to high');
                    userAnswer = prompt('Please select a number 1 - 50');
             }
        }
    }

   function pitbullPicture(){
       for(let i = 0; i < 2; i++){
           document.write('<img src="https://wallpaper-house.com/data/out/10/wallpaper2you_389315.jpg" img>')
       }
   }
