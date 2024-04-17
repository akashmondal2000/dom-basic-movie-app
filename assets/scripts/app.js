const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal"); //this is an alternative approch for accessing this movie modal
// const addMovieModal = document.body.children[1]; //this is an alternative approch for accessing this movie modal

const startAddMovieButton = document.getElementById("add-movie-btn");
const backdrop = document.getElementById("backdrop");
const cancleAddMovieButton = document.querySelector(".btn--passive");

// for use this backdrop another place also i will create a function
const toggleBackdrop = ()=>{
    backdrop.classList.toggle('visible');
} 


const toggleMovieModal = ()=>{

    addMovieModal.classList.toggle('visible');
    toggleBackdrop();

    console.log("movie modal worked");
};

const backdropClickHandler = ()=>{
    toggleMovieModal();
}

const cancleMovie = ()=>{
    toggleMovieModal();
}

startAddMovieButton.addEventListener("click",toggleMovieModal);
backdrop.addEventListener("click",backdropClickHandler);
cancleAddMovieButton.addEventListener('click',cancleMovie);