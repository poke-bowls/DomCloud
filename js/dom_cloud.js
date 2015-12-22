window.onload = (function() {

  var element = document.body;
  var tags = [];
  var count = 0;

  function createCloud( currNode ) {
    tags.push( currNode.tagName );

    for( j = 0; j < currNode.attributes.length; j++ ) {
      tags.push( currNode.attributes[j].name );
    }
    if ( currNode.children.length === 0 ) {
      return;
    } else {
      for( i = 0; i < currNode.children.length; i++ ) {
        createCloud( currNode.children[i] );
        count++;
      }
    }
  }
    createCloud( document.body );
    console.log( tags.length );
    console.log( tags );
    console.log( count );
console.log( createCloud( document.body ) );
});