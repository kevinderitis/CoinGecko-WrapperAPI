module.exports = {
    DATABASE: 'coingecko-wrapper',
    USER_DB: 'root',
    PASS_DB: 'sqlsys',
    HOST_DB: 'localhost',


INVALID_USER: {
    "rc": 1,
    "msg": 'Invalid user or password'
},
INVALID_TOKEN: {
    "rc": 2,
    "msg": 'Invalid token'
},
DB_CONN_ERROR: {
    "rc": 3,
    "msg": 'Database connection error'
},
API_CONN_ERROR: {
    "rc": 4,
    "msg": 'API connection error'
},
EXIST_USER: {
    "rc": 5,
    "msg": 'Existing user'
},
NO_COINS: {
    "rc": 6,
    "msg": 'No coins saved'
},
EXIST_CURRENCY: {
    "rc": 7,
    "msg": 'Existing currency for that user'
},


SCRIPT_MYSQL: {
// -- --------------------------------------------------------
// -- Host:                         127.0.0.1
// -- Versión del servidor:         5.1.73-community - MySQL Community Server (GPL)
// -- SO del servidor:              Win32
// -- HeidiSQL Versión:             9.5.0.5196
// -- --------------------------------------------------------

// /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
// /*!40101 SET NAMES utf8 */;
// /*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
// /*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


// -- Volcando estructura de base de datos para coingecko-wrapper
// CREATE DATABASE IF NOT EXISTS `coingecko-wrapper` /*!40100 DEFAULT CHARACTER SET utf8 */;
// USE `coingecko-wrapper`;

// -- Volcando estructura para tabla coingecko-wrapper.coins
// CREATE TABLE IF NOT EXISTS `coins` (
//   `id` int(11) NOT NULL DEFAULT '0',
//   `symbol` int(11) DEFAULT NULL,
//   `priceAR` float DEFAULT NULL,
//   `priceUSD` float DEFAULT NULL,
//   `priceEUR` float DEFAULT NULL,
//   `name` varchar(255) DEFAULT NULL,
//   `image` varchar(255) DEFAULT NULL,
//   `createdAt` datetime NOT NULL,
//   `updatedAt` datetime NOT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// -- Volcando datos para la tabla coingecko-wrapper.coins: ~0 rows (aproximadamente)
// /*!40000 ALTER TABLE `coins` DISABLE KEYS */;
// /*!40000 ALTER TABLE `coins` ENABLE KEYS */;

// -- Volcando estructura para tabla coingecko-wrapper.coinusers
// CREATE TABLE IF NOT EXISTS `coinusers` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `iduser` int(11) DEFAULT NULL,
//   `idcoin` varchar(255) DEFAULT NULL,
//   `createdAt` datetime NOT NULL,
//   `updatedAt` datetime NOT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

// -- Volcando datos para la tabla coingecko-wrapper.coinusers: ~1 rows (aproximadamente)
// /*!40000 ALTER TABLE `coinusers` DISABLE KEYS */;
// INSERT INTO `coinusers` (`id`, `iduser`, `idcoin`, `createdAt`, `updatedAt`) VALUES
// 	(1, 1, 'usd', '2020-11-05 18:22:19', '2020-11-05 18:22:19');
// /*!40000 ALTER TABLE `coinusers` ENABLE KEYS */;

// -- Volcando estructura para tabla coingecko-wrapper.users
// CREATE TABLE IF NOT EXISTS `users` (
//   `id` int(11) NOT NULL DEFAULT '0',
//   `name` varchar(255) DEFAULT NULL,
//   `lastname` varchar(255) DEFAULT NULL,
//   `username` varchar(255) DEFAULT NULL,
//   `password` varchar(255) DEFAULT NULL,
//   `favcoin` varchar(255) DEFAULT NULL,
//   `createdAt` datetime NOT NULL,
//   `updatedAt` datetime NOT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// -- Volcando datos para la tabla coingecko-wrapper.users: ~1 rows (aproximadamente)
// /*!40000 ALTER TABLE `users` DISABLE KEYS */;
// INSERT INTO `users` (`id`, `name`, `lastname`, `username`, `password`, `favcoin`, `createdAt`, `updatedAt`) VALUES
// 	(1, 'admin', 'admin', 'kevinderitis', 'admin', 'usd', '2020-11-05 18:20:39', '2020-11-05 18:20:39');
// /*!40000 ALTER TABLE `users` ENABLE KEYS */;

// /*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
// /*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
// /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;






}


}


