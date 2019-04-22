#!/usr/bin/env bash

function func_get_thread_cnt
{
	if [ ! -e "../$1/.pid" ]; then
		return 0
	fi
	pid=`cat ../$1/.pid`
	return `ps axf -o pid | grep $pid | wc -l`
}

function func_process
{
	declare -i start=0

	func_get_thread_cnt $1
	if [ $? != 0 ]; then
		echo "$1 is running"

		if [ $3 != 0 ] || [ $4 != 0 ]; then
			echo "shut down $1 ..."
			kill -2 $pid

			kill_res=0
			for ((;;)); do
				if [ $kill_res == 10 ]; then
					break
				fi
				func_get_thread_cnt $1
				if [ $? == 0 ]; then
					break
				fi
				kill_res=$[kill_res+1]
				sleep 1
			done

			if [ $kill_res == 10 ]; then
				echo "shut down failed, please try again"
				return 1
			fi
		fi

	else
		echo "$1 is not running"

		if [ $3 == 0 ]; then
			start=1
		fi
	fi

	if [ $4 != 0 ]; then
		start=1
	fi

	if [ $start != 0 ]; then
		cd "../$1"

        echo "run $1 with daemon ..."

        nohup ./$2 -c ./config.json -p >/dev/null 2>&1 &

        sleep 1

        cd log
        log_file=`ls -t | head -1`
        res=1
        for ((;;)); do
            t=`cat $log_file | grep -c 'Error'`
            if [ $t != 0 ]; then
                    res=0
                    break
            fi
            t=`cat $log_file | grep -c 'app start success'`
            if [ $t != 0 ]; then
                res=1
                break
            fi
            sleep 1
        done

        if [ $res != 1 ]; then
            echo ">> fail! (please check log for detail)"
        else
            echo ">> success!"
        fi

        cd ../

        #log_file=`ls -l | gawk '$8 ~/LogFile_/{print $8}' | tail -n 1`
        #server_pid=`cat .pid`
        #gnome-terminal -t "Log:$1 $log_file" -e "tail -f --pid=$server_pid $log_file" &
		cd "../shell"
	fi
}

function func_execute
{
	declare -i is_stop=0
	declare -i pro_gameserver=0
	declare -i pro_loginserver=0
	declare -i pro_cacheserver=0
	declare -i pro_payserver=0
	declare -i pro_routerserver=0
	declare -i pro_gmserver=0
	declare -i force_restart=0

	while getopts "sglpcamrh" opt_name; do
		case "$opt_name" in
			"s") is_stop=1;;
			"g") pro_gameserver=1;;
			"l") pro_loginserver=1;;
			"c") pro_cacheserver=1;;
			"p") pro_payserver=1;;
			"a") pro_routerserver=1;;
			"m") pro_gmserver=1;;
			"r") force_restart=1;;
			"h")
				echo ""
				echo "		--- Usage ---"
				echo "Server Option"
				echo "	-g = Deal with game_app"
				echo "	-l = Deal with login_app"
				echo "  -c = Deal with cache_app"
				echo "  -p = Deal with pay_app"
				echo "  -a = Deal with router_app"
				echo "  -m = Deal with gm_app"
				echo "Operation Option"
				echo "	-s = Stop server"
				echo "	-r = Restart server"
				echo "	-h = print help"
				echo "Default Option Is: -glcpmr(when ./start_server.sh) -glcpms(when ./stop_server.sh)"
				echo ""
				return 0;;
			"?") echo "Unknown option $OPTARG"; return 1;;
		esac
	done

    if [ "root" != `whoami` ]; then
		echo "Error: 'root' Require"
		exit 1
	fi

	if [ $pro_gameserver != 0 ]; then
		func_process "game"$2 "game_app" $is_stop $force_restart
	fi

	if [ $pro_loginserver != 0 ]; then
		func_process "login" "login_app" $is_stop $force_restart
	fi

	if [ $pro_cacheserver != 0 ]; then
		func_process "cache" "cache_app" $is_stop $force_restart
	fi

	if [ $pro_payserver != 0 ]; then
		func_process "pay" "pay_app" $is_stop $force_restart
	fi

	if [ $pro_routerserver != 0 ]; then
		func_process "router" "router_app" $is_stop $force_restart
	fi

	if [ $pro_gmserver != 0 ]; then
		func_process "gm" "gm_app" $is_stop $force_restart
	fi
}

# -- main --

if [ $0 == "./start_server.sh" ]; then
	if [ $# -eq 0 ]; then
		func_execute -glcpmr
	else
		func_execute $@
	fi
elif [ $0 == "./stop_server.sh" ]; then

	if [ $# -eq 0 ]; then
		func_execute -sglcpm
	else
		func_execute -s $@
	fi
else
	echo "please run this under folder 'shell'"
fi


#
#cd ../
#export NODE_ENV=production && nohup ./game_app &