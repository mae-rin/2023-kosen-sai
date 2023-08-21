//5. iframeのモーダル
$(".iframe-open").modaal({
    type:'iframe',
    width: (window.innerWidth * 0.8),//iframe横幅（ブラウザの利用可能域×0.8）
    height:	(window.innerHeight * 0.9),//iframe高さ（ブラウザの利用可能域×0.8）
    overlay_close:true,//モーダル背景クリック時に閉じるか
before_open:function(){// モーダルが開く前に行う動作
    $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
},
after_close:function(){// モーダルが閉じた後に行う動作
    $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
}
});