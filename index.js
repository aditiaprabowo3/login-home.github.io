const scriptURL = 'https://script.google.com/macros/s/AKfycbw4y8jGYJIedAGnlq2uqaha7zTGh_PcsLPmBM38yHa_TVVRstRUbAQPDgp0rLKjhjU5Qw/exec'
const form = document.forms['form-contact-house']
const myAlert = document.querySelector('.my-alert')

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        myAlert.classList.toggle('d-none');
        form.reset();
        console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})
