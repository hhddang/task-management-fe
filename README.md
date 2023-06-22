# TASK MANAGEMENT APP

_Front-end repo, Vercel depolying_

## Welcome

Task Management App is inspired by Taiga. <br/>
This reposiory is front-end of the website. <br/>
I build this app within my internship at Kyanon Digital company <br/>

## App structure

### Back-end

Database: PostgreSQL <br/>
Database hosted at https://elephantsql.com <br/>

API server: Express.js <br/>
Server deployed at https://cyclic.sh <br/>

Repo: https://github.com/hhddang/task-management-server <br/>

### Front-end

Describes below

## Technologies

React.js (JS library) <br/>
Styled-components (CSS framework) <br/>
Testing library <br/>
Cypress (E2E testing) <br/>

## How to Deploy to Vercel

### Login to Vercel

Vercle allows logging in through Githut, Gitlab,... <br/>
*Note: Vercel not allow self host Gitlab <br/>

### Connect to repository and depoly

Vercle shall shows a list of repositories of your Git account after connecting. You need to: <br/>
1. Select repository you want to deploy <br/>
2. Name your deployed app <br/>
3. Set root directory of your repo so Vercle know which folder used for deploying <br/>
4. Add environment variables such as back-end URL (if any) <br/>
5. Hit "Deploy" button <br/>

Congratulations! Your deploy is finished. <br/>

### After deploying
You will receive a domain URL of your app. E.g. https://task-management-fe-2.vercel.app. Let's view your web. <br/>
Now, whenever you push new commit to Git. Vercle will automatedly build and deploy new artifact. <br/>

Enjoy ~ . ~ <br/>
