const form = document.getElementById("myform");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    name: form.name.value,
  };

  fetch("https://script.google.com/macros/s/AKfycbxQih87CEWBLag_MwVI8JjZGGwnJ9yWWLHKjOKGkI61k8JiOF-Q0GEqtsaLuo9nzsT6/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(data => {
    alert("Form submitted successfully!");
    form.reset();
  })
  .catch(err => console.error(err));
});