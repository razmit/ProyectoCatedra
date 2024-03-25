document.getElementById("btnProfile").addEventListener('click', () => {
    Swal.fire({
        title: 'Salir',
        text: "¿Quiere regresar a la página de login?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = 'login.html';
        }
      });
          
});
