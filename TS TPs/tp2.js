function f(shouldInitilize) {
    var MYNAME = "floriane";
    var y;
    console.log(MYNAME);
    if (shouldInitilize) {
        var x = void 0;
        x = 10;
        return x;
    }
}
console.log(f(true));
console.log(f(false));
