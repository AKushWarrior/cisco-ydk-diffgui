# YDK Method DiffGUI

This library is designed to serve as a UI for a foreign database, internal and proprietary to Cisco.

The database records whether a router method has been implemented in the Yang Development Kit, which itself is a 
library implementing the Netconf/YANG protocol. 

An internal, intermediate parser has been developed as an extension to that database, which takes
in an automation unit (known as "sub-APs"). The parser finds what methods the automation unit uses, and 
checks whether each method is defined in YDK (e.g. the sub-AP can be safely used on YDK). This GUI is a graphical
representation of that data; it takes in two files (which comprise the sub-AP) and then internally calls
the parser to generate data.

## Usage & Logistics

This website is written in two folders: `./python` and `./src`

The first folder holds the internal tool; right now, due to IP issues, it's a stub (which will be implemented)
internally. The `./src` folder holds the website (GUI) for the tool.

The website doesn't actually call Python, because bundling a Python interpreter would be overkill for such a small
tool. Instead, `npm run build` is set up to transpile a Python file (`./python/tool.py`) to JavaScript, and the 
transpiled JS code is then called in `./src/index.js` after the user has inputted two files. This transpilation system brings the total JS + CSS + HTML bundle size under 100kb when gzipped, which is a 
reasonable threshold for an internal tool.

Note that the entry point in the python folder is `./python/tool.py` and the entry point in the src folder is `./src/index.html`; however, `index.html` is mostly a hollow shell, and most of the significant logic has an entry point at
`./src/index.js`.

## Building & Deploying

This site is, as written, not deployable. It uses JSX, an intermediate language that integrates HTML into JavaScript.
However, JSX cannot be displayed by most (all?) browsers, so a build step is necessary.

I've set up a transpiler + bundler + minifier to do the aforementioned work for us, while also bringing down the
time-to-interactive. The bundler is called Parcel, for those interested; however, the work should be abstracted behind
the build step.

To run the build step and deploy the site, you need the following tools:

    * Python 3.X
    * NPM (Node Package Manager)

You will need to further install some packages:

    * `python3 -m pip install transcrypt` installs the python-to-js transpiler.
    * `npm install` installs the javascript + css dependencies of the website.

After installing the aforementioned dependencies, you should be able to execute `npm run build`. If the command
exits without errors, there should be a minified, serveable website in `./dist`.