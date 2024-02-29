const api = "api_key=9f6851363e9886b3bbc9baef908f3241";

const base_url= "https://api.themoviedb.org/3";

const banner_url="https://image.tmdb.org/t/p/original";
const img_url="https://image.tmdb.org/t/p/w500";

const requests={
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchTopRated: `${base_url}/movie/top_rated?${api}&language=en-US`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
}


function truncate(str, n) {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
}

// Fetch Netflix Originals
fetch(requests.fetchNetflixOrignals)
.then((res) => res.json())
.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("netflixrow");
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "NETFLIX ORIGINALS";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
        poster.width = 200; // Set a standard width
        poster.height = 300; // Set a standard height
        var s = movie.name.replace(/\s+/g, " ");
        poster.id = s;
        poster.src = img_url + movie.poster_path;
        row_posters.appendChild(poster);
    });

    const setMovie = data.results[Math.floor(Math.random() * data.results.length)];
    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner_title");
    var banner_desc = document.getElementById("banner_description");

    banner.style.backgroundImage = "url(" + banner_url + setMovie.backdrop_path + ")";
    banner_desc.innerText = truncate(setMovie.overview, 150);
    banner_title.innerText = setMovie.name;
})
.catch((error) => {
    console.error("Error fetching Netflix Originals:", error);
});

// Fetch Trending
fetch(requests.fetchTrending)
.then((res) => res.json())
.then((data) => {
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("popularrow");
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Trending Now";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    
    data.results.forEach((trendingItem) => {
        const poster = document.createElement("img");
        poster.src = `${img_url}${trendingItem.poster_path}`;
        poster.alt = trendingItem.name || trendingItem.title;
        poster.width = 200; // Set a standard width
        poster.height = 300; // Set a standard height
        row_posters.appendChild(poster);
    });
})
 
.catch((error) => {
    console.error("Error fetching trending data:", error);
});

// Fetch Top Rated
fetch(requests.fetchTopRated) // <-- Corrected to fetchTopRated
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Top Rated";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((topRatedItem) => {
            const poster = document.createElement("img");
            poster.src = `${img_url}${topRatedItem.poster_path}`;
            poster.alt = topRatedItem.name || topRatedItem.title;
            poster.width = 200; // Set a standard width
            poster.height = 300; // Set a standard height
            row_posters.appendChild(poster);
        });
    })
    .catch((error) => {
        console.error("Error fetching top-rated data:", error);
    });

// Fetch Action Movies
fetch(requests.fetchActionMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Action Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((actionMovie) => {
            const poster = document.createElement("img");
            poster.src = `${img_url}${actionMovie.poster_path}`;
            poster.alt = actionMovie.name || actionMovie.title;
            poster.width = 200; // Set a standard width
            poster.height = 300; // Set a standard height
            row_posters.appendChild(poster);
        });
    })
    .catch((error) => {
        console.error("Error fetching action movies:", error);
    });

    // Fetch Comedy Movies
fetch(requests.fetchComedyMovies)
.then((res) => res.json())
.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Comedy Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((comedyMovie) => {
        const poster = document.createElement("img");
        poster.src = `${img_url}${comedyMovie.poster_path}`;
        poster.alt = comedyMovie.name || comedyMovie.title;
        poster.width = 200; // Set a standard width
        poster.height = 300; // Set a standard height
        row_posters.appendChild(poster);
    });
})
.catch((error) => {
    console.error("Error fetching comedy movies:", error);
});
// Fetch Horror Movies
fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Horror Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((horrorMovie) => {
            const poster = document.createElement("img");
            poster.src = `${img_url}${horrorMovie.poster_path}`;
            poster.alt = horrorMovie.name || horrorMovie.title;
            poster.width = 200; // Set a standard width
            poster.height = 300; // Set a standard height
            row_posters.appendChild(poster);
        });
    })
    .catch((error) => {
        console.error("Error fetching horror movies:", error);
    });
// Fetch Romance Movies
fetch(requests.fetchRomanceMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Romance Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((romanceMovie) => {
            const poster = document.createElement("img");
            poster.src = `${img_url}${romanceMovie.poster_path}`;
            poster.alt = romanceMovie.name || romanceMovie.title;
            poster.width = 200; // Set a standard width
            poster.height = 300; // Set a standard height
            row_posters.appendChild(poster);
        });
    })
    .catch((error) => {
        console.error("Error fetching romance movies:", error);
    });
// Fetch Documentaries
fetch(requests.fetchDocumentaries)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Documentaries";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((documentary) => {
            const poster = document.createElement("img");
            poster.src = `${img_url}${documentary.poster_path}`;
            poster.alt = documentary.name || documentary.title;
            poster.width = 200; // Set a standard width
            poster.height = 300; // Set a standard height
            row_posters.appendChild(poster);
        });
    })
    .catch((error) => {
        console.error("Error fetching documentaries:", error);
    });


        const setMovie = data.results[Math.floor(Math.random() * data.results.length)];
        var banner = document.getElementById("banner");
        var banner_title = document.getElementById("banner_title");
        var banner_desc = document.getElementById("banner_description");

        banner.style.backgroundImage = "url(" + banner_url + setMovie.backdrop_path + ")";
        banner_desc.innerText = truncate(setMovie.overview, 150);
        banner_title.innerText = setMovie.name;
    
