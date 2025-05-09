
// API Github pour mise en ligne du CV sur Github Pages

// **ATTENTION : Je n'ai pas écrit ce script ! Ceci est un copier-coller d'un script donné par un formateur lors d'un exercice** 
// Cependant, je tiens à dire que je comprends ce qu'il fait (dans l'ensemble)

// Sélectionner les éléments HTML pour afficher le profil et les dépôts
const profileDiv = document.getElementById("profile");
const reposDiv = document.getElementById("repos-gh");
const display = document.querySelector("#display")

// Fonction pour récupérer et afficher les données du profil GitHub
// async function fetchGitHubProfile(username) {
//     try {
//         const response = await fetch(`https://api.github.com/users/${username}`);
//         if (!response.ok) {
//             throw new Error(`GitHub user not found: ${response.statusText}`);
//         }
//         const data = await response.json();

//         // Construire le contenu HTML à partir des données du profil
//         const profileHTML = `
//             <img src="${data.avatar_url}" alt="${data.login}'s avatar" style="width: 150px; border-radius: 50%; margin-bottom: 10px;">
//             <h2>${data.name || data.login}</h2>
//             <p>${data.bio || "No bio available."}</p>
//             <p>Public Repositories: ${data.public_repos}</p>
//             <a href="${data.html_url}" target="_blank" style="text-decoration: none; color: blue;">View GitHub Profile</a>
//         `;

//         // Insérer le contenu dans la div
//         profileDiv.innerHTML = profileHTML;
//     } catch (error) {
//         profileDiv.innerHTML = `<p>Error: ${error.message}</p>`;
//     }

// }

// Fonction pour récupérer et afficher les dépôts publics GitHub
async function fetchGitHubRepos(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
            throw new Error(`GitHub repos not found: ${response.statusText}`);
        }
        const repos = await response.json();

        // Construire le contenu HTML pour chaque dépôt
        const reposHTML = repos
            .map(repo => `
                <div style="margin-bottom: 15px; border: 1px solid #ddd; padding: 10px; border-radius: 5px;">
                    <h3 style="margin: 0;"><a href="${repo.html_url}" target="_blank" style="text-decoration: none; color: blue;">${repo.name}</a></h3>
                    <p style="margin: 5px 0;">${repo.description || "No description available."}</p>
                    <p style="font-size: 12px; color: #555;">Last updated: ${new Date(repo.updated_at).toLocaleDateString()}</p>
                </div>
            `)
            .join("");

        // Insérer le contenu dans la div
        reposDiv.innerHTML = reposHTML;
    } catch (error) {
        reposDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Fonction pour afficher les dépots au clique

display.addEventListener("click", async () => {
    display.textContent = /*"Loading..."*/ "Mes repos GitHub";
    await fetchGitHubRepos(username);
    // je veux faire disparait le bouton après avoir cliqué dessus
    //display.style.display = "none";
});


// Appeler les fonctions avec votre nom d'utilisateur GitHub
const username = "GeolineDENISSE"; // Remplacez par votre nom d'utilisateur GitHub
fetchGitHubProfile(username);




