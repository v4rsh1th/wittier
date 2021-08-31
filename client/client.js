const form = document.querySelector('form'); // querySelector is for grabbing an element from the page
const loadingElement = document.querySelector('.loading');
const API_URL = 'http:localhost:5000/wits';

loadingElement.style.display = 'none';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form); // grabs the data from the page
  const name = formData.get('name');
  const content = formData.get('content');
  console.log('form submitted');

  const wit = {
    name,
    content
  };
  // console.log(wit);

  form.style.display = 'none';
  loadingElement.style.display = '';

  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(wit),
    headers: {
      'content-type': 'application/json'
    }
  })
});