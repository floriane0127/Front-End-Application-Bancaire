export interface Person {
    nom: string;
    prenom: string;
    date_De_Naissance: string;
    description: string;
}

export interface Experience {
    date_Debut: string;
    date_Fin: string;
    organisme: string;
    intitule_Poste: string;
    description: string;
}

export interface Formation {
    date_Debut: string;
    date_Fin: string;
    titre_Diplome: string;
    universite: string;
}

export interface Certificat {
    date_Obtention: string;
    libelle: string;
}

export interface CentreInteret {
    libelle: string;
}

export interface Langue {
    intitule: string;
    niveau: number;
}

export interface Competences {
    secteur: string;
    titre: string;
    niveau: string;
}

export class Cv {
    public libelle: string;
    public person: Person[];
    public experience: Experience[];
    public formation: Formation[];
    public certificat: Certificat[];
    public centreInteret: CentreInteret[];
    public langue: Langue[];
    public competences: Competences[];


    public static CVFromJSON(obj: any): Cv {
        console.log(obj);
        return new Cv(obj.libelle, obj.person, obj.experience, obj.formation, obj.certificat,
            obj.centreInteret, obj.langue, obj.competences);
    }

    constructor(libelle: string, pers: Person[], exp: Experience[], form: Formation[],
        cert: Certificat[], centrint: CentreInteret[], lang: Langue[], comp: Competences[]) {
        this.person = pers;
        this.experience = exp;
        this.formation = form;
        this.certificat = cert;
        this.centreInteret = centrint;
        this.langue = lang;
        this.competences = comp;
        this.libelle = libelle;
    }

}
