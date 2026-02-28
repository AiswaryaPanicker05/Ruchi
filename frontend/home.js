// Profile info from localStorage
document.getElementById("showUsername").innerText = localStorage.getItem("username") || "User";
document.getElementById("showEmail").innerText = localStorage.getItem("email") || "email@example.com";

function openProfile() {
    document.getElementById("profilePanel").classList.add("active");
}

function closeProfile() {
    document.getElementById("profilePanel").classList.remove("active");
}
