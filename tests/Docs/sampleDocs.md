# Command-Line Setup Steps

These steps are required no matter which IDE you prefer

## Checkout Project

Clone the project to your machine: 

### In Terminal 

```
git clone https://github.com/kalrajyoti/udemy-playwright-8.git
```

#### Install Node/NPM/NVM
```
 you can install from here https://nodejs.org/en/download/

 ```

##### Install Playwright from VSCode


```
 First go to VSCode Extension and search the playwright and install it.
 Then open CMD+Shift+P which will open command bar in vs code and type playwright and hit enter

Once installed you will get:

package.json file, :unless you are already inside a project that contains this file and if so Playwright will be added to your package.json.
playwright.config.ts file :which is where you can configure Playwright, add or remove the browsers you want to test on and so much more.
Tests folder with an example test file.
The example test file is a very complete example of how to write tests for a TODO app and I highly encourage you to check it out


```
## Install Playwright from CLI

```
cd ~/Projects/api-automation
npm init playwright@latest
```

