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
    //模拟post
    $.ajax({
        url: '/list.action',
        method: 'post',
        headers:{
            'content-type':'application/json'
        },
        data: JSON.stringify([
            'cdddd','creedlimo'
        ]),
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
