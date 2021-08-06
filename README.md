# YDK Method DiffGUI

This library is designed to serve as a UI for a foreign database, internal and proprietary to Cisco.

The database records whether a router method has been implemented in the Yang Development Kit, which itself is a library implementing the Netconf/YANG protocol. 

An internal, intermediate parser (YDK Delta Seek) has been developed as an extension to that database, which takes in an automation unit (known as "sub-APs"). The parser finds what methods the unit uses, and checks whether each method is defined in YDK (e.g. the sub-AP can be safely used with YDK). This GUI is a graphical representation of that data; it takes in two files (which comprise the sub-AP) and then internally calls YDK Delta Seek to generate data.

## Usage & Logistics

This website is written in the folder `./src`

This website is designed to be used with YDK Delta Seek, a tool designed by Patrick Haimbaugh. It should be served alongside a webserver that can process the sub-AP files and produce json
responses that conform to a certain pattern; since Patrick's tool is written in Python, this server should likely be written in Flask or Django.  Unfortunately, this tool is proprietary, and therefore cannot be inlined into this open-source repository.

There is a stub method in `./src/backend.js` which produces sample data when called with the content of sub-AP files; when this website is put into production, this stub should be replaced by a method of the same name which calls the aforementioned webserver. The webserver would process the file contents (provided as arguments to the method), pass it back to the website, and
the website is set up to render whatever is passed back.

There is a live demo of the website (with the stub method/sample data) at https://cisco-ydk-diffgui.pages.dev/.

## Building & Deploying

This site is, as written, not deployable. It uses [JSX](https://reactjs.org/docs/introducing-jsx.html), an intermediate language that integrates HTML into JavaScript. However, JSX cannot be displayed by most (all?) browsers, so a build step is necessary.

I've set up a transpiler + bundler + minifier to do the aforementioned work for us, while also bringing down the time-to-interactive. The bundler is called [Parcel](https://v2.parceljs.org/), for those interested; however, the bundling work should be abstracted behind the build step.

To run the build step and deploy the site, you need NPM (Node Package Manager).

You will need to further install some dependencies using `npm install`, which installs the javascript + css dependencies of the website. Note that you have to run this command from root.

After installing the aforementioned dependencies, you should be able to execute `npm run build`. If that command exits without errors, there should be a minified, serveable website in `./dist`.