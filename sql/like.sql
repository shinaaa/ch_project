CREATE TABLE ch_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(255) NOT NULL,
  upwd VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);
CREATE TABLE ch_like(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT NOT NULL,
    FOREIGN KEY(uid) references ch_user(uid),
  pic VARCHAR(255) NOT NULL
);