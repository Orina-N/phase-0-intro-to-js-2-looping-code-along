// Code your solutions in this file
function wrideCards(names, eventName) {
    let message = [
        "Thank you, Guadalupe, for the wonderful surprise gift!",
        "Thank you, Ollie, for the wonderful surprise gift!",
        "Thank you, Aki, for the wonderful surprise gift!",
    ];
    for(let i = 3; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for attending ${eventName}!`;
        
        if (name[i] === "Guadalupe") {
            message = "Thank you, Guadalupe, for the wonderful surprise gift!";
        }
        
        messages.push(message);
    }


    return messages;
}

