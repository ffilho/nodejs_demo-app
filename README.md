# DevOps 101 - Pipeline with GitHub, Node.js and Travis-CI.

<div align="center">
  <a href="https://travis-ci.org/">
    <img src="https://travis-ci.com/images/logos/TravisCI-Mascot-1.svg" width="175">
  </a>
</div>

<br />

<div align="center">

[![Build Status](https://travis-ci.org/ffilho/nodejs_demo-app.svg?branch=master)](https://travis-ci.org/ffilho/nodejs_demo-app)
	
</div>

A quick guide for a full operational **DevOps** pipeline for beginners.

##  Index

1.  [Assumptions](#assumptions)
2.  [Intro](#intro)
    1.  [DevOps 101](#devops-basics)
    2.  [About pipelines](#pipelines)
    3.  [Tools](#tools)
3.  [Basics](#basics)
    1.  [Environment](#environment)
    2.  [Integration](#integration)
    3.  [Infrastructure](#infrastructure)
    4.  [Code](#code)
4.  [Getting your hands dirty pt. I - Stack](#pt1-stack)
    1.  [Accounts setup](#pt1-accounts)
    2.  [IDE integration](#pt1-ide)
    3.  [Travis-CI integration](#pt1-travis)
    4.  [Heroku integration](#pt1-heroku)
5.  [Getting your hands dirty pt. II - Coding](#pt2-coding)
    1.  [Node.js basics](#pt2-basics)
    2.  [Hello World!](#pt2-hello-world)
    3.  [A little deep into Node.js](#pt2-deep-into-node)
    4.  [Deploying on GitHub](#pt2-deploying)
6.  [Getting your hands dirty pt. III - CI/CD](#ptIII-ci-cd)
    1.  [Travis-CI basics](#ptIII-basics)
    2.  [Defining your infrastructure](#ptIII-infrastructure)
    3.  [Code specificities on Travis-CI](#ptIII-specificities)
    4.  [Defining your test](#ptIII-test)
7.  [Getting your hands dirty pt. IV - PaaS](#ptiv-paas)
    1.  [Heroku basics](#ptiv-baiscs)
    2.  [How the band plays](#ptiv-about)
    3.  [Integrating your Travis-CI repo with Heroku](#ptiv-integration)
    4.  [A little more of Heroku](#ptiv-more)
8.  [Recap, coffee and contemplation](#recap)
9.  [Pulling the trigger!](#pull-the-trigger)
10.  [Credits, references and more](#credits)

<a name="assumptions"></a>
## Assumptions

For this tutorial, I'll assume that you'll have, at least:

- **Theory**: very basic knowledge about DevOps (meaning, purpose and main characteristcs);
- **Infrastructure**: a place to play around, like a local workstation or SaaS where you can deploy a git installation;
- **CLI**: let's assume that you can operate your own git instance (pull, commit and push at least);
- **Code**: it's nice to have some programming background;
- **Patience**: node.js sometimes can be harsh;
- **Time**: keep in mind that CI/CI can be challenging sometimes.

> **Disclaimer:** This tutorial is far, far away for being a full reference on any shown technology or tool, being only 
a quick-start guide for beginners. If you aren't a newcomer to DevOps you may find it boring as death. You've been warned.

<a name="intro"></a>
## Intro