const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal"); //this is an alternative approch for accessing this movie modal
// const addMovieModal = document.body.children[1]; //this is an alternative approch for accessing this movie modal

const startAddMovieButton = document.getElementById("add-movie-btn");
const backdrop = document.getElementById("backdrop");
const cancleAddMovieButton = document.querySelector(".btn--passive");
const confirmAddMovieButton = cancleAddMovieButton.nextElementSibling; // hare i user dom traversal technique
const userInputs = addMovieModal.querySelectorAll("input"); // it's gives me all these inputs hare in an array like object(in such a node list)

const entryTextSection = document.getElementById("entry-text");

// hare i want to add objects to that array where each object represent a movie
const movieStorage = [];

const updateUi = () => {
  if (movieStorage.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const renderNewMovieElement = (title,imageUrl,rating)=>{
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML =`
  <div class = "movie-element__image">
    <img src= ${imageUrl} alt=${title}>
  </div>
  <div class = "movie-element__info">
    <h1>${title}</h1>
    <p>${rating}/5</p>
  </div>
  `;

  const rootElement = document.getElementById('movie-list');
  rootElement.append(newMovieElement);

}

// for use this backdrop another place also i will create a function
const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();

  console.log("movie modal worked");
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

const cancleMovieHandler = () => {
  toggleMovieModal();
  clearMovieInputs();
};

const clearMovieInputs = () => {
  // userInputs[0] = ''; // this Approch is also work but i use hare for of loop
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const addMovieHandler = () => {
  const titleValues = userInputs[0].value; // hare userInputs[0] means access the first input box
  const imageUrlValue = userInputs[1].value; //userInputs[1] means access the second input box
  const ratingValue = userInputs[2].value; // userInputs[2] means access the third input box

  if (
    titleValues.trim() === "" ||
    imageUrlValue.trim === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("please enter valid values (reating between 1 to 5)");
    return;
  }

  const newMovie = {
    title: titleValues,
    imageUrl: imageUrlValue,
    rating: ratingValue,
  };
  movieStorage.push(newMovie); // hare i push new movie object in movieStorege array
  console.log(movieStorage);
  toggleMovieModal();
  clearMovieInputs();
  renderNewMovieElement(newMovie.title,newMovie.imageUrl,newMovie.rating);
  updateUi();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancleAddMovieButton.addEventListener("click", cancleMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
