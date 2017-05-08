var search = document.querySelector('.form-headline');
var popup = document.querySelector('.search-form');

search.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (!popup.classList.contains('search-form-hide')) {
    popup.classList.remove('search-form-show');
    popup.classList.toggle('search-form-hide');
  }
  else {
    popup.classList.remove('search-form-hide');
    popup.classList.toggle('search-form-show');
}
})

var countButton = document.querySelector('.count-button');
var buttonValue = document.querySelector('.form-tourists input');

countButton.addEventListener('click', function(chg) {
  for (i = buttonValue; i < 100; i++) {
    buttonValue.value = 'i';
  }
})

/*  Левый ползунок фильтра "Стоимость в сутки (Р)" */

var priceRange = document.querySelector('.price-range');
var minToggle = document.querySelector('.range-toggle-min');


minToggle.onmousedown = function(e) {
  var rangeCoords = getCoords(minToggle);
  var shiftX = e.pageX - rangeCoords.left;

  var toggleCoords = getCoords(priceRange);

  document.onmousemove = function(e) {
    var newLeft = e.pageX - shiftX - toggleCoords.left;

    if (newLeft < 0) {
      newLeft = 0;
    }
    var rightEdge = priceRange.offsetWidth - minToggle.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    minToggle.style.left = newLeft + 'px';
  }

  document.onmouseup = function() {
    document.onmousemove = document.onmouseup = null;
  };
  return false;
};

minToggle.ondragstart = function() {
  return false;
};

function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageYOffset
  };
}


/* Правый ползунок фильтра "Стоимость в сутки (Р)" */

var priceRange = document.querySelector('.price-range');
var maxToggle = document.querySelector('.range-toggle-max');


maxToggle.onmousedown = function(e) {
  var rangeCoords = getCoords(maxToggle);
  var shiftX = e.pageX - rangeCoords.left;

  var toggleCoords = getCoords(priceRange);

  document.onmousemove = function(e) {
    var newLeft = e.pageX - shiftX - toggleCoords.left;

    if (newLeft < 0) {
      newLeft = 0;
    }
    var rightEdge = priceRange.offsetWidth - maxToggle.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    maxToggle.style.left = newLeft + 'px';
  }

  document.onmouseup = function() {
    document.onmousemove = document.onmouseup = null;
  };
  return false;
};

maxToggle.ondragstart = function() {
  return false;
};

function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageYOffset
  };
}
