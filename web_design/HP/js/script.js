//---ハンバーガーメニュー---
  $(function () { //ハンバーガーボタンを押下した場合
    $('.burger-btn').on('click', function () {
      $('.burger-btn').toggleClass('close');  //ボタンにcloseクラスを追加
      $('.nav-wrapper').toggleClass('fade');  //ボタンにfadeクラスを追加
      $('body').toggleClass('noscroll');  //ボタンにnoscrollクラスを追加
    });
  });

  $(function () { //ハンバーガーメニューのいずれかを押下した場合
    $('a[href^="#"]').on('click', function () {
      $('.burger-btn').removeClass('close');  //ボタンのcloseクラスを除去
      $('.nav-wrapper').removeClass('fade');  //ボタンのfadeクラスを除去
      $('body').removeClass('noscroll');  //ボタンのnoscrollクラスを除去
  });
});
//---ハンバーガーメニュー---

//---スムーズスクロール---
  $(function () {
    $('a[href^="#"]').click(function () {
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
  　　var speed = 500;
      $("html, body").animate({
        scrollTop: position
      }, speed, "swing");
      return false;
    });
  });
//---スムーズスクロール---