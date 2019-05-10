var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = {
    first_name: 'bayrem',
    last_name: 'jrad',
    age: 50
};
var person1 = {
    first_name: 'bayrem',
    last_name: 'jrad',
    age: 50
};
person1.first_name = 'salah';
person1.last_name = 'ignorethis';
var person2 = {
    first_name: 'bayrem',
    last_name: 'jrad',
    age: 50,
    eyes_color: 'blue'
};
person2.eyes_color = 'green';
var person3;
var Person = /** @class */ (function () {
    function Person(fn, ln, sn) {
        this.first_name = fn;
        this.last_name = ln;
        this.security_number = sn;
    }
    Person.prototype.getSecurity_Number = function () {
        return this.security_number;
    };
    Person.prototype.setSecurity_Number = function (security_number) {
        this.security_number = security_number;
    };
    Person.prototype.display = function () {
        console.log(this);
    };
    Person.prototype.displayAsString = function () {
        return JSON.stringify(this, null, 2);
    };
    return Person;
}());
var SuperPerson = /** @class */ (function (_super) {
    __extends(SuperPerson, _super);
    function SuperPerson(fn, ln, sn, sp) {
        var _this = _super.call(this, fn, ln, sn) || this;
        _this.superPowers = sp;
        return _this;
    }
    return SuperPerson;
}(Person));
var pp1 = new Person('bayrem', 'hjrad', 55);
pp1.first_name = 'bayrem';
pp1.last_name = 'hjrad';
pp1.setSecurity_Number(55);
pp1.display();
console.log(pp1.displayAsString());
var pp2 = new SuperPerson('bayrem', 'hjrad', 66, '3afaat');
pp2.display();
console.log(pp2.displayAsString());
