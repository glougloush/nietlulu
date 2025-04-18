document.getElementById("animal-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const avezVous = document.querySelector('input[name="avezVous"]:checked');
    const combien = parseInt(document.getElementById("cb").value);
    const noms = document.getElementById("noms").value.trim().toLowerCase();
    const espece = document.getElementById("espece").value.trim().toLowerCase();
    const resultDiv = document.getElementById("resultat");

    if (!avezVous) {
        resultDiv.textContent = "Veuillez répondre à la question : possédez-vous un animal ?";
        return;
    }

    const reponse = avezVous.value;

    const nomsOfficiels = [
        "niet, lulu",
        "lulu, niet",
        "niet, petit lulu",
        "petit lulu, niet"
    ];

    if (reponse === "non") {
        resultDiv.textContent = "Vous n'avez pas d'animaux!";
    } else if (!combien || isNaN(combien)) {
        resultDiv.textContent = "Indiquez combien d'animaux vous avez.";
    } else if (combien === 1) {
        resultDiv.textContent = "Vous êtes sûr d'avoir un seul animal?";
    } else if (combien !== 2) {
        resultDiv.textContent = "Vous avez trop d'animaux! Le plan gratuit ne permet que de digitaliser 2 animaux!";
    } else if (!nomsOfficiels.includes(noms)) {
        resultDiv.textContent = "Vous devez utiliser le nom officiel de vos animaux!";
    } else if (espece !== "chat") {
        resultDiv.textContent = "Pour l'instant, seuls les chats peuvent être digitalisés!";
    } else {
        resultDiv.textContent = "Formulaire validé! Redirection en cours...";
        setTimeout(() => {
            window.location.href = "https://glougloush.github.io/jeuDeNietEtLulu/";
        }, 2000);
    }
});
