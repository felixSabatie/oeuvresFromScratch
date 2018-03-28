-- phpMyAdmin SQL Dump
-- version 4.6.5.1
-- https://www.phpmyadmin.net/
--
-- Client :  db
-- Généré le :  Mer 28 Mars 2018 à 14:38
-- Version du serveur :  5.7.16
-- Version de PHP :  5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `oeuvres`
--

-- --------------------------------------------------------

--
-- Structure de la table `adherent`
--

CREATE TABLE `adherent` (
  `id_adherent` int(10) UNSIGNED NOT NULL,
  `nom_adherent` varchar(100) NOT NULL,
  `prenom_adherent` varchar(100) DEFAULT NULL,
  `ville_adherent` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `adherent`
--

INSERT INTO `adherent` (`id_adherent`, `nom_adherent`, `prenom_adherent`, `ville_adherent`) VALUES
(1, 'LESSERTISSEUR', 'Christelle', 'Lyon'),
(2, 'MARTIN', 'Laurent', 'Lyon'),
(3, 'DUPONT', 'Didier', 'Lyon'),
(4, 'DURANT', 'Michel', 'Givors'),
(5, 'CHOPIN', 'Daniel', 'Villefranche'),
(6, 'MOZART', 'Albert', 'Craponne'),
(7, 'FRUCCI', 'Fraise', 'Craponne'),
(8, 'BRUN', 'Pierre', 'Lyon'),
(9, 'Blanc', 'Serge', 'Oullins');

-- --------------------------------------------------------

--
-- Structure de la table `oeuvrevente`
--

CREATE TABLE `oeuvrevente` (
  `id_oeuvrevente` int(10) UNSIGNED NOT NULL,
  `titre_oeuvrevente` varchar(200) NOT NULL,
  `etat_oeuvrevente` varchar(1) NOT NULL,
  `prix_oeuvrevente` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `oeuvrevente`
--

INSERT INTO `oeuvrevente` (`id_oeuvrevente`, `titre_oeuvrevente`, `etat_oeuvrevente`, `prix_oeuvrevente`) VALUES
(10000, 'lala', 'L', 12),
(10001, 'Ete', 'R', 400),
(10002, 'Automne', 'L', 10),
(10003, 'Crepuscule', 'R', 111),
(10004, 'Hiver', 'R', 234),
(10005, 'Aurore', 'L', 654),
(10006, 'Nuit de printemps', 'L', 789),
(10007, 'nouvelle Oeuvre 2', 'L', 12);

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

CREATE TABLE `reservation` (
  `id_oeuvrevente` int(10) UNSIGNED NOT NULL,
  `id_adherent` int(10) UNSIGNED NOT NULL,
  `date_reservation` date NOT NULL,
  `statut` varchar(20) NOT NULL,
  `id_reservation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `reservation`
--

INSERT INTO `reservation` (`id_oeuvrevente`, `id_adherent`, `date_reservation`, `statut`, `id_reservation`) VALUES
(10003, 3, '2013-02-22', 'confirmee', 1),
(10004, 7, '2013-02-22', 'confirmee', 2);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `adherent`
--
ALTER TABLE `adherent`
  ADD PRIMARY KEY (`id_adherent`);

--
-- Index pour la table `oeuvrevente`
--
ALTER TABLE `oeuvrevente`
  ADD PRIMARY KEY (`id_oeuvrevente`);

--
-- Index pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id_reservation`),
  ADD UNIQUE KEY `id_oeuvrevente` (`id_oeuvrevente`,`id_adherent`),
  ADD KEY `id_adherent` (`id_adherent`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `adherent`
--
ALTER TABLE `adherent`
  MODIFY `id_adherent` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `oeuvrevente`
--
ALTER TABLE `oeuvrevente`
  MODIFY `id_oeuvrevente` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10008;
--
-- AUTO_INCREMENT pour la table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id_reservation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `fk_id_adherent` FOREIGN KEY (`id_adherent`) REFERENCES `adherent` (`id_adherent`),
  ADD CONSTRAINT `fk_id_oeuvre_vente` FOREIGN KEY (`id_oeuvrevente`) REFERENCES `oeuvrevente` (`id_oeuvrevente`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
