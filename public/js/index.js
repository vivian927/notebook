setTimeout(function(){
    $.ajax({
        url: '/user.action',
        method: 'get',
        success: function(data){
            $('.out').html(data.map(function(e){
                return '<li>'+e+'</li>';
            }).join(''));
        },
        error: function(err){
            console.error(err);
        }
    })
    $.ajax({
        url: '/list.action',
        method: 'get',
        success: function(data){
            $('#shop').html(data.map(function(e){
                return '<li>'+e+'</li>';
            }).join(''));
        },
        error: function(err){
            console.error(err);
        }
    })
},1000)
