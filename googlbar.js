// Fonction pour effectuer la recherche Google
function searchGoogle() {
    const searchText = document.getElementById("searchInput").value;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`;
    window.location.href = googleSearchUrl;
}

// Ajouter un événement "click" au bouton de recherche pour appeler la fonction de recherche Google
document.getElementById("searchButton").addEventListener("click", searchGoogle);