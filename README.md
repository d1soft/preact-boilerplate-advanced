# Preact Boilerplate / Starter Kit [![Build Status](https://travis-ci.org/developit/preact-boilerplate.svg?branch=master)](https://travis-ci.org/developit/preact-boilerplate) [![Preact Slack Community](https://preact-slack.now.sh/badge.svg)](https://preact-slack.now.sh)

:guitar: Advanced ready-to-rock [Preact] starter project, powered by [webpack]. **[(View Demo)](https://preact-boilerplate.surge.sh)**

Based on [preact-boilerplate](https://github.com/developit/preact-boilerplate).

# Quick-Start Guide

- [Installation](#installation)
- [Development Workflow](#development-workflow)
- [Information](#information)


## Installation

**1. Clone this repo:**

```sh
git clone --depth 1 https://github.com/developit/preact-boilerplate.git my-app
cd my-app
```


**2. Make it your own:**

```sh
rm -rf .git && git init && npm init
```

> :information_source: This re-initializes the repo and sets up your NPM project.


**3. Install the dependencies:**

```sh
npm install
```

> You're done installing! Now let's get started developing.



## Development Workflow


**4. Start a live-reload development server:**

```sh
npm run dev
```

> This is a full web server nicely suited to your project. Any time you make changes within the `src` directory, it will rebuild and even refresh your browser.

**5. Testing with `mocha`, `karma`, `chai`, `sinon` via `phantomjs`:**

```sh
npm test
```

> 🌟 This also instruments the code in `src/` using [isparta](https://github.com/douglasduteil/isparta), giving you pretty code coverage statistics at the end of your tests! If you want to see detailed coverage information, a full HTML report is placed into `coverage/`.

**6. Generate a production build in `./build`:**

```sh
npm run build
```

> You can now deploy the contents of the `build` directory to production!
>
> **[Surge.sh](https://surge.sh) Example:** `surge ./build -d my-app.surge.sh`
> 
> **[Netlify](https://www.netlify.com/docs/cli/) Example:** `netlify deploy`
>
> [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/developit/preact-boilerplate)


**5. Start local production server with [serve](https://github.com/zeit/serve):**

```sh
npm start
```

> This is to simulate a production (CDN) server with gzip. It just serves up the contents of `./build`.



---


## Information

This boilerplate includes:  

- [preact-router-nested](https://www.npmjs.com/package/preact-router-nested) - tunned preact-router version with nesting
- [preact-async-route](https://www.npmjs.com/package/preact-async-route) - async load pages
- [mobx-preact](https://www.npmjs.com/package/mobx-preact) - components state managament
- [superagent(-pomise)](https://www.npmjs.com/package/superagent-promise) - HTTP client


## License

MIT


[Preact]: https://github.com/developit/preact
[preact-compat]: https://github.com/developit/preact-compat
[webpack]: https://webpack.github.io
