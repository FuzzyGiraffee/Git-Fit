const form = document.getElementById('signupForm');
const username = document.getElementById('set-username');
const emailInput = document.getElementById('email-signup');
const passwordInput = document.getElementById('set-password');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const newUser = {
        username: username.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
    };
    console.log(newUser);

    try {
        console.log('In creation');
        const response = await fetch('/signup', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log('I sent the thing');

        if (!response.ok) {
            throw new Error('Failed to create user.');
        }

        const responseData = await response.json();

        console.log(responseData);
        window.location.replace('/'); // Redirect to homepage after successful sign-up

    } catch (err) {
        console.error(err);
        alert(err.message);
    }
});
