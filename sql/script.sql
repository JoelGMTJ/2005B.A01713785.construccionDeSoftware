-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 10, 2026 at 09:36 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `f1moments`
--

-- --------------------------------------------------------

--
-- Table structure for table `momentos`
--

CREATE TABLE `momentos` (
  `momentoId` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `season` year(4) NOT NULL,
  `location` varchar(50) NOT NULL,
  `videoLink` varchar(500) NOT NULL,
  `image` varchar(500) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `momentos`
--

INSERT INTO `momentos` (`momentoId`, `name`, `season`, `location`, `videoLink`, `image`, `createdAt`) VALUES
(1, 'Hulkenberg first podium', '2025', 'Silverstone', 'https://youtu.be/daWr9xnkKS4?t=430', 'https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/b94e/live/9dea8bf0-5a90-11f0-9f6f-9b31b462c89f.jpg', '2026-03-07'),
(2, 'Verstappen Brazil P17 to win', '2024', 'Sao Paolo', 'https://youtu.be/gbxJT-yBdcs?t=363', 'https://media.formula1.com/image/upload/t_16by9Centre/c_lfill,w_3392/q_auto/v1740000000/trackside-images/2024/F1_Grand_Prix_of_Brazil_and_Qualifying/2182695804.webp', '2026-03-07'),
(3, 'Leclerc crashout', '2025', 'Hungary', 'https://youtu.be/hrPtK5D5yn4?t=337', 'https://i.redd.it/9p5k8ugl07l31.jpg', '2026-03-07'),
(4, 'Antonelli crashes leclerc', '2025', 'Zandvoort', 'https://youtu.be/JIRqdeNl2cU?t=312', 'https://scontent-qro3-1.xx.fbcdn.net/v/t39.30808-6/541006654_1287720919816829_5192374193151031322_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=o8iUfN96924Q7kNvwGHhOyg&_nc_oc=Admx-oZvyZXtiEApARHqKRdczCxoW8_M-1zb2Aes1YZ5f03T_Ow9YQB6PAtBdC2qZwU&_nc_zt=23&_nc_ht=scontent-qro3-1.xx&_nc_gid=peKpsOpp3kbCxfqLeI0fBw&_nc_ss=8&oh=00_Afx5CunK98sOI3op2O8kkL0cnEKkkkfgZvm5LsQUfu4qYg&oe=69AD519D', '2026-03-07'),
(5, 'Vettel crashes into Webber', '2010', 'Turkey', 'https://youtu.be/tHb1y9TJMV4', 'https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/ac18b103-a547-494d-bd7a-f4655d3b3296/35c592a2-3448-4735-b10b-89dfc5f33aaf/864x486/match/image.jpg', '2026-03-07'),
(6, 'Verstappen wins 2021 championship', '2021', 'Abu Dhabi', 'https://youtu.be/7QJ-N-AQJYc?t=350', 'https://i.redd.it/thjnkunuh2141.jpg', '2026-03-07'),
(7, 'McLaren disasterclass', '2025', 'Quatar', 'https://youtu.be/BeaVJggQ2dc?t=192', 'https://media.formula1.com/image/upload/c_lfill,w_2048/q_auto/v1740000000/fom-website/2025/Qatar/GENERAL%20CROP%20-%202025-11-30T191739.010.webp', '2026-03-07'),
(8, 'Baku drift', '2024', 'Baku', 'https://youtu.be/7ynDOY1PR74?t=317', 'https://www.thedrive.com/wp-content/uploads/2024/09/Screenshot-2024-09-16-at-10.20.32%E2%80%AFAM.jpeg?quality=85', '2026-03-09'),
(9, 'Mexican spanish war (2024)', '2024', 'Baku', 'https://youtu.be/7ynDOY1PR74?t=347', 'https://e0.365dm.com/24/09/1600x900/skysports-carlos-sainz-f1-sergio_6686525.jpg?20240915153642', '2026-03-09'),
(10, 'Verstappen tire pops', '2021', 'Baku', 'https://youtu.be/suZHkUxPzjE?t=271', 'https://motorsportmagazine.b-cdn.net/wp-content/uploads/2021/06/Verstappen-kick.jpg', '2026-03-09'),
(11, 'Hamilton fucking kills Verstappen', '2021', 'Great Britain', 'https://youtu.be/FRt8hXFb0Vg?t=36', 'https://media.cnn.com/api/v1/images/stellar/prod/210718101957-01-british-grand-prix-07-18-2021.jpg?q=w_3004,h_2003,x_0,y_0,c_fill', '2026-03-09'),
(12, 'Verstappen crashout', '2024', 'Hungaroring', 'https://youtu.be/YJ0NYHONwts?t=283', 'https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/51387ba6-fb0e-4b55-862f-732a92eaac60/2735de7a-4036-4697-a5f8-61eaf889be8a/864x486/match/image.jpg', '2026-03-09'),
(13, 'Box now box', '2022', 'Monaco', 'https://youtu.be/3Yo2ynH5WUQ', 'https://inews.co.uk/wp-content/uploads/2022/05/SEI_107029607.jpg', '2026-03-09'),
(14, 'Leclerc crashes', '2022', 'France', 'https://youtu.be/5nfvePtguec', 'https://pbs.twimg.com/media/FYb3idfXEAIq5w7?format=jpg&name=large', '2026-03-09');

-- --------------------------------------------------------

--
-- Table structure for table `posee`
--

CREATE TABLE `posee` (
  `rol_id` int(11) NOT NULL,
  `priv_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Table structure for table `privilegios`
--

CREATE TABLE `privilegios` (
  `id` int(11) NOT NULL,
  `nombre_privilegio` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `privilegios`
--

INSERT INTO `privilegios` (`id`, `nombre_privilegio`, `created_at`) VALUES
(1, 'ver_momentos', '2026-03-10 14:03:53'),
(2, 'agregar_momentos', '2026-03-10 14:03:53');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre_privilegio` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `nombre_privilegio`, `created_at`) VALUES
(1, 'owner', '2026-03-10 20:04:44'),
(2, 'admin', '2026-03-10 20:04:44'),
(3, 'visit', '2026-03-10 20:04:44');

-- --------------------------------------------------------

--
-- Table structure for table `tiene`
--

CREATE TABLE `tiene` (
  `user_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `id_rol` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `username` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`username`, `name`, `password`, `created_at`) VALUES
('Kevin777', 'Kevin García', '$2b$12$.8BJT.am/ohKIb19BMJEeusEJm8JDacaSOGhRioNrnZJvaz4R8l4e', '2026-03-10 20:00:53'),
('MagicTitanJ', 'Joel García', '$2b$12$YozQUL5XA0wJo1OL5MKTSOcBrYuBKuM7t0PGZ6f51/TRc.k9.6vOi', '2026-03-10 02:13:12'),
('SpideySerna', 'Esteban Serna', '$2b$12$mI5FLpuX1pu/og/BJyCFUOzNXiUkviBYqvUXBmZf0JhpQFKNlRVNW', '2026-03-10 20:01:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `momentos`
--
ALTER TABLE `momentos`
  ADD PRIMARY KEY (`momentoId`);

--
-- Indexes for table `posee`
--
ALTER TABLE `posee`
  ADD PRIMARY KEY (`rol_id`,`priv_id`),
  ADD KEY `priv_id` (`priv_id`);

--
-- Indexes for table `privilegios`
--
ALTER TABLE `privilegios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tiene`
--
ALTER TABLE `tiene`
  ADD PRIMARY KEY (`user_id`,`id_rol`),
  ADD KEY `id_rol` (`id_rol`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `momentos`
--
ALTER TABLE `momentos`
  MODIFY `momentoId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `privilegios`
--
ALTER TABLE `privilegios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
