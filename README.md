# React Js Notes

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

### Making React Component

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

