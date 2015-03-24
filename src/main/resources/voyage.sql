-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 24, 2015 at 12:19 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `voyage`
--

-- --------------------------------------------------------

--
-- Table structure for table `cargo`
--

CREATE TABLE IF NOT EXISTS `cargo` (
`cargo_id` int(11) NOT NULL,
  `voy_no` int(10) DEFAULT NULL,
  `account` varchar(300) DEFAULT NULL,
  `cargo_name` varchar(300) DEFAULT NULL,
  `loading_port` varchar(300) DEFAULT NULL,
  `discharge_port` varchar(300) DEFAULT NULL,
  `quantity` decimal(10,2) DEFAULT '0.00',
  `frt` decimal(10,2) DEFAULT '0.00',
  `term` decimal(10,2) DEFAULT '0.00',
  `revenue` decimal(10,2) DEFAULT '0.00',
  `add_comm` decimal(10,2) DEFAULT '0.00',
  `brkg` decimal(10,2) DEFAULT '0.00',
  `frt_tax` decimal(10,2) DEFAULT '0.00',
  `liner_term` decimal(10,2) DEFAULT '0.00'
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cargo`
--

INSERT INTO `cargo` (`cargo_id`, `voy_no`, `account`, `cargo_name`, `loading_port`, `discharge_port`, `quantity`, `frt`, `term`, `revenue`, `add_comm`, `brkg`, `frt_tax`, `liner_term`) VALUES
(6, 11121, 'GALBRAITHS', 'BARLEY', 'NIKOLAEV PORT SILO', 'AGADIR RANGE', '100.00', '1.00', '100.00', '1.00', '1.00', '1.00', '1.00', '1.00');

-- --------------------------------------------------------

--
-- Table structure for table `demand`
--

CREATE TABLE IF NOT EXISTS `demand` (
`demand_id` int(11) NOT NULL,
  `account` varchar(300) DEFAULT NULL,
  `cargo_name` varchar(300) DEFAULT NULL,
  `loading_port` varchar(300) DEFAULT NULL,
  `discharge_port` varchar(300) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `demand`
--

INSERT INTO `demand` (`demand_id`, `account`, `cargo_name`, `loading_port`, `discharge_port`) VALUES
(1, 'BRAEMAR SEASCOPE', 'ANTRACITE', 'NIKOLAEV', 'HAZIRA'),
(2, 'MID-SHIP', 'PHOSPHATES', 'SAFAGA', 'SZCZECIN OR POLICE'),
(3, 'GALBRAITHS', 'BARLEY', 'NIKOLAEV PORT SILO', 'AGADIR RANGE'),
(4, 'GULF MARITIME', 'BAGGED CEMENT', 'ANTALYA', 'MONROVIA'),
(5, 'GALBRAITHS', 'BULK FERT', 'GABES', 'CHITTAGONG'),
(6, 'GULF MARITIME CO.', 'GMAP', 'MOREHEAD CITY', 'ITAQUI'),
(7, 'RESHAMWALA', 'HLSS/LAWFUL/STEELS', 'DOP', 'ITAQUI'),
(8, 'INTEROCEAN', 'AMMONIUM NITRATE', 'BSEA', 'VIZAG'),
(9, 'OPTIMA SHIPBROKERS', 'SULPHUR', 'BSEA', 'ITAQUI'),
(10, 'OPTIMA SHIPBROKERS', 'SULPHUR', 'BSEA', 'ITAQUI'),
(11, 'CLARKSONS', 'UREA', 'YUZHNY', 'BRAZIL'),
(12, 'BERY MARITIME CHINA', 'FERTS', 'DAMIETTA', 'JAMBURG'),
(13, 'BRAEMAR SEASCOPE', 'PEAS IN BULK', 'NOVOROSSISK', 'Mumbai');

-- --------------------------------------------------------

--
-- Table structure for table `port_rotation`
--

CREATE TABLE IF NOT EXISTS `port_rotation` (
`port_rotation_id` int(11) NOT NULL,
  `voy_no` int(10) DEFAULT NULL,
  `type` varchar(40) DEFAULT NULL,
  `port_name` varchar(300) DEFAULT NULL,
  `distance` decimal(10,2) DEFAULT '0.00',
  `wf` decimal(10,2) DEFAULT '0.00',
  `speed` decimal(10,2) DEFAULT '0.00',
  `sea` decimal(10,2) DEFAULT '0.00',
  `load_rate` decimal(10,2) DEFAULT '0.00',
  `port_idle_days` decimal(10,2) DEFAULT '0.00',
  `port_working_days` decimal(10,2) DEFAULT '0.00',
  `demerages` decimal(10,2) DEFAULT '0.00',
  `despatches` decimal(10,2) DEFAULT '0.00',
  `port_charge` decimal(10,2) DEFAULT '0.00',
  `arrivale_date` date DEFAULT NULL,
  `departure_date` date DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `port_rotation`
--

INSERT INTO `port_rotation` (`port_rotation_id`, `voy_no`, `type`, `port_name`, `distance`, `wf`, `speed`, `sea`, `load_rate`, `port_idle_days`, `port_working_days`, `demerages`, `despatches`, `port_charge`, `arrivale_date`, `departure_date`) VALUES
(15, 11121, 'Ballast', NULL, '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', NULL, '0.00', NULL, NULL),
(16, 11121, 'Loading', 'NIKOLAEV PORT SILO', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', NULL, '0.00', NULL, NULL),
(17, 11121, 'Discharging', 'AGADIR RANGE', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', NULL, '0.00', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user_name` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `full_name` varchar(50) DEFAULT NULL,
  `last_login_time` datetime DEFAULT NULL,
  `last_logout_time` datetime DEFAULT NULL,
  `role_type` enum('admin','user','read') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_name`, `password`, `full_name`, `last_login_time`, `last_logout_time`, `role_type`) VALUES
('dd', 'YXBoY3VkZHRmY3N5', 'dd dd', '2015-03-20 23:54:27', NULL, NULL),
('rd', 'bWlyYXVyZHZ1YXZ1', 'rahul dewan', '2015-03-21 16:36:07', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `vessel_master`
--

CREATE TABLE IF NOT EXISTS `vessel_master` (
  `vessel_name` varchar(100) NOT NULL DEFAULT '',
  `laycan` float DEFAULT NULL,
  `vessel_type` varchar(10) NOT NULL DEFAULT '',
  `dwt` float(10,2) DEFAULT NULL,
  `draft` varchar(30) DEFAULT NULL,
  `ballast` float DEFAULT NULL,
  `laden` float DEFAULT NULL,
  `do_diesel_type` varchar(10) DEFAULT NULL,
  `do_sea` float DEFAULT NULL,
  `do_idle` float DEFAULT NULL,
  `do_work` float DEFAULT NULL,
  `lsdo_diesel_type` varchar(10) DEFAULT NULL,
  `lsdo_sea` float DEFAULT NULL,
  `lsdo_idle` float DEFAULT NULL,
  `lsdo_work` float DEFAULT NULL,
  `fo_type` float DEFAULT NULL,
  `fo_ballast` float DEFAULT NULL,
  `fo_laden` float DEFAULT NULL,
  `fo_idle` float DEFAULT NULL,
  `fo_work` float DEFAULT NULL,
  `lsfo_type` float DEFAULT NULL,
  `lsfo_ballast` float DEFAULT NULL,
  `lsfo_laden` float DEFAULT NULL,
  `lsfo_idle` float DEFAULT NULL,
  `lsfo_work` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vessel_master`
--

INSERT INTO `vessel_master` (`vessel_name`, `laycan`, `vessel_type`, `dwt`, `draft`, `ballast`, `laden`, `do_diesel_type`, `do_sea`, `do_idle`, `do_work`, `lsdo_diesel_type`, `lsdo_sea`, `lsdo_idle`, `lsdo_work`, `fo_type`, `fo_ballast`, `fo_laden`, `fo_idle`, `fo_work`, `lsfo_type`, `lsfo_ballast`, `lsfo_laden`, `lsfo_idle`, `lsfo_work`) VALUES
('Caspian Supplier', 4, 'OWNED', 5520.00, 'Draft4', 10, 40, 'DMA', 2, 40, 15, 'DMX', 14, 16, 21, 180, 20, 25, 4, 1, 180, 20, 25, 4, 4),
('CMA Colomb', 5, 'LTC', 5310.00, 'Draft3', 70, 20, 'DMC', 3, 30, 15, 'DMC', 13, 16, 21, 380, 25, 25, 5, 3, 180, 20, 25, 5, 3),
('Gemini', 2, 'TCT', 5520.00, 'Draft7', 90, 60, 'DMA', 5, 10, 35, 'DMB', 10, 16, 21, 80, 25, 25, 1, 7, 180, 20, 25, 1, 7),
('Jebel Ali', 10, 'OWNED', 2440.00, 'Draft1', 50, 40, 'DMB', 5, 10, 35, 'DMB', 11, 16, 21, 180, 20, 25, 7, 1, 180, 20, 25, 7, 1),
('Manuela', 2, 'TCT', 3220.00, 'Draft2', 60, 30, 'DMA', 4, 20, 25, 'DMA', 12, 16, 21, 280, 30, 25, 6, 2, 180, 20, 25, 6, 2),
('Myra', 3, 'LTC', 2550.00, 'Draft6', 80, 70, 'DMB', 5, 10, 25, 'DMA', 15, 16, 21, 80, 30, 25, 2, 6, 180, 20, 25, 2, 6),
('Vespucci', 6, 'TCT', 9999.00, 'Draft5', 70, 80, 'DMA', 5, 50, 55, 'DMB', 11, 16, 21, 120, 20, 25, 3, 5, 180, 20, 25, 3, 5);

-- --------------------------------------------------------

--
-- Table structure for table `voy_header`
--

CREATE TABLE IF NOT EXISTS `voy_header` (
  `tenant_id` char(36) DEFAULT NULL,
  `client_id` char(10) DEFAULT NULL,
`voy_no` int(10) NOT NULL,
  `voy_type` char(4) DEFAULT NULL,
  `voy_est_no` int(10) DEFAULT '0',
  `vessel_no` int(10) DEFAULT '0',
  `tc_oper` char(12) DEFAULT NULL,
  `trader` char(12) DEFAULT NULL,
  `voy_oper` char(12) DEFAULT NULL,
  `trade_id` char(6) DEFAULT NULL,
  `voy_status` char(10) DEFAULT NULL,
  `zero_prof_ind` tinyint(1) DEFAULT NULL,
  `do_cons` double NOT NULL DEFAULT '0',
  `do_exp` double NOT NULL DEFAULT '0',
  `do_price` double NOT NULL DEFAULT '0',
  `fo_cons` double NOT NULL DEFAULT '0',
  `fo_exp` double NOT NULL DEFAULT '0',
  `fo_price` double NOT NULL DEFAULT '0',
  `lsdo_cons` double NOT NULL DEFAULT '0',
  `lsdo_exp` double NOT NULL DEFAULT '0',
  `lsdo_price` double NOT NULL DEFAULT '0',
  `lsfo_cons` double DEFAULT '0',
  `lsfo_exp` double NOT NULL DEFAULT '0',
  `lsfo_price` double NOT NULL DEFAULT '0',
  `tot_demdes` double NOT NULL DEFAULT '0',
  `tot_adcomm` double NOT NULL DEFAULT '0',
  `tot_brok` double NOT NULL DEFAULT '0',
  `tot_frttax` double NOT NULL DEFAULT '0',
  `tot_linterm` double NOT NULL DEFAULT '0',
  `tot_port_chrg` double NOT NULL DEFAULT '0',
  `tot_bunk_chrg` double NOT NULL DEFAULT '0',
  `cbase` double NOT NULL DEFAULT '0',
  `cev` double NOT NULL DEFAULT '0',
  `ilohc` double NOT NULL DEFAULT '0',
  `ball_bonus` double NOT NULL DEFAULT '0',
  `rout_serv` double NOT NULL DEFAULT '0',
  `addcostitem_no` int(10) NOT NULL DEFAULT '0',
  `addcost` double NOT NULL DEFAULT '0',
  `daily_hire_cost` double NOT NULL DEFAULT '0',
  `daily_hire_addcomm` double NOT NULL DEFAULT '0',
  `tot_rev` double NOT NULL DEFAULT '0',
  `oper_exp` double NOT NULL DEFAULT '0',
  `oper_profit` double NOT NULL DEFAULT '0',
  `net_hire` double NOT NULL DEFAULT '0',
  `tot_hire` double NOT NULL DEFAULT '0',
  `tot_expense` double NOT NULL DEFAULT '0',
  `tot_profit` double NOT NULL DEFAULT '0',
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_by` char(12) DEFAULT NULL,
  `last_created_on` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  `last_created_by` char(12) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11122 DEFAULT CHARSET=latin1 COMMENT='Voyage Header';

--
-- Dumping data for table `voy_header`
--

INSERT INTO `voy_header` (`tenant_id`, `client_id`, `voy_no`, `voy_type`, `voy_est_no`, `vessel_no`, `tc_oper`, `trader`, `voy_oper`, `trade_id`, `voy_status`, `zero_prof_ind`, `do_cons`, `do_exp`, `do_price`, `fo_cons`, `fo_exp`, `fo_price`, `lsdo_cons`, `lsdo_exp`, `lsdo_price`, `lsfo_cons`, `lsfo_exp`, `lsfo_price`, `tot_demdes`, `tot_adcomm`, `tot_brok`, `tot_frttax`, `tot_linterm`, `tot_port_chrg`, `tot_bunk_chrg`, `cbase`, `cev`, `ilohc`, `ball_bonus`, `rout_serv`, `addcostitem_no`, `addcost`, `daily_hire_cost`, `daily_hire_addcomm`, `tot_rev`, `oper_exp`, `oper_profit`, `net_hire`, `tot_hire`, `tot_expense`, `tot_profit`, `created_on`, `created_by`, `last_created_on`, `last_created_by`) VALUES
(NULL, NULL, 11121, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 100, 4, 96, 0.99, 0, 4, 96, '2015-03-16 19:07:25', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cargo`
--
ALTER TABLE `cargo`
 ADD PRIMARY KEY (`cargo_id`), ADD KEY `voy_no` (`voy_no`);

--
-- Indexes for table `demand`
--
ALTER TABLE `demand`
 ADD PRIMARY KEY (`demand_id`);

--
-- Indexes for table `port_rotation`
--
ALTER TABLE `port_rotation`
 ADD PRIMARY KEY (`port_rotation_id`), ADD KEY `voy_no` (`voy_no`), ADD KEY `voy_no_2` (`voy_no`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`user_name`,`password`);

--
-- Indexes for table `vessel_master`
--
ALTER TABLE `vessel_master`
 ADD PRIMARY KEY (`vessel_name`,`vessel_type`), ADD UNIQUE KEY `vessel_name` (`vessel_name`);

--
-- Indexes for table `voy_header`
--
ALTER TABLE `voy_header`
 ADD PRIMARY KEY (`voy_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cargo`
--
ALTER TABLE `cargo`
MODIFY `cargo_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `demand`
--
ALTER TABLE `demand`
MODIFY `demand_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `port_rotation`
--
ALTER TABLE `port_rotation`
MODIFY `port_rotation_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `voy_header`
--
ALTER TABLE `voy_header`
MODIFY `voy_no` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11122;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `cargo`
--
ALTER TABLE `cargo`
ADD CONSTRAINT `voyage_number` FOREIGN KEY (`voy_no`) REFERENCES `voy_header` (`voy_no`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `port_rotation`
--
ALTER TABLE `port_rotation`
ADD CONSTRAINT `voy_number` FOREIGN KEY (`voy_no`) REFERENCES `voy_header` (`voy_no`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
