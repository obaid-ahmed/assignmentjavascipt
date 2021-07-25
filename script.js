// var itemsArray = [

// {
//     name:"juice",
//     price:"50",
//     quantity:"3",
// },
// {
//     name:"cookie",
//     price:"30",
//     quantity:"9",
// },
// {
//     name:"shirt",
//     price:"880",
//     quantity:"1",
// },
// {
//     name:"pen",
//     price:"100",
//     quantity:"2",
// },

// ]
// var item1 = (itemsArray[0].price * itemsArray[0].quantity);
// var item2 = (itemsArray[1].price * itemsArray[1].quantity);
// var item3 = (itemsArray[2].price * itemsArray[2].quantity);
// var item4 = (itemsArray[3].price * itemsArray[3].quantity);
// var allitems = (item1 + item2 + item3 + item4);

// console.log(item1);
// console.log(item2);
// console.log(item3);
// console.log(item4);
// console.log(allitems);




// var obj = {
// name: "obaid",
// email: "obaidahmed2526@gmail.com",
// password: "123456",
// age: 22,
// gender: "Male",
// city: "Karachi",
// country: "pakistan",
// }   

//  if("age" in obj && "country" in obj == true){
//  console.log("Yes age and country exist in obj");
// } else{
//    console.log("Not found");}



// function People(first, last, age, country){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.country = country;
// }

// var talha = new People("talha", "irfan", 20, "Pakistan");
// var obaid = new People("ubaid", "ahmed", 22, "Pakistan");
// var danish = new People("danish", "Zahid", 24, "Pakistan");
// console.log(talha);
// console.log(obaid);
// console.log(danish);



function Area(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

function myfun() {
    var personName = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var profession = document.getElementById("profession").value;

    if ((personName.length && address.length && education.length && profession.length) == 0) {
        console.log("Please fill all the field correctly");
    } else {
        var gender1 = document.getElementById("male");
        var gender2 = document.getElementById("female");

        if (gender1.checked) {
            var a = "male";
        } else if (gender2.checked) {
            var a = "female";
        }

        var myArea = new Area(personName, a, address, education, profession);
        console.log(myArea);
    }
}
