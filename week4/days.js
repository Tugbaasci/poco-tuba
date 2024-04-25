let day = prompt("Please enter the day");
var days =["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"];
let translation = " ";
switch(day){
    case "Monday":{
        translation = days[0];
        document.write(translation)
        break;
    }
    case "Tuesday":{
        translation = days[1];
        document.write(translation)

        break;
    }
    case "Wednesday":{
        translation = days[2];
        document.write(translation)

        break;
    }
    case "Thursday":{
        translation = days[3];
        document.write(translation)

        break;
    }
    case "Friday":{
        translation = days[4];
        document.write(translation)

        break;
    }
    case "Saturday":{
        translation = days[5];
        document.write(translation)

        break;
    }
    case "Sunday":{
        translation = days[6];
        document.write(translation)

        break;
    }
    default:translation;
    break;

}