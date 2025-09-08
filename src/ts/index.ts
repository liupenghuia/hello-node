function getFirstWord(msg: string) {
    console.log(msg.split(' ')[0])
}

getFirstWord('Hello World')


// 可以在 demo 里运行这段代码
function counter(count: number | string) {
    console.log(`The current count is: ${count}.`)
}
// 不论传数值还是字符串，都可以达到的目的
counter(1)  // The current count is: 1.
counter('2')  // The current count is: 2.


function test1() {
    // 字符串
    const str: string = 'Hello World'
    // 数值
    const num: number = 1
    // 布尔值
    const bool: boolean = true


    // 字符串数组
    const strs: string[] = ['Hello World', 'Hi World']

    // 数值数组
    const nums: number[] = [1, 2, 3]

    // 布尔值数组
    const bools: boolean[] = [true, true, false]
}


type UserItemT = {
    // ...
}
interface UserItemI {
    // ...
}

// 定义用户对象的类型
interface UserItem {
    name: string
    age: number
    // age?: number 可选属性
    // readonly name: string 只读属性
    // [key: string]: any 任意属性
    // [key: string]: number 任意属性
    // [key: string]: string 任意属性
    // [key: string]: boolean 任意属性
    // [key: string]: any[] 任意属性
    // [key: string]: any 任意属性

    enjoyFoods: string[]
    // 这个属性引用了本身的类型
    friendList?: UserItem[]
}


// 在声明变量的时候将其关联到类型上
const jone: UserItem = {
    name: 'Jone',
    age: 20,
    enjoyFoods: ['apples', 'bananas'],
    friendList: [],
}

// 在声明变量的时候将其关联到类型上
const petter: UserItem = {
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
}

//接口继承
// 这里继承了 UserItem 的所有属性类型，并追加了一个权限等级属性
interface Admin extends UserItem {
    permissionLevel: number
}

const admin: Admin = {
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
}

// 这里在继承 UserItem 类型的时候，删除了两个多余的属性
interface Admin2 extends Omit<UserItem, 'enjoyFoods' | 'friendList'> {
    permissionLevel: number
}
// 现在的 admin 就非常精简了
const admin2: Admin2 = {
    name: 'Petter',
    age: 18,
    permissionLevel: 1,
}



// 这是一个基础类
class UserBase {
    name: string
    constructor(userName: string) {
        this.name = userName
    }
}

// 这是另外一个类，继承自基础类
class User extends UserBase {
    getName() {
        console.log(this.name)
    }
}

// 这个变量拥有上面两个类的所有属性和方法
const petter2: User = new User('Petter')
petter2.getName()


//类也可以提供给接口去继承：
// 这是一个类
class UserBase2 {
    name: string
    constructor(userName: string) {
        this.name = userName
    }
}

// 这是一个接口，可以继承自类
interface User2 extends UserBase2 {
    age: number
}

// 这样这个变量就必须同时存在两个属性
const petter4: User2 = {
    name: 'Petter',
    age: 18,
}

//函数
// 注意：这是 TypeScript 代码

// 写法一：函数声明
function sum1(x: number, y: number): number {
    return x + y
}

// 写法二：函数表达式
const sum2 = function (x: number, y: number): number {
    return x + y
}

// 写法三：箭头函数
const sum3 = (x: number, y: number): number => x + y

// 写法四：对象上的方法
const obj = {
    sum4(x: number, y: number): number {
        return x + y
    }
}
sum1(1, 2)
sum2(1, 2)
sum3(1, 2)
obj.sum4(1, 2)


//异步函数
// 注意这里的返回值类型
function queryData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello World')
        }, 3000)
    })
}
queryData().then(
    (data) => console.log(data)
)
queryData().then(
    (data) => {
        console.log(data)
    }
)

// 这段代码在 TS 里运行会报错
function getFirstWords(msg: any) {
    console.log(String(msg).split(' ')[0])
  }
  getFirstWords('Hello World')
  getFirstWords(123)


  // 但是类型断言过程中，遗漏了
const petters = {} as UserItem
petters.name = 'Petter'


import greets from './greet'
// 单个问候语
console.log(greets('Petter'))
// 多个问候语
console.log(greets(['Petter', 'Tom', 'Jimmy']))