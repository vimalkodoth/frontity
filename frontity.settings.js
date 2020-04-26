const settings = {
  "name": "blog",
  "state": {
    "frontity": {
      "url": "http://54.87.208.190/",
      "title": "Frontend Scrapbook",
      "description": "Notes that make a difference"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "VanillaJS",
              "/category/vanillajs/"
            ],
            [
              "DOM",
              "/category/dom/"
            ],
            [
              "ES6/ES7",
              "/category/es6-7/"
            ],
            [
              "Browser Internals",
              "/category/browser-internals/"
            ],
            [
              "Async JS",
              "/category/async-js/"
            ],
            [
              "Web Performance",
              "/category/performance/"
            ],
            [
              "Web Security",
              "/category/web-security/"
            ],
            [
              "ReactJS",
              "/category/reactjs/"
            ],
            [
              "Data Structures",
              "/category/data-structures/"
            ],
            [
              "Algorithms",
              "/category/algorithms/"
            ],
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://54.87.208.190/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
