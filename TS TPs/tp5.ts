function myFunction(param1:number, param2:number, param3?:number):any{

if(param3 != undefined)
return param1+param2+param3
else
return param1+param2;
}

function myFunction2 (param1:number, param2:number, param3:number=1):any{
    if(param3 != undefined)
    return param1+param2+param3
    else
    return param1+param2;

}

function myFunction3 (...args:any[]){
    for(let arg of args){
        console.log(typeof arg);
    }
}

myFunction3(1,2,3,4,5,'tt');


//obj.asyncMehthod(param1,param2,function(err,result){
//Do something
//})

//obj.asyncMehthod(param1,param2,(err,result) => {
    //Do something
    //})