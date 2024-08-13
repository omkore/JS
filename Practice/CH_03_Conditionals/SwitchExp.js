let num = 1;


// switch(num){
//     case 1:
//         console.log("Monday");
//     break;
//     case 2:
//         console.log("Tuesday");
//     break;
//     case 3:
//         console.log("Wednesday");
//     break;
//     case 4:
//         console.log("Thursday");
//     break;
//     case 5:
//         console.log("Friday");
//     break;
//     case 6:
//         console.log("Saturday");
//     break;
//     case 7:
//         console.log("Sunday");
//     break;
//     default:
//         console.log("Invalid Choice");
//     break;
            
// }

// let choice = parseInt(prompt("1)Play\n2)Settings\n3)About\n4)Exit\nEnter thr choice :"))



// switch(choice){
//     case 1:
//         alert("The Game is Started.....")
//     break;

//     case 2:
//         alert("Settings Page is Opened...")
//     break;
//     case 3:
//         alert("About Page is Opened...")
//     break;
//     case 4:
//         alert("Game is quiting...")
//     break;
//     default:
//         alert("Invalid Choice...")
// }



// Nested switch
let choice = parseInt(prompt("1)Play\n2)Settings\n3)About\n4)Exit\nEnter thr choice :"))



switch(choice){
    case 1:
        alert("The Game is Started.....")
    break;

    case 2:
        alert("Settings Page is Opened...")
        let innerChoice = parseInt(prompt("1)Keyboard\n2)Mouse\n3)Audio\n4)Video\nEnter thr choice :"))
        switch(innerChoice){
            case 1:
                alert("Keyboard settings are opened....")
            break;
            case 2:
                alert("Mouse Settings are opened....")
            break;
            case 3:
                alert("Audio Settings are opened....")
            break;
            case 4:
                alert("Video settings are opened")
            break;
            default:
                alert("Invalid choice")
            break;
        }
    break;
    case 3:
        alert("About Page is Opened...")
    break;
    case 4:
        alert("Game is quiting...")
    break;
    default:
        alert("Invalid Choice...")
}