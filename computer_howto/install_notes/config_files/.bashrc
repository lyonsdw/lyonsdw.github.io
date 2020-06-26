# .bashrc

# User specific aliases and functions

alias bbk='java bbk.BankBook'
alias e='emacs -nw ~/a'
alias ew='emacs ~/a -font 7x14 -geometry 98x44+25+25 &'
alias gbk='java GBK2_8.GradeBook'
alias bigsee='xdvi -geometry 1000x850+60+10' # geometry for big screen
alias see='xdvi -geometry 926x728+3+3'  # geometry for laptop 390E
alias xfig='xfig -spec'


# Source global definitions
if [ -f /etc/bashrc ]; then
	. /etc/bashrc
fi
