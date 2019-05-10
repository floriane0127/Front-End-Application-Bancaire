var person = {
    first_name:'bayrem',
    last_name:'jrad',
    age: 50
}

interface IPerson {
    first_name:string;
    last_name:string;
    age:number;
}

let person1: IPerson= {
    first_name:'bayrem',
    last_name:'jrad',
    age: 50
}
person1.first_name='salah';
person1.last_name='ignorethis';

interface IDetailedPerson extends IPerson{
    eyes_color:string;
}

let person2: IDetailedPerson= {
    first_name:'bayrem',
    last_name:'jrad',
    age: 50,
    eyes_color:'blue'
}
person2.eyes_color='green';

interface INationality {
     country:string
}

interface IPersionDetailedNationalized extends IDetailedPerson,INationality{}

let person3:IPersionDetailedNationalized;

interface IDisplayable{
    display():void;
    displayAsString():string;
}

class Person implements IDisplayable{
     first_name:string;
     last_name:string;
      
     constructor(fn:string,ln:string,sn:number){
         this.first_name=fn;
         this.last_name=ln;
         this.security_number=sn;
     }  
     
     private security_number:number;

     getSecurity_Number():number{
         return this.security_number
     }
     setSecurity_Number(security_number:number){
         this.security_number=security_number;
     }
     display() :void {
         console.log(this);
     }
     displayAsString():string{
         return JSON.stringify(this,null,2);
     }
}

class SuperPerson extends Person{
    superPowers:string;
    constructor(fn:string,ln:string,sn:number,sp:string){
        super(fn,ln,sn);
        this.superPowers=sp;
    }
}

let pp1 = new Person('bayrem','hjrad',55);
pp1.first_name='bayrem';
pp1.last_name='hjrad';
pp1.setSecurity_Number(55);
pp1.display();
console.log(pp1.displayAsString());
let pp2 = new  SuperPerson('bayrem','hjrad',66,'3afaat');
pp2.display();
console.log(pp2.displayAsString());