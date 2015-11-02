/**
 * Created by ning on 2015/10/17.
 */
$(function () {
    $('.del').click(function (e) {
        var target = $(e.target);
        var id = target.data('id');
        var tr = $('.item-id-' + id);

        $.ajax({
            type: 'DELETE',
            url: '/admin/list?id=' + id
        }).done(function (results) {
            if (results.success === 1) {
                if (tr.length > 0) {
                    tr.remove();
                }
            }
        });
    });
    $('#douban').blur(function () {
        var douban = $(this)
        var id = douban.val()

        if (id) {
            $.ajax({
                url: 'https://api.douban.com/v2/movie/subject/' + id,
                cache: true,
                type: 'get',
                dataType: 'jsonp',
                crossDomain: true,
                jsonp: 'callback',
                success: function (data) {
                    $('#title').val(data.title)
                    $('#doctor').val(data.directors[0].name)
                    $('#country').val(data.countries[0])
                    $('#poster').val(data.images.large)
                    $('#year').val(data.year)
                    $('#summary').val(data.summary)
                }
            })
        }
    })
});