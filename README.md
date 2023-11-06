# NASAapp



	REQUIREMENTS
	------------

1.)  Flask API Backend
2.)  React Frontend
3.)  2+ one to many relationships
4.)  1+ many to many relationships
5.)  Submit to many to many
6.)  Full CRUD
7.)  Use Formik on all inputs <-Optional
8.)  3+ Client side routes
9.)  Navbar
10.) Connect the client using fetch()
11.) Login page (reset password - does it need a separate component?)
12.) Homepage
13.) Gallery
14.) User Gallery
15.) APOD Card
16.) App.js
17.) Search/Filters
18.) Signup


# App:
Imports: The component imports various modules and components, including React, useState, useEffect from React, and components like NavBar, UserGallery, Home, Gallery, and Login. Additionally, it imports the Route and Switch components from react-router-dom for handling routing.

The component uses the useState hook to manage two state variables: cards and user. These states are used to store data fetched from NASA's API and user data, respectively.

Inside the useEffect hook, there are two fetch requests. The first fetches data from NASA's API to get pictures of the day within a specified date range. The fetched data is stored in the cards state.

The second fetch request checks if there is an active user session by making a request to "/check_session." If an active session is detected, the user data is stored in the user state.

# Singup:
It makes a fetch request to a server endpoint to register the user. It sends the user's input values (username, password, and password confirmation) in the request body as JSON. If the request is successful (HTTP status 200), it likely receives a user object and sets the user in the parent component's state using the setUser function.

# Login:
The handletoggle function is called when the "Signup" button is clicked. It toggles the signup state between true and `false, switching between the login and signup forms.
and also provides the option to switch to a signup form 

# Cards:
The component expects two props, filteredcards and cards, which represent the data to be displayed. The purpose of having both props is to handle different scenarios or filtered data.

If filteredcards are provided , it maps through the filteredcards array to generate individual Card components. The map function returns an array of Card components.

If cards are provided, it follows the same pattern to map through the cards array and generate Card components. 
Depending on whether filteredcards or cards are provided, the component renders a container (div) that holds the mapped Card components. This is where the list of cards is displayed. 

# Card:
Renders a card-like structure. It consists of an image (retrieved from the hd_url prop) and a section (cardInfo) that displays additional information about the item. The additional information is presented in a structured format with titles and corresponding content.

# Gallery:
The component uses the useState hook to manage the search state. This state variable is used to store the user's search query, allowing them to filter the displayed items in the gallery.

The filtered variable is created by filtering the cards based on the search query. It uses the filter method on the cards array to select items that match the search query. However, there is an issue with the filtering logic.

# UserGallery:
The component utilizes the useState hook to manage two state variables:

cards: This state variable is used to store the collection of items associated with the user. Initially, it's an empty array.

search: This state variable is used to store the user's search query, allowing them to filter the displayed items.

Fetching User's Items: The useEffect hook is used to make a fetch request to retrieve the user's items. The fetched data is stored in the cards state variable.

Filtering Items: The component filters the cards array based on the user's search query. The filtered items are stored in the filteredUserCards variable.

If there are items in the cards array the component renders the Search component to allow users to input their search queries and the Cards component to display the filtered user cards. The setanotherSearch prop is likely used to update the search state when the user enters a search query.

If there are no items in the cards array, the component displays a "Loading..." message, indicating that it is waiting for the data to be fetched.

# NavBar:
is used to create a navigation bar, allowing navigate to different sections or pages by clicking on the provided links. The links are created using NavLink from react-router-dom, and each link corresponds to a specific route or page within the application. 

# Search:
If the setSearch prop is provided, the component renders an input field. This input field allows users to enter a search query, and the onChange event handler is used to update the search query using the setSearch function.

If the setanotherSearch prop is provided instead, the component renders a similar input field, but it updates the search query using the setanotherSearch function. 

# Home is empty and we need add the fetches for access the data in the tables

