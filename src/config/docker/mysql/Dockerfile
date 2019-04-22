FROM    mysql
ADD     my.cnf /etc/mysql/conf.d/my.cnf
RUN     mkdir -p /var/log/mysql && chown -R mysql:mysql /var/log/mysql

VOLUME  /var/lib/mysql
VOLUME  /var/log/mysql
