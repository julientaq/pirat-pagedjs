# Contenu complet de la revue pour le gh003 - pirat*

Chose à faire:

- intégrer tous les contenus à leur emplacement dans un html propre.
- vérifier la grille typo d’un chapitre en termes de taille de corps, longueur de lignes, etc. avant de faire des ajustements par partie.
- rajouter les drapeaux/pavillons.
- ajouter les spans pour les endroits ou les p sont modifiés.

## pour rajouter des css

le fichier styles.css importe tous les fichiers css dans l’ordre. Par exemple pour le chapitre eco-pirat* 1-d, j’ai rajouté un fichier css dans le dossier chapters et je l’ai importé dans mon styles.css avec `@import "chapters/eco1d.css";`. Il suffira de faire de meme pour chaque chapitre.

Pour éviter de modifier les css des camarades :muscle:, il faudra faire attention à bien nommer les css:

`#eco-1-d {
    color: red;
}`

la couleur rouge ne sera appliquée qu’aux éléments enfants du chapitre qui a un ID `eco-1-d`.

pour modifier les titres 1 de ce chapitre, il suffit de prefixer dans le css le h1 comme ceci: 

`#eco-1-d h1 {
    color: orange;
}`