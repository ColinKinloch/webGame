/*global define*/
'use strict';
define(['three', 'game/renderer'],
function(THREE ,  Renderer){
  function Game(canvas){
    if(canvas)
      this.renderer = new Renderer(canvas);
  }
  return Game;
});
