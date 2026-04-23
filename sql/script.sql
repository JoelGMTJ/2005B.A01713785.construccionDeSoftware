-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 24, 2026 at 12:55 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `f1moments`
--
CREATE DATABASE IF NOT EXISTS `f1moments` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish2_ci;
USE `f1moments`;

-- --------------------------------------------------------

--
-- Table structure for table `drivers`
--

DROP TABLE IF EXISTS `drivers`;
CREATE TABLE IF NOT EXISTS `drivers` (
  `driver_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `color` varchar(7) DEFAULT NULL,
  PRIMARY KEY (`driver_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Table structure for table `driver_moment`
--

DROP TABLE IF EXISTS `driver_moment`;
CREATE TABLE IF NOT EXISTS `driver_moment` (
  `driver_id` int(11) NOT NULL,
  `momentoId` int(11) NOT NULL,
  PRIMARY KEY (`driver_id`,`momentoId`),
  KEY `fk_dm_moment` (`momentoId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

DROP TABLE IF EXISTS `logs`;
CREATE TABLE IF NOT EXISTS `logs` (
  `logId` int(11) NOT NULL AUTO_INCREMENT,
  `operation` varchar(20) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `moment` int(11) NOT NULL,
  PRIMARY KEY (`logId`),
  KEY `fk_logs_momentos` (`moment`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Table structure for table `momentos`
--

DROP TABLE IF EXISTS `momentos`;
CREATE TABLE IF NOT EXISTS `momentos` (
  `momentoId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `season` year(4) NOT NULL,
  `location` varchar(50) NOT NULL,
  `videoLink` varchar(500) NOT NULL,
  `image` varchar(500) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`momentoId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Triggers `momentos`
--
DROP TRIGGER IF EXISTS `registerOperation`;
DELIMITER $$
CREATE TRIGGER `registerOperation` AFTER INSERT ON `momentos` FOR EACH ROW INSERT INTO logs (`operation`, `moment`)
VALUES ('Created', new.momentoId)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `posee`
--

DROP TABLE IF EXISTS `posee`;
CREATE TABLE IF NOT EXISTS `posee` (
  `rol_id` int(11) NOT NULL,
  `priv_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`rol_id`,`priv_id`),
  KEY `priv_id` (`priv_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Table structure for table `privilegios`
--

DROP TABLE IF EXISTS `privilegios`;
CREATE TABLE IF NOT EXISTS `privilegios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_privilegio` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_privilegio` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tiene`
--

DROP TABLE IF EXISTS `tiene`;
CREATE TABLE IF NOT EXISTS `tiene` (
  `user_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `id_rol` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`user_id`,`id_rol`),
  KEY `id_rol` (`id_rol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `username` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `driver_moment`
--
ALTER TABLE `driver_moment`
  ADD CONSTRAINT `fk_dm_driver` FOREIGN KEY (`driver_id`) REFERENCES `drivers` (`driver_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_dm_moment` FOREIGN KEY (`momentoId`) REFERENCES `momentos` (`momentoId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `logs`
--
ALTER TABLE `logs`
  ADD CONSTRAINT `fk_logs_momentos` FOREIGN KEY (`moment`) REFERENCES `momentos` (`momentoId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `posee`
--
ALTER TABLE `posee`
  ADD CONSTRAINT `posee_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `posee_ibfk_2` FOREIGN KEY (`priv_id`) REFERENCES `privilegios` (`id`);

--
-- Constraints for table `tiene`
--
ALTER TABLE `tiene`
  ADD CONSTRAINT `fk_tiene_usuarios` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`username`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tiene_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`);
