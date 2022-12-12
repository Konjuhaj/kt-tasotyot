const files = 4;

const wrapper = document.querySelector(".grid-wrapper");

let i = 1;

while (i <= 4) {
  wrapper.appendChild(getImageContainer(i));
  i = i + 1;
}

function getImageContainer(index) {
  let imageContainer = document.createElement("div");
  imageContainer.classList.add("image-comp-container");

  let comparisonText = document.createElement("div");
  comparisonText.classList.add("before-after");
  let beforeText = document.createElement("h1");
  let afterText = document.createElement("h1");
  beforeText.innerText = "Ennen";
  afterText.innerText = "Jälkeen";
  comparisonText.appendChild(beforeText);
  comparisonText.appendChild(afterText);
  imageContainer.appendChild(comparisonText);

  let address = document.createElement("div");
  address.classList.add("address-line");
  address.innerText = "Alberinkatu 1, 00100 Helsinki";

  let imageBefore = document.createElement("div");
  imageBefore.classList.add("img-comp-img");
  imageBefore.classList.add("img-comp-overlay");
  let beforeImage = document.createElement("img");
  beforeImage.src = "../img/references/ref_" + index + "_before.jpeg";
  beforeImage.setAttribute("width", "400px");
  beforeImage.setAttribute("height", "300px");
  imageBefore.appendChild(beforeImage);

  let imageAfter = document.createElement("div");
  imageAfter.classList.add("img-comp-img");
  let afterImage = document.createElement("img");
  afterImage.src = "../img/references/ref_" + index + "_after.jpeg";
  afterImage.setAttribute("width", "400px");
  afterImage.setAttribute("height", "300px");
  imageAfter.appendChild(afterImage);

  imageContainer.appendChild(imageAfter);
  imageContainer.appendChild(imageBefore);
  let containerWrapper = document.createElement("div");
  containerWrapper.appendChild(imageContainer);
  containerWrapper.classList.add("img-container-wrapper");

  containerWrapper.appendChild(address);
  return containerWrapper;
}

function initComparison() {
  var x;

  compareImage(document.querySelector(".main-wrapper .img-comp-overlay"));
  x = document.querySelectorAll(".grid-wrapper .img-comp-overlay");
  x.forEach((img) => {
    compareImage(img);
  });

  function compareImage(img) {
    var slider,
      clicked = 0,
      w,
      h;

    w = img.offsetWidth;
    h = img.offsetHeight;
    img.style.width = w / 2 + "px";

    slider = document.createElement("div");
    slider.classList.add("img-comp-slider");
    img.parentElement.insertBefore(slider, img);

    slider.style.top = 165 + "px";

    slider.style.left = w / 2 - slider.offsetWidth / 2 + "px";

    slider.addEventListener("mousedown", slideReady);
    window.addEventListener("mouseup", slideFinish);

    slider.addEventListener("touchstart", slideReady);
    window.addEventListener("touchend", slideFinish);

    function slideReady(e) {
      e.preventDefault();
      clicked = 1;
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }

    function slideFinish() {
      clicked = 0;
    }

    function slideMove(e) {
      var pos;
      if (clicked === 0) {
        return false;
      }

      pos = getCursorPos(e);
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;

      slide(pos);
    }

    function getCursorPos(e) {
      var a,
        x = 0;
      e = e.changedTouches ? e.changedTouches[0] : e;
      a = img.getBoundingClientRect();

      x = e.pageX - a.left;

      x = x - window.pageXOffset;
      return x;
    }

    function slide(x) {
      img.style.width = x + "px";
      slider.style.left = img.offsetWidth - slider.offsetWidth / 2 + "px";
    }
  }
}

initComparison();
