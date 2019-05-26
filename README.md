# electron-react-bootstrap 模板

**`集成electron + react + bootstrap`** 踩完了大多数集成的坑
- 使用create-react-app构建
- electron在主界面使用loadURL接入react
- react中使用window.electron引入electron进行通信

**`主界面引入light-bootstrap-dashboard主题`** 免去了自己写样式的麻烦
- 使用react-bootstrap而不是直接使用的bootstrap
- 单纯引入主题的样式文件,可以轻松剥离

**`功能模块与主界面完全解耦, 使用子窗口开启`** 子窗口独立运行html,剥离react

## 运行
```
yarn install 
yarn start  // 运行react
yarn electron-start    //运行electron
```

## 目录结构
```
|-- www
    |-- .gitignore
    |-- LICENSE
    |-- README.md
    |-- main.js           electron入口文件
    |-- package.json
    |-- yarn.lock
    |-- public            暴露入口,尽量不修改  
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- manifest.json
    |   |-- renderer.js
    |-- src               所有的逻辑代码
        |-- App.test.js
        |-- index.js      主界面react入口文件
        |-- routes.js
        |-- serviceWorker.js
        |-- main          主界面所有代码
            |-- assets
            |   |-- css
            |   |-- fonts
            |   |-- img
            |   |-- sass
            |-- components
            |-- electron
            |-- layouts
            |-- templates
            |-- views
        |-- modules        所有的功能模块,与主界面解耦
```

## 特殊的

修改 开发/部署 环境:修改package.json下的
```
"devMode": true,
```



## 目录md重新生成
```
$ pwd
    Users/username/Documents/demo-project
$ npm install mddir --save
$ cd node_modules/mddir/src
$ pwd
    Users/username/Documents/node_modules/mddir/src
$ ls
    mddir.js
$ node mddir "../../../"
// Exports 'directoryList.md' in mddir/src folder
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
