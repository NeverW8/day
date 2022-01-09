
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var day = new Date().getUTCDay() - 1;

function getMessageOfTheDay() {
  switch (day) {
    case 2:
      return "Monday ";
      break;
    case 3:
      return "Monday ";
      break;
    case 4:
      return "Monday afternoon ";
      break;
    case 5:
      return "Tuesday ";
      break;
    case 6:
      return "Friday ";
      break;
    case 7:
      return "Saturday ";
      break;
    case 1:
      return "Despair Sunday ";
      break;
    default:
	return "Weirdge ";
  }
}

var classes = document.getElementById("messageOfTheDay").getAttribute('class').split(' ');
document.getElementById("messageOfTheDay").setAttribute('class', classes.join(' '))
document.getElementById("messageOfTheDay").innerHTML = getMessageOfTheDay();

