# SE577- MyRepos Demo App 

This project is to demostrate the single page web application with docker container .

1.Project build command  --> quasar build

2.docker build command --->docker build --rm=true -t architecting-software/sample-demo-1-main -f ./Docker/Dockerfile .

3.Docker run command --> docker run --rm -p 8082:8082 architecting-software/sample-demo-1-main

4. rest API call ---http://localhost:8082/repo 

Result :- 

[{"name":"Repo 1","description":"Repo 1 description","color":"bg-primary"},{"name":"Repo 2","description":"Repo 2 description","color":"bg-secondary"},{"name":"Repo 3","description":"Repo 3 description","color":"bg-accent"},{"name":"Repo 4","description":"Repo 4 description","color":"bg-warning"},{"name":"Repo 5","description":"Repo 4 description","color":"bg-warning"}]


Below are the steps to be followed during project setup .

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```


### Format the files
```bash
yarn format
# or
npm run format
```



### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).


### Some useful git command.

git init

git add <folder1> <folder2> <etc.>
  
git commit -m "Your message about the commit"
  
git remote add origin https://github.com/motilalgit/SE577.git
  
git push -u origin master
  
git push origin master
  


