<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Panier - PAT Empire</title>
  <link rel="stylesheet" href="style.css">
  <script src="panier.js" defer></script>
</head>
<body onload="afficherPanier('panier-contenu')">
  <header>
    <h1>Votre Panier</h1>
  </header>
  <nav>
    <a href="index.html">Accueil</a>
    <a href="boutique.html">Boutique</a>
    <a href="a-propos.html">À propos</a>
    <a href="contact.html">Contact</a>
    <a href="#">Panier</a>
    <a href="connexion.html">Connexion</a>
    <a href="faq.html">FAQ</a>
    <a href="astuces.html">Tips & Idées</a>
  </nav>
  <section class="container">
    <h2>Articles dans votre panier</h2>
    <div id="panier-contenu"></div>
    <br>
    <button class="btn-commande" onclick="viderPanier()">Vider le panier</button>
  </section>
  <footer>
    <p>&copy; 2025 PAT Empire. Tous droits réservés.</p>
  </footer>
</body>
</html>
