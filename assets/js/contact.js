/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_fjocfys','template_2pykr2a','#contact-form','QKQ7lKTmjHdElKayO')
        .then(() => {
           contactMessage.textContent = 'Your message has been sent!'
           setTimeout(() => {
           contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    }, () => {
        contactMessage.textContent = 'An error occurred, please try again later.'
    })
}
contactForm.addEventListener('submit', sendEmail)