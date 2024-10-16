<script>const managers = document.querySelectorAll('.manager');
const boxes = document.querySelectorAll('.box');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');

// Événement click pour chaque manager
managers.forEach(manager => {
    manager.addEventListener('click', (e) => {
        const target = e.target.getAttribute('data-anim'); // Utiliser e.target
        const bass=document.querySelector('.managers')
        bass.style.top='6em';
        // Récupérer le contenu correspondant à l'élément cliqué
        const contenuCorrespondant = document.querySelector(`.box[data-anim="${target}"]`);

        // Vérifier si le contenu correspondant existe
        if (contenuCorrespondant) {
            // Récupérer tout le contenu de la box
            const contenuBox = contenuCorrespondant.innerHTML;

            // Mettre à jour le contenu du conteneur
            contenantChoixUtilisateur.innerHTML = contenuBox;
        } else {
            // Gestion des erreurs ou contenu par défaut
            contenantChoixUtilisateur.innerHTML = "<p>Aucun contenu disponible.</p>";
        }
        contenantChoixUtilisateur.style.padding = '3em';
        contenantChoixUtilisateur.style.backgroundColor = '#6c757d'; // couleur de fond
        contenantChoixUtilisateur.style.border = '1px solid #ccc'; // bordure
        contenantChoixUtilisateur.style.borderRadius = '8px'; // coins arrondis
        contenantChoixUtilisateur.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)'; // ombre
        contenantChoixUtilisateur.style.marginTop = '10px'; // espacement
        contenantChoixUtilisateur.style.display= 'flex';
        contenantChoixUtilisateur.style.flexDirection= 'row-reverse';
        contenantChoixUtilisateur.style.width='50em';
        contenantChoixUtilisateur.style.gap='5em';
        contenantChoixUtilisateur.style.textAlign='justify';
        contenantChoixUtilisateur.style.paddingLeft='5em';
        contenantChoixUtilisateur.style.marginTop = '6em';
        contenantChoixUtilisateur.style.zIndex='99'

        const image = contenantChoixUtilisateur.querySelector('img');
        if (image) {
            image.style.width = '168px'; // Bordure bleue
            image.style.height = '168px';
            image.style.borderRadius = '50%'; // Coins arrondis de l'image
        }
        const text = contenantChoixUtilisateur.querySelector('.text');
        if (text) {
            text.style.marginTop = 'auto'; // Bordure bleue
            text.style.marginBottom = 'auto'; 
            text.style.alignItem = 'center';
            text.style.color='#fff'
            text.style.borderRadius = '50%'; // Coins arrondis de l'image
        }
    });
});</script>