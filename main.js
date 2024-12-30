
document.addEventListener('click', function(event) {

    const dropdowns = document.querySelectorAll('.dropdown-content');

    dropdowns.forEach(dropdown => {

        if (!dropdown.parentElement.contains(event.target)) {

            dropdown.style.display = 'none';

        }

    });

});



document.querySelectorAll('.nav ul li button').forEach(button => {

    button.addEventListener('click', function(event) {

        const dropdown = this.nextElementSibling;

        if (dropdown && dropdown.classList.contains('dropdown-content')) {

            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

        }

    });

});
