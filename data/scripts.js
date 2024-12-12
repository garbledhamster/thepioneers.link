// scripts/scripts.js

// Particles.js Configuration
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5
    },
    "size": {
      "value": 3
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    },
    "modes": {
      "repulse": {
        "distance": 100
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});

// Fetch and load cards.json data on page load
document.addEventListener('DOMContentLoaded', function () {
  fetch('cards.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      const contentArea = document.getElementById('content-area');

      // Set the page title from JSON
      document.title = data.title;

      // Loop through each section
      data.sections.forEach(section => {
        // Create and append section heading
        const sectionHeading = document.createElement('h2');
        sectionHeading.classList.add('mb-4', 'mt-5');
        sectionHeading.textContent = section.heading;
        contentArea.appendChild(sectionHeading);

        // Loop through categories in each section
        section.categories.forEach(cat => {
          const categoryContainer = document.createElement('div');
          categoryContainer.classList.add('category-container');

          const catHeading = document.createElement('h3');
          catHeading.textContent = cat.title;
          categoryContainer.appendChild(catHeading);

          // Loop through entries in each category
          cat.entries.forEach(entry => {
            const cardGrid = document.createElement('div');
            cardGrid.classList.add('card-grid');

            // Image
            const img = document.createElement('img');
            img.src = entry.image || 'https://via.placeholder.com/100';
            img.alt = entry.name;
            cardGrid.appendChild(img);

            // Card details container
            const cardDetails = document.createElement('div');
            cardDetails.classList.add('card-details');

            // Name
            const nameEl = document.createElement('h3');
            nameEl.textContent = entry.name;
            cardDetails.appendChild(nameEl);

            // Description
            const desc = document.createElement('p');
            desc.textContent = entry.description;
            cardDetails.appendChild(desc);

            // Fame
            const fameEl = document.createElement('div');
            fameEl.classList.add('ranking');
            fameEl.textContent = `Fame: ${entry.fame}`;
            cardDetails.appendChild(fameEl);

            // Influence
            const influenceEl = document.createElement('div');
            influenceEl.classList.add('influence');
            influenceEl.textContent = `Influence: ${entry.influence}`;
            cardDetails.appendChild(influenceEl);

            // Connections
            const connectionsEl = document.createElement('div');
            connectionsEl.classList.add('connections');
            connectionsEl.textContent = `Connections: ${entry.connections}`;
            cardDetails.appendChild(connectionsEl);

            // Tags
            const tagsEl = document.createElement('div');
            tagsEl.classList.add('tags');
            tagsEl.textContent = `Tags: ${entry.tags.join(', ')}`;
            cardDetails.appendChild(tagsEl);

            // Links / Buttons
            const buttonsDiv = document.createElement('div');
            buttonsDiv.classList.add('buttons');
            entry.links.forEach(link => {
              const a = document.createElement('a');
              a.href = link.url;
              a.textContent = link.text;
              a.target = "_blank"; // Open links in a new tab
              buttonsDiv.appendChild(a);
            });
            cardDetails.appendChild(buttonsDiv);

            cardGrid.appendChild(cardDetails);
            categoryContainer.appendChild(cardGrid);
          });

          contentArea.appendChild(categoryContainer);
        });
      });
    })
    .catch(error => console.error('Error loading data:', error));
});
