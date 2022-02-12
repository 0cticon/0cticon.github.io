
function flipMe() {
  Array.prototype.slice.call(document.querySelectorAll('body')).map(function(tag){tag.style['transform'] = 'rotate(' + 180 +'deg)';});
}
function unflipMe() {    
  Array.prototype.slice.call(document.querySelectorAll('body')).map(function(tag){tag.style['transform'] = 'rotate(' + 0 +'deg)';});
}
