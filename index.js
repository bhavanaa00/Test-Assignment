document
  .getElementById("country-select")
  .addEventListener("change", function () {
    const flagSrc = this.selectedOptions[0].dataset.flag;
    document.getElementById("flag").src = flagSrc;
  });

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('load', function() {
      const loader = document.getElementById('page-loader');
      loader.classList.add('hidden');
    });
});

document.querySelector('.menu-toggle').addEventListener('click', function() {  document.querySelector('.subhead-left').classList.toggle('show');});


document.addEventListener("DOMContentLoaded", function() {
    var content1 = document.querySelector('.content1');

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                content1.classList.add('animate');
            } else {
                content1.classList.remove('animate');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(content1);
});


const faqAnswers = document.querySelectorAll('.faq-answer');
const faqs = document.querySelectorAll('.faq');
const toggleSigns = document.querySelectorAll('.toggle-sign')
faqs.forEach((faq, index) => {
    faq.addEventListener('click', function () {
        const faqAnswer = faqAnswers[index];
        const toggleSign = toggleSigns[index];
        if (faqAnswer.style.display === 'block') {
            faqAnswer.style.display = 'none';
            faq.style.borderBottom = '1px solid #ccc';
            toggleSign.innerHTML = '+';
            toggleSign.style.color = 'black';
        } else {
            faqAnswer.style.display = 'block';
            faq.style.borderBottom = '1px solid #007bff';
            toggleSign.innerHTML = '-';
            toggleSign.style.color = '#007bff';
        }
    });
});



