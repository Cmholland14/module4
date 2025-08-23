function addCard(title, description) {
  const template = document.getElementById("card-template").content.cloneNode(true);
  template.querySelector('.card-title').innerText = title;
  template.querySelector('.card-text').innerText = description;
  document.querySelector('#card-list').appendChild(template);
}

const data = [
  { name: 'bob', age: 23 },
  { name: 'alice', age: 39 },
  // Add more entries as needed...
];

data.forEach(person => {
  addCard(person.name, `Age: ${person.age}`);
});

const cardsData = [
  { title: "Card 1", description: "First card" },
  { title: "Card 2", description: "Second card" }
];

const container = document.getElementById('card-container');
cardsData.forEach(item => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<h2>${item.title}</h2><p>${item.description}</p>`;
  container.appendChild(card);
});

