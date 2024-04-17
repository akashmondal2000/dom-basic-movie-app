const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal"); //this is an alternative approch for accessing this movie modal
// const addMovieModal = document.body.children[1]; //this is an alternative approch for accessing this movie modal

const startAddMovieButton = document.getElementById("add-movie-btn");
const backdrop = document.getElementById("backdrop");
const cancleAddMovieButton = document.querySelector(".btn--passive");
const confirmAddMovieButton = cancleAddMovieButton.nextElementSibling; // hare i user dom traversal technique
const userInputs = addMovieModal.querySelectorAll("input"); // it's gives me all these inputs hare in an array like object(in such a node list)

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
    alert("please enter valid values (reating between 1 to 5)")
  }
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancleAddMovieButton.addEventListener("click", cancleMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
