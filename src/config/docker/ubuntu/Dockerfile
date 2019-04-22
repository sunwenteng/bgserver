# 64位
FROM ubuntu:14.04
# 设置环境变量
ENV LIB_ROOT /data/lib/
MAINTAINER sunwenteng "elvessun@gmail.com"

# Ali apt-get source.list
RUN mv /etc/apt/sources.list /etc/apt/sources.list.bak && \
echo "deb http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse" >> /etc/apt/sources.list && \
echo "deb http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse" >> /etc/apt/sources.list && \
echo "deb http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse" >> /etc/apt/sources.list && \
echo "deb http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse" >> /etc/apt/sources.list && \
echo "deb http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse" >> /etc/apt/sources.list && \
echo "deb-src http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse" >> /etc/apt/sources.list && \
echo "deb-src http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse" >> /etc/apt/sources.list && \
echo "deb-src http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse" >> /etc/apt/sources.list && \
echo "deb-src http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse" >> /etc/apt/sources.list && \
echo "deb-src http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse" >> /etc/apt/sources.list

RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get install -y

# 设置环境变量
ENV LIB_ROOT ./dep

# 安装一些必要软件
RUN apt-get install -y \
    openssh-server \
    python-software-properties \
    build-essential \
    inetutils-ping \
    net-tools \
    wget \
    cmake \
    gdbserver \
    subversion \
    git \
    vim \
    redis-tools \
    #texlive-extra-utils \
    python

# 修改默认密码
RUN echo 'root:root' | chpasswd
RUN mkdir -p /run/sshd
# 允许登录
RUN sed -i "s/PermitRootLogin without-password/PermitRootLogin yes/g" /etc/ssh/sshd_config
RUN sed -i "s/UsePAM yes/UsePAM no/g" /etc/ssh/sshd_config

# ----- G++ 4.8 -----
#RUN add-apt-repository ppa:ubuntu-toolchain-r/test
RUN apt-get update && apt-get install -y \
    gcc-4.8 \
    g++-4.8 \
    gcc-4.8-multilib \
    g++-4.8-multilib \
    gcc-4.8-doc
RUN update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-4.8 20
RUN update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-4.8 20
RUN update-alternatives --config gcc
RUN update-alternatives --config g++

# ----- perftools -----
ADD     ./dep/google-perftools-1.9.1.tar.gz ${LIB_ROOT}
WORKDIR ${LIB_ROOT}/google-perftools-1.9.1
RUN     ./configure --enable-frame_pointers && make CXXFLAGS=-fpermissive && make install

# ----- openssl -----
ADD     ./dep/openssl-1.0.0q.tar.gz ${LIB_ROOT}
WORKDIR ${LIB_ROOT}/openssl-1.0.0q
RUN     ./config -m64 shared no-ssl2 -fPIC && make && make install
RUN     apt-get install -y libssl-dev

# ----- curl ------
ADD     ./dep/curl-7.40.0.tar.gz ${LIB_ROOT}
WORKDIR ${LIB_ROOT}/curl-7.40.0
RUN     ./configure --with-ssl=/usr/local/ssl && make && make install

# ----- ACE ------
ADD     ./dep/ACE-6.0.3.tar.gz ${LIB_ROOT}
WORKDIR ${LIB_ROOT}/ACE_wrappers
RUN     mkdir -p build
#WORKDIR ${LIB_ROOT}/ACE_wrappers/build
RUN     cd build && ../configure --disable-ssl && make && make install

# ----- jsoncpp ------
RUN     apt-get install -y scons
ADD     ./dep/jsoncpp-src-0.5.0.tar.gz ${LIB_ROOT}
WORKDIR ${LIB_ROOT}/jsoncpp-src-0.5.0
RUN     scons platform=linux-gcc
RUN     cp libs/linux-gcc-4.8/* /usr/local/lib
RUN     cp -r include/json /usr/local/include
RUN     ln -s /usr/local/lib/libjson_linux-gcc-4.8_libmt.so /usr/local/lib/libjson_linux.so

# ----- readline ------
RUN     apt-get install -y libreadline-dev

# ----- boost ------
ADD     ./dep/boost_1_55_0.tar.gz ${LIB_ROOT}
WORKDIR ${LIB_ROOT}/boost_1_55_0
RUN     ./bootstrap.sh --prefix=/usr/
RUN     ./b2 --with-system --with-filesystem --with-regex
RUN     cp stage/lib/* /usr/local/lib
RUN     cp -r boost /usr/local/include

# ----- mysql client ------
RUN     apt-get install -y mysql-client libmysql++-dev

# ----- protobuf -----
RUN     apt-get install -y autoconf automake libtool
ADD     ./dep/protobuf-2.6.1.tar.gz ${LIB_ROOT}
WORKDIR ${LIB_ROOT}/protobuf-2.6.1
RUN     ./autogen.sh && ./configure && make && make check && make install

# ----- mongodb ------
ADD     ./dep/mongo-c-driver-1.1.10.tar.gz ${LIB_ROOT}
WORKDIR ${LIB_ROOT}/mongo-c-driver-1.1.10
RUN     ./configure && make && make install

# ----- gdb ------
RUN      apt-get install -y gdb
#ADD     ./dep/gdb-8.2.tar.gz ${LIB_ROOT}
#WORKDIR ${LIB_ROOT}/gdb-8.2
#RUN     ./configure && make && make install

# ----- hiredis -----
ADD     ./dep/hiredis-0.14.0.tar.gz ${LIB_ROOT}
WORKDIR ${LIB_ROOT}/hiredis-0.14.0
RUN     make && make install

# ----- distcc -----
RUN     apt-get install -y distcc
RUN     echo "#!/bin/bash\nDISTCC_BIN=/usr/lib/distcc\n" \
        "PATH=\$PATH:\$DISTCC_BIN\n" \
        "DISTCC_HOSTS=\$DISTCC_HOSTS\" 172.16.1.85\"\n" \
        "DISTCC_HOSTS=\$DISTCC_HOSTS\" 172.16.1.86\"\n" \
        "CC=\"distcc gcc\"\n" \
        "CXX=\"distcc g++\"\n" \
    "export DISTCC_BIN PATH DISTCC_HOSTS CC CXX" > /etc/profile.d/distcc_env_config.sh && chmod +x /etc/profile.d/distcc_env_config.sh

# ----- dockerize tools ------
#WORKDIR ${LIB_ROOT}
#RUN     wget https://github.com/jwilder/dockerize/releases/download/v0.2.0/dockerize-linux-amd64-v0.2.0.tar.gz
#RUN     tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.2.0.tar.gz

WORKDIR /
RUN     rm -rf ${LIB_ROOT} && rm /etc/ld.so.cache

# 创建用户
#RUN useradd --create-home --no-log-init --shell /bin/bash work
#RUN adduser work sudoRUN echo 'work:work' | chpasswd

# 创建 work 密码 work 用户并且赋予不用密码进行 sudo 的权限
RUN echo "#!/bin/bash\nadduser work << EOF\nwork\nwork\nwork\n\n\n\nY\nEOF" >> create_work.sh && \
    chmod 755 create_work.sh && \
    ./create_work.sh && \
    gpasswd -a work sudo && \
    rm create_work.sh && \
    chmod 644 /etc/sudoers && \
    echo "work ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers

USER work
WORKDIR /home/work

# 创建项目源码目录，这个目录将成为 Container 里面构建和执行的工作区
RUN mkdir -p /home/work/workspace
WORKDIR /home/work/workspace
ENV LC_ALL C.UTF-8
