## Javascript todo list application

### Study notes

NextJS is a framework that sits on top of React whereas react 
is a Javascript library for building user interfaces

NodeJS is part of NextJS and allows asynchronous fetching of things like files

To run "npm run dev" you must be in the folder that contains package.json  

Client side navigation = navigation done by Javascript which is faster than default browser navigation  

External pages outside of the application still require <a> instead of <Link>  

Public folder is used for static assets like images  

NextJS pre-geenrates HTML for pages and then JAvaScript runs to make the page interactive, this is called hydration 

Components are powerful because they let us re-use pieces of our UI, and refer to one place for the source of that UI. The problem is, we don't typically want to reuse all of each component; we want to reuse most parts, and change small pieces. This is where props come in.

Example prop is name="Task1"

Couldn't write JS before because we were writing in the return part itself

Data which a component itself owns, is called state.

### Javascript code / Syntax learning

export = values can then be imported to other programs using import  

default export means it can be imported without curly braces (Export a single thing for a module)  

Static generation for pages that don't update frequently, server-side if they do update regularly  

The <label> HTML element represents a caption for an item in a user interface. - use for things like checkboxes

In the middle of a JSX expression use curly brcaes to inject the value of a variable

.map creates a new array populated with the results of calling a provided function on every element in the calling array

=> Is for anonymous functions like Python lambda so you can have const sum => {return a +b }

... gets all the properties for one object then you can overwrite the ones you want to change. This allows you to take for example someones age and the class they are in but then overwrite their name and their grade.

! is the logical not operator so turns any Truthy value to it's opposite


### To add

Moglabs section to website  
Date function on the first page once a bit more confident with strcuture  
TODO list backend I think will be a database that we write into and pull from using API Routes and dynamic routes  



