document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(registerForm);
        
        fetch('/backend/routes/userRoutes.php', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
    });
});
