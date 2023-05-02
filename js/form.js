const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  // Evitar que el formulario se envíe
  event.preventDefault();

  // Validar campos
  const nombre = document.querySelector('#nombre').value.trim();
  const email = document.querySelector('#email').value.trim();
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

  // Si los campos son válidos, enviar el formulario
  form.submit();
});
