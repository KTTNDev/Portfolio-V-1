function validation() {
    let username = "fluke";
    let password = "123";

    let UserName = document.getElementById('username').value;
    let passWord = document.getElementById('password').value;

    if ((username == UserName) && (password == passWord)) {
        swal("รหัส ถั่วต้วมมมม!", "You clicked the button!", "success");
    } else {
        swal("รหัส เผียดดดด!", "You clicked the button!", "error");
    }
}
(function($) {
    $(window).on('load', function() {
        // ISOTOPE PORTFOLIO WITH FILTER
        if (isExists('.portfolioContainer')) {
            var $container = $('.portfolioContainer');
            /* --------------------------------------------------------------
            Code ด้านล่าง ใช้จัด  layout ให้กับ Portfolio container ตอนที่ยังไม่กด filter 
              -------------------------------------------------------------- */
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            /* --------------------------------------------------------------
            หลังจากที่กดหัว filter เเล้ว จะใช้คำสั่ง แสดง Isotope ด้านล่างนี้
             -------------------------------------------------------------- */
            $('.portfolioFilter a').click(function() {
                $('.portfolioFilter .current').removeClass('current');
                $(this).addClass('current');
                console.log(this);
                //this ก็คือ(<a href="#" data-filter=".web-design" class=""></a>)
                //เอาเฉพาะ attribute data-filter มาใส่ในตัวแปล selector
                var selector = $(this).attr('data-filter');
                //จากนั้นให้เอา selector มาอยู่ในตัวแปร container ที่อยู่ใน layout isotope
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
                //เพื่อให้ตอนกดเเล้วไม่เด้งไป top page
            });
        }
        // -------------------- //

    });

    /* --------------------------------------------------------------
     code ส่วนใช้งาน fluidbox
      -------------------------------------------------------------- */
    $('a[href="#"]').on('click', function(event) {
        return;
    });

    /* --------------------------------------------------------------
     code ส่วนใช้งาน fluidbox
      -------------------------------------------------------------- */
    $(function() {
        $('a').fluidbox();
    });
    //  if ($.isFunction($.fn.fluidbox)) {
    //      $('a').fluidbox();
    //  }

    //-------------------------------------------------------------- */

})(jQuery);



/* --------------------------------------------------------------
 code ส่วนปิด ของ  isotope
  -------------------------------------------------------------- */
function isExists(elem) {
    if ($(elem).length > 0) {
        return true;
    }
    return false;
}
//-------------------------------------------------------------- */