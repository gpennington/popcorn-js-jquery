/* PLUGIN: jQuery
* Add content, as jQuery objects, to a target using jQuery selector syntax.
*/

(function () {
    /*
    * jQuery Popcorn plug-n
    * start: start time
    * end: end time
    * target: Accecpts target in jQuery selctor syntax or jQuery object, rather than element ID
    * [content]: DOM element, HTML string, or jQuery object
    * [method]: jquery function as string. For example, "append", "prepend", 
    * [onStart]: function that runs at start time
    * [onEnd]: function that runs at start time

    
    TODO:
    Handle all exceptions
    Add jQuery method options
    Fix indents
    Add manifest
    new name?
    
    
    */



    Popcorn.plugin( "jquery" , function( options ) {
    //manifest, options
    if (options.content){
        var content = $(options.content);
        if ( content.length == 0){
            content = $('<p>' + options.content + '</p>');
            console.log('Popcorn jQuery Plugin Error: content must be DOM element, HTML string, or jQuery object. Converting to <p> element');
        }

        var newContent = $();
    }

    return {
        _setup : function( options ) {
            if (options.content){
                switch (options.method){
                    case 'html':
                        newContent = $(options.target).html(content);
                    case 'append':
                        newContent = content.appendTo($(options.target));
                        break;
                    case 'prepend':
                        newContent = content.prependTo($(options.target));
                        break;
                    case 'insertAfter':
                        newContent = content.insertAfter($(options.target));
                        break;
                    default:
                        newContent = $(options.target).html(content);
                        break;
                }
                $(newContent).hide();
            }
        },
        start: function( event, options ) {
            //alert("start!");
            console.log('start');
         
            if(options.content){
                $(newContent).show();
            }
          
            if (options.onStart ) {
                options.onStart( options, newContent );
            }
          
        // fires on options.start
        // event refers to the event object
        // options refers to the options passed into the plugin on init
        // this refers to the popcorn object
        },
        end: function( event, options ) {
            //alert("end!");
            console.log('end');

            if(options.content){
                $(newContent).hide();
            }

            if ( options.onEnd ) {        
                options.onEnd( options, newContent );
            }
          // fires on options.end
          // event refers to the event object
          // options refers to the options passed into the plugin on init
          // this refers to the popcorn object
        }
    };
},
{
    // manifest definition here
});
})();