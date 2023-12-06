function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Нууц үгүүд таарахгүй байна.');
      return;
    }

    // Make a fetch request to your signup endpoint
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Signup failed.');
      }
      return response.json();
    })
    .then(data => {
      alert(data.message);
      // Optionally, you can redirect the user to the login page or perform other actions
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }