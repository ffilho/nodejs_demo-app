# DevOps 101 - Pipeline with GitHub, Node.js and Travis-CI.

<div align="center">
    <a href="https://travis-ci.org/"><img src="https://travis-ci.com/images/logos/TravisCI-Mascot-1.svg" width="175"></a>
</div>
<br />
<div align="center">
	[![Build Status](https://travis-ci.org/ffilho/nodejs_demo-app.svg?branch=master)](https://travis-ci.org/ffilho/nodejs_demo-app)
</div>

A quick guide for a full operational *DevOps* pipeline for beginners.

##  Index
1.	[Assumptions] (#assumptions)
2.	[Intro]	(#intro)

<a name="assumptions"></a>
## Assumptions?

For this tutorial, I'll assume that you'll have both:

- **Theory**: basic DevOps practices knowledge;
- **Infrastructure**: local or SaaS git installation;
- **CLI**: basic git commands knowledge;
- **Code**: Some programming background;
- **Patience**: node.js sometimes can be harsh;
- **Time**: keep in mind that CI/CI can be challenging sometimes.

<a name="intro"></a>
## Intro?

For this tutorial, I'll assume that you'll have both:

- **Theory**: basic DevOps practices knowledge;
- **Infrastructure**: local or SaaS git installation;
- **CLI**: basic git commands knowledge;
- **Code**: Some programming background;
- **Patience**: node.js sometimes can be harsh;
- **Time**: keep in mind that CI/CI can be challenging sometimes.



_________________________________________________________________



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


https://softwareengineering.stackexchange.com/questions/163506/how-does-one-handle-sensitive-data-when-using-github-and-heroku
https://developer.spotify.com/documentation/web-api/quick-start/
https://docs.travis-ci.com/user/deployment/heroku/
https://devcenter.heroku.com/articles/deploying-nodejs
https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile
https://devcenter.heroku.com/articles/nodejs-support
https://github.com/dwyl/learn-travis
https://openclassrooms.com/courses/ultra-fast-applications-using-node-js/creating-your-first-app-with-node-js
https://medium.com/code-prestige/deployando-seu-projeto-em-node-js-no-heroku-b49a6ae7dbc3