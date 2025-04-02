document.addEventListener("DOMContentLoaded", () => {
    const bidButton = document.querySelector(".bid-button");
    fetch("/components/nav.html")
        .then(response => response.text())
        .then(data => document.getElementById("nav-placeholder").innerHTML = data);

    fetch("/components/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-placeholder").innerHTML = data);

    bidButton.addEventListener("click", () => {
        alert("Order is Complete!");
    });
});