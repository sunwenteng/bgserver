#!/bin/bash
#Install JAVA8
apt-get -y install python-software-properties
add-apt-repository -y ppa:openjdk-r/ppa
apt-get update
apt-get -y install openjdk-8-jre
#Install Logstash
wget -O /root/logstash-6.4.3.deb  https://artifacts.elastic.co/downloads/logstash/logstash-6.4.3.deb
sudo dpkg -i /root/logstash-6.4.3.deb
/usr/share/logstash/bin/logstash-plugin install logstash-output-logservice
sed -i 's/# pipeline.workers: 2/pipeline.workers: 1/' /etc/logstash/logstash.yml
sed -i 's/# path.config:/path.config: \/etc\/logstash\/conf.d/' /etc/logstash/logstash.yml
