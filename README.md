# Random Result Generator

![Multiple Device Demo](assets/images/readme/showcase.webp "Multiple Device Demo")

## Live Site
Random Result Generator - [https://bobwritescode.github.io/ci-Project2](https://bobwritescode.github.io/ci-Project2)

## Repository
[https://github.com/BobWritesCode/ci-Project2](https://github.com/BobWritesCode/ci-Project2)

***
## Table of Contents
- [Objective](#Objective)
- [Brief](#Brief)
- [User Experience Design](#User-Experience-Design)
    - [User Requirements](#User-Requirements)
- [Initial Concept](#Initial-Concept)
    - [Wireframes](#Wireframes)
    - [Colour Scheme](#Colour-Scheme)
    - [Typography](#Typography)
    - [Imagery](#Imagery)
- [Features](#Features)
    - [Existing Features](#Existing-Features)
    - [Features Left to Implement](#Features-Left-to-Implement)
- [Technologies Used](#Technologies-Used)
- [Testing](#Testing)
- [Bugs](#Bugs)
    - [Current](#Current)
    - [Resolved](#Resolved)
- [Deployment](#Deployment)
- [Credits](#Credits)
    - [Code](#Content)
    - [Media](#Media)
    - [Miscellaneous](#Miscellaneous)

***
## Objective 

Random Result Generator is a site to help the end user be able to run a raffle type giveaway or just to help make a choice. The site has a range of multiple targets including companies looking to provide a virtual giveaway live, all the way to someone who just wants to make a decision on what takeaway they are having that evening. The site has a lot of potential to go further from where it currently is and this is mentioned in the [Features Left to Implement](#Features-Left-to-Implement) of this README.

***
## Brief

My goals for the site are to have:
- a generator that provides random results based on the user's input.
- a way for the user to input their own potential results.
- a way for the user to customise how many results they get from the generator.
- a way for the user to customise the generator to fit their own brand.
- a way for the user to easily modify thier choices.

***
## User Experience Design

***
### User Requirements

***
## Initial Concept

### Wireframes

### Colour Scheme

### Typography


### Imagery

No imagery is planned to be used.

***
## Features
Random Result Generator is filled with features for the end user and there is a lot of stuff also happening in the background. In this section we will breakddown  the different features and what is happening in the background.

### Existing Features

#### Desktop and Mobile viewing

It was important to make sure that this site worked across mobile and desktop. Using Flex and a combination of viewport typography the site displays very well across different screensizes.

  - **Desktop**\
  ![Desktop Snapshot](/assets/images/readme/dekstop-snapshot.webp)\
  
  - **Mobile**\
  ![Mobile Snapshot](/assets/images/readme/mobile-snapshot.webp)


#### User options

![User options - Part 1](/assets/images/readme/options_1.webp)\
**"Edit options and how they appear:"**\
The first section is designed for the user to input their potential outcomes and some basic options on how the results will output.

  - **"Enter potential results for Random Result Regenerator"**\
    In this section the user can input their own options to what they wish to get random results for. For the ease of testing I have provided some sample options as an example. The user just needs to make sure each option is separted with a comma and the last option on the list does not end in a comma.

  - **"How many final results:"**\
    User can decide how many results will appear. Using CSS and JS I have made sure that the generator scales the divs and font size appropriately.

  - **"How long each result randomises before showing final result:"**\
    User can decide how long between each result until the next one is shown. As default it is set to 2 seconds.

  - **"Can an option win multiple times:"**\
    User can decide if options from their list can appear multiple times in the same random generated results.

  - ![User options - Part 2](/assets/images/readme/options_2.webp)

  - **"Edit your text you wish to deiplay:"**\
    This section is more dedicated to user text input for the Generator, what they want to see as the Title, the text they want to display in the center before starting the randomising and the tail text at the bottom of the screen.
    ![Snapshot of generator](/assets/images/readme/generator_1.webp)

  - **Preset template select**\
    ![Preset template select](/assets/images/readme/preset.gif)\
    The user can choose from currently 1 or 3 preset color templates. Using CSS and JS there is onscreen feedback to the user by a green border apeparing around the selected option.

  - **User colour picker**\
    ![User colour picker](/assets/images/readme/colour-picker.gif)\
    The user can decided what colour scheme they wish to have for the generator. This can be very helpful if the user wants to keep it on brand. 

  - **User background picker**\
    ![User background picker](/assets/images/readme/background-picker.gif)\
    The user can pick either a solid colour background, which they can use the color picker to choose. This is useful if the user wants to display results on a livestream and have a transparant background using chroma key[^1]. Or there are some patterend backgrounds created using CSS (Credit to [SVG Backgrounds](https://www.svgbackgrounds.com/)).

  - **Optional fullscreen**\
    ![Optional fullscreen](/assets/images/readme/user-fullscreen.webp)\
    The user has the option to open the generator fullscreen. This could be useful if the results are being revealed in person and the results are being shown on a big screen to an audience of people.

  - **Button - Load the generator**\
    ![Button - Load the generator](/assets/images/readme/button-load.webp)\
    This button will run the JS function loadGenerator().

  - **Footer**\
    ![Footer](/assets/images/readme/footer.webp)\
    The footer is just to help the user experience and let them know they have reach the bottom of the page.

  - **Error Handling**\
    ![Error Handling](/assets/images/readme/error-handling.webp)\
    JavaScript makes sure there are no errors within the form before trying to load the generator in the function formValidation().\
    Any errors identified an appropriate error message is shown and the field is highlisted to the user to assist in easier correction.

#### Generator

  - **Button - Start**\
    ![Button - Start](/assets/images/readme/button-start.webp)\
    This button runs the JS function startGenerator().
    The startGenerator() runs the countdown() function.

  - **Button - Close**\
    ![Button - Close](/assets/images/readme/button-close.webp)\
    This button will run the JS function exitGenerator().
    The exitGenerator() function will hide the generator element and display the initial front end elements.

  - **Countdown**\
    ![Countdown](/assets/images/readme/gen-countdown.gif)\
    Once the countdown has reached zero, the coundown() function will run the createRandomResults() function.

  - **Randomising results**\
    ![Randomising animation](/assets/images/readme/gen-random.gif)\
    Using the function resultRandomAnimFunc(). Which takes all the options the user input in the textarea and randonly showing them until the counter runs out. At which point the transition delay time would have reached 0 set by show1By1(). 

  - **Result reveal**\
    ![Reveal animation](/assets/images/readme/gen-reveal.gif)\
    Once the random animation has stopped the real result will be revealed and change the color to the final colour set by the user or preset.

  - **Tested with 5000 entries**\
    ![User options - Part1](/assets/images/readme/5000.webp)\
    I tested with 5000 potential results in 1 generator and ran into no issues with the code being able to handle a large amount of results in 1 array.

### Features Left to Implement

The random result generator future possible features are potentially endless. Here are just some of the ideas I have for this site:
  - Image upload : Allow users to upload their own image for as a background and / or company logo.
  - Premium features : Provide premium features so the site can start to earn a passive income.
  - Share : Have a shareable link for each generator that will either send with or without already determined results.
  - Improved result layout : Currently results are shown in a column structure only. Future updates will have the results in a grid format that could be set for the user
  - More ways to reveal results : The user will be able to choose how the results are revealed instead of the current random animation. i.e. If they want to have the results scroll down the page and stop at the final result.
  - Countdown for each result : An option where the user can have a countdown until the final result appears while the randomising animation is happneing. This could be useful if the user puts in a longer timer to reveal the result.

***
## Technologies Used

**HTML** for the front end. This is the structure of the site of what the end-user sees in their browswer.

**CSS** for the front end. This provides the style, the colours, the font, everything that the end-user see in their broswer.

**JavaScript** as the engine. Javascript plays a very heavy role in this site. It is responsible for making sure everything is displayed correctly, and the generator works as intended.


***
## Testing 

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)

### Google Chrome Lighthouse

  ![Lighthouse overall scores](/assets/images/readme/lighthouse-score.webp)\
  ![Lighthouse performance metrics](/assets/images/readme/lighthouse-performance.webp)\

### Screen Size

The site has been made to be responsive for all screen sizes, including screen size width of 320px.

### Browsers

- PC 
  - Goggle Chrome (Version 105.0.5195.54 (Official Build) (64-bit))
    - No issues identified
  - Microsoft Edge (Version 104.0.1293.70 (Official build) (64-bit))
    - No issues identified
  - Opera (Version 90.0.4480.54)
    - No issues identified
  - Firefox (Version 104.0.1 (64-bit))
    - Just some styling decrepencies but no issues identified with functionalty or useability.
- Android Phone - Goggle Chrome (Version 105.0.5195.68)
  - No issues identified

### Bugs

#### Unfixed

Through testing all modern browsers have been able to runt he site with no problems to functionality. Though while testing Firefox there were some minor css styling issues
  - `<hr>` line was not white
  - Some text aligned to left instead of centre.
As these do not currently affect the functionality of the site their is no immediate need to fix but will be something to look into for the future if this project moves forward to becoming a fully functional site.

#### Resolved

There are currently no functionality bugs I am aware of in the modern browsers I have tested.

#### Troubleshooting errors

Throughout the projects while coding in JavaScript I have come across errors in coding and got unexpected results. Which I have troubleshoot by using common practices like `console.log()` in combbination with Google Chrome console.
I also used Google search engine to help find solutions from popular websites like [Stack Overflow](https://stackoverflow.com/).

***
## Deployment

### GitHub Pages
The project was deployed to GitHub Pages using these steps:

1. Log in to GitHub and go to the [GitHub Repository](https://github.com/BobWritesCode/ci-Project2)
2. Locate the Navbar at the top of the Repository (not top of page). Click the Settings tab.
3. Locate the Navbar on the left-hand side of the page. Click the "Pages" section (under 'Code and automation').
4. Under "Source", click the dropdown called "None" and select "main". Click save.
5. The page will automatically refresh.
6. A notification will appear at the top of the page with the [link](https://bobwritescode.github.io/ci-Project2/) to the deployed site. You can return to this GitHub Pages section to access the link.

### Forking the GitHub Repository
Forks are used to propose changes to someone else's project or to use someone else's project as a starting point for your own idea. By forking the GitHub Repository you make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository.

To Fork a GitHub Repository:
1. Log in to GitHub and go to the [GitHub Repository](https://github.com/BobWritesCode/ci-Project2)
2. Locate the Fork button in the top-right corner of the page, click Fork.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone
You will now have a fork of the repository, but you don't have the files in that repository locally on your computer.

To make a local clone:

1. Log in to GitHub and go to the [GitHub Repository](https://github.com/BobWritesCode/ci-Project2)
2. Above the list of files, click 'Code'.
3. To clone the repository using HTTPS, under "Clone with HTTPS", click the 'Copy' icon. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click the 'Copy' icon. To clone a repository using GitHub CLI, click Use GitHub CLI, then click the 'Copy' icon.
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory.
6. Type git clone, and then paste the URL you copied earlier. It will look like this, with your GitHub AE username instead of YOUR-USERNAME:

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `ci-Project1`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://docs.github.com/en/github-ae@latest/get-started/quickstart/fork-a-repo) for the GitHub quick start guide with images and more detailed explanations of the above process.

***
## Credits 

### Content

- All content is original and written by me.

### Code

- Pattern CSS backgrounds - [SVG Backgrounds](https://www.svgbackgrounds.com/)
- Fullscreen - [W3 Schools](https://www.w3schools.com/howto/howto_js_fullscreen.asp)

### Media

- Favicon generated using [Favicon Generator](https://favicon.io/favicon-generator/)

***
[^1]: [Wikipedia - Chroma Key](https://en.wikipedia.org/wiki/Chroma_key).