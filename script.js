document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('home-content').style.display = 'block';
    document.getElementById('clothes-content').style.display = 'none';
    document.getElementById('accesory-content').style.display = 'none';
    document.getElementById('contact-content').style.display = 'none';
});

document.getElementById('clothes-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('home-content').style.display = 'none';
    document.getElementById('clothes-content').style.display = 'block';
    document.getElementById('accesory-content').style.display = 'none';
    document.getElementById('contact-content').style.display = 'none';
});

document.getElementById('accesory-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('home-content').style.display = 'none';
    document.getElementById('clothes-content').style.display = 'none';
    document.getElementById('accesory-content').style.display = 'block';
    document.getElementById('contact-content').style.display = 'none';
});

document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('home-content').style.display = 'none';
    document.getElementById('clothes-content').style.display = 'none';
    document.getElementById('accesory-content').style.display = 'none';
    document.getElementById('contact-content').style.display = 'block';
});
