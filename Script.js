```javascript
fetch('/api/bikes')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('bike-list');

    data.forEach(bike => {
      const div = document.createElement('div');
      div.className = 'bike';

      div.innerHTML = `
        <img src="${bike.image}" />
        <h3>${bike.name}</h3>
        <p>${bike.description}</p>
        <h4>₹${bike.price}</h4>
        <button onclick="buyBike('${bike.name}')">Book Now</button>
      `;

      container.appendChild(div);
    });
  });

function buyBike(name) {
  alert("Booking request for " + name);
}
```
