淺談Node.js SocketIO
====

# 投影片

<iframe src="http://www.slideshare.net/slideshow/embed_code/26826686" width="427" height="356" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="https://www.slideshare.net/peihsinsu/nodejs-socketio-26826686" title="Node.js 淺談socket.io" target="_blank">Node.js 淺談socket.io</a> </strong> from <strong><a href="http://www.slideshare.net/peihsinsu" target="_blank">Simon Su</a></strong> </div>

# 程式碼內容

* helloworld
展示基本的socketio模型，啟動測試：

```
cd helloworld && npm install
node server
```

檢視：使用瀏覽器打開http://localhost:8088，並透過Chrome Debug工具檢視console log資訊

* socketioDemo
展示socketio實作廣播對話，啟動測試：

```
cd socketioDemo && npm install
node app
```

檢視：使用瀏覽器打開http://localhost:8088，並邀請其他瀏覽器加入瀏覽對話～
