
const result1 = document.getElementById('result1');


<script type="text/javascript" src="favourites.js"></script>
const getfavourites = async() => {
    
    import data from "./data.json" assert { type: "json" };
       
            result1.innerHTML = `  
            
                <div> id : ${x.id}<div/>
                <div> name : ${x.name}<div/>
                <div> publisher : ${x.biography.publisher}<div/>
                <div> combat : ${x.powerstats.combat} </div> 
                <div> occupation : ${x.work.occupation}<div/>
                <img src = "${x.image.url}" alt = "">
                `
            
            
            
        
    } 

getfavourites();    