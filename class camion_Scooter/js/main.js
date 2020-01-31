window.addEventListener("load", event => main());

const main = () => {
	
    console.log("MAIN");

    test_voiture();
    return;
	
    let user = {
	
	firstName: "Elias",
	lastName: "Mstr",
	age : 21,
	adress: "1 allee d'elias",
	eMail: " elias.mestour@yahoo.com",
	phoneNUmber: "0781902708"

    };

    //console.log("bonjour, " + user.firstName + " " + user.lastName + " !");
    //console.log("bonjour,", capFirstLetter(user.firstName), capFirstLetter(lastName), "!");

    //let capfirstName = user.firstName.charAt(0);

    //console.log(capfirstName);
    
    //testPileOuFace(1515);

    let tab = []; //let tab = new Array();
    for(let i = 0; i < 500; i++) tab.push(i);
    //tab.forEach(element => console.log(element));
    //let by2 = tab.map(element => element * 2);
    //console.log(by2);
    let sum = tab.reduce((acc, element) => (
	return acc + element;
    ), 0);
    console.log(sum);
}

//const capFirstLetter = value => value.charAt(0).toUpperCase() + value.slice(1);

const pileOuFace = () => Math.random() > 0.5 ? "face" : "pile";

const testPileOuFace = amount => {
    
    let result = {pile: 0, face: 0};
    
    for(let i = 0; i < amount; i++){
	result[pileOuFace()]++;
    }
   // return result;
    console.log(result);
};
