function onSubmit(token) {
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);

    if (form.checkValidity()) {
        document.body.classList.add('loading');
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    window.location.href = "thankyou.html";
                } else {
                    window.location.href = "formFailed.html";
                }
            })
            .catch(err => {
                window.location.href = "formFailed.html";
                console.error(err);
            }).finally(() => {
                document.body.classList.remove('loading');
            });
    } else {
        form.reportValidity();
        grecaptcha.reset();
    }
}