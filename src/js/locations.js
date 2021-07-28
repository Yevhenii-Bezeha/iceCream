(() => {
    const refs = {
    openLocationsBtn: document.querySelector('[data-locations-open]'),
    closeLocationsBtn: document.querySelector('[data-locations-close]'),
    locations: document.querySelector('[data-locations]'),
    };

    refs.openLocationsBtn.addEventListener('click', toggleLocations);
    refs.closeLocationsBtn.addEventListener('click', toggleLocations);

    function toggleLocations() {
        refs.locations.classList.toggle('locations__is-hidden');
        document.body.classList.toggle("body-hidden");
    }
})();