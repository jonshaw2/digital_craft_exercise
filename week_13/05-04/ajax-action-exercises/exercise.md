# Movie Search Widget

You will make a movie search widget using the [Movie DB api](https://developers.themoviedb.org/3/getting-started). You should have an API key from last time. If you forget what it is you can login to get it.

Use the [Search Movies API](https://developers.themoviedb.org/3/search/search-movies) to make a simple search page, consisting of on text input and one search button. When the search button is clicked, it should make a request to that API to retrieve a list of movies.

## Step 0: Setup

Use `create-react-app` to generate a react application. Install the modules you'll need

* redux
* react-redux
* redux-thunk
* jquery

## Step 1: Make a component

Make a component for your application. You'll need to make:

* a reducer (`MovieWidget.reducer.js`) - just return the initial state for start
* a component (`MovieWidget.js`) that renders a view - the view should have a text input and a button on it
* wire it all up with a container component (`MovieWidgetContainer.js`)
* while you are at it, make a file for all the actions you are going to need as well (`MovieWidget.actions.js`)

## Step 2: Wire them up

Wire up all the files created in the previous step in your `index.js` file. Also take care to:

* Use the ReactRedux provider to supply the store to the container component(s) of the app
* Install the Redux tools extension in the process of creating your store
* Install the redux-thunk middleware

## Step 3: Bind the form field

In order to get the user input from the text input, you will need to bind input's value. You have two options:

* use the component's state (remember setState?)
* use the store's state by dispatching an action down to the store

First, you'll bind the input's `value` property:

* either a component state variable (if you are using component state), or
* a prop that's been passed in (if you are using store's state)

In either case, you'll need to use the text input's `onChange` property, and get hold of its new value via `event.target.value`. You will take this value and use it to either:

* setState to synchronize the component state with it (if component state)
* call a function which will dispatch a `change-query` action to the store. That function will be passed in via a prop and it will be wired up in your container component. (if store's state)

If you are saving state to the store state, you'll also need to modify the reducer to save the passed in value to the state.

You may refer back to the lecture on forms and React.

## Step 4: Create an async action for the API call

Create an async action creator using the redux-thunk style. The action creator function will take the query text as an input. You'll use jQuery to make the Ajax call to the [search movies api](https://developers.themoviedb.org/3/search/search-movies). The URL will look like: `https://api.themoviedb.org/3/search/movie`. You'll also need to include your API key as well as a query parameter. If the request is successful, dispatch an `movie-results` action, attaching with it the fetched movie data.

## Step 4: Making search work

Now that you have access to the query text, and an action creator, you can make an API call. When the button is clicked, call the searchMovies function - passed in via a prop, and pass to it the query text as the first argument. Update your container to wire up the searchMovies prop with the action creator created in the last step. At this point you can test the action being dispatched using Redux tools. The resulting action should contain the movie result data in it.

## Step 5: Modify the reducer to save movie results

Now that you have the action coming in that contains the movie results, you'll need to save those results to the state by moving the value from one to the other in your reducer.

## Step 6: Update the container to pass in the movie results

Next, update the container to pass in the movie results to the presentation component `MovieWidget`.

## Step 7: Render the movie results

Now that the `MovieWidget` component has access to the movie results through a prop, use it to generate movie poster images. Look at [the configuration API](https://developers.themoviedb.org/3/configuration) to learn how to build the image URL. Basically, you need to add the base URL: `https://image.tmdb.org/t/p/w500/` to the beginning of the poster URL.

## Step 8: Error handling

Now, you need to make error handling work. To do this:

1. the searchMovies action creator to use a catch block in the promise chain to dispatch a `movie-search-error` action, also pass the error that resulted from the Ajax call. You may use this statement to get the error given the `resp` parameter: `resp && resp.responseJSON && resp.responseJSON.message || 'Something went wrong!'`.
2. modify the reducer to respond to the `movie-search-error` action and save the error in the state.
3. wire up the container to pass the error to the `MovieWidget` component
4. display the error in the render method of the `MovieWidget` component if it exists.

## Bonus 1: Loading indicator

Display a loading indicator while the request is in mid-flight.

## Bonus 2: Details drilldown

Allow drilling down to a movie by clicking on a movie poster. The app should switch from the listing of movies to a details screen that contains just the detailed description of the selected movie. The search box and button should still exist on the page so that the user can enter another search and load up a new search results listing and therefore erase the details page.
