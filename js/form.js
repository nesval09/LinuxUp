// Inicializar EmailJS
emailjs.init('40w61KptkkVVB_LwY');

// Seleccionar formulario y agregar evento submit
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  // Evitar que el formulario se envíe
  event.preventDefault();

  // Validar campos
  const nombre = document.querySelector('#nombre').value.trim();
  const email = document.querySelector('#mail').value.trim();
  const mensaje = document.querySelector('#mensaje').value.trim();

  if (nombre === '') {
    alert('Ingresá tu nombre, por favor');
    return;
  }

  if (email === '') {
    alert('Ingresá tu mail, por favor');
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert('Ingresá un mail válido, por favor');
    return;
  }

  if (mensaje === '') {
    alert('Ingresá tu mensaje, por favor');
    return;
  }

  // Enviar formulario a través de API EmailJS
  emailjs.sendForm("service_d44lpm7" , "template_ddwsjnp", form)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('¡Gracias por comunicarte con LinuxUp!! Tu mensaje se envió correctamente.');
      form.reset();
    }, function(error) {
      console.log('FAILED...', error);
      alert('Lo siento, se generó un error al enviar el mensaje. Por favor, inténtalo nuevamente más tarde.');
    });
});
