# Le projet

Ce projet est une application permettant de gérer son magasin en ligne, gérer la préparation de commandes et leur retrait par les clients.
Cette application a été réalisé avec le framework ember js accompagné de semantic ui pour le front. 
Elle fonctionne avec l'API vendor afin d'interagir avec une base de données. L'application est composée de plusieurs éléments d'ember js comme les routes (écrites en javascript), les modèles (javascript aussi), et les templates (faits en HTML). 

# Ember JS et Semantic UI
* Ember js est un framework Javascript open-source basé sur l'architecture MVC.
* Semantic UI est un framework front-end qui permet de créer des pages Web esthétiques et responsive. Il a un design élégant et subtil qui offre une expérience utilisateur agréable.

# Le fonctionnement

Pour utiliser l'application, il faut d'abord s'y connecter. On accède ensuite au tableau de bord de l'utilisateur, qui répertorie ses commandes en attente.
On peut ensuite se déconnecter ou aller sur la gestion du store afin de visualiser les différentes sections du magasin. La page de gestion du store page permet aussi de créer, modfifier ou supprimer une section. 

Si l'on souhaite modifier une section, on arrive alors sur une nouvelle page pour pouvoir voir les produits qui se trouvent dans la section sélectionnée et éventuellement pour ajouter ou supprimer des produits pour cette section.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd tds`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
