EVT 2.0 (evt-viewer)
====================

Istruzioni per l'installazione e la configurazione dell'ambiente di sviluppo di EVT 2.0 (evt-viewer).

# ##### #
# Linux #
# ##### #

* UPDATE PACCHETTI [da fare per sicurezza!]
| $ sudo apt-get update

* GIT [da fare solo se non si ha già installato git]
| $ sudo apt-get install git

* RUBY
| $ sudo apt-get install ruby-compass build-essential curl
| $ sudo gem install compass [da fare per evitare problemi di compilazione del CSS]

* NODE JS
| $ curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
| $ sudo apt-get install -y nodejs

* BOWER A LIVELLO GLOBALE
| $ sudo npm install -g bower

* GRUNT A LIVELLO GLOBALE
| $ sudo npm install -g grunt-cli 

* CLONE REPO FROM GITHUB
| $ git clone https://github.com/evt-project/evt-viewer.git

* MI SPOSTO NELLA CARTELLA IN CUI HO CLONATO IL REPO
| $ cd evt-viewer

* SE NECESSARIO MI SPOSTO NEL BRANCH DEVELOP [o in quello della feature a cui voglio lavorare]
| $ git checkout develop

| $ npm i

| $ npm run bower-install

| $ npm run start

* *********************** *

# ####### #
# Windows #
# ####### #

* GIT 
| Installare GIT (se non già presente nel pc)
|https://git-scm.com/downloads

* RUBY
| Installare l'ultima versione di Ruby 
| http://rubyinstaller.org/
|[IMPORTANTE: nella schermata di installazione selezionare la voce "Add Ruby executables"]
| Aprire la shell come amministratore
| $ gem install compass
| $ gem install susy

* NODEJS
| Installare nodejs da https://nodejs.org/ o https://nodejs.org/en/download/package­manager

* BOWER A LIVELLO GLOBALE
| $ npm install -g bower 

* GRUNT A LIVELLO GLOBALE
| $ npm install -g grunt-cli

* CLONE REPO FROM GITHUB
| $ git clone https://github.com/evt-project/evt-viewer.git

* MI SPOSTO NELLA CARTELLA IN CUI HO CLONATO IL REPO
| $ cd evt-viewer

* SE NECESSARIO MI SPOSTO NEL BRANCH DEVELOP [o in quello della feature a cui voglio lavorare]
| $ git checkout develop

| $ npm i

| $ npm run bower-install

| $ npm run start

* *********************** *

# #### #
# OS X #
# #### #

* HOMEBREW [da fare solo se non già presente nel pc]
| $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" 
| $ brew doctor

* GIT [da fare solo se non già presente nel pc] - Se da problemi, provare senza sudo
| $ sudo brew install git

* RUBY
| $ sudo brew install ruby
| $ sudo gem update --system
| $ sudo gem install compass

* NODE JS
| $ sudo brew install node

* BOWER A LIVELLO GLOBALE
| $ sudo npm install -g bower

* GRUNT A LIVELLO GLOBALE
| $ sudo npm install -g grunt-cli 

* CLONE REPO FROM GITHUB
| $ git clone https://github.com/evt-project/evt-viewer.git

* MI SPOSTO NELLA CARTELLA IN CUI HO CLONATO IL REPO
| $ cd evt-viewer

* SE NECESSARIO MI SPOSTO NEL BRANCH DEVELOP [o in quello della feature a cui voglio lavorare]
| $ git checkout develop

| $ npm i

| $ npm run bower-install

| $ npm run start

* *********************** *
