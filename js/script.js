document.addEventListener('DOMContentLoaded', function() {

    // FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const item = question.parentElement;

            // Optional: Close other open FAQs
            // document.querySelectorAll('.faq-item').forEach(otherItem => {
            //     if (otherItem !== item && otherItem.classList.contains('active')) {
            //         otherItem.classList.remove('active');
            //         otherItem.querySelector('.faq-answer').style.maxHeight = 0;
            //     }
            // });

            item.classList.toggle('active');

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null; // Collapse the answer
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px'; // Expand the answer
            }
        });
    });

});
