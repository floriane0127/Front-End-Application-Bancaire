function myFunction(param1, param2, param3) {
    if (param3 != undefined)
        return param1 + param2 + param3;
    else
        return param1 + param2;
}
function myFunction2(param1, param2, param3) {
    if (param3 === void 0) { param3 = 1; }
    if (param3 != undefined)
        return param1 + param2 + param3;
    else
        return param1 + param2;
}
function myFunction3() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        console.log(typeof arg);
    }
}
myFunction3(1, 2, 3, 4, 5, 'tt');
