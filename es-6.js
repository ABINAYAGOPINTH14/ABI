//let
let studentcount = 10
studentcount =11
console.log("student count :", studentcount)

//const
const collegename = "VETIAS"
console.log(" COLLEGE NAME :", collegename)

//template literals 
let studentname = "Arun"
console.log(`Welcome ${studentname} to ${collegename}`)

//object 
const student ={
    name: "Arun",
    age: 20,
    department: "IT"
};
console.log(student)

//destructuring
const{name,age,department} = student
console.log("Name :", name)
console.log("Age:", age)
console.log("Department:", department)

//arrow function
const displaystudent =  () => {
    console.log(`student name : ${name}`)
}
displaystudent()

//arrays
const students= [
    "Arun",
    "Priya",
    "Vijay",
]
console.log(students)

//spread operator]
const updatestudents= [
    ... students ,
    "Vijay",
]


//rest operator
function maximummarks(...marks){
    let max= Math.max(...marks)
    return max ;
}

console.log("Maximun marks:",maximummarks(80,90,70))
