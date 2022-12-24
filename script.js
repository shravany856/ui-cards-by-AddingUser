let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
]


let result = document.getElementById('result');
let dropdown = document.getElementById('dropdown');
let button = document.getElementById('filterBtn');
let AddButton = document.getElementById('AddBtn');

function filterByProfession() {
    result.innterHtml = "";
 
    let dropdownValue = dropdown.value;
    console.log(dropdownValue);

    if(dropdown == "profession"){
        alert("Plese select a profession");
        return;
    }
   
    arr
    .filter((item) => item.profession === dropdownValue)
    .forEach((item) =>{
        
        let div = document.createElement('div');
        div.innerText = item.id + ".  Name:" + item.name + "    Profession:" + item.profession + "    Age:" + item.age;
        result.append(div);
        console.log(result);
        div.setAttribute('style', 'background-color : black; width: 500px; height:50px; color: #FFFFFF; text-align: center; border: solid 2px; border-color: white; border: 1px solid #FFFFFF; border-radius: 10px; box-sizing: border-box ')
          
            })
    
}
function filter(){
    let empname = document.getElementById('name');
    let  profession = document.getElementById('enterProfession');
    let  age = document.getElementById('enterAge');

    let fname = empname.value;
    let empProfession = profession.value;
    let empAge = age.value;
    
    let obj = {
        id: 1, name: fname , age: empAge , profession: empProfession
    }
    arr.push(obj)
    console.log("new array",arr);
    
filterByProfession()
}

button.addEventListener("click", filterByProfession)
AddButton.addEventListener("click", filter)

