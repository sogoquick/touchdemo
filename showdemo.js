(function($,T) {

    Index = function(option) {
        this.initEvent(option);
        this.loading();
        window.setTimeout(this.init,500);
    };

    Index.prototype = {
        initEvent:function(p){
        },
        init: function() {
           $('.wp-inner').fullpage({
                change: function (e) {
                    window.setTimeout(function(){
                        $('.page').each(function() {
                            var cur = $(this).attr('data-sel');
                            if(cur === 'true'){
                                $(this).find('.animation').show().addClass('act');
                            }else {
                                $(this).find('.animation').hide().removeClass('act');
                            }
                        })
                    },600);
                }
            });
            var width = $('.wp').width();
            $('.page').find('img').width(width);
        },
        loading:function(){
            var interval = setInterval(increment,100);
            var current = 0;

            function increment(){
            current += 10;
            $('.word-1').html(current+'%'); 
            if(current == 100) { 
                $('#loading').hide();
                 }
            }

            $('.load-bar').mouseover(function(){
                clearInterval(interval);
            }).mouseout(function(){
              interval = setInterval(increment,100);
            });
        }
    };
})(Zepto);
