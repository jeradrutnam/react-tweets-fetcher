# React Tweets Fetcher
Simple React + Node based API consuming solution for Twitter API

![Screenshot](https://image.ibb.co/gAZUPn/twitter.png)

## Table of Contents

- [How to run](#how-to-run)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
- [Reporting Issues](#reporting-issues)
- [License](#license)

## How to run

1. Create an [Twitter Oauth App][apps-twitter], and get the consumer key + secret & access token + secret. 
2. Navigate to the root `/react-tweets-fetcher` directory and open the `config.js` file. And update the app keys there.
3. Then run the command `node server` from the root directory using the terminal.  
4. Then open another teminal window and run the command `npm sstart`.  
5. Done. Now you can use the url: `http://localhost:3000/` to access the app. :)

[apps-twitter]: https://apps.twitter.com/

## Folder Structure

```
react-read-twitter/
  README.md
  package.json
  config.js
  server.js
  public/
    assets/
    index.html
    favicon.ico
  src/
    component/
    pages/
    App.js
    App.test.js
    index.js
```

## Available Scripts

In the project directory, you can run:

### `node server`

Starts the back-end.<br>
Use [http://localhost:3001](http://localhost:3001) to access the server.  
<br>
You will also see any request errors in the console.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
<br>
The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Reporting Issues

Please use the [issue tracker](https://github.com/jeradrutnam/react-read-twitter/issues) to report issues.

## License

MIT ([LICENSE](LICENSE)), You may not use this file except in compliance with the License.
