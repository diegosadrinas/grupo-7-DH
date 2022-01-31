-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: sprint_db
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product_cart`
--

DROP TABLE IF EXISTS `product_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_cart` (
  `product_cart_id` int NOT NULL,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  KEY `product_id_idx` (`product_id`),
  KEY `users_id_idx` (`user_id`),
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `users_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_cart`
--

LOCK TABLES `product_cart` WRITE;
/*!40000 ALTER TABLE `product_cart` DISABLE KEYS */;
INSERT INTO `product_cart` VALUES (1,4,5),(2,1,5),(4,4,3),(1,4,5),(2,1,5),(4,4,3),(6,2,9),(7,2,8);
/*!40000 ALTER TABLE `product_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `description` char(250) NOT NULL,
  `img_url` varchar(100) NOT NULL,
  `category` varchar(30) NOT NULL,
  `color` varchar(30) NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Laptop Stand','Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.','laptop_riser.jpeg','2','Negro',701),(2,'Wood Monitor Stand','Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.','screen_stand.jpeg','2','Blanco',910),(3,'Wood iPad Stand','Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.','tablet_stand.jpg','1','Negro',586),(4,'Wood Laptop Stand','Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.','woodLaptopStand.jpeg','4','Blanco',785),(5,'Mple Keyboard Stand','Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.','keyboard_tray.jpeg','4','Negro',448),(6,'Maple Ipad Stand','Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.','trackpad_tray.jpeg','4','Blanco',771),(7,'Desk Shelf','Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.','desk_pad.jpeg','4','Negro',836),(8,'Wood Headphone Stand','Duis aliquam convallis nunc.','headphones_stand.webp','3','Blanco',986),(9,'Leather Desk Pad','Fusce consequat. Nulla nisl. Nunc nisl.','desktop_pad.jpeg','4','Negro',887),(12,'Maple Ipad Stand','eoifoisfosifosids','trackpad_tray.jpeg','Escritorio','Negro',234),(15,'Leather Desk Pad','lsdklsdklskdsldk','desktop_pad.jpeg','Accesorios','Negro',3459),(16,'Wood Headphone Stand','asdasd','headphones_stand.webp','Escritorio','Negro',12345);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL,
  `is_admin` tinyint NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Kassi','Settle','ksettle0@taobao.com','6USnx4lY',1),(2,'Susie','Alexandersen','salexandersen1@arstechnica.com','QaHShaUQx',0),(3,'Huey','Wintour','hwintour2@state.tx.us','mgE9jzz',1),(4,'Ashton','Dunderdale','adunderdale3@economist.com','7vzy1lJSyK18',0),(5,'Constancy','Simko','csimko4@businessinsider.com','1xNFIgmL',0),(6,'Robert','Markwell','rmarkwell5@domainmarket.com','9Yz8NCtr',1),(7,'Gregoire','Rutigliano','grutigliano6@bloglovin.com','NWUGVayaa',1),(8,'Roby','Boydon','rboydon7@rediff.com','EZgIs3UIr6aF',1),(9,'Martynne','Tourry','mtourry8@netlog.com','yfoyENy',0),(10,'Ave','Dwelling','adwelling9@51.la','5gbYFhO',0),(11,'Diego','Uno','dsadr@meisid.com','$2b$10$guBZOKgi9W2scIkqG9Z/RuAvNimsah2zM7LIq/xL2aCh51FCyN3fO',0),(12,'sadrinas','sakjkjfkj','diegouno@hotmail.com','$2b$10$P75u3aBpM1xprIdbHJXwweGtXKqR7uNbVq23KC8KMciUlhmItjvWe',0),(13,'Diego','Sadrinas','sadrinas@sadrinas.com','$2b$10$1u62SyhSZKG/GJCWl7hpWe01hyBtZ2LXceXSGQTT2ld6L80VItjsO',1),(14,'Admin','Woodstack','admin@woodstack.com','$2b$10$Oz8YQ.cqC5iE9uH1lXUZVOfKYQGojIEZsKb/B47w8TJwGXEtha/5S',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-28 12:33:14
