
const routes = {
    'home': {
        title: 'Home',
        content: `
            <div class="page">
                <h1>Welcome Home</h1>
                <p>Enjoy our minimalist SPA built with modern JavaScript and hash-based routing. This is the entry point where we explain our philosophy.</p>
                <div style="background: #3498db; color: white; padding: 2rem; border-radius: 8px; margin-top: 2rem;">
                    <h3>Key Features</h3>
                    <p>Dynamic content loading without full page reloads.</p>
                </div>
            </div>
        `
    },
    'services': {
        title: 'Our Services',
        content: `
            <div class="page">
                <h1>Services</h1>
                <p>We provide a wide range of services to help you achieve your goals. From development to design, we have you covered.</p>
                <ul style="margin-top: 1rem; font-size: 1.1rem; line-height: 2;">
                    <li>Web Design & Development</li>
                    <li>Digital Marketing Strategy</li>
                    <li>Mobile App Implementation</li>
                    <li>Cloud Solutions</li>
                </ul>
            </div>
        `
    },
    'projects': {
        title: 'Recent Projects',
        content: `
            <div class="page">
                <h1>Projects</h1>
                <p>Browse through some of our most impactful work across various industries. Each project is proof of our commitment to excellence.</p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 2rem;">
                    <div style="background: #ecf0f1; padding: 1rem; border-radius: 4px;">Project Alpha</div>
                    <div style="background: #ecf0f1; padding: 1rem; border-radius: 4px;">Project Beta</div>
                    <div style="background: #ecf0f1; padding: 1rem; border-radius: 4px;">Project Gamma</div>
                </div>
            </div>
        `
    },
    'team': {
        title: 'Our Team',
        content: `
            <div class="page">
                <h1>The Team</h1>
                <p>A diverse group of passionate individuals working together to create amazing experiences. Here's who we are:</p>
                <div style="margin-top: 1.5rem;">
                    <p><strong>CEO:</strong> Ananya</p>
                    <p><strong>Lead Dev:</strong> Vikram</p>
                    <p><strong>Designer:</strong> Priya</p>
                </div>
            </div>
        `
    },
    'contact': {
        title: 'Contact Us',
        content: `
            <div class="page">
                <h1>Contact Us</h1>
                <p>Have a question or want to start a project? We'd love to hear from you. Use the information below to reach out:</p>
                <div style="background: #fff; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-top: 2rem;">
                    <p>Email: <strong>contact@minispa.in</strong></p>
                    <p>Phone: <strong>+91 9876543210</strong></p>
                    <p>Office: <strong>Cyber Gateway, Hitech City, Hyderabad, India</strong></p>
                </div>
            </div>
        `
    },
    'error': {
        title: 'Page Not Found',
        content: `
            <div class="page">
                <h1>404</h1>
                <p>Oops! The page you're looking for doesn't exist.</p>
                <a href="#home" style="color: #3498db; text-decoration: underline;">Return Home</a>
            </div>
        `
    }
};


function handleRouting() {
    // Get the current hash from the location object, removing the '#' symbol
    const hash = window.location.hash.substring(1) || 'home';
    // Find the current route data or default to 'error' if it doesn't exist
    const route = routes[hash] || routes['error'];

    // Update the browser's page title for SEO and UX
    document.title = `${route.title} | SPA`;

    // Inject the content into our main application container
    const app = document.getElementById('app');
    app.innerHTML = route.content;

    // Highlight the active link in the navigation bar (optional UI improvement)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        if (link.getAttribute('href') === `#${hash}`) {
            link.style.color = '#3498db';
        } else {
            link.style.color = 'white';
        }
    });

}

//Listen for 'hashchange' events to handle navigation
window.onhashchange = handleRouting;
//Trigger once on initial page load to show the default page
window.onload = handleRouting;
