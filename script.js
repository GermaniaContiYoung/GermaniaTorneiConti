document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById('amichevoleDropdown');
    const dropbtn = dropdown.querySelector('.dropbtn');

    if (dropbtn) {
        dropbtn.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.classList.toggle('open');
        });
    }

    const links = dropdown.querySelectorAll('.dropdown-link');
    links.forEach(link => {
        link.addEventListener('click', function() {
            dropdown.classList.remove('open');
        });
    });

    document.addEventListener('click', function() {
        if (dropdown) dropdown.classList.remove('open');
    });
});