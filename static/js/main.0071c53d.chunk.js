(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),s=a.n(r),c=(a(17),a(8)),i=a(1),d=a(5),l=a(6),u=a(9),m=a(7),f=a(10),k=(a(2),function(e){return o.a.createElement("div",null,o.a.createElement("h1",{className:"gamename"},"GAME OVER"),o.a.createElement("h3",{className:"score"},"SCORE ",e.score," "),o.a.createElement("br",null),o.a.createElement("h2",{onClick:e.startGame,style:{cursor:"pointer"},className:"startbutton"},"RESTART"))}),h=function(e){return o.a.createElement("div",null,o.a.createElement("h1",{className:"gamename"}," CLASSIC SNAKE GAME "),o.a.createElement("h3",{className:"score"},"SCORE ",e.score),o.a.createElement("div",{className:"playground"},e.playground.map(function(t,a){return t.map(function(t){return e.isHead(t)||e.isBody(t)?t.type="cell snakebodycell":e.isFood(t)?t.type="cell foodcell":t.type="cell",o.a.createElement("div",{key:"".concat(t.row," ").concat(t.col),className:t.type})})})))},p=function(e){return o.a.createElement("div",null,o.a.createElement("h1",{className:"gamename"}," CLASSIC SNAKE GAME "),o.a.createElement("h3",{onClick:e.startGame,style:{cursor:"pointer"},className:"startbutton"}," ",o.a.createElement("br",null),"START GAME "))},y=40,b=40,w=[],E=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).placeFood=function(){return{row:parseInt(Math.random()*y),col:parseInt(Math.random()*b)}},e.state={startGame:!0,playground:w,snake:{head:{row:parseInt(y/2),col:parseInt(b/2)},body:[],direction:{x:1,y:0}},food:e.placeFood()},e.createMap=function(e){for(var t=0;t<y;t++){for(var a=[],n=0;n<b;n++)a.push({row:t,col:n});e.push(a)}},e.getSnakeSpeed=function(){var t=100-20*e.state.snake.body.length;return t>25?t:25},e.componentDidMount=function(){e.focusRef.current.focus()},e.startGame=function(){e.setState({startGame:!1,gameOver:!1,snake:{head:{row:parseInt(y/2),col:parseInt(b/2)},body:[],direction:{x:1,y:0}}}),setTimeout(function(){e.runGame()},e.getSnakeSpeed())},e.runGame=function(){e.setState(function(){var t=e.foundFood(),a={snake:Object(i.a)({},e.state.snake,{head:{row:e.state.snake.head.row+e.state.snake.direction.y,col:e.state.snake.head.col+e.state.snake.direction.x},body:[e.state.snake.head].concat(Object(c.a)(e.state.snake.body))}),food:t?e.placeFood():e.state.food};return a.snake.head.row===y?a.snake.head.row=0:a.snake.head.row<0&&(a.snake.head.row=y-1),a.snake.head.col===b?a.snake.head.col=0:a.snake.head.col<0&&(a.snake.head.col=b-1),t||a.snake.body.pop(),a},function(){var t=e.state.snake;e.isBody(t.head)?e.setState({gameOver:!0}):setTimeout(function(){e.runGame()},e.getSnakeSpeed())})},e.foundFood=function(){return e.state.food.row===e.state.snake.head.row&&e.state.food.col===e.state.snake.head.col},e.changeDirection=function(t){var a=e.state.snake;switch(t.keyCode){case 38:if(1===a.direction.y)break;e.setState(function(e){var t=e.snake;return{snake:Object(i.a)({},t,{direction:{x:0,y:-1}})}});break;case 40:if(-1===a.direction.y)break;e.setState(function(e){var t=e.snake;return{snake:Object(i.a)({},t,{direction:{x:0,y:1}})}});break;case 39:if(-1===a.direction.x)break;e.setState(function(e){var t=e.snake;return{snake:Object(i.a)({},t,{direction:{x:1,y:0}})}});break;case 37:if(1===a.direction.x)break;e.setState(function(e){var t=e.snake;return{snake:Object(i.a)({},t,{direction:{x:-1,y:0}})}})}},e.isFood=function(t){return e.state.food.row===t.row&&e.state.food.col===t.col},e.isHead=function(t){return e.state.snake.head.row===t.row&&e.state.snake.head.col===t.col},e.isBody=function(t){return e.state.snake.body.find(function(e){return e.row===t.row&&e.col===t.col})},e.focusRef=o.a.createRef(),e.createMap(w),e}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.playground,n=t.snake,r=t.gameOver,s=t.startGame;return o.a.createElement("div",{ref:this.focusRef,onKeyDown:function(t){return e.changeDirection(t)},className:"App",tabIndex:"0"},s?o.a.createElement(p,{startGame:this.startGame}):r?o.a.createElement(k,{score:n.body.length,startGame:this.startGame}):o.a.createElement(h,{playground:a,isHead:this.isHead,isBody:this.isBody,isFood:this.isFood,score:n.body.length}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},2:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.0071c53d.chunk.js.map