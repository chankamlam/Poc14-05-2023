mysql -uroot -pTest@5201314 -e"CREATE DATABASE demo;"
mysql -uroot -pTest@5201314 -e"USE mysql;GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;FLUSH PRIVILEGES;"
