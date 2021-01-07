
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