CREATE TABLE `users` (
  `user_name` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `full_name` varchar(50) DEFAULT NULL,
  `last_login_time` datetime DEFAULT NULL,
  `last_logout_time` datetime DEFAULT NULL,
  `logout_type` enum('A','M') DEFAULT NULL,
  PRIMARY KEY (`user_name`,`password`)
);