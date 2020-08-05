// Save Command to Button

var window = new Window("palette", "Command to Button", undefined);
window.orientation = "row";
var buttonOne = window.add("button", undefined, "1");
var clearButton = window.add("button", undefined, "Clear");

var commandInt;

buttonOne.onClick = function() {
    if(buttonOne.text == "1") {
    var input = prompt("Type command you want to try here", "");
    if(input == null || input == "") {
            // no valid input, we'll just do nothing
        } else {
            if(app.findMenuCommandId(input) == 0 || app.findMenuCommandId(input) == null) {
                    alert("not valid");
                    return false;
                } else {
                    commandInt = app.findMenuCommandId(input);
                    buttonOne.text = "+";
                    }
            }
        } else {
            $.writeln(commandInt);
            app.executeCommand(commandInt);
            }
    }

clearButton.onClick = function() {
    commandInt = 0;
    buttonOne.text = "1";
    }

window.center();
window.show();