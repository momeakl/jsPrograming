/*
题目总结
1.js闭包 使用闭包主要是为了设计私有的方法和变量。优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增大内存使用量。
2.js闭包的三个特性 函数嵌套函数 函数内部可以使用外部的参数和变量 参数和变量不会被垃圾回收机制回收
3.typeof返回的数据类型 Object boolean Number String function undefined
4.parseInt,parseFloat,number等强制类型转换，== + ==等隐式类型转换
5.数组方法 push 尾部添加 pop尾部删除 unshift头部添加 shift头部删除
6.ajax请求get与post的区别 一个是数据放在url后面 一个是放在虚拟载体里面 有大小限制 安全方面 一个用于等待某些请求 一个用于密码类相关操作。
7.call和apply的区别 都是用于扩展作用域对象 区别在于参数 call(this,obj1,obj2), apply(this,arguments)
8.ajax请求时，解释json数据使用json.parse
9.事件委托的机制，即自己出发的事件 让父元素代替执行
10.添加、删除、替换、插入到某个节点的方法 appendChild removeChild replaceChild insertBefore
11.js的同源策略 一段脚本只能读取来自同一来源的窗口和文档的属性，这里的同一来源指的是主机名、协议和端口号的组合。
12.阻止事件冒泡和默认事件 stopPropagation preventDefault
13.谈谈对this对象的理解 this是一个关键字，this始终指向的是调用所在函数的那个对象
14.学习一个前端自动化构建工具eg:gulp 前端模块化工具require.js
15.http状态码有哪些,分别代表的意思  100-199 用于指定客户端应相应的某些动作。200-299 用于表示请求成功。300-399 用于已经移动的文件并且常被包含在定位头信息中指定新的地址信息。400-499 用于指出客户端的错误。 400 语义有误 当前请求无法被服务器理解 401 当前请求需要用户验证 403 服务器已经理解请求 但是拒绝执行 500-599 用于支持服务器错误 503 服务不可用
16.用于解决跨域的技术 jsonp
17.xml与json的区别  数据体积小、数据交互更方便、传输速度快
18.谈谈对模板打包工具webpack的看法
   WebPack 是一个模块打包工具，你可以使用WebPack管理你的模块依赖，并编绎输出模块们所需的静态文件。它能够很好地管理、打包Web开发中所用到的HTML、JavaScript、CSS以及各种静态文件（图片、字体等），让开发过程更加高效。对于不同类型的资源，webpack有对应的模块加载器。webpack模块打包器会分析模块间的依赖关系，最后 生成了优化且合并后的静态资源。
19.创建ajax过程
   1.创建XHR对象，即创建一个异步调用对象
   2.创建一个新的http请求，并指定该http请求的方法、url及验证信息。
   3.设置响应http请求状态变化的函数。
   4.发送http请求。
   5.获取异步调用返回的数据
   6.使用JavaScript和DOM实现局部刷新。
20.ES6常用语法回顾以及es7的一些语法 vue-router 生命周期
21.js的几种继承方式 原型链继承 借用构造函数继承 组合式继承
22.js变量命名按照单词之间下划线拼接，函数名按照驼峰形式 便于分辨哪个是变量哪个是函数名。
js jq vue es6 gulp webpack
23.用if检测变量是否存在时使用typeof someVar !== 'undefined'替换if(someVar)
jsDom高级程序设计总结
1.标签当中的javascript:只能处理一个函数
loading
*/

var EventUtil = {
    addHandler: function(element, type, handler){
        if (element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent){
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },

    getButton: function(event){
        if (document.implementation.hasFeature("MouseEvents", "2.0")){
            return event.button;
        } else {
            switch(event.button){
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4: return 1;
            }
        }
    },

    getCharCode: function(event){
        if (typeof event.charCode == "number"){
            return event.charCode;
        } else {
            return event.keyCode;
        }
    },

    getClipboardText: function(event){
        var clipboardData =  (event.clipboardData || window.clipboardData);
        return clipboardData.getData("text");
    },

    getEvent: function(event){
        return event ? event : window.event;
    },

    getRelatedTarget: function(event){
        if (event.relatedTarget){
            return event.relatedTarget;
        } else if (event.toElement){
            return event.toElement;
        } else if (event.fromElement){
            return event.fromElement;
        } else {
            return null;
        }

    },

    getTarget: function(event){
        return event.target || event.srcElement;
    },

    getWheelDelta: function(event){
        if (event.wheelDelta){
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    },

    preventDefault: function(event){
        if (event.preventDefault){
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    removeHandler: function(element, type, handler){
        if (element.removeEventListener){
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent){
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },

    setClipboardText: function(event, value){
        if (event.clipboardData){
            event.clipboardData.setData("text/plain", value);
        } else if (window.clipboardData){
            window.clipboardData.setData("text", value);
        }
    },

    stopPropagation: function(event){
        if (event.stopPropagation){
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }

};
