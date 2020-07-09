# Mulan Extension

## Tools

### install commition
After install commitizen, we use `git cz` instead of `git commit`, which can make us commit in a clean and identical standard.

```bash
$ npm install -g commitizen
```
## Run the project
### Install
This method can add node_modules to the project.

```bash
$ yarn install
```

### Development

- Run script

```bash
# build files to './dev'
# start webpack development server
$ yarn dev
```
#### React/Redux hot reload

This project uses `Webpack` and `react-transform`, and use `Redux`. You can hot reload by editing related files of Popup & Window & Inject page.

First we enter [chrome://extensions](chrome://extensions) in chrome browser, open the develop mode, load the unziped project folder, then our chrome extension will emerge. Our extension is only available on the github page according to the present  config(we can change it to other websites later), we can test it on any url begin with https://github.com/.

### Build

```bash
# build files to './build'
$ yarn build
```
## Development

## LICENSE

[MIT](LICENSE)
