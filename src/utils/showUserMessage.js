export const showUserMessage = (username, type) => {
    let message = "";
    switch (type) {
        case "greeting": message = `Welcome to the File Manager, ${username}!`; break;
        case "goodbye": message = `Thank you for using File Manager, ${username}, goodbye!`; break;
        default: message = `Message for ${username}`; break;
    }
    console.log(message);
}