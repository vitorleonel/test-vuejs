![Project preview](/.github/aplicaiton-preview.png)

## Testing the app online

I have deployed the project on Netlify so that you can easily test it. However, you can still run it locally by following the next topics.

Link: https://stalwart-hamster-5f6f1d.netlify.app

## Running locally

After cloning the repository, follow the instructions below:

1. Install the dependencies using Node.js 18 (LTS) by running the command:

```bash
npm run install
```

2. Configure the BestBuy API key by renaming the file `.env.example` to `.env` and putting the API key right there.

3. Start the applicaiton:

```bash
npm run dev
```

4. Access the follwing URL:

```
http://localhost:5173
```

Note: in case you have some error accessing the above URL, try to check in your terminal the right URL. It may be changed depending on if you have that port already being used.

## Running tests locally

1. In order to run the `unit tests`, just run the following command:

```bash
npm run test:unit
```

2. In order to run the `e2e test`s`, just run the following command:

```bash
npm run test:e2e:dev
```

Note: to execute the e2e tests you need to have the application running using the `npm run dev`.

## Some decisions I made

1. As it's a small application and I could easily handle the data, I didn't use any state management;
2. I didn't handle the API request errors, just to don't waste time at this moment. I could easily put some alerts such as SweetAlert or another elegant way to help the users and the application with the error. We could also implement some error tracking such as Sentry, in order to be aware of the errors in production;

## What I could improve with more time

1. I didn't cover some scenarios of the ProductModal component using unit tests, so I would try to cover it. However I have added E2E tests for that scenario, so it isn't too bad;
2. I would invest more time to remove the `Vue warning` about `router-link` from the terminal when we run the unit tests;
3. Improve E2E testing
4. Apply an fallback image if the product does not have or has with error

## Last but not least

1. I have configured the GitHub workflow to run the tests every time we push some changes, in case the project needs it for the CI.
2. The images that I used as well as the about us page text were made by using AI tools. For the images I used MidJourney and for the text Chat GPT.

Thanks for the opportunity. Hope to talk to you soon.
