const fvtBtn = document.getElementById('fvtBtn');
const gofvtBtn = document.getElementById('gofvtBtn');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const searchBtn = document.getElementById("searchBtn")
const favoriteBtn = document.getElementById("favoriteBtn")



const API_KEY = "802057980794294";
const fetchAllSuperHero = async(superHero) => {
    let url = `https://www.superheroapi.com/api.php/${API_KEY}/search/${superHero}`;
    try{
        const response = await fetch(url);
        data = await response.json();
        if(data.response === 'success'){
            //console.log(data);
            const first_hero = data.results[0]

             result1.innerHTML = `
                <div class="nm"> Your Super Hero's Name : ${first_hero.name}</div> 
                                         
                <img src = "${first_hero.image.url}" alt = "">
                
                
                <div class="nm"> Powerstats:</div> 
                <div> <strong>Intelligence : </strong> ${first_hero.powerstats.intelligence} </div> 
                <div> <strong>Strength : </strong> ${first_hero.powerstats.strength} </div> 
                <div> <strong>Speed: </strong> ${first_hero.powerstats.speed} </div> 
                <div> <strong>Durability : </strong> ${first_hero.powerstats.durability} </div> 
                <div> <strong>Power : </strong> ${first_hero.powerstats.power} </div> 
                <div> <strong>Combat : </strong> ${first_hero.powerstats.combat} </div> 
                
                
                <div class="nm"> Biography:</div> 
                <div> <strong>Full-name : </strong> ${first_hero.biography['full-name']} </div> 
                <div> <strong>Alter-egos :</strong> ${first_hero.biography['alter-egos']} </div> 
                <div> <strong>Aliases :</strong> ${first_hero.biography['aliases']} </div> 
                <div> <strong>Place-of-birth :</strong> ${first_hero.biography['place-of-birth']} </div> 
                <div><strong>First-appearance :</strong>  ${first_hero.biography['first-appearance']} </div> 
                <div> <strong>Publisher :</strong> ${first_hero.biography['publisher']} </div> 
                
                
                <div class="nm"> Appearance:</div> 
                <div> <strong>Gender : </strong> ${first_hero.appearance['gender']} </div> 
                <div> <strong>Race : </strong> ${first_hero.appearance['race']} </div> 
                <div> <strong>Height : </strong>  ${first_hero.appearance['height'][0]} </div> 
                <div> <strong>Weight : </strong>${first_hero.appearance['weight'][0]} </div> 
                <div> <strong>Eye-color : </strong> ${first_hero.appearance['eye-color']} </div> 
                <div> <strong>Hair-color : </strong> ${first_hero.appearance['hair-color']} </div> 
                
                
                <div class="nm"> Connections:</div> 
                <div> <strong>Affiliation : </strong> ${first_hero.connections['group-affiliation']} </div> 
                <div> <strong>Relatives : </strong> ${first_hero.connections['relatives']} </div>          
               
                `
             return first_hero   
            
        }
    } catch(error){
        console.log(error);
    }
}
searchBtn.addEventListener('click', myJsFunction);
function myJsFunction(){
    var text=document.getElementById('input1').value;
    fetchAllSuperHero(text)
    fetchFilm(text)
    console.log(text)
 }

// Film fetching
const API_KEY_film = "fdd256a1";
const fetchFilm = async(superHero) => {
    let url_film =`http://www.omdbapi.com/?t=${superHero}&apikey=${API_KEY_film}`
    
        const response = await fetch(url_film);
        data = await response.json();
        console.log(data);
        result2.innerHTML =                   
        `
        <div class="nm"> Film that has similar name with your Super Hero: ${data.Title}</div>
        <br>
        
        <img src = "${data.Poster}" alt = "">
                <br>
                
                
        <div> <strong>Year : </strong> ${data.Year}</div>
        <div> <strong>Director : </strong> ${data.Director}</div>
        <div> <strong>Genre : </strong> ${data.Genre} </div> 
        <div> <strong>Runtime : </strong> ${data.Runtime}</div>
        <div> <strong>Writer : </strong> ${data.Writer}</div>
        <div> <strong>Actors : </strong> ${data.Actors} </div> 
        <div> <strong>Language : </strong> ${data.Language}<div>
        <div> <strong>Country : </strong> ${data.Country}</div>
        <div> <strong>Awards : </strong> ${data.Awards} </div>         
            `
        return data       
    
}

   // Adding to favourites    
   fvtBtn.addEventListener('click', addFavorites);
   function addFavorites(){
        var text=document.getElementById('input1').value;
        data = fetchAllSuperHero(text)
        var favorites = localStorage.getItem("favorites");
        if (!favorites){
        localStorage.setItem("favorites", JSON.stringify({stores:[]}));
        favorites = JSON.parse(localStorage.getItem("favorites"));
        }else{
        favorites = JSON.parse(favorites);
    }
    favorites.stores.push(data);
    console.log("data"+ data)

  localStorage.setItem("favorites", JSON.stringify(favorites));
  console.log("fav"+ favorites)

}    

gofvtBtn.onclick = function () {
    window.location.href = "favourites.html";
}

;

// even listeners
window.addEventListener('DOMContentLoaded', () => fetchFilm("Wolverine"));
window.addEventListener('DOMContentLoaded', () => fetchAllSuperHero("Wolverine"));