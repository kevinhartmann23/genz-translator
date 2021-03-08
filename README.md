# GenA2Z
### Turing School of Software and Design

### Contributors
- Kevin Hartmann: [github profile](https://github.com/kevinhartmann23):[linkedIn](https://www.linkedin.com/in/kevin-hartmann/)

### Reviewers
- Jeff Duke: _mentor review_
- Jeff Kersting: _peer review_


### Deployed Site
[visit GenZ-2A here]()


## Table of Contents
1. [Introduction](#introduction)
2. [Niche Audience](#niche-audience)
3. [Instructions](#setup-instructions)
4. [How-To](#using-GenZ-translator)
5. [Challenges & Wins](#challenges-&-wins)
6. [Appreciation](#appreciation)

## Introduction
An on the go translator for millennials and older to translate slang on the go. Tired of feeling out of the loop, or not understanding what that kid just said? Getting old is hard, but we are here to make it easy. This app demonstrates my interest in making other's lives easier when adapting to new trends and environments and adding a sense of humor to it as well. The story I want to tell future employers is I am constantly adapting to changing times, this app illustrates my journey through changing careers. It's normal to feel out of the loop with something new or unfamiliar, having tools to make a topic more approachable mimics and portrays my process in becoming a software developer. Having someone explain to me what "last night was lit" meant is comparable to me learning javascript in the early stages of my Software Development Career. 

### Technologies Used
- JavaScript
- React.js
- Firebase Authentication
- React95 npm
- Urban Distionary Api - Rapid Api

## Niche Audience
The additional research and goal of this project was to consider a specific, unique audience. Some would say a **Niche Audience**. The goal was to gain experience writing anf understanding **User Personas** and **User Stories/Acceptance Criteria**.  

For more infomation view the [User Persona]() documentation 


## Setup Instructions
If you would like to simply view the current working version, just visit the [deployed site]()!

If you would like to contribute, please request contributor access and follow the steps below:

#### Clone This Repo

That's right, _clone_ not fork. You will use this repo multiple times, but you can only fork a repository once. So here is what you need to do to clone the repo and still be able to push changes to your repo:

1. Clone down this repo. Since you don't want to name your project "webpack-starter-kit", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
1. Remove the default remote: `git remote rm origin` (notice that `git remote -v` not gives you back nothing)
1. Create a new repo on GitHub with the name of `[what you want to name the repo]` to be consistent with naming
1. Copy the address that you would use to clone down this repo - something like `git@github.com:...`
1. Add this remote to your cloned down repo: `git remote add origin [address you copied in the previous step]` - do not include the brackets

Now try to commit something and push it up to your new repo. If everything is setup correctly, you should see the changes on GitHub.

#### Setup

After you have gone through the steps of cloning down this repo and editing the remote, you should clone down the repo.

Then install the library dependencies. Run:

```bash
npm install
```

#### Where to Add Your Code

##### User Auth & Local Environment
- A local environment will be required to run this app locally: 
- Add `.env.local` file to main directory outside of source
- Copy and Paste the code below into local environment file 
<details>
  <Summary>Local Environment Code</summary>
  REACT_APP_FIREBASE_API_KEY=
  REACT_APP_FIREBASE_AUTH_DOMAIN=
  REACT_APP_FIREBASE_DATABASE_URL=
  REACT_APP_FIREBASE_PROJECT_ID=
  REACT_APP_FIREBASE_STORAGE_BUCKET=
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
  REACT_APP_FIREBASE_APP_ID=
</details>

##### JavaScript

You have to be very intentional with where you add your feature code. This repo uses `React` and each component is allocated to a specific component file.

**Create all of your feature code files in the `src/components` directory.**

Since code is separated into multiple component files, you need to use the `import` and `export` syntax to share code across files and their respective folders.

##### CSS

Styling for this project is a combination of [React95 Bootstrap Styled Components](https://reactjsexample.com/refreshed-windows-95-style-ui-components-for-your-react-app/) and specific styling in dedicated styling files for each component. 

If you wish to contribute, please read the documentation for [React95](https://reactjsexample.com/refreshed-windows-95-style-ui-components-for-your-react-app/).


##### Images
Images and Icons are dedicated to the assests directory, `src/assets/icons`. The need to be added and stored there.
##### How to View Your Code in Action

In the terminal, run:

```bash
npm start
```

You will see a bunch of lines output to your terminal. One of those lines will be something like:

```bash
Project is running at http://localhost:3000/
```

Go to `http://localhost:3000/` in your browser to view your code running in the browser.

---

##### Test Files Organization

Similar to feature code, your test code needs to be put in a specific place for it to run successfully.

**Put all of your test files in the `cypress/integration` directory.** As a convention, all test filenames should end with `.spec.js`. For instance: `login.spec.js`.

Any 'dummy' test data must be stored in `cypress/fixtures` directory as a `.json` file. Any confusion please refer to the [cypress documentation](https://docs.cypress.io/guides/overview/why-cypress.html)

##### Running Your Tests
Run your test suite using the command:

```bash
npx cypress open
or
npm run cypress
```
The test results will output to cypress interface, select the test you wish to run and watch the magic of cypress in action.
---
##### Contributions

From here any additional contributions must be added as an issue, and await approval. Once approved please create a branch `feature/this-new-feature`. Submit a pull request for approval, using the given pull request template.

Branches are to be named in the following manner:
- Feature: `feature/this-new-feature`
- Test: `test/feature-being-tested`
- Bug Fix: `bug/bug-being-fixed`
- Refactor: `refactor/feature-being-refactored`

##### Deploying Site

Site deployment is through Firebase Hosting, and will be handled by the Repository owner. Please contact @kevinhartmann23 with requests to deploy.

Happy Coding!!

[Back to Top of Page](#table-of-contents)

## Using GenZ Translator

### Login Page
You will be greeted with a login page. The login page was designed to be clean and simple, allowing a user to log in with out any distractions. You can make an account with multiple authentications or use the test account.
```
username: test@test.com
password: testing
```
![login](https://media.giphy.com/media/JcyJIYNVlYpPbG7Zer/giphy.gif)

Great! Now let's explore.

**Future Iterations**
- Add `Reset` and `Forgot` Password and Email to Login
### Translator Dashboard
Now that you are inside the dashboard, a user can navigate in two ways. 

#### Sidebar Navigation
- To Search Page
- To View Your Saved Terms
- To View Emoji Guide
- To View Hip Used Terms
#### Header Menu
- View Account Information
- Visit About Page
- Logout of Account

![Dashboard Navigation]()

**Future Iterations**
- More Interactions - Set all windows to be `draggable`, and provide more of a desktop feel.
### Search Terms and Lingo
On selecting the search icon, a user can search any term they have heard and want a defintion for.

![Search Term]()

The user can then view the results. Behind the hood, GenZtoA has filtered the search results from `Urban Dictionary` by most thumbs up and is deconstructing the search results to display the top 3 popular terms, voted by the people!

For each term a definition, example, and other information is provided. A user can then save any term to their cheat sheet at anytime.

![Cheat Cheet]()

**Future Iterations**
- Add Filter to Search Results, some results can be vulgar or unexpected. By adding a filter and check for certain key terms can increase user experience
- Not allow duplicate definitions added to cheatsheet
### Deleting a Term 
While visiting their cheat sheet, a user can deside they've gotten their lingo down. They can easily remove it from the cheat sheet! 

![Delete Term]()

**Future Iterations**
- Post cheat sheet data to firestore to persist on page load, and signing back in.
### Hip Terms & Emoji Guide
There are some quick guides for a user to reference as well! Check out the `Hip Terms` or `Emoji Guide` features as well!

![Hip & Emoji](https://media.giphy.com/media/igkpylE2wZSxJACTV3/giphy.gif)

**Future Iterations**
- Create a database to update hipterms on amount of searches throughout the app, and highest 'thumbs up' from urban dictionary api.
### Account Information
A user can also view and change their account information but visiting the Account Information page. If a user signs in with an external account some of their information will be added to their GenZtoA account; name, icon. A user can also view some other specified account information, and update their user name. 

![Account](https://media.giphy.com/media/GSVix8LQrxgrA2sMbF/giphy.gif)

**Future Iterations**
- Verify unverified emails, with firebase email verification.
- Change Password functionality
- Update email funcationality
- Add a user photo

All finished? Logout in the dropdown menu.

[Back to Top of Page](#table-of-contents)

## Challenges & Wins
### Challenges
- **Responsiveness & Styling Compromise:** Choosing to use React95 was a lot of fun, but it is rather outdated and missing a lot of responsiveness. This has caused making the app responsiveness a little more difficult than styling the components myself. 

### Wins/Reflections
- **I truly enjoyed working on this project**
- **Organization and Planning:** From all of my project thus far, this was the most planned and organized I have started, continued, and finished on any project. I found that by doing this my stress level was kept at an all time low during a tight dead line, and I worked extremely efficiently within a 5 day deadline. 
- **Developing My Understanding and Skill Set:** I have grown comfortable and developed my skills in React on this project. Getting to hone in my understanding of `Global State` using `useContext`, and other react hooks (useEffect, useState).
- **Adapted to different version control:** When setting the use of `React95` the version of `React` I began with was  newer than `React95`. Learning about this issue with a dependency, changing the version control, and dealing with the changes in certain use cases was a great learning experience. It taught me to be adaptable on an older version of a technology and adapt to continue to deliver a great project.

## Appreciation 

- A special thanks to my mentor @Jeff-Duke for his continous support and guidance.
- My instructors - For the freedom and opportunity to explore and create new and exciting projects on a weekly basis.
- My cohort mates, the rubberducks, the positive influencers, idea boards, ecpecially @JeffKersting for conducting a peer review on this project. We are in this together!

