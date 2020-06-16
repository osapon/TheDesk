//スクロールで続きを読む
function scrollevent() {
	$('.tl-box').scroll(function() {
		scrollck()
	})
}
scrollevent()

function scrollck() {
	$('.tl-box').each(function(i, elem) {
		var tlid = $(this).attr('tlid')
		var len = $('#timeline_' + tlid + ' .cvo').length
		//一番上ならためていた新しいトゥートを表示ないしtealなら未読管理モード
		if ($(this).scrollTop() === 0) {
			if (!$('#unread_' + tlid + ' .material-icons').hasClass('teal-text')) {
				var pool = localStorage.getItem('pool_' + tlid)
				if (pool) {
					$('#timeline_' + tlid).prepend(pool)
					jQuery('time.timeago').timeago()
					localStorage.removeItem('pool_' + tlid)
				}
			} else {
				ueload(tlid)
			}
			//自動リフレッシュ
			if (len > 100) {
				for (var i = 100; i < $('#timeline_' + tlid + ' .cvo').length; i++) {
					$('#timeline_' + tlid + ' .cvo')
						.eq(i)
						.remove()
				}
			}
		}
		//続きを読むトリガー
		var scrt =
			$(this)
				.find('.tl')
				.height() - $(window).height()
		var scr = $(this).scrollTop()
		if (scr > scrt && scrt > 0) {
			console.log('kicked more loading:' + tlid)
			moreload('', tlid)
		}
	})
}

function goTop(id) {
	if ($('#unread_' + id + ' .material-icons').hasClass('teal-text')) {
		$('#unread_' + id + ' .material-icons').removeClass('teal-text')
		var multi = localStorage.getItem('column')
		var obj = JSON.parse(multi)
		var acct_id = obj[id * 1].domain
		var type = obj[id * 1].type
		console.log(id, type)
		columnReload(id, type)
	}
	if ($('#timeline_box_' + id + '_box .tl-box').scrollTop() > 500) {
		$('#timeline_box_' + id + '_box .tl-box').scrollTop(500)
	}
	$('#timeline_box_' + id + '_box .tl-box').animate({ scrollTop: 0 })
}
function goColumn(key) {
	$('#sort-box').addClass('hide')
	$('#sort-box').removeClass('show')
	if ($('[tlid=' + key + ']').length) {
		$('#timeline-container').animate({
			scrollLeft: $('#timeline-container').scrollLeft() + $('[tlid=' + key + ']').offset().left
		})
	}
}
