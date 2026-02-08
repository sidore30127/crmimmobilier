const scriptURL = "https://script.google.com/macros/s/AKfycbyDZTPQw7Zpck1QV7gNo3eUVBz5uOtdsEfWBr1S8mOSxa_S3floUhxSjP0FQNpAb_uO7w/exec";

document.getElementById("myForm").addEventListener("submit", e => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(() => {
    alert("Form submitted successfully 🚀");
    e.target.reset();
  })
  .catch(err => alert("Error 😢"));
});
