/**
 * Created by msjrIT on 2016/11/17.
 */
$(function(){
    //�򿪴���
    $('.cd-popup-trigger0').on('click', function(event){
        event.preventDefault();
        var teamName = $(this).data("name");
        var className = $(this).data('popup');
        $('.'+className+' .p_title').html(teamName);
        $('.'+className).addClass('is-visible');
        //$('body').css("overflow","hidden");
    });
    //�رմ���
    $('.cd-popup').on('click', function(event){
        if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
            event.preventDefault();
            $(this).removeClass('is-visible');
            //$('body').css("overflow","scroll");
            /// $('body').css("overflow-x","hidden");
        }

    });
    $('.i_close').on('click', function(event){
        alert("ddd");
        if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }

    });
    //ESC�ر�
    $(document).keyup(function(event){
        if(event.which=='27'){
            $('.cd-popup').removeClass('is-visible');
            // $('body').css("overflow","scroll");
            //$('body').css("overflow-x","hidden");
        }
    });
})