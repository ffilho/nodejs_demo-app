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

A quick guide for a full operational **DevOps** pipeline for complete beginners.

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

For this tutorial I'll assume that you'll have, at least:

- **Theory**: very basic knowledge about DevOps (meaning, purpose and main characteristics);
- **Infrastructure**: a place to play around like a workstation or SaaS where you can deploy 
a git installation;
- **CLI**: ability to operate your own git instance (pull, commit and push at least);
- **Code**: some programming background (JavaScript is nice in this case!);
- **Patience**: node.js sometimes can be harsh;
- **Time**: keep in mind that CI/CD can be challenging sometimes.

> **Disclaimer:** This tutorial is far, far away for being a full reference on 
any shown technology or tool, being only a quick-start guide for beginners. 
If you aren't a newcomer to DevOps you may find it boring to death. You've been warned.

<a name="intro"></a>
## Intro

Assuming that you are, as I am, **a complete beginner in all this DevOps thing**, I'll 
clarify some subjects here, trying to make things a little straightforward to you.
First of all, let me introduce you my main motivation in writing this up:

Picture yourself as a old-fashion developer, trying to see how things works on this brave 
new world or else as newbie, full of will and doubts about how, where and when. Despites 
the vast content available all over Internet, you'll have to grab a little from here, 
another from there **and at the end you may end with more doubts than when you first started.**

> **The first scenario: that's my case.** I quit coding around 2007 didn't updated none of my 
programming skills since then - _until now._

It's not about absence of information. It's all about the **excess of good and scattered 
information** and how they're presented to people who are urging to learn.

If you're (again) like me, the type of people that like to see things working 
first and then aim to specific doubts to better understand its inner works, you may be in 
trouble - _until now._

>I wanted to learn about Node.js and I learnt.
I wanted to learn about DevOps and I learnt, also.
I wanted to put both things together, in a simple way and **I didn't find nothing at all about 
it!**

Every single article or tutorial that I found lead me to complex environment or a too simple 
example on a particular tool. **Always too shallow or too deep** - never on right size for my 
curiosity.

That's my main concern in this specific scope regards about how information is presented to 
the public. I truly believe that it may be presented in a _much more teaching way, replacing 
all information excess with a richer approach over the whole subject_.

Sometimes, you just wanna test a new concept or idea, from the beginning to the end, just 
to see something working. **And that's the case here**.

This tutorial won't make you a specialist on any subject but I assure you that you'll be 
**much more confident** on any of its topic after completing it.

> Furthermore, is better to know where to start and end rather search all over Internet, 
gluing answers togheter to fit your needs.

That said, in this tutorial you'll learn:
- The basic about DevOps pipelines;
- Some cool stuff about support tools;
- Continous Integration and Continous Delivery;
- A nice "Hello World" program with Node.js.

Having this knowledege you'll be able to set **your own automated DevOps pipeline 
encompassing GitHub and your own Node.js application with Travis-CI and Heroku!** 

Isn't cool? So, lets get our hands dirty!

<a name="devops-basics"></a>
### DevOps 101

DevOps stands to nothing but best practices pack related to operations and development, focused
on improved communication and collaboration between whole IT ecosystem, composed both by IT 
professionals, developers and support staff, being it aimed exclusively on better product delivery.

In other words, DevOps is a culture proposed to tune whole IT ecosystem to deliver products in a 
rapid, cheaper, more consistent and real-propose aligned way.

It's all about that old concept where we need to improve the means to better deliver in the ends. 
Also, It isn't related to any specific tool or vendor being just a concept, more like an idea focused 
on applications and services lifecycle.

If you won't believe me, go around and Google a little about some cool DevOps definitions and you 
realize that in the end it will relate to none beyond that previosly spoken.

>Wan't see?
**Amazon:** <a href="https://aws.amazon.com/devops/what-is-devops/">https://aws.amazon.com/devops/what-is-devops/</a>
**Wikipedia:** <a href="https://en.wikipedia.org/wiki/DevOps">https://en.wikipedia.org/wiki/DevOps</a>
**Gartner:** <a href="https://www.gartner.com/it-glossary/devops">https://www.gartner.com/it-glossary/devops</a>
**Atlasian:** <a href="https://www.atlassian.com/devops">https://www.atlassian.com/devops</a>

It's nice to say that DevOps has its origins on movements like Agile Manifesto and Lean, being it both 
disruptive and delivery focused.

In wich concern Lean and shop floors is common to eliminate wasteful tasks to optimize deliveries, aiming
on less operationals costs and more quality on final product. This mindset prevails also on IT department, 
allowing different teams to work as a clock towards quality, delivering quality on every product on a daily 
(sometimes hourly) basis.

While Lean is focused on improvement at delivery, Agile Manifesto helped software development with - what 
can I say - agility? Yes, a lot of this.
By breaking down every single paradigm related with software development, Agile gave us with velocity to 
understand, prototype, code, test and deliver as never seen before.

This methods (among other methods and methodologies not related here) were around for a long time, being 
used for specific purposes - none of they related to put IT team altogether aiming to improve delivery.

By having that methods and a lot of support tools to deploy them, DevOps concept went naturally over years, 
but not until 2003 when Google decide to converge a lot of things together to create it's own way to manage 
their infrastructure, creating what will be DevOps embryo: Google Site Reliability Engineering.

After that, Google made SRE public on book format (available here <a href="https://landing.google.com/sre/
book.html">https://landing.google.com/sre/book.html</a>) and DevOps concept were born, being constantly 
updated overtime, thanks to community and several support tools created to make things even easier.