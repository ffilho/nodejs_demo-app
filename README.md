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

1.  [**Assumptions**](#assumptions)
2.  [**Intro**](#intro)
    1.  [DevOps 101](#devops-basics)
    2.  [About pipelines](#pipelines)
    3.  [Tools](#tools)
3.  [**Basics**](#basics)
    1.  [Environment](#environment)
    2.  [Integration](#integration)
    3.  [Infrastructure](#infrastructure)
    4.  [Code](#code)
4.  [**Getting your hands dirty pt. I - Stack**](#pt1-stack)
    1.  [Accounts setup](#pt1-accounts)
    2.  [IDE integration](#pt1-ide)
    3.  [Travis-CI integration](#pt1-travis)
    4.  [Heroku integration](#pt1-heroku)
5.  [**Getting your hands dirty pt. II - Coding**](#pt2-coding)
    1.  [Node.js basics](#pt2-basics)
    2.  [Hello World!](#pt2-hello-world)
    3.  [A little deep into Node.js](#pt2-deep-into-node)
    4.  [Deploying on GitHub](#pt2-deploying)
6.  [**Getting your hands dirty pt. III - CI/CD**](#ptIII-ci-cd)
    1.  [Travis-CI basics](#ptIII-basics)
    2.  [Defining your infrastructure](#ptIII-infrastructure)
    3.  [Code specificities on Travis-CI](#ptIII-specificities)
    4.  [Defining your test](#ptIII-test)
7.  [**Getting your hands dirty pt. IV - PaaS**](#ptiv-paas)
    1.  [Heroku basics](#ptiv-baiscs)
    2.  [How the band plays](#ptiv-about)
    3.  [Integrating your Travis-CI repo with Heroku](#ptiv-integration)
    4.  [A little more of Heroku](#ptiv-more)
8.  [**Recap, coffee and contemplation**](#recap)
9.  [**Pulling the trigger!**](#pull-the-trigger)
10.  [**Credits, references and more**](#credits)

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
If you aren't a newcomer to DevOps you may find it boring to death. **You've been warned**.

<a name="intro"></a>
## Intro

Assuming that you are, as I am, **a complete beginner in all this DevOps thing**, I'll 
clarify some subjects before we begin, trying to make things a little straightforward to you.

First of all, let me introduce you **my main motivation** in writing this up:

Picture yourself as a old-fashion developer, trying to check how things works on this brave 
new world or maybe as a newbie, full of will and doubts about how, where and when. Despites 
the vast content available all over Internet, you'll have to grab a little from here, 
another from there **and at the end you may end with more doubts than when you first started.**

> **The first scenario - that's my case.** I quit coding around 2007 didn't updated none of my 
programming skills since then - _shame on me._

It's not about absence of information. It's all about the **excess of good information and 
how it is scattered all around**. And it can be even worst when you realize that **real good 
technical material is presented in a very bad teaching way.**

> Do the math: excess plus scattering, multiplied by lack of empathy equals "I quit".

How you can support learning if most part people of your readers **give up on learning due 
overwork trying to understand what to learn**?

> I wanted to learn about Node.js and I learnt.  
> I wanted to learn about DevOps and I learnt, also.  
> I wanted to put both things together, in a simple way and...  
> **I didn't find nothing at all!**  

Every single article or tutorial that I found lead me to a complex environment explanation or to
a very, very simple simple example on a particular tool. **Always too shallow or too deep: never 
on right size for my curiosity**.

I truly believe that information may be presented in a **much more teaching way**, replacing all information 
excess with a richer approach over the whole subject, allowing my readers to **decide wich tool or 
technology is better for their own needs**. 

>I'll have to use some tools in this case, but if you focus on **why's and how's** and never on **where**, you 
will do great **whatever stack** you choose.

If you're (again) like me, the type of people that like to see things **working first, this tutorial was 
written to you!** You will learn the basics to deploy your very first DevOps pipeline **from scratch to success**, 
identifying among all topics shown here which ones you like most and others that will **subject of further studying**.

Note that this tutorial won't make you a specialist on any subject but I assure you that you'll be **much more 
confident** on any of its topic after completing it.

> Furthermore, is better to know where to start and end rather search all over Internet, gluing answers togheter 
to fit your needs, right?

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

DevOps stands to nothing but a **best practices pack**, related to **operations and development**, 
focused on **improved communication and collaboration between whole IT ecosystem**. I mean by ecosystem 
something composed by all kinds of IT staff like infrastructure, developers, support and so on, being 
**DevOps purpose to provide better product delivery**.

In other words, DevOps is a **culture proposed to tune whole IT ecosystem to deliver products in a 
rapid, cheaper, more consistent and business aligned way**.

If you ask me how to summarize it on a single sentence it will be: **It's all about that old concept that 
claims us to to improve the means to better deliver at the ends** - *but in new clothing, customized for 
todays reality*.

Also, it's important to mention **DevOps isn't related to any specific tool or vendor**, being a concept 
focused on applications and services lifecycle.

If you won't believe me, go around and Google a little about some cool DevOps definitions and you 
realize that in the end it will relate to none beyond that previosly spoken.

> For your convenience, I've made the Googling bellow:  
> **Amazon:** <a href="https://aws.amazon.com/devops/what-is-devops/">https://aws.amazon.com/devops/what-is-devops/</a>  
> **Wikipedia:** <a href="https://en.wikipedia.org/wiki/DevOps">https://en.wikipedia.org/wiki/DevOps</a>  
> **Gartner:** <a href="https://www.gartner.com/it-glossary/devops">https://www.gartner.com/it-glossary/devops</a>  
> **Atlasian:** <a href="https://www.atlassian.com/devops">https://www.atlassian.com/devops</a>  

It's nice to say that DevOps has its origins on movements like **Agile Manifesto<sup>1</sup>** and **Lean<sup>2</sup>**, being it **both 
disruptive and delivery focused by its on nature**.

In wich concern Lean and factories, is common to **eliminate wasteful tasks to optimize deliveries, aiming less 
operationals costs and more quality on final product**.
This mindset prevails when taken to IT department, allowing different teams to work as a clock towards quality, 
always delivering quality on every single product on a daily (sometimes hourly) basis.

While Lean is focused on improvement at delivery, Agile Manifesto helped software development with - what 
can I say... **agility? Yes, a lot of this**.
By breaking down every single paradigm related with software development, **Agile gave us with speed to 
understand, prototype, code, test and deliver as never seen before**.

Keep in mind that DevOps relies on agile and **isn't possible to have a DevOps culture without Agile Methods<sup>3</sup>**, like
**Scrum or Kanban**.

> Lean was precursor to other well know methodology: Agile. In case, every agile methodology has its roots  
> somehow related with Lean. Strange how things got together overtime, didn't it?

With all that methods in one hand and a lot of support tools on another, it was just a matter of time to put 
everything togheter and let DevOps concept occured naturally.
And that was what really happend on 2003 when **Google decide to converge a lot of things together to create 
it's own way to manage their infrastructure**, creating what will be DevOps embryo: **Google Site Reliability 
Engineering<sup>4</sup>**.

Later that year Google made SRE public on book format kick-starting what we know as DevOps today. That allowed 
individuals to **understand how to use it on its own premisses**, making it a great alternative to improve delivery 
performance and product quality when compared to old-fashioned models.

Today it's being constantly updated thanks to the community, supporting IT operations all over the globe - *go on, 
Google it*.

Enough with history by now. Let's try to fix some ideias a little before taking another step:

**What can I get when running my business using DevOps?**
- Improve both collaboration and commuication between development and infrastructure areas;
- More agile deliveries, and we're talking about daily or hourly delivery cycles in here;
- Less complex coding;
- Much less failures when deploying features since your code tends to be less complex;
- Performance, resilience and reliability (both for your team and code);
- Value driven bussiness.

**What do I need to have to start my DevOps operantion?**
Despites all procedural rites and stuff, keep in mind that you'll have to:
- Automatize every little single piece of work;
- Promove configuration management practices;
- Centralize all kind of log events for complete monitoring your environment;
- Have your infrastructure as a code (in other words, start using IaC<sup>5</sup>);
- Monitor any step related with service providing or software development.

And that's it! So, let's open the box to check what's inside.

---

> <sup>1</sup>If you're looking for nothing but a cool manifesto to read, take a look at Agile Manifesto at <a href="http://agilemanifesto.org/">http://agilemanifesto.org/</a>.
> <sup>2</sup>More theory about Lean could be found at this Wikipedia article <a href="https://en.wikipedia.org/wiki/Lean_manufacturing">https://en.wikipedia.org/wiki/Lean_manufacturing</a>.
> <sup>3</sup>Again, a Wikipedia article can save the day presenting you to Agile Software Development at <a href="https://en.wikipedia.org/wiki/Agile_software_development">https://en.wikipedia.org/wiki/Agile_software_development</a>.
> <sup>4</sup>You can check SRE out, for free, on this link: <a href="https://landing.google.com/sre/book.html">https://landing.google.com/sre/book.html</a>.
> <sup>5</sup>Go on and melt your brain with this. I assure you that I'll never be the same after knowing a little about IaC on <a href="https://en.wikipedia.org/wiki/Infrastructure_as_Code">https://en.wikipedia.org/wiki/Infrastructure_as_Code</a>.