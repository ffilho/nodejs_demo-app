# nodejs_demo-app
Simple Node.js application intended to test a DevOps pipeline between GitHub, Travis and Heroku.

# Travis-CI push build badge
[![Build Status](https://travis-ci.org/ffilho/nodejs_demo-app.svg?branch=master)](https://travis-ci.org/ffilho/nodejs_demo-app)

.travis.yml: Travis-CI integration
server.js: Demo application
package.json: Heroku Node.js support and configuration file
Procfile: pecifies the commands that are executed by the app’s Heroku's dynos

1. Github repo (w/ license)
2. .travis.yml file
3. App server.js
4. package.json file
5. sync travis
6. Procfile