# Command-Line Setup Steps

These steps are required no matter which IDE you prefer

## Checkout Project

Clone the project to your machine: 

### Via SourceTree:

<img src="img/checkout.png" width="275px"/>

- Following steps assume you check out the repository to `/Users/<<your.name>>/Projects/exterminator`

### In Terminal 

```
mkdir ~/Projects
cd ~/Projects
git clone ssh://git@stash.modernizingmedicine.com:7999/qa/exterminator.git exterminator
```

## Install Node/NPM/NVM

Exterminator requires node 14 or higher. Head to [NodeJS.org](https://nodejs.org) and download the latest LTS version. 

Alternately, NVM is a Node Version Manager that makes it easy to have access to the right version, in case you need to use multiple versions of Node. 

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
nvm install 14
nvm use 14 
nvm alias default 14
```

## Install Playwright

```
cd ~/Projects/exterminator
npm init playwright@latest
```

The initializer will prompt you with several questions. Accept all the defaults by hitting `Enter` for all of them:

![init](img/playwrightinit.png)