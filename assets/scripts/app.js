const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal"); //this is an alternative approch for accessing this movie modal
// const addMovieModal = document.body.children[1]; //this is an alternative approch for accessing this movie modal

const startAddMovieButton = document.getElementById("add-movie-btn");
const backdrop = document.getElementById("backdrop");


const toggleMovieModal = ()=>{

    addMovieModal.classList.toggle('visible');
    backdrop.classList.toggle('visible');

    console.log("movie modal worked");
};

startAddMovieButton.addEventListener("click",toggleMovieModal);