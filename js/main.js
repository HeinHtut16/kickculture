document.addEventListener("DOMContentLoaded", () => {
    const bidButton = document.querySelector(".bid-button");
    fetch("/components/nav.html")
        .then(response => response.text())
        .then(data => document.getElementById("nav-placeholder").innerHTML = data);

    fetch("/components/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-placeholder").innerHTML = data);

    // let index = 0;
    // const slides = document.querySelectorAll(".slide");
    // function showSlide(n) {
    //     if (n >= slides.length) index = 0;
    //     else if (n < 0) index = slides.length - 1;
    //     else index = n;
    //     document.querySelector(".slider").style.transform = `translateX(${-index * 100}%)`;
    // }
    // function nextSlide() { showSlide(index + 1); }
    // function prevSlide() { showSlide(index - 1); }
    // setInterval(nextSlide, 5000);

    bidButton.addEventListener("click", () => {
        alert("Order is Complete!");
    });

    

});