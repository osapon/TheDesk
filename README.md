<img src="https://thedesk.top/img/top.png" width="300" align="left">
<img src="https://thedesk.top/img/desk.png" width="150" align="right">

# TheDesk
 
[![Build Status](https://travis-ci.org/cutls/TheDesk.svg?branch=master)](https://travis-ci.org/cutls/TheDesk)
[![Crowdin](https://d322cqt584bo4o.cloudfront.net/thedesk/localized.svg)](https://translate.thedesk.top/project/thedesk)
[![FOSSA Status](https://bit.ly/2N4cLd1)](https://bit.ly/31zqMmZ)
[![Version](https://flat.badgen.net/github/release/cutls/TheDesk)](https://github.com/cutls/TheDesk/releases)
![Contributors](https://flat.badgen.net/github/contributors/cutls/TheDesk)  
Mastodon/Misskey client for PC(Windows/Linux/macOS)  
オープンソースSNSマストドン/MisskeyのPC向けクライアント[日本語はこちら](README_ja.md)  
  
Download:[TheDesk](https://thedesk.top) [![check](https://status.cutls.com/badge/?site=thedesk.top)](https://status.cutls.com)    

<a href="https://www.patreon.com/cutls"><img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" alt="Become a Patron!" width="160"></a>  
<a href="https://liberapay.com/cutls/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>
![Screenshots1](https://thedesk.top/img/scr1.png)  

## License

[GNU General Public License v3.0](https://github.com/cutls/TheDesk/blob/master/LICENSE)  

The icon is provided under [Creative Commons BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[Press Kit](https://d2upiril6ywqp9.cloudfront.net/press/TheDesk+PressKit.zip)  

* [PNG 512x512](https://d2upiril6ywqp9.cloudfront.net/press/thedesk.png)
* [SVG 4095x4096](https://d2upiril6ywqp9.cloudfront.net/press/thedesk-fullcolor.svg)
* [ico 256x256](https://d2upiril6ywqp9.cloudfront.net/press/thedesk.ico)
* [icns old](https://d2upiril6ywqp9.cloudfront.net/press/thedesk.icns)

The default sounds of notifications is provided [Creative Commons BY](https://creativecommons.org/licenses/by/4.0/)

## Terms of Use

* [利用規約(Terms of Use(ja))](https://thedesk.top/tos.html)
* [プライバシーポリシー(Privacy Policy(ja))](https://thedesk.top/priv.html)

## Language

* 日本語(Japanese)
* English
* de, cs, bg(from Crowdin)

### Translation

Crowdin project is available! Visit: https://translate.thedesk.top

### Run on developer mode

`npm run dev` on `app` folder.

## Contributors

Build for macOS  

* [toneji](https://minohdon.jp/@toneji)

Build for Linux  

* [popn_ja](https://popon.pptdn.jp/@popn_ja)

Fellow coder

* [kPherox](https://pl.kpherox.dev/kPherox)

## Build

You have to use either **npm** or **yarn**. Whichever you use, it works well.

### npm

```sh
git clone https://github.com/cutls/TheDesk
cd TheDesk/app
npm install
npm install --only=dev
npm run construct
```

### yarn

```sh
git clone https://github.com/cutls/TheDesk
cd TheDesk/app
# Linux or macOS
yarn install --no-lockfile
# Windows
yarn install

yarn construct
```

run `npm run dev` or `yarn dev` to launch developer version with console(click `view`)

### electron-builder(Recommended)
Use scripts(they can work well with npm, **yarn**).  

#### npm

```sh
# Build for current platform
npm run build

# Select build target
## Windows
npm run build:win

## Windows and Linux (The macOS target should run on macOS. So, this option hasn't include the build for macOS)
npm run build:all
```

#### yarn

```sh
# Build for current platform
yarn build

# Select build target
## Windows
yarn build:win

## Windows and Linux (The macOS target should run on macOS. So, this option hasn't include the build for macOS)
yarn build:all
```


Config is all on package.json  

### electron-packager
`npm install --save-dev electron-rebuild`  
  
Linux/macOS  
`./node_modules/.bin/electron-rebuild`  
Windows  
`.\node_modules\.bin\electron-rebuild.cmd`  
  
To install Python 2.x and Visual C++ for Windows, before running `npm install --save-dev electron-rebuild`  
`npm install --global windows-build-tools`  

Windows  
`electron-packager ./app TheDesk --executable-name="TheDesk" --app-copyright="Copyright (c) TheDesk 2018 Cutls.com 2015 All Right Reserved" --win32metadata.CompanyName="TheDesk&Cutls.com" --win32metadata.FileDescription="TheDesk" --win32metadata.OriginalFilename="TheDesk" --win32metadata.InternalName="TheDesk" --win32metadata.ProductName="TheDesk" --platform=win32 --arch=all --electron-version=4.0.5 --icon=.\app\thedesk.ico --overwrite`  
Linux  
`electron-packager ./app TheDesk --executable-name="TheDesk" --app-copyright="Copyright (c) TheDesk 2018 Cutls.com 2015 All Right Reserved" --platform=linux --arch=x64,ia32 --electron-version=4.0.5 --overwrite`  
macOS  
`electron-packager ./app TheDesk --executable-name="TheDesk" --app-copyright="Copyright (c) TheDesk 2018 Cutls.com 2015 All Right Reserved" --platform=darwin --arch=all --electron-version=4.0.5 --icon=./app/icon.icns --overwrite`  

### PWA support

TheDesk is a wed-based app, so you can run it on a browser. Of course, the main stream is as Electron. Some features won't work as well as Electron.

You can run `npm run build:pwa` to build as PWA, including `manifest.json` and the ServiceWorker.

**You have to rename `node_modules` to `dependencies` to run as a web application. (restricted by Netlify)**

Check the app on Chrome or Firefox: [Here](https://app.thedesk.top) (it follows the `master` branch, so not stable.)  
[![Netlify Status](https://api.netlify.com/api/v1/badges/6916503b-2882-43f7-9681-ab814e6d28f9/deploy-status)](https://app.netlify.com/sites/thedesk/deploys)

## Pleroma support

Did you find a bug with Pleroma accounts?  
Pleroma **does not** follow Mastodon API rules completely although Pleroma developers say so.  
Please write issues to improve TheDesk affinity with Pleroma.

## Vulnerabilities when `npm i`???

No, if your npm says materialize-css has vulnerabilities(CVE-2019-11002/3/4), look at [here](https://github.com/Dogfalo/materialize/issues/6286) under discussion.

