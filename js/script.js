if (document.getElementById('popup')) {
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
}

if (document.getElementById('count') || document.getElementById('second-count')) {
  var countInput = document.getElementById('count-field');
  var bMinus = document.getElementById('bMinus');
  var bPlus = document.getElementById('bPlus');

  var secCountInput = document.getElementById('second-count-field');
  var secbMinus = document.getElementById('second-bMinus');
  var secbPlus = document.getElementById('second-bPlus');

  var storage = localStorage.getItem('countInput');
  var secStorage = localStorage.getItem('secCountInput');

  var popup = document.querySelector('.search-form');
  var form = popup.querySelector('form');

  if (storage) {
    countInput.value = storage;
  }
  if (secStorage) {
    secCountInput.value = secStorage;
  }

  bPlus.onclick = function() {
    countInput.value = parseInt(countInput.value)+1;
  };
  bMinus.onclick = function() {
    if (parseInt(countInput.value) > 0) {
      countInput.value = parseInt(countInput.value)-1;
    }
  };


  secbPlus.onclick = function() {
    secCountInput.value = parseInt(secCountInput.value)+1;
  };

  secbMinus.onclick = function() {
    if (parseInt(secCountInput.value) > 0) {
      secCountInput.value = parseInt(secCountInput.value)-1;
    }
  };

  form.addEventListener('submit', function(event) {
    if ((parseInt(countInput.value) > 0) || (parseInt(secCountInput.value) > 0)) {
      localStorage.setItem('countInput', countInput.value);
      localStorage.setItem('secCountInput', secCountInput.value);
    }
  });
}





/*  Левый ползунок фильтра "Стоимость в сутки (Р)" */

if (document.getElementById('filter')) {
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
}
