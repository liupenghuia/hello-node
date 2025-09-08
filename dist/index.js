"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
function getFirstWord(msg) {
    console.log(msg.split(' ')[0]);
}
getFirstWord('Hello World');
// 可以在 demo 里运行这段代码
function counter(count) {
    console.log("The current count is: ".concat(count, "."));
}
// 不论传数值还是字符串，都可以达到的目的
counter(1); // The current count is: 1.
counter('2'); // The current count is: 2.
function test1() {
    // 字符串
    var str = 'Hello World';
    // 数值
    var num = 1;
    // 布尔值
    var bool = true;
    // 字符串数组
    var strs = ['Hello World', 'Hi World'];
    // 数值数组
    var nums = [1, 2, 3];
    // 布尔值数组
    var bools = [true, true, false];
}
// 在声明变量的时候将其关联到类型上
var jone = {
    name: 'Jone',
    age: 20,
    enjoyFoods: ['apples', 'bananas'],
    friendList: [],
};
// 在声明变量的时候将其关联到类型上
var petter = {
    name: 'Petter',
    age: 20,
    enjoyFoods: ['apple', 'banana'],
    friendList: [
        jone,
        {
            name: 'Marry',
            age: 16,
            enjoyFoods: ['pizza', 'ice cream'],
            friendList: [],
        },
        {
            name: 'Tom',
            age: 20,
            enjoyFoods: ['chicken', 'cake'],
            friendList: [],
        }
    ],
};
var admin = {
    name: 'Admin',
    age: 20,
    enjoyFoods: ['apple', 'banana'],
    friendList: [
        jone,
        {
            name: 'Marry',
            age: 16,
            enjoyFoods: ['pizza', 'ice cream'],
            friendList: [],
        },
        {
            name: 'Tom',
            age: 20,
            enjoyFoods: ['chicken', 'cake'],
            friendList: [],
        }
    ],
    permissionLevel: 1,
};
// 现在的 admin 就非常精简了
var admin2 = {
    name: 'Petter',
    age: 18,
    permissionLevel: 1,
};
// 这是一个基础类
var UserBase = /** @class */ (function () {
    function UserBase(userName) {
        this.name = userName;
    }
    return UserBase;
}());
// 这是另外一个类，继承自基础类
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.prototype.getName = function () {
        console.log(this.name);
    };
    return User;
}(UserBase));
// 这个变量拥有上面两个类的所有属性和方法
var petter2 = new User('Petter');
petter2.getName();
//类也可以提供给接口去继承：
// 这是一个类
var UserBase2 = /** @class */ (function () {
    function UserBase2(userName) {
        this.name = userName;
    }
    return UserBase2;
}());
// 这样这个变量就必须同时存在两个属性
var petter4 = {
    name: 'Petter',
    age: 18,
};
//函数
// 注意：这是 TypeScript 代码
// 写法一：函数声明
function sum1(x, y) {
    return x + y;
}
// 写法二：函数表达式
var sum2 = function (x, y) {
    return x + y;
};
// 写法三：箭头函数
var sum3 = function (x, y) { return x + y; };
// 写法四：对象上的方法
var obj = {
    sum4: function (x, y) {
        return x + y;
    }
};
sum1(1, 2);
sum2(1, 2);
sum3(1, 2);
obj.sum4(1, 2);
//异步函数
// 注意这里的返回值类型
function queryData() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('Hello World');
        }, 3000);
    });
}
queryData().then(function (data) { return console.log(data); });
queryData().then(function (data) {
    console.log(data);
});
// 这段代码在 TS 里运行会报错
function getFirstWords(msg) {
    console.log(String(msg).split(' ')[0]);
}
getFirstWords('Hello World');
getFirstWords(123);
// 但是类型断言过程中，遗漏了
var petters = {};
petters.name = 'Petter';
var greet_1 = require("./greet");
// 单个问候语
console.log((0, greet_1.default)('Petter'));
// 多个问候语
console.log((0, greet_1.default)(['Petter', 'Tom', 'Jimmy']));
