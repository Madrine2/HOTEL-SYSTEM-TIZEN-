  const images = [
        'images/assignment.jpg', 'images/book.jpg', 'images/daily.jpg', 'images/fish.jpg', 'images/full.jpg',
        'images/mangs.jpg', 'images/many.jpg', 'images/news.jpg', 'images/reel.jpg', 'images/stick.jpg',
        'images/take.jpg', 'images/therapist.jpg', 'images/stick.jpg', 'images/podcast.jpg', 'images/assignment.jpg'
    ];

    const cardsContainer = document.getElementById('cards-container');
    let row;

    images.forEach((src, index) => {
        if (index % 5 === 0) {
            row = document.createElement('div');
            row.classList.add('cards1');
            cardsContainer.appendChild(row);
        }
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-image', src);
        card.innerHTML = `<img src="${src}" alt="" style="width: 100%; height: 100%; border-radius: 5px;">`;
        row.appendChild(card);
    });
    
    // JavaScript for changing footer image based on card click
    document.addEventListener('DOMContentLoaded', function() {
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            card.addEventListener('click', function() {
                const imageSrc = card.getAttribute('data-image');
                const footerImage = document.getElementById('footer-image');
                footerImage.src = imageSrc;
            });
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        const cards = document.querySelectorAll('.card');
        const playsContainer = document.querySelector('.main');

        cards.forEach(card => {
            card.addEventListener('click', function() {
                // Remove any existing "plays" element
                const existingPlays = playsContainer.querySelector('.plays');
                if (existingPlays) {
                    existingPlays.remove();
                }

                // Create a new "plays" element and position it under the clicked card
                const plays = document.createElement('div');
                plays.classList.add('plays');
                plays.innerHTML = `
                    <img src="images/play.png" alt="playing">
                    <p>Playing now</p>
                `;

                // Append "plays" element under the clicked card
                this.appendChild(plays);
            });
        });
    });
    
    // Data for episodes
    const episodes = [
        {
            title: "Episode-1",
            description: "From the producers of Nuremberg, the story of how in just 13 years, Adolf Hitler led a hinge sect.",
            date: "15/11/23",
            duration: "4m 54s",
            image: "images/podcast.jpg"
        },
        {
            title: "Episode-2",
            description: "The rise and fall of an empire.",
            date: "16/11/23",
            duration: "5m 22s",
            image: "images/podcast.jpg"
        },
        {
            title: "Episode-3",
            description: "The secrets of ancient civilizations.",
            date: "17/11/23",
            duration: "3m 47s",
            image: "images/podcast.jpg"
        },
        {
            title: "Episode-4",
            description: "A deep dive into quantum physics.",
            date: "18/11/23",
            duration: "6m 15s",
            image: "images/podcast.jpg"
        },
        {
            title: "Episode-5",
            description: "The mysteries of the ocean.",
            date: "19/11/23",
            duration: "4m 30s",
            image: "images/podcast.jpg"
        },
        {
            title: "Episode-6",
            description: "Exploring the universe.",
            date: "20/11/23",
            duration: "7m 45s",
            image: "images/podcast.jpg"
        }
    ];

    // Function to create episode elements
    function createEpisodeElement(episode) {
        const episodeDiv = document.createElement("div");
        episodeDiv.classList.add("episode");

        const img = document.createElement("img");
        img.src = episode.image;
        img.alt = "Episode image";

        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("episode-details");

        const h3 = document.createElement("h3");
        h3.textContent = episode.title;

        const p = document.createElement("p");
        p.textContent = episode.description;

        const dateDiv = document.createElement("div");
        dateDiv.style.display = "flex";
        dateDiv.style.marginTop = "-2px";
        dateDiv.style.width = "200px";

        const dateImg = document.createElement("img");
        dateImg.src = "images/episode.jpg";
        dateImg.alt = "Date image";
        dateImg.style.width = "16px";
        dateImg.style.height = "13px";
        dateImg.style.marginTop = "-7px";

        const dateP = document.createElement("p");
        dateP.textContent = `${episode.date}. ${episode.duration}`;
        dateP.style.color = "white";
        dateP.style.marginTop = "-10px";

        dateDiv.appendChild(dateImg);
        dateDiv.appendChild(dateP);

        detailsDiv.appendChild(h3);
        detailsDiv.appendChild(p);
        detailsDiv.appendChild(dateDiv);

        episodeDiv.appendChild(img);
        episodeDiv.appendChild(detailsDiv);

        return episodeDiv;
    }

    // Append episodes to the episodes div
    const episodesContainer = document.getElementById("episodes");
    episodes.forEach(episode => {
        const episodeElement = createEpisodeElement(episode);
        episodesContainer.appendChild(episodeElement);
    });
