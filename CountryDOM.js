class Country 
{
    constructor(name, lang, greeting, colors) 
    {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}

let countryList = document.getElementById("CountryList");

let text = document.getElementById("CountryName");
let text2 = document.getElementById("OfficialLanguage");
let text3 = document.getElementById("HelloWorld")

let color1 = document.getElementById("Color1");
let color2 = document.getElementById("Color2");
let color3 = document.getElementById("Color3");



let usa = new Country("USA", "English", "Hello", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola", ["red", "white", "green"]);
let india = new Country("India", "Hindi and English", "Namaste", ["orange", "white","green"]);
let brazil = new Country("Brazil","Portuguese","Ola",["green", "yellow","blue"]);
let japan = new Country("Japan", "Japanese", "Kon'nichiwa", ["red","white"]);



function SwitchCountry() 
{
    let input = countryList.value;
    let country;
 
    if (input === "USA") 
    {
        color1.style.backgroundColor = "red";
        color2.style.backgroundColor = "white";
        color3.style.backgroundColor = "blue";
        country = usa;
   
    }
    else if (input === "Mexico") 
    {
        color1.style.backgroundColor = "red";
        color2.style.backgroundColor = "white";
        color3.style.backgroundColor = "green";
        country = mexico;
   
    }
    else if (input === "India") 
    {
        color1.style.backgroundColor = "orange";
        color2.style.backgroundColor = "white";
        color3.style.backgroundColor = "green";
        country = india;

    }
    else if (input === "Brazil") 
    {   
        color1.style.backGroundColor = "green";
        color2.style.backGroundColor = "yellow";
        color3.style.backGroundColor = "blue";
        country = brazil;
        
    }
    else if (input === "Japan") 
    {
        
        color1.style.backGroundColor = "red";
        color2.style.backGroundColor = "white";
        color3.style.backGroundColor = "white";
        country = japan;
        
    }

    text.textContent = country.name;
    text2.textContent = country.lang;
    text3.textContent = country.greeting;


}