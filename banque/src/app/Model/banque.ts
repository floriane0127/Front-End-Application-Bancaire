export class Client {
    public id: number;
    public nom: string;
    public prenom: string;
    public adresse: string;
    public mail: string;
    public nomConseiller: string;
    public idConseiller: number;
    public compte: CptBancaire[];
    public virement: Virement[];
    public message: MessageC[];


    constructor(id: number, nom: string, pre: string, adr: string,
        mail: string, nCons: string, idCons: number, cpt: CptBancaire[], vir: Virement[], mess: MessageC[]) {
            this.id = id;
            this.nom = nom;
            this.prenom = pre;
            this.adresse = adr;
            this.mail = mail;
            this.nomConseiller = nCons;
            this.idConseiller = idCons;
            this.compte = cpt;
            this.virement = vir;
            this.message = mess;
}

public static createBlank() {
    return new Client(null, '', '', '', '', '', null, [], [], []);
}

public static recipeFromJSON(obj: any): Client {
    return new Client(obj.id, obj.nom, obj.prenom, obj.adresse,
        obj.mail, obj.nomConseiller, obj.idConseiller, obj.compte, obj.virement, obj.message);
}
}


export class Banquier {
    public id: number;
    public nom: string;
    public prenom: string;
    public agence: string;
    public message: MessageB[];


    constructor(id: number, nom: string, pre: string, ag: string, mess: MessageB[]) {
            this.id = id;
            this.nom = nom;
            this.prenom = pre;
            this.agence = ag;
            this.message = mess;
}

public static createBlank() {
    return new Banquier(null, '', '', '', []);
}

public static recipeFromJSON(obj: any): Banquier {
    return new Banquier(obj.id, obj.nom, obj.prenom, obj.agence, obj.message);
}
}

export class MessageB extends Banquier {
    id: number;
    idEmetteur: number;
    idRecepteur: string;
    date: string;
    contenu: string;
 }

export class CptBancaire extends Client {
    id: number;
    idUtilisateur: number;
    IBAN: string;
    BIC: string;
    solde: string;
 }

export class Virement extends CptBancaire {
    id: number;
    date: string;
    idEmetteur: string;
    idRecepteur: string;
    montant: string;
 }

export class MessageC extends Client {
    id: number;
    idEmetteur: number;
    idRecepteur: number;
    date: string;
    contenu: string;
 }

