-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 07, 2026 at 03:10 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12
SET
    SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET
    time_zone = "+00:00";

--
-- Database: `f1moments`
--
-- --------------------------------------------------------
--
-- Table structure for table `momentos`
--
CREATE TABLE
    `momentos` (
        `momentoId` int (11) NOT NULL,
        `name` varchar(100) NOT NULL,
        `season` year (4) NOT NULL,
        `location` varchar(50) NOT NULL,
        `videoLink` varchar(500) NOT NULL,
        `image` varchar(500) NOT NULL,
        `createdAt` date NOT NULL DEFAULT current_timestamp()
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_spanish2_ci;

-- --------------------------------------------------------
--
-- Table structure for table `usuarios`
--
CREATE TABLE
    `usuarios` (
        `username` varchar(50) NOT NULL,
        `name` varchar(100) NOT NULL,
        `password` varchar(500) NOT NULL,
        `created_at` timestamp NOT NULL DEFAULT current_timestamp()
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_spanish2_ci;

--
-- Indexes for dumped tables
--
--
-- Indexes for table `momentos`
--
ALTER TABLE `momentos` ADD PRIMARY KEY (`momentoId`);

ALTER TABLE `usuarios` ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--