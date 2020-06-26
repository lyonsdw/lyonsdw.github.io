# .bash_profile

# Get the aliases and functions
if [ -f ~/.bashrc ]; then
	. ~/.bashrc
fi

# User specific environment and startup programs

PATH=$PATH:$HOME/bin:$HOME

export PATH

MAILHOST="exchange.lvc.edu"
export MAILHOST

MAIL=po:lyons
export MAIL

unset USERNAME
