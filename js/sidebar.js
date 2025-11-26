// sidebar.js

// ======================================================
// Smooth Scroll + SPA Sidebar Navigation
// Works for Emi and Bonnie pages
// ======================================================

function scrollToHash(hash) {
    const target = document.querySelector(hash);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function handleSidebarLinkClick(e) {
    e.preventDefault();
    const href = this.getAttribute('href');

    if (href.startsWith('#')) {
        // Internal section scroll
        scrollToHash(href);
        history.pushState(null, '', window.location.pathname + window.location.search + href);
    } else {
        // SPA page load
        loadPage(href).then(() => {
            // After page load, scroll to hash if present
            if (window.location.hash) scrollToHash(window.location.hash);
        });
    }
}

function initSidebarNavigation() {
    const sidebarLinks = document.querySelectorAll('.emi-sidebar nav a, .bonnie-sidebar nav a');
    sidebarLinks.forEach(link => link.addEventListener('click', handleSidebarLinkClick));
}

function scrollOnLoad() {
    if (window.location.hash) {
        scrollToHash(window.location.hash);
    }
}

function scrollOnHashChange() {
    window.addEventListener('hashchange', () => {
        if (window.location.hash) scrollToHash(window.location.hash);
    });
}

// Initialize all
document.addEventListener('DOMContentLoaded', () => {
    initSidebarNavigation();
    scrollOnLoad();
    scrollOnHashChange();
});
