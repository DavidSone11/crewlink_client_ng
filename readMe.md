


<pre>
  <p align="center">
  <b> CREWLINK_CLIENT_NG </b></br>
  <a href="#">www.crewlink_client_ng.com</a> 
  <a href="#">www.crewlink_client_ng.com</a> 
  <a href="#">www.crewlink_client_ng.com</a>

</p>  
</pre>


<p>
<img src="http://webmpires.net/media/blogs/blog/quick-uploads/p36/banner-angularjs.jpg?mtime=1466611958" width="200" height="200"> 
<img src="https://www.codingmart.com/uploads/post/image/5811921c8ca7854ce4d6d5c6/angular2.png" width="200" height="200"> 
<img src="http://www.programmingscripts.com/wp-content/uploads/2016/01/jquery-icon.png" width="200" height="200"> 
<img src="https://scotch.io/wp-content/uploads/2014/10/learning-react-getting-started.png" width="200" height="200"> 
<img src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png" width="200" height="200"> 
<img src="http://blogs.quovantis.com/wp-content/uploads/2016/03/grunt_logo.jpg" width="200" height="200"> 
<img src="https://juststickers.in/wp-content/uploads/2014/08/NPM.jpg" width="200" height="200"> 
<img src="https://snipcart.com/media/10175/what-is-vuejs-definition.png" width="200" height="200"> 
<img src="http://backbonejs.org/docs/images/backbone.png" width="200" height="200"> 
<img src="http://emberjs.com/images/tomster-twitter-card.png" width="200" height="200"> 
</p>


# HOW TO RUN PROJECT USING COMMANDLINE IN NODE JS!!
## to run the project using npm commands!
#### npm include commands
- npm run start
- npm run start:dev
- npm run start:test
- npm run dist
- npm run bower:install

# GIT CLONE PROCESS
## how to clone your project from github.com!
- Clone the repository:[https://github.com/DavidSone11/crewlink_client_ng.git](https://github.com/DavidSone11/crewlink_client_ng.git). 
- username : your_usename
- password : your_password

# INSTALLATION PROCESS
## To install all the npm and bower dependency!
- Install the NodeJS dependencies: `npm install`.
- Install the Bower dependencies: `bower install`.
- Run the gulp build task: `gulp build`.
- Run the gulp default task: `gulp`. This will build any changes made automatically, and also run a live reload server on [http://localhost:8888](http://localhost:8888).

# GULP
## all the below commands are used for gulp clean,build,run!
```text
e:\WORKSPACE_NODEJS_V.1.0.0\crewlink_client_ng>gulp clear:project
e:\WORKSPACE_NODEJS_V.1.0.0\crewlink_client_ng> gulp build 
e:\WORKSPACE_NODEJS_V.1.0.0\crewlink_client_ng> gulp 
```


# SETUP GIT CREDENTIALS
## Set your credential for avoid typeing username and paswrd again and again while push or pull!
To start you should first add your credentials to git global store to avoid again and again typing your password. <br />
 - E:\WORKSPACE_NODEJS_V.1.0.0\crewlink_client_ng> git config --global credential.helper store <br />
 - E:\WORKSPACE_NODEJS_V.1.0.0\crewlink_client_ng> git config --global user.email "you@example.com" <br />
 - E:\WORKSPACE_NODEJS_V.1.0.0\crewlink_client_ng> git config --global user.name "Your Name" <br />

 #### Modules & Packages


**Note:**
If you get this following error, 
```text
Error: EACCES, permission denied '.config/configstore/insight-bower.yml'
You don't have access to this file.
```
changing ownner .config

```sh
sudo chown -R [user name] ~/.config
```