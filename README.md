# DevExtreme

[![Build Status](https://travis-ci.org/DevExpress/DevExtreme.svg?branch=17_1)](https://travis-ci.org/DevExpress/DevExtreme)

Voted the best cross-platform component suite containing everything you need to create responsive web apps for touch devices and traditional desktops: data grid, interactive charts, data editors, navigation and multi-purpose widgets that are designed to look great and provide powerful functionality in any browser.

- Official website: [js.devexpress.com](https://js.devexpress.com)
- Pricing: [js.devexpress.com/buy](https://js.devexpress.com/Buy)
- Licensing: [js.devexpress.com/licensing](https://js.devexpress.com/Licensing)
- Support: [www.devexpress.com/support](https://www.devexpress.com/support)

## Download and Install

This is a working repo for DevExtreme. To include DevExtreme to your project, use one of the distribution packages. If you use Visual Studio, then use the Windows installer for added features like project templates. Alternatively, download a plain zip archive of just the client-side library and its widgets:

- Install from [NPM](https://js.devexpress.com/Documentation/Guide/Getting_Started/Installation/npm_Package/)

  ```
  npm install devextreme 
  ```

- Install via [Bower](https://js.devexpress.com/Documentation/Guide/Getting_Started/Installation/Bower_Package/)

  ``` 
  bower install devextreme
  ```

- Install from [NuGet](https://js.devexpress.com/Documentation/Guide/Getting_Started/Installation/NuGet_Package/)

  ```
  Install-Package DevExtreme.Web
  ```

- [Windows Installer](https://js.devexpress.com/Downloading/DevExtremeComplete/) - Provides benefits for developers who use Visual Studio
- [ZIP Archive](https://js.devexpress.com/Downloading/DevExtremeCompleteZip/)


## Getting Started

After installation, you can add a widget to your app. Here's a simple [button example](https://js.devexpress.com/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/) using jQuery:

```html
<div id="buttonContainer"></div>
```

```js
$(function () {
    $("#buttonContainer").dxButton();
});
```

DevExtreme supports deep integration with the following client-side technologies: 

- [jQuery plugins](https://js.devexpress.com/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)
- [Knockout bindings](https://js.devexpress.com/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)
- [Angular](https://github.com/DevExpress/devextreme-angular#readme)

And server-side frameworks:

- [ASP.NET MVC & ASP.NET Core](https://js.devexpress.com/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/)

## Learn

- [Online Demos](https://js.devexpress.com/Demos/)
- [Documentation](https://js.devexpress.com/Documentation)
- [Examples on GitHub](https://github.com/DevExpress/DevExtreme-examples)
- [YouTube videos](https://www.youtube.com/watch?v=oWWL6iILMPM&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z)


## Contributing

See our [Guidelines for Contributing](CONTRIBUTING.md)
