SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
CREATE DATABASE IF NOT EXISTS `f1moments` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish2_ci;
USE `f1moments`;

DROP TABLE IF EXISTS `logs`;
CREATE TABLE IF NOT EXISTS `logs` (
  `logId` int(11) NOT NULL AUTO_INCREMENT,
  `operation` varchar(20) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `moment` int(11) NOT NULL,
  PRIMARY KEY (`logId`),
  KEY `fk_logs_momentos` (`moment`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO `logs` (`logId`, `operation`, `timestamp`, `moment`) VALUES
(1, 'Created', '2026-04-19 22:18:20', 17);

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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO `momentos` (`momentoId`, `name`, `season`, `location`, `videoLink`, `image`, `createdAt`) VALUES
(1, 'Hulkenberg first podium', '2025', 'Silverstone', 'https://youtu.be/daWr9xnkKS4?t=430', 'https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/b94e/live/9dea8bf0-5a90-11f0-9f6f-9b31b462c89f.jpg', '2026-03-07'),
(2, 'Verstappen Brazil P17 to win', '2024', 'Sao Paolo', 'https://youtu.be/gbxJT-yBdcs?t=363', 'https://media.formula1.com/image/upload/t_16by9Centre/c_lfill,w_3392/q_auto/v1740000000/trackside-images/2024/F1_Grand_Prix_of_Brazil_and_Qualifying/2182695804.webp', '2026-03-07'),
(3, 'Leclerc crashout', '2025', 'Hungary', 'https://youtu.be/hrPtK5D5yn4?t=337', 'https://i.redd.it/9p5k8ugl07l31.jpg', '2026-03-07'),
(4, 'Antonelli crashes leclerc', '2025', 'Zandvoort', 'https://youtu.be/JIRqdeNl2cU?t=312', 'https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2025/08/31182249/charles-leclerc-kimi-antonelli-ferrari-mercedes-crash-zandvoort-2025-planetf1.jpg', '2026-03-07'),
(5, 'Vettel crashes into Webber', '2010', 'Turkey', 'https://youtu.be/tHb1y9TJMV4', 'https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/ac18b103-a547-494d-bd7a-f4655d3b3296/35c592a2-3448-4735-b10b-89dfc5f33aaf/864x486/match/image.jpg', '2026-03-07'),
(6, 'Verstappen wins 2021 championship', '2021', 'Abu Dhabi', 'https://youtu.be/7QJ-N-AQJYc?t=350', 'https://i.redd.it/thjnkunuh2141.jpg', '2026-03-07'),
(7, 'McLaren disasterclass', '2025', 'Quatar', 'https://youtu.be/BeaVJggQ2dc?t=192', 'https://media.formula1.com/image/upload/c_lfill,w_2048/q_auto/v1740000000/fom-website/2025/Qatar/GENERAL%20CROP%20-%202025-11-30T191739.010.webp', '2026-03-07'),
(8, 'Baku drift', '2024', 'Baku', 'https://youtu.be/7ynDOY1PR74?t=317', 'https://www.thedrive.com/wp-content/uploads/2024/09/Screenshot-2024-09-16-at-10.20.32%E2%80%AFAM.jpeg?quality=85', '2026-03-09'),
(9, 'Mexican spanish war (2024)', '2024', 'Baku', 'https://youtu.be/7ynDOY1PR74?t=347', 'https://e0.365dm.com/24/09/1600x900/skysports-carlos-sainz-f1-sergio_6686525.jpg?20240915153642', '2026-03-09'),
(10, 'Verstappen tire pops', '2021', 'Baku', 'https://youtu.be/suZHkUxPzjE?t=271', 'https://motorsportmagazine.b-cdn.net/wp-content/uploads/2021/06/Verstappen-kick.jpg', '2026-03-09'),
(11, 'Hamilton fucking kills Verstappen', '2021', 'Silverstone', 'https://youtu.be/FRt8hXFb0Vg?t=36', 'https://media.cnn.com/api/v1/images/stellar/prod/210718101957-01-british-grand-prix-07-18-2021.jpg?q=w_3004,h_2003,x_0,y_0,c_fill', '2026-03-09'),
(12, 'Verstappen crashout', '2024', 'Hungaroring', 'https://youtu.be/YJ0NYHONwts?t=283', 'https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/51387ba6-fb0e-4b55-862f-732a92eaac60/2735de7a-4036-4697-a5f8-61eaf889be8a/864x486/match/image.jpg', '2026-03-09'),
(13, 'Box now box', '2022', 'Monaco', 'https://youtu.be/3Yo2ynH5WUQ', 'https://inews.co.uk/wp-content/uploads/2022/05/SEI_107029607.jpg', '2026-03-09'),
(14, 'Leclerc crashes', '2022', 'France', 'https://youtu.be/5nfvePtguec', 'https://pbs.twimg.com/media/FYb3idfXEAIq5w7?format=jpg&name=large', '2026-03-09'),
(15, 'Tifosi win', '2024', 'Monza', 'https://youtu.be/lkDDFVjj-4c?t=1103', 'https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/19e7cb06-0291-41ec-89e5-4af35c904b8f/0023f185-7069-48fd-8c9d-c7ab701c8ba0/864x486/match/image.jpg', '2026-03-11'),
(16, 'Vettel first championship', '2010', 'Abu Dhabi', 'https://youtu.be/OscqgBj1HCw?t=499', '30-vettel first wdc.jpg', '2026-03-23'),
(17, 'Kimi Antonelli first win', '2026', 'China', 'https://youtu.be/t8HpVlineX4?t=425', '19-kimi win.jpg', '2026-04-19');
DROP TRIGGER IF EXISTS `registerOperation`;
DELIMITER $$
CREATE TRIGGER `registerOperation` AFTER INSERT ON `momentos` FOR EACH ROW INSERT INTO logs (`operation`, `moment`)
VALUES ('Created', new.momentoId)
$$
DELIMITER ;

DROP TABLE IF EXISTS `posee`;
CREATE TABLE IF NOT EXISTS `posee` (
  `rol_id` int(11) NOT NULL,
  `priv_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`rol_id`,`priv_id`),
  KEY `priv_id` (`priv_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO `posee` (`rol_id`, `priv_id`, `created_at`) VALUES
(1, 1, '2026-03-10 15:16:40'),
(1, 2, '2026-03-10 15:16:40'),
(2, 1, '2026-03-10 15:16:40'),
(2, 2, '2026-03-10 15:16:40'),
(3, 1, '2026-03-10 15:16:40');

DROP TABLE IF EXISTS `privilegios`;
CREATE TABLE IF NOT EXISTS `privilegios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_privilegio` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO `privilegios` (`id`, `nombre_privilegio`, `created_at`) VALUES
(1, 'ver_momentos', '2026-03-10 14:03:53'),
(2, 'agregar_momentos', '2026-03-10 14:03:53');

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_privilegio` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO `roles` (`id`, `nombre_privilegio`, `created_at`) VALUES
(1, 'owner', '2026-03-10 20:04:44'),
(2, 'admin', '2026-03-10 20:04:44'),
(3, 'visit', '2026-03-10 20:04:44');

DROP TABLE IF EXISTS `tiene`;
CREATE TABLE IF NOT EXISTS `tiene` (
  `user_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `id_rol` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`user_id`,`id_rol`),
  KEY `id_rol` (`id_rol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO `tiene` (`user_id`, `id_rol`, `created_at`) VALUES
('Kevin777', 3, '2026-03-10 21:11:08'),
('MagicTitanJ', 1, '2026-03-10 21:11:08'),
('SpideySerna', 2, '2026-03-10 21:11:08');

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `username` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

INSERT INTO `usuarios` (`username`, `name`, `password`, `created_at`) VALUES
('Kevin777', 'Kevin García', '$2b$12$.8BJT.am/ohKIb19BMJEeusEJm8JDacaSOGhRioNrnZJvaz4R8l4e', '2026-03-10 20:00:53'),
('MagicTitanJ', 'Joel García', '$2b$12$YozQUL5XA0wJo1OL5MKTSOcBrYuBKuM7t0PGZ6f51/TRc.k9.6vOi', '2026-03-10 02:13:12'),
('oompaLucca', 'Lucca', '$2b$12$1d5xLnypRLVKT.OOidaz/eKQx7zQISfZ3cgb7E.z5m7/xHu5Y/lt2', '2026-03-10 21:47:17'),
('SpideySerna', 'Esteban Serna', '$2b$12$mI5FLpuX1pu/og/BJyCFUOzNXiUkviBYqvUXBmZf0JhpQFKNlRVNW', '2026-03-10 20:01:53');


ALTER TABLE `logs`
  ADD CONSTRAINT `fk_logs_momentos` FOREIGN KEY (`moment`) REFERENCES `momentos` (`momentoId`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `posee`
  ADD CONSTRAINT `posee_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `posee_ibfk_2` FOREIGN KEY (`priv_id`) REFERENCES `privilegios` (`id`);

ALTER TABLE `tiene`
  ADD CONSTRAINT `fk_tiene_usuarios` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`username`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tiene_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`);
COMMIT;
