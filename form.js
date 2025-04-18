document.getElementById("animal-form").addEventListener("submit", function(e) {
    e.preventDefault(); // empêche l'envoi classique du formulaire

    const avezVous = document.getElementById("avezVous").value.trim().toLowerCase();
    const combien = parseInt(document.getElementById("cb").value);
    const nom = document.getElementById("noms").value.trim().toLowerCase();
    const espece = document.getElementById("espece").value.trim().toLowerCase();

    const resultDiv = document.getElementById("resultat");

    const nomsOfficiels = [
        "niet, lulu",
        "lulu, niet",
        "niet, petit lulu",
        "petit lulu, niet"
    ];

    if (avezVous === "non") {
        resultDiv.textContent = "Vous n'avez pas d'animaux!";
    } else if (combien === 1) {
        resultDiv.textContent = "Vous êtes sûr d'avoir un seul animal?";
    } else if (combien !== 2) {
        resultDiv.textContent = "Vous avez trop d'animaux! Le plan gratuit ne permet que de digitaliser 2 animaux!";
    } else if (!nomsOfficiels.includes(nom)) {
        resultDiv.textContent = "Vous devez utiliser le nom officiel de vos animaux!";
    } else if (espece !== "chat") {
        resultDiv.textContent = "Pour l'instant, seuls les chats peuvent être digitalisés!";
    } else {
        resultDiv.textContent = "Formulaire validé avec succès ! Vos chats vont être digitalisés 🐱✨";
    }
});
