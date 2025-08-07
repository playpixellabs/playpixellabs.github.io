document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const navItems = document.querySelectorAll('.nav-item');
    const allGameCards = document.querySelectorAll('.game-card');
    const gameCategorySections = document.querySelectorAll('.game-category-section');

    // Filter game cards based on search query
    function filterGames(query) {
        const lowerCaseQuery = query.toLowerCase();
        let anyMatch = false;

        allGameCards.forEach(card => {
            const title = card.getAttribute('data-title').toLowerCase();
            const genre = card.getAttribute('data-genre').toLowerCase();
            
            if (title.includes(lowerCaseQuery) || genre.includes(lowerCaseQuery)) {
                card.style.display = 'block';
                anyMatch = true;
            } else {
                card.style.display = 'none';
            }
        });

        // Show/hide category titles based on filtered games
        // gameCategorySections.forEach(section => {
        //     const visibleCards = section.querySelectorAll('.game-card[style*="display: block"]');
        //     if (visibleCards.length > 0) {
        //         section.style.display = 'block';
        //     } else {
        //         section.style.display = 'none';
        //     }
        // });

        // Optional: display a "no results" message if no cards are visible
        if (!anyMatch && query.trim() !== '') {
            // Can add a placeholder element to display this message
        }
    }

    // Search bar functionality
    searchBar.addEventListener('input', (e) => {
        // Deactivate all nav items when searching
        navItems.forEach(btn => btn.classList.remove('active'));
        filterGames(e.target.value);
    });

    // Mobile search button toggle
    // const mobileSearchBtn = document.querySelector('.search-mobile-btn');
    // const desktopSearchContainer = document.querySelector('.search-container');
    // mobileSearchBtn.addEventListener('click', () => {
    //     desktopSearchContainer.style.display = desktopSearchContainer.style.display === 'block' ? 'none' : 'block';
    //     if (desktopSearchContainer.style.display === 'block') {
    //         searchBar.focus();
    //     }
    // });

    // Navigation item functionality
    // navItems.forEach(item => {
    //     item.addEventListener('click', () => {
    //         // Reset search bar
    //         searchBar.value = '';

    //         // Update active state for nav items
    //         navItems.forEach(btn => btn.classList.remove('active'));
    //         item.classList.add('active');

    //         const filterTerm = item.getAttribute('data-filter');

    //         gameCategorySections.forEach(section => {
    //             const categoryTitle = section.querySelector('.category-title').textContent.toLowerCase().replace(' games', '').trim().replace(/ /g, '-');
    //             const isAll = filterTerm === 'all';
    //             const isMatch = categoryTitle === filterTerm;

    //             if (isAll || isMatch) {
    //                 section.style.display = 'block';
    //                 // Show all cards in the matching section
    //                 section.querySelectorAll('.game-card').forEach(card => card.style.display = 'block');
    //             } else {
    //                 section.style.display = 'none';
    //             }
    //         });

//             // Handle the "All" button
//             if (filterTerm === 'all') {
//                 allGameCards.forEach(card => card.style.display = 'block');
//                 gameCategorySections.forEach(section => section.style.display = 'block');
//             }
//         });
//     });
});