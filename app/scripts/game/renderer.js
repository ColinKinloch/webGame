/*global define*/
'use strict';
define([
  'jquery',
  'three'
], function($, THREE) {
  function Renderer(canvas) {
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, this.canvas.width() / this.canvas.height(), 0.1, 1000 );
    
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas[0]
    });
    this.renderer.setSize(this.canvas.width(), this.canvas.height());
  };
  
  Renderer.prototype.render = function(){
    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
    //this.renderer.setClearColor(Math.random()*Math.pow(256, 3));
  }
  
  return Renderer;
});
