class Movie{
    constructor(title, director, year){
        this.title=title;
        this.director=director;
        this.year=year;
    }

}
 addmovietolist=(Movie)=>{
   const list= document.getElementById("data")
   const row=document.createElement("tr")
   row.innerHTML="<td>"+Movie.title+ "</td><td>"+Movie.director+"</td><td>"+Movie.year+"</td>"
   list.appendChild(row)
 }

document.querySelector("#moviedata").addEventListener("submit",addmovie)
function addmovie(e){
e.preventDefault()
const title=document.querySelector("#st").value 
const director=document.querySelector("#nd").value
const year=document.querySelector("#rd").value
const movie= new Movie(title, director, year)
addmovietolist(movie)
}