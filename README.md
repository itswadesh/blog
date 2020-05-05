![version](https://img.shields.io/badge/node-v12.x-blue.svg)
![Branch stable](https://img.shields.io/badge/stable%20branch-master-blue.svg)
![Branch Develop](https://img.shields.io/badge/dev%20branch-dev-blue.svg)
<a href="https://codenx.slack.com" target="blank">![Branch Develop](https://img.shields.io/badge/community%20chat-slack-FF1493.svg)</a>

# e-commerce blogging template

# Built for speed

> Following are the test results when all servers (Node, Static Server, Client) give a ping response <100 ms. The demo app 2lessons.info is hosted at Mumbai (India), If you are testing from another country, the results my vary.

> Solution to the above issue is to use a CDN.

## Google Lighthouse/Pagespeed Audit Score (Home Page)

  <img use:lazyload  src="https://github.com/itswadesh/blog/blob/master/static/light-house.jpg?raw=true" alt />
  
  ## Google Lighthouse/Pagespeed Audit Score (Post Page)
  <img use:lazyload  src="https://github.com/itswadesh/blog/blob/master/static/light-house-detail.jpg?raw=true" alt />

# What is 2lessons?

- 2lessons.info is an ecommerce news website created using this blog template.
- Uses now.sh for serverless api interface

# Installation

Install - [NodeJS](https://nodejs.org/en/) - [Yarn](https://yarnpkg.com/en/) - [Git](https://git-scm.com/)

```
git clone https://github.com/itswadesh/blog.git
cd blog
yarn
yarn dev
```

Thats all !

Open http://localhost:4000 on chrome. Your app should be live

# Deployment

```
npm i -g now-cli
now
```
