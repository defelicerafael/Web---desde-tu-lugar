-- phpMyAdmin SQL Dump
-- version 4.6.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 01, 2018 at 03:49 PM
-- Server version: 5.7.13-log
-- PHP Version: 5.6.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";



--
-- Database: `desdetulugar_new`
--

-- --------------------------------------------------------

--
-- Table structure for table `iconos`
--

CREATE TABLE `iconos` (
  `id` int(11) NOT NULL,
  `img` text COLLATE utf8_unicode_ci NOT NULL,
  `texto` varchar(250) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `alt` varchar(250) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `link` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `iconos`
--

INSERT INTO `iconos` (`id`, `img`, `texto`, `alt`, `link`) VALUES
(1, 'img/home/iconos/personas.png', 'Hoy podes ayudar a quien más lo necesita, sin sacrificios y sin salir de tu zona de confort.', 'tu lugar', 'http://desdetulugar.org.ar/tulugar'),
(2, 'img/home/iconos/empresas.png', 'Desde tu lugar ayuda a las compañías a impactar positivamente en la sociedad.', 'empresas', '#/empresas'),
(3, 'img/home/iconos/educacion.png', 'Nuestro objetivo  es contar con futuras generaciones, comprometidas e involucradas, con los sectores más vulnerables de nuestra sociedad.', 'educacion', '#/educacion'),
(4, 'img/home/iconos/organizaciones.png', 'Vamos a repensar, potenciar e innovar la forma de llevar a cabo su labor y convertir sus necesidades en proyectos concretos.', 'organizaciones', '#/organizaciones');

-- --------------------------------------------------------

--
-- Table structure for table `personas_bloque`
--

CREATE TABLE `personas_bloque` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `foto` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `alt` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `subtitulo` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `texto` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `boton_link` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `boton_texto` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sliders`
--

CREATE TABLE `sliders` (
  `id` int(11) NOT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `alt` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `link` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `texto` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sliders`
--

INSERT INTO `sliders` (`id`, `img`, `alt`, `link`, `texto`) VALUES
(1, 'img/home/sliders/slider1.png', 'Y tu lugar cual es', '#/ayudar', ''),
(2, 'img/home/sliders/slider2.png', 'Dona online', '#/ayudar', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `iconos`
--
ALTER TABLE `iconos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `iconos`
--
ALTER TABLE `iconos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
