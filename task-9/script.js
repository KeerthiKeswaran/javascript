const container = document.getElementById('post-container');
const loader = document.getElementById('loader');

let postIndex = 0; // Tracks our current post position
let isLoading = false; // Prevents multiple simultaneous loads

async function loadPosts() {
    if (isLoading) return; // Exit if we're already loading data
    
    isLoading = true;
    loader.classList.add('active');

    try {
        // Simulate a network delay (UX choice to show the loader)
        await new Promise(resolve => setTimeout(resolve, 800));

        const response = await fetch('data/posts.json');
        const postsArray = await response.json();

        // Loop through and append posts (for simulation, we reuse the array)
        for (let i = 0; i < 5; i++) {
            const post = postsArray[(postIndex + i) % postsArray.length];
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.excerpt}</p>
            `;
            container.appendChild(postElement);
        }

        postIndex += 5; // Update our position for next load

    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        isLoading = false;
        loader.classList.remove('active');
    }
}


window.addEventListener('scroll', () => {
    // Current distance from the top of the window
    const scrollTop = window.scrollY;
    // Total height of the scrollable content
    const scrollHeight = document.documentElement.scrollHeight;
    // Height of the visible window
    const clientHeight = window.innerHeight;

    // Load more when we're within 100px of the bottom
    if (scrollTop + clientHeight >= scrollHeight - 100) {
        loadPosts();
    }
});

// Initial load to fill the page
loadPosts();
