export default class Greeting {
    for(name) {
        const firstLetter = name[0].toUpperCase();
        const restOfName= name.slice(1);
        const nameUpperFirstCharacter = firstLetter + restOfName;
        const message = `Welcome ${nameUpperFirstCharacter}`;
        return message;

    }
}