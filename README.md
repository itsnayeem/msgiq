#SocialApp

##Setup Dev Environment
- Install [Vagrant](http://www.vagrantup.com/)
- Install [VirtualBox](https://www.virtualbox.org/)
- Install [NodeJs](https://nodejs.org/)
- Install Global Node Packages `sudo npm install -g grunt-cli yo bower generator-karma generator-angular-fullstack`
- Add entries to host file
	- In your terminal, edit the hosts file: `sudo nano /etc/hosts`
	- Add this line to end of file `10.1.2.20 local.socialapp`
- Clone this repo to your home directory `git clone git@github.com:itsnayeem/socialapp.git`
- Go into the socialapp directory `cd socialapp`
- Start VM `vagrant up`
- Login to VM `vagrant ssh`
- Inside the VM terminal
    - Go to socialapp directory `cd /opt/socialapp/ && ./start.sh && exit`