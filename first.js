const employe = {
    name: "Raghav",
    age: 22,
    role: "SD1",
    salary: `${25}LPA`,
    Company: "PVT LTD",
}
console.log(employe.name)
console.log(employe.role)

const empSalary=['20k', '30k', '40k', '50k']
for(let i of empSalary){
    console.log(i)
}
// // new_feature file(branch)
function employeDetail(...employe){
    console.log(employe)
}
employeDetail(employe)

// table printing of 6
for(let i=1; i<=10; i++){
    console.log(i*6)
}

// // new updation in code
console.log(`hello ${employe.name}! how are you`)

console.log(empSalary);
// // newPayment update add up
const accoutNumber = 12345665434
const holderName = "Raja"
