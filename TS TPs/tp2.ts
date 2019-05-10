function f(shouldInitilize:Boolean){

    const MYNAME:String ="floriane";
   
    var y:number;
    console.log(MYNAME);
    if(shouldInitilize){
        let x:number;
        x=10;
        return x;
    }
   
}

console.log(f(true));
console.log(f(false));