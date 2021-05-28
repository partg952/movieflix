getMovie();
function getMovie(){
    fetch(`https://api.themoviedb.org/3/discover/movie/?api_key=e1fa13c7e6a35b25826f92b2aea94264`)
    .then(res=>res.json())
    .then(movie=>{
        console.log("hello world");
        console.log(movie)
        movie.results.forEach(info => {
            console.log(info.title)
            let div = document.createElement('div')
            div.classList.add("div")
            document.querySelector('main').appendChild(div)
            div.innerHTML = `
            <img src="${'https://image.tmdb.org/t/p/w500'+info.poster_path}">
            <span>
            <p>${info.title}</p>
            <div>
            <p style="color:${rating(info.vote_average)};">${info.vote_average}</p>
            
            </div>
            </span>
            
            
            
            `
            
        });
    })
    
}

function rating(rating){
    let color = ''
    if(rating>=8){color = 'green'}
    else if(rating>=5){color = 'orange'}
    else if(rating>=3){color = 'red'}

    return color;   
}

function search(){
    fetch(`https://api.themoviedb.org/3/search/movie/?api_key=e1fa13c7e6a35b25826f92b2aea94264&query=${document.getElementById('search').value}`)
.then(res=>res.json())
.then(movie=>{
    if(document.getElementById('search').value.length!=0){
        while(document.querySelector('main').firstChild){
            document.querySelector('main').removeChild(document.querySelector('main').firstChild)
        }
        console.log(movie)
        movie.results.forEach(info => {
            console.log(info.title)
            let div = document.createElement('div')
            div.classList.add("div")
            document.querySelector('main').appendChild(div)
            div.innerHTML = `
            <img src="${'https://image.tmdb.org/t/p/w500'+info.poster_path}">
            <span>
            <p>${info.title}</p>
            <div>
            <p style="color:${rating(info.vote_average)};">${info.vote_average}</p>
            
            </div>
            </span>
            
            
            
            `
            
        });


    }
    else{
        window.location.reload();
    }



    
})
}

document.getElementById('search').onchange=()=>{
    search();
}