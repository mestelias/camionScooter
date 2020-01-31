class Vehicule {

    constructor(name) {
	this.name = name || "vehicule";
    }
};

/*class Energie extends Vehicule {
	constructor(name) {
	super(name || "thermique");
	}
}*/

class Thermique extends Vehicule {

	constructor(name) {
	super(name || "thermique");

	}
};

class Electrique extends Vehicule {

	constructor(name) {
	super(name || "electrique");

	}
};

class Camion extends Vehicule {

	constructor(name) {
	super(name || "camion");
	this.roues = 4;
	this.moteur = {
		puissance: 215;
		etat = false;
	};
	this.siege = 2;
	this.portes = 5;
	this.vitres = 3;
	this.voyants = {
		etat: false
	};
	this.roule = {
		etat: false
	};
	this.vitesses = {
		etat: false
	};
	}

	contact() {
	console.log("on tourne la cle pour mettre le contact");
	this.allumerLesVoyants;
	}

	allumerLesVoyants() {
	console.log("les voyants s'allument");
	this.voyants.etat = true;
	}

	demarrer() {
	console.log("le moteur tourne");
	this.moteur.etat = true;
	}

	vitesse() {
	console.log("on passe les vitesses");
	this.vitesses.etat = true;
	}

	rouler() {
	console.log("le camion roule");
	this.roule.etat = true;
	}

	freiner() {
	console.log("le camion freine");
	this.roule.etat = false;
	}

	retirerLaVitesse() {
	console.log("on passe en point mort");
	this.vitesses.etat = false;
	}

	eteindreLeMoteur() {
	console.log("on coupe le moteur");
	this.moteur.etat = false;
	}

	eteindreLesVoyants() {
	console.log("les voyants s'eteignent");
	this.voyants.etat = false;
	}

}

class Scooter extends Vehicule {

	constructor(name) {
	super(name || "scooter");
	this.roues = 2;
	this.siege = 1;
	this.retroviseur = 2;
	this.moteur = {
		puissance: 4;
		etat: false
	};
	this.voyants = {
		etat: false
	};
	this.roule = {
		etat: false
	};
	}

	contact() {
	console.log("on tourne la cle pour mettre le contact");
	this.allumerLesVoyants;
	}

	demarrer() {
	console.log("le moteur tourne");
	this.moteur.etat = true;
	}

	allumerLesVoyants() {
	console.log("les voyants s'allument");
	this.voyants.etat = true;
	}

	eteindreLesvoyants() {
	console.log("les voyants s'eteignent");
	this.voyants.etat = false;
	}

	accelerer() {
	console.log("on tourne l'accelerateur et le scooter avance");
	this.roule.etat = true;
	}

	freiner() {
	console.log("on presse le frein et le scooter s'arrete");
	this.roule.etat = false;
	}

	couper() {
	console.log("on tourne la cle pour couper le contact");
	this.moteur.etat = false;
	}

	eteindreLesvoyants() {
	console.log("les voyants s'eteignent");
	this.eteindreLesvoyants;
	}
}

const test_vehicule = () => {

    console.log("test_vehicule");
    
    let monCamion = new Camion("mon_Camion");
    
    console.log(monCamion);

    monCamion.contact();
    monCamion.demarre();
};

/*const test_vehicule = () => {

    console.log("test_vehicule");
    
    let monScooter = new Scooter("mon_Scooter");
    
    console.log(monScooter);

    monScooter.contact();
    moScootern.demarre();
};*/