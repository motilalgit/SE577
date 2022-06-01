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



### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).
