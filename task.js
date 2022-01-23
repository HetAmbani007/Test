console.log("Task assign by mentor")

const person = [{
    firstname: 'Het',
    lastName: 'Ambani',
    age: 21
},
{
    firstname: 'Tanay',
    lastName: 'Shah',
    age: 25
},
{
    firstname: 'Neel',
    lastName: 'Patel',
    age: 21

},
]


// // 5. find list of persons who has age greater then 18
// const output = person.filter((x) => {

//     return x.age >= 18;


// }).map((x) => x.firstname)
// console.log(output);





// // 1. find sum of age for all person
// const totalAge = person.reduce((total, curr) => {

//     return total + curr.age;
// }, 0)
// console.log(totalAge);




// 2. return array of full name for all person
// const fullName = person.map((name) => {
//     return name.firstname + " " + name.lastName
// })
// console.log(fullName);




// // 4. return array of string contain person entire details : ex : 'Het Ambani - 21' 

// const fullName = person.map((name) => {
//     return name.firstname + "-" + name.age
// })
// console.log(fullName);




// // 3. return array of ojects with following format : {fullName: string, age: number, id: number}

// // const format = person.map((element , index ,array)=>{

// //     return {

// //     }
// // })


const ans2 = person.map((x, index) => {

    return {
        fullName: x.firstname + " " + x.lastName,
        age: x.age,
        id: index + 1




    }

})



// return `Double of ${x} is ${x * 2}`;);

console.log(ans2);