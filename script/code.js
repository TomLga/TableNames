let person = [
    {
    id:1,
    fName: 'Chocolate',
    surName: 'Mpongwana',
    age: 22,
},
{
    id:2,
    fName:'Amy',
    surName: 'Pieterse',
    age: 23
},
{
    id:3,
    fName:'Alonso',
    surName: 'Cupido',
    age: 20
},
{
    id:4,
    fName:'Jason',
    surName: 'Barron',
    age: 19
},
{
    id:5,
    fName:'keeno',
    surName: 'Fourie',
    age: 20
},
{
    id:6,
    fName:'Jason',
    surName: 'Viljoen',
    age: 20
},
{
    id:7,
    fName:'Mish-Ai',
    surName: 'Taliep',
    age: 60
},
{
    id:8,
    fName:'Siya',
    surName: 'Mazokwana',
    age: 23
},
{
    id:9,
    fName:'Seth',
    surName: 'Kallis',
    age: 22
},

]
 
// console.log(person)

let info = document.querySelector(".tableContent");
person.forEach((thingy) => {
info.innerHTML += `
<tr>
    <td>${thingy.fName}</td>
    <td>${thingy.surName}</td>
    <td>${thingy.age}</td>
</tr>`
})