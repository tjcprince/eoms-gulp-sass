# eoms-gulp-sass
eoms前端项目 gulp+bower+angular+bootstrap
开发工具 sublime text 3.0
执行 npm install && bower install

1.插件ui-navbar不能自动引入css问题
第一种方案
(1)需要修改 bower_components/ui-navbar/bower.json中的"main" 为
"main": ["release/js/ui-navbar.js","release/css/ui-navbar.scss"]
(2)修改bower_components/ui-navbar/release/css/ui-navbar.css为ui-navbar.scss
第二种方案
把bower_components/ui-navbar/release/css/中的ui-navbar.css放到src/app中 并且修改名字为ui-navbar.scss
暂时使用的是第一种方案


