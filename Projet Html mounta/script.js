let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
  showSlides(slideIndex += n);
}
function toggleCourse(courseId) {
    var courseDesc = document.getElementById(courseId);
    courseDesc.style.display = courseDesc.style.display === 'block' ? 'none' : 'block';
  }
  // Add this inside a script tag or an external JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    var starRatingControls = document.querySelectorAll('.star-rating input');
    starRatingControls.forEach(function(star) {
      star.addEventListener('change', function() {
        alert('You rated this ' + this.value + ' stars.');
      });
    });
  });

  function setRating(ratingValue) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
      if (index < ratingValue) {
        star.classList.add('active');
      } else {
        star.classList.remove('active');
      }
    });
  }
      