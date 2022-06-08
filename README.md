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

### What is OAuth?

OAuth is an open-standard authorization protocol or framework that provides applications the ability for “secure designated access.” For example, you can tell Facebook that it’s OK for ESPN.com to access your profile or post updates to your timeline without having to give ESPN your Facebook password. This minimizes risk in a major way: In the event ESPN suffers a breach, your Facebook password remains safe

### Creating an access token

1. In the upper-right corner of any page, click your profile photo, then click Settings.

2. In the left sidebar, click Developer settings.

3. In the left sidebar, click Personal access tokens.

4. Click Generate new token.

5 .Give your token a descriptive name.

### How to authenticate using auth token ? 

The process works like this:

Request: The person asks for access to a server or protected resource. That could involve a login with a password, or it could involve some other process you specify.

Verification: The server determines that the person should have access. That could involve checking the password against the username, or it could involve another process you specify.

Tokens: The server communicates with the authentication device, like a ring, key, phone, or similar device. After verification, the server issues a token and passes it to the user.

Storage: The token sits within the user's browser while work continues.


If the user attempts to visit a different part of the server, the token communicates with the server again. Access is granted or denied based on the token.

Administrators set limits on tokens. You could allow a one-use token that is immediately destroyed when the person logs out. Or you could set the token to self-destruct at the end of a specified time period

### AXIOS code example to authenticate  ? 

const api = 'https://api.github.com/users/motilalgit/repos';
const token = 'XXXXXXXXXXXX';

onMounted(async () => {
  const res = await axios.get(api, {
    headers: { Authorization: `Bearer ${token}` },
  });
  rows.value = [];
  const rList = res.data as rowType[];
  const resList = rList.map((row) => {
    const mappedRow: rowType = {
      id: row.id,
      name: row.name,
      url: row.url,
      language: row.language,
      updated_at: row.updated_at,
    };
    return mappedRow;
  });
  console.log('DEBUG', resList);
  rows.value = resList;
});




### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).
