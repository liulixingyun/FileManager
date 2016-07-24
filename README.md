# 基于HTML的Adobe Air平台的文件资源管理桌面应用程序
## 简介
本项目来自于开发的一个能够将图片、视频、Word文档、PPT文档等各种文件形式的教育资源进行整理和组织的桌面应用程序。
## 技术难点
本项目的**难点**是，如何能够**用系统默认的打开方式打开各种类型的文件**。查找了好久发现*Adobe Air*平台提供了```file.openWithDefaultApplication()```方法可以依据不同操作系统中用户设置的默认应用程序来打开文件。所以选择了Adobe Air平台进行着桌面应用程序的开发。将用系统默认的打开方式打开各种类型的文件封装成的函数如下，
```
function openFile(url){
  var file= air.File.applicationDirectory.resolvePath(url);
  file.openWithDefaultApplication();
}
```
Adobe Air支持Flash、HTML等多种形式的开发，这里选择了**HTML**、**CSS**、**Javascript**作为开发的语言。  
## 目录结构
- |-- run.exe   应用程序入口执行文件  
- |-- run.vbs   未经编译的应用程序入口执行文件  
- |-- runtimes/ Adobe Air平台运行环境，可依据不同的不同的操作系统下载不同的版本  
- |-- bin/             应用程序源代码和资源文件夹  
  - |-- css/             应用程序的CSS源文件  
  - |-- js/            应用程序的JavaScript源文件  
  - |-- images/        应用程序的图片文件  
  - |-- resources/     应用程序的待管理的资源文件  
  - |-- menu.html      应用程序的主界面文件  
  - |-- subNav1-1.html 第一单元第一章的目录导航文件  
  - |-- i1-1-1.html    第一单元第一章第一节的图片资源列表文件  
  - |-- p1-1-1.html    第一单元第一章第一节的ppt资源列表文件  
  - |-- w1-1-1.html    第一单元第一章第一节的word资源列表文件  
  - |-- v1-1-1.html    第一单元第一章第一节的视频资源列表文件  

## 未来规划
由于我的能力有限和时间紧张，所以将内容列表分散在了各个HTML文件中并用```<iframe>```加载。将来希望将它改造成基于JSON的单页系统，这样以后只需要配置JSON文件并修改resources文件夹中的资源就可以完成程序的更新。  
但是，我不再采用Adobe Air来开发，而是使用**Electron**作为程序的平台。由于代码都是采用HTML、CSS和JavaScript来写的，更新到Electron平台仅需要修改少量代码。同时也建议大家关注[Electron项目](https://github.com/electron/electron)。
## 许可协议
Apache License 2.0
