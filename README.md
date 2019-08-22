# Nuxt Serverless Boilerplate

Stack is [nuxt.js](https://nuxtjs.org/guide/installation "nuxt.js"), with serverless settings for deployment adapted from this [serverless nuxt + nginx repo](https://github.com/adnanrahic/serverless-side-rendering-vue-nuxt "serverless nuxt + nginx repo").


### Local Setup
Run `sudo npm install` This will install dependencies

Alter the `baseUrl`  to the url of the backend on your local machine. Every alter of the `nuxt.config.js` file, you will need to rerun the application.

    axios: {
        // baseURL: 'http://localhost:8000'
        baseURL: 'https://api.yourdomain.com'
      }


Run `sudo npm run dev` This will act like a watch on any change. But if you created a new file and altered the `nuxt.config.js` file you will have to rerun again.

Recommended but not required, but please install `Vuejs dev tools Chrome plugin` [here](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en "here") for objects manipulation and debugging

Run `sls offline` to run serverless offline or locally.


### Deployment
Install [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html "aws cli")
Install node serverless `npm install -g serverless`
Take note of the environment variables on the `secrets.json`, for now it is on **dev**


    {
        "NODE_ENV": "dev",
        "DOMAIN": "dev.yourdomain.com"
    }
