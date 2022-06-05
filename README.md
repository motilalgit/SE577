# SE577-App (se577-architecture-demo)

Architecture demonstration project

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
### Docker Build command 

docker build --rm=true -t architecting-software/se577-web-demo-main -f ./Docker/Dockerfile .

### Docker run command 

docker run --rm -p 9080:9080 architecting-software/se577-web-demo-main

### check result from browser 

http://localhost:9080/


### Creating a gist

1. Sign in to GitHub.

2. Navigate to your gist home page.

3. Type an optional description and name for your gist.

4. Type the text of your gist into the gist text box.

6. Optionally, to create a public gist, click , then click Create public gist.
    Click Create secret Gist or Create public gist.






### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).
