# redux-test

## Install Redux DevTools Extension

See [Redux DevTools Extension](http://extension.remotedev.io/)

## Update node to LTS version

```
$ sudo npm cache clean -f
$ sudo npm install -g n
$ sudo n lts
```

## Install vendors

```
$ npm install
```

## Commands

To build vendors required, launch this command (required once)

```
$ npm run build:dll
```

If you want build the proyect with a development server that provides auto complilling and live reloading (recomended), launch this command

```
npm run build:dev:server-up
```

or 
```
npm start
```

If you preferer build the project without development server

```
$ npm run build:dev
```

To build the proyect to deploy in production, launch this command

```
$ npm run build:prod
```

To build the project and auto compilling when assets has changes, launch this command (without development server)

```
npm run build:dev:watch
```

To run unit tests

```
$ npm run test
```

or

```
$ npm t
```

To create others commands edit `package.json` 



