# Enoncé

Un call center emploie plusieurs agents qui traitent les demandes téléphoniques des clients. Afin de permettre un suivi du traitement des appels, chaque agent saisit certaines informations pour qualifier l'appel. L'agent doit également avoir la possibilité de voir les informations des anciens appels du clients.

# Fonctionnalités de l’application

##1. Connexion à l’application : 
L'agent se connecte sur l'application en saisissant un login et mot de passe.

##2. Affichage d'une fiche client : 
A la réception d'un appel, l'agent saisit le numéro de téléphone du client (qui sert d’identifiant) puis valide. Si le numéro existe déjà en base, un formulaire prérempli s'affiche avec les informations du client. Si le numéro n'existe pas en base, un formulaire vierge s'affiche.

Informations du formulaire :

● Nom : Alphanumérique

● Prénom : Alphanumérique

● Mail : Alphanumérique

● Téléphone : Alphanumérique

● Type de demande : Liste déroulante (Achat, Devis, Après-Vente, Réclamation)

● Demande : Alphanumérique (Champs libre)

##3. Mise à jour des informations clients

L'agent met à jour les informations du clients en remplissant le formulaire en validant à la fin de la communication.

# Instructions

1. Assurez-vous que vous avez installés
	- [node.js](http://nodejs.org/)
	- [git](http://git-scm.com/)
2. Clone ce dépôt dans votre machine locale `> git clone https://github.com/zakuks/ExerciceNodeJS.git`
3. CD au dossier `cd ExerciceNodeJS`
4. Exécuter `> npm install` Pour installer les dépendances du projet
5. Exécuter `> npm start` Pour démarrer l'automatisation
