const imageOne = document.querySelector("#image-one");
const imageTwo = document.querySelector("#image-two");
const imageThree = document.querySelector("#image-three");

const captionOne = document.querySelector("#caption-one");
const captionTwo = document.querySelector("#caption-two");
const captionThree = document.querySelector("#caption-three");

const storyTitle = document.querySelector("#story-title");
const storyDescription = document.querySelector("#story-description");

const sequenceOne = document.querySelector("#sequence-one");
const sequenceTwo = document.querySelector("#sequence-two");

const babyImage = "images/kapi-baby.jpg";
const growingImage = "images/kapi-growing.jpg";
const nowImage = "images/kapi-now.jpg";

function showGrowingStory() {

    storyTitle.textContent = "Growing Up";

    storyDescription.textContent =
        "This sequence shows Kapi growing from a small puppy into the dog he is today.";

    imageOne.src = babyImage;
    imageTwo.src = growingImage;
    imageThree.src = nowImage;

    captionOne.textContent =
        "Kapi begins as a small and curious puppy.";

    captionTwo.textContent =
        "As he grows, Kapi becomes bigger and more confident.";

    captionThree.textContent =
        "Today, Kapi is grown up and part of my everyday life.";

}

function showLookingBackStory() {

    storyTitle.textContent = "Looking Back";

    storyDescription.textContent =
        "This sequence starts with Kapi today and looks back at how much he has changed.";

    imageOne.src = nowImage;
    imageTwo.src = growingImage;
    imageThree.src = babyImage;

    captionOne.textContent =
        "Today, Kapi is grown up and confident.";

    captionTwo.textContent =
        "Looking back, I remember him while he was still growing.";

    captionThree.textContent =
        "The story ends with a memory of Kapi as a tiny puppy.";

}

sequenceOne.addEventListener("click", showGrowingStory);

sequenceTwo.addEventListener("click", showLookingBackStory);
