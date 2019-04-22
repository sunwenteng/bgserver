FROM    redis
ADD     redis.cnf /etc/redis/redis.cnf
RUN     mkdir -p /var/log/redis && chown -R redis:redis /var/log/redis

VOLUME  /var/lib/redis
VOLUME  /var/log/redis
