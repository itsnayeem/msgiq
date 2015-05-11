#Promeleon

##Setup Dev Environment
- Install [Vagrant](http://www.vagrantup.com/)
- Install [VirtualBox](https://www.virtualbox.org/)
- Add entries to host file
	- In your terminal, edit the hosts file: `sudo nano /etc/hosts`
	- Add this line to end of file `10.1.2.20 local.promeleon.com`
- Clone this repo to your home directory `git clone git@github.com:itsnayeem/promeleon.git`
- Go into the promeleon directory `cd promeleon`
- Start VM `vagrant up`