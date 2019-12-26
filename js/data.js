var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://kiseki2301.github.io/json-examples/pets-4.json', true);
ourRequest.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200) {
        var ourdata= JSON.parse(ourRequest.responseText);
        displayInfo(ourdata);
        
    }
}
ourRequest.send();


function displayInfo(data) {  //giá trị nhận ở đây sẽ là object
    document.getElementById("pet-page").innerHTML= 
    `<h1>Pets (${data.length} results)</h1> 
    
    ${data.map(petTemplate).join(" ")}`//xuất giá trị trong JSON ra dưới dạng string, ko có dấu phẩy ngăn cách 
    //có thể dùng arrow function cho gọn: ${data.map( pet=> `<div class="animals"> <img src= "${pet.photo}"></div>` ).join()}`

}

function petTemplate(pet){
    return `
        <div class="animals"> 
            <img class="pet-photo" src= "${pet.photo}">
            <div>
                <h2> ${pet.name} <span> (${pet.species}) </span> </h2>
                <p><b>Age:</b> ${calAge(pet.birthyear)}</p>
                <ul>Favorite Foods: ${showFavFood(pet.foods.likes)}</ul>
            </div>
        </div>` 
}

function calAge(birthyear){
var age = new Date().getFullYear()- birthyear;
    if(age==0) {return "Baby";} 
    else if(age==1) { return "1 year old";}
    else{
        return `${age} years old`
    }
}

function showFavFood(food) { //là ["tuna", "catnip"]
var fav= "";
    for (var i=0; i<food.length; i++) {
        fav += "<li>"+ food[i] +"</li>";
    }
return fav; //`${fav}`
}

