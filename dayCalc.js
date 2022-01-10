
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var day = new Date().getUTCDay() - 1;

function getMessageOfTheDay() {
  switch (day) {
    case 0:
      return "Monday ";
      break;
    case 1:
      return "Monday ";
      break;
    case 2:
      return "Monday afternoon ";
      break;
    case 3:
      return "Tuesday ";
      break;
    case 4:
      return "Friday ";
      break;
    case 5:
      return "Saturday ";
      break;
    case 6:
      return "Despair Sunday ";
      break;
    default:
	return "Weirdge ";
  }
}

var classes = document.getElementById("messageOfTheDay").getAttribute('class').split(' ');
document.getElementById("messageOfTheDay").setAttribute('class', classes.join(' '))
document.getElementById("messageOfTheDay").innerHTML = getMessageOfTheDay();

