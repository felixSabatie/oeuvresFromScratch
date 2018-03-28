Projet oeuvres

REGNARD Mathieu, SABATIE Félix, MARCHAND Simon

Nous avons changé la base de données, veuillez importer le script oeuvres.sql. 


La vue à été réalisée avec Angular 2. 
Les sources du projet Angular ce situe dans le dossier oeuvres-front/
Les sources Java (Spring boot) se situe dans le dossier src/

Le projet se lance avec une configuration classique de Spring (Si soucis de configuration, n'hésitez pas à nous contacter)
Les sources Angular sont recompilées en JavaScript et sont importées dans le dossier src/main/resources/static/
Aucune configuration particulière n'est requise pour Angular.

Si nécéssaire, le projet Angular peut être lancé depuis oeuvres-front/
via la commande 'npm run start'. Cela lancera le projet sur 'localhost:4200'.
Pour cela, les dépendences de npm et Node sont requise.
Si jamais dans la configuration Spring, le port (ou url) du server est changé, il faudra alors changer le fichier
oeuvres-front/proxy.config.json.

Liste des fonctionalités : 


- Utilisation de Spring boot
- Utilisation des EntityRepository
- Dévellopement d'une API RESTful
- Ajout/Modification/Suppression/Liste des Adhérents
- Ajout/Modification/Suppression/Liste des Oeuvres
- Réservation des oeuvres (avec modification de l'état de l'oeuvre en conséquent)
- Validation de formulaire avec Angular ce qui permet de prévenir l'utilisateur lorsqu'une erreur est présente
- dans les champs. 
- Auto-refresh des données grâce au databinding d'Angular.
- Application en une seule page (pas de rafraîchissement lorsque l'on navigue dans les différents éléments).
- Intégration de template de CSS minimaliste (Bulma.css)
- Utilisation de SASS pour templater le CSS. 
