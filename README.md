# React Js Notes

[Using react with cdn](##Using-react-with-cdn) 

[Making React Component](##Making-React-Component)

[JSX and Templates](##JSX-and-Templates)

[Dynamic Values in Templates](##Dynamic-Values-in-Templates)

[Click Events & Event Handlers](##Click-Event-&-Event-Handlers)


## Using react with cdn

[React CDN Links](https://reactjs.org/docs/cdn-links.html)

Copy paste the links to our html page.


Add Babel cdn link to our html page.

Babel is used to compiile our react application at runtime.

[Babel CDN](https://babeljs.io/setup#installation)


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <title>Document</title>
</head>
<body>
    <h1>Website</h1>


    <script type="text/babel">
        Ban
    </script>
</body>
</html>
```

## Making React Component

React component is a javascript function.

```html
<script type="text/babel">
    const Banner = () => {
        return (
            <div>
                <p>Banner</p>
            </div>
        )
    }
</script>
```

- function Banner is a react component.
- template is created inside return function.
- Here code inside the return() is JSX template. and not HTML template.

- 

- In JSX v use className in pJSX allows to create html style templates, and in background Babel transpiles this jsx templates to html. and renders that html template to DOM.lace of class. while transpiling to html, it got converted to class.

- Next, we have to inject this template to html page by rendering it to DOM.

```html
    <script type="text/babel">
        const Banner = () => {
            return (
                <div>
                    <p>Banner</p>
                </div>
            )
        }
    //  RENDER component to DOM 
    ReactDOM.render(<Banner />, document.getElementById('banner'));
    </script>
```

ReactDOM - call render method - pass component and location we want to render the component.

```js
ReactDOM.render(<Component name />, location_in_html_template);
```

## JSX and Templates

JSX allows to create html style templates, and in background Babel transpiles this jsx templates to html. and renders that html template to DOM.

### Classes in JSX template

- classes are declared using className attribute.

```jsx

    return (
        <div className="banner">
            <p>Banner</p>
        </div>
    )
```

After template is transpiled to html, it got converted to class.

### Only one root element is allowed in JSX template.

```jsx
return (
    <div className="banner">
        <p>Banner</p>
    </div>
    <div>
        
    </div>
)
```

Here, we have two root divs which is not allowed
New element is nested under root div.


## Dynamic Values in Template

Using curly braces to add dynamic values to the template.,

```js
const Banner = () => {
    const title="my new website"
    const subtitle = "hey look this is my website"
    return (
        <div className="banner">
            <h2>{title.toUpperCase()}</h2>
            <p>{subtitle}</p>
            <p>Today's date is: {new Date().toDateString()} </p>
            <p>Random Number: {Math.random()*100}</p>
        </div>
    )
}
```

- using curly braces we can use variables inside template expression.
- we can also inject variables to html attributes using curly braces.


## Click Events & Event Handlers

```js
const Banner = () => {
    const title = "welcome to my website"
    const buttonClick = (e) => {
        console.log('button click)
        console.log(title);
        console.log(e)
    }
    return (
        <div className="banner">
            <button onClick={buttonClick}>Click Me</button>
        </div>
    )
}
```
- onClick event is a event handler.
- Pass reference to function as an argument to onClick event.
- When button is clicked function outside the template is called.
- can get event object e.


### Using inline functions

```jsx
return (
    <div className="banner">
        <button onClick={(e) => {
            console.log(e)
        }}>Click Me</button>
    </div>
)
```

- We defined a function inside the template.

## Create a React Application

- Install Nodejs
- Go thru below link

  [Creating an App](https://github.com/facebook/create-react-app)

or run below command

```terminal
npx create-react-app my-app
cd my-app
npm run start
```

Check React Version

```terminal
npm view react version
```

## Making React Site

**Note:**
All codes are compiled to Jaascript for the browser to understand


## Images in react

1. we can store images in public folder

    IF we we use this method, no need to dynamically load images.
    Instead provide the path to the image.

2. Also we can store images in src folder by creating a folder named assets.

## Intro to State & useState

### State and Why we need it.

- A state is a component data that change over time.
- for example, consider a todolist application, where todo is a state.
- todo changes overtime.
- todo can be added, deleted, updated, etc.

![](./IMAGES/todo.png)

### Example - 2

Consider a dropdown button, on click of the button, dropdown menu will appear.
here we dont need a state to store the dropdown menu and its content.

State can be a toggle that sets to True or False on clicking the dropdown button.

![](./IMAGES/state_1.png)


## State Implementation usig useState Hook

```js
const Home = () => {
  let name = 'jissmon';
  const handleClick = () => {
    name = 'thala ajith';
    console.log(name);
  };
  return (
    <div className='home'>
      <h2>HomePage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};
```

- Here, the value of name in p tag wont change even we click the button.
- So we use a hook called useState to change the value of name on button click.

```js
import { useState } from 'react';

const Home = () => {
  const [state, setstate] = useState('data science');
  const handleClick = () => {
    setstate('machine learning');
    console.log(state);
  };
  return (
    <div className='home'>
      <h2>HomePage</h2>
      <p>{state}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};
```

- First import **useState** hook from react.
- Here we have used **useState** hook to change the value of state.
- **useState** hook returns an array of two values.
- We can capture those values using **array destructuring**.
- First value is the current state.
- Second value is a function that we can use to change the state.

    ```js
    const [state, setstate] = useState('data science');
    ```

- Define a function called **handleClick**.
- Invoke **setstate** function and pass new value as an argument.
- Initially value is set to 'data science'.
- When we click the button, the value of state changes to 'machine learning'.

### UseState React Hook - Another Example

- Not neccessary to provide state and usestate, we can give any value to assign **useState** hook.  

```js
const [country, setcountry] = useState("ukraine");
const handleCountry = () => {
    setcountry("russia");
    console.log(country);
}
return (
    <div className="App">
        <h1>{state}</h1>
        <button onClick={handleClick}>Click me</button>
        <h2>{country}</h2>
        <button onClick={handleCountry}>Click Me</button>
    </div>
);
```

## Outputting List

1. First create a state to store the list of items.

```js
const [events , setEvents] = useState([
    {title: "React", date: "01.01.2020", id: 1},
    {title: "Angular", date: "01.01.2020", id: 2},
    {title: "Vue", date: "01.01.2020", id: 3},
]);
```

2. We have to render this list in html template, for that purpose we use jaavscript
map function to loop through each items in the list.


3. **map** method called on events where we get access to each values in the list.
Then using JSX template to display each one in the list. when we o/p a list in jsx template, root template must have a **key** property to keep track of each item when DOM outputs it. So if data changes at any point of time, react will keep track of it. **keys** are unique for each item.


```js
return (
    <div className="App">
      {events.map((event) => (
          <div className='event-preview' key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.date}</p>
          </div>
      ))}
    </div>
  );
```

- `event.id` refers to **key** property here. which is unique for each item. it can be any unique property not just **id**.

- While applying **map** function on state, we also get an index of each item.

```jsx
{events.map((event, index) => (
    <div className='event-preview' key={event.id}>
        <h2>{index} - {event.title}</h2>
        <p>{index} - {event.date}</p>
    </div>
))}
```

## Using the Previous State

If we want to delete an event from the list, here is how we do it.

```js
{events.map((event, index) => (
    <div className='event-preview' key={event.id}>
        <h2>{index} - {event.title}</h2>
        <p>{index} - {event.date}</p>
        <button onClick={() => handleClick(event.id)}>Delete Event</button> 
    </div>
))}
```

- We pass the reference to **handleClick** function in **onClick** event of the button.
- We have to pass the id of the event to be deleted as an argument to **handleClick** function.
- We put **handleClick** function as a callback since we are passing id argument to the same. If not, handleClick executes all time we load the page.
- We capture the id of each event we want to delete.


### Delete the event from the list.

```js
  const handleClick = (id) => {
    // filter method returns a new array with the items that match the condition
    setEvents((prevEvents) => {
        return prevEvents.filter((event) => event.id !== id);
    }))
    // when ids are same that id is filtered out.
  }
```

## Conditional Templates

- **Conditional templates** are used to render a template based on the condition.
- For example, if there is a boolean state, we can render a template based on the True or False value.


### Implementation

- Define a state to store the boolean value.

```js
const [showEvents, setShowEvents] = useState(true);
```

- Invoke setShoeEvents function to change the value of showEvents on button click.

```jsx
<button onClick={() => setShowEvents(false)}>Hide Events</button>
<button onClick={() => setShowEvents(true)}>Show Events</button>
```

### Conditionally ouput events from the list.

```jsx
{showEvents && events.map((event, index) => (
    <div className='event-preview' key={event.id}>
        <h2>{index} - {event.title}</h2>
        <p>{index} - {event.date}</p>
        <button onClick={() => handleClick(event.id)}>Delete Event</button> 
    </div>
))}
```

- Here we pass showEvents state to jsx template as a javascript expresion.
- If only both the values are true, then we can render the events.
- If not we can hide the events.


### Conditionally ouput the button to show and hide the events.

```jsx
{
    showEvents && (
        <div>
        <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
    )
}

{
    !showEvents && (
        <div>
        <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
    )
}
```

## useState hook limitations

1. useState hook can only be called from top level of a function. We should not call it from inside of a function.

2. Need to be used inside of a React component.

