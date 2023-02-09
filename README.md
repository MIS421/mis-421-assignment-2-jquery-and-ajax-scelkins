# MIS 421 Assignment 2: JQuery and AJAX

>For this assignment, you will be creating a Bing Search API using your Microsoft Azure account and using it to construct a simple web search site. Follow these steps to create the Search API:
  1. Go to https://portal.azure.com/, login to your account if prompted.
  2. Click 'Create a resource' from the menu on the left.
  3. On the next page, select the 'AI + Machine Learning' category.
  4. Click 'Bing Search v7' from the options on the right.
  5. On the next page, fill out the required info accordingly:
     1. Name: mybamaID-421-search-api
     2. Subscription: Whatever your assignment 2 subscription displays as
     3. Pricing tier: F1
     4. Resource group: Click 'Create new' under the dropdown menu, give the new group a name and click OK.
     5. Resource group location: (US) Central US
  6. Click Create at the bottom of the page. Wait for Azure to deploy the API.
  7. Click the 'Go to resource' button once it appears.
  8. Take note of your API key and endpoint URL, this is how you will access your API through your site.

>Once your API is created, clone down this repo. You have been provided with CSS, JS, and HTML template files, all CSS and JS code must be contained within their respective files. Once cloned to your machine, employ the following features:
- Include JQuery, JQuery UI, and a JQuery UI theme via CDN links.
  - These links can be found [here](https://developers.google.com/speed/libraries/).
  - You should use a SRI hash for each of these CDN links like the example given in class. [Srihash](srihash.org) is an excellent tool for this.
- HTML:
  - [ ] A header with the name of your 'search engine' (be creative).
  - [ ] A title of the same name.
  - [ ] A text box with an ID of 'query'.
  - [ ] A button with a value of 'Search' under your text box.
  - [ ] A second button that will display the current time.
  - [ ] An empty div with an ID of 'searchResults'.
  - [ ] A second empty div with an ID of 'time'.
- CSS:
  - [ ] Set the background of the page to an image of your choice. ([Unsplash](unsplash.com) is a great resource for free images)
  - [ ] Set the visibility of the 'searchResults' and 'time' divs to hidden.
  - [ ] Style the rest of the page however you see fit. points will be lost if little or no effort is given in styling your site.
- JS:
  - [ ] Replace 'my-api-url' under the ajax call with the url from your search API.
  - [ ] Replace 'my-api-key' next to 'Ocp-Apim-Subscription-Key' with the api key from your search API.
  - [ ] Write a function that calls the 'apiSearch' function on a click of your search button.
  - [ ] Write a function that changes the background image of your site on a click of your search engine name.
  - [ ] Write a function that gets the current time (formatted HH:MM), loads the result into your 'time' div, and displays the div as a JQuery UI dialog window on a click of your time button.
- BONUS:
  - [ ] Implement a 'I'm feeling lucky' button. This button should take the user to the first web page returned from your search API.
  - [ ] Modify the function that changes your background image so that each click cycles through two different images without refreshing the page.
- Deploy your site to Azure, following the instructions provided on Blackboard.

> It is best to take this little pieces at a time, step by step, as not to get confused by too many things at once. W3 Schools is an amazing resource, and has examples on everything above if you get stuck.
