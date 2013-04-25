#Examples for [glint](https://github.com/mateuszwozniak/glint) package for node

Before you will run examples you must install dependencies via:
```javascript
npm install
```

##List of examples:
- expressjs - expressjs application with plain html template
- expressjs-jade-view - expressjs application with jade template

To run any example you must:

1. go to example directory:
```
cd expressjs
```

2. generate packages:
```
../node_modules/.bin/glint --config clientlibs/config.js
```

3. run server:
```
node server.js
```

4. visit `http://localhost:3000/` to see result (checkout console to check if javascript files also were loaded)

5. add `?debugGlintAssets=true` to url (`http://localhost:3000/?debugGlintAssets=true`) to switch to dev mode - you will see that all files are now served separately.

