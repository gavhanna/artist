$(".content1").click(function(){
  $.ajax({
    url: "content1.html",
    context: document.body,
    success: function(response){
      $('.inject').html(response);
    }
  });
});

$(".content2").click(function(){
  $.ajax({
    url: "content2.html",
    context: document.body,
    success: function(response){
      $('.inject').html(response);
    }
  });
});

$(".content3").click(function(){
  $.ajax({
    url: "content3.html",
    context: document.body,
    success: function(response){
      $('.inject').html(response);
    }
  });
});
