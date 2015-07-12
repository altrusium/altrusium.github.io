/* global $ jQuery player prettyPrint */
(function ($) {
  'use strict'
	/*
	Dropdown
	=========================== */
  $('ul.navbar-nav li.dropdown').on('mouseenter', function () {
    $(this).addClass('active')
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn()
    return false
  })
  $('ul.navbar-nav li.dropdown').on('mouseleave', function () {
    $(this).removeClass('active')
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut()
    return false
  })

  /*
  Continue button
	=========================== */
  $.fn.scrollView = function () {
    return this.each(function () {
      $('html, body').animate({
        scrollTop: $(this).offset().top
      }, 1000, 'easeOutCubic')
    })
  }

  $('a[data-continue]').click(function (e) {
    $('#top').scrollView()
    e.preventDefault()
  })

	/*
	Megamenu
	=========================== */
  /*
  window.prettyPrint && prettyPrint()
  $(document).on('click', '.yamm .dropdown-menu', function (e) {
    e.stopPropagation()
    return false
  })
  */

	/*
	Tooltip
	=========================== */
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
    return false
  })

	/*
	Accordions
	=========================== */
  $('.accordions .panel-heading a[data-toggle="collapse"]').on('click', function () {
    jQuery('.accordions .panel-heading a[data-toggle="collapse"]').removeClass('active')
    $(this).addClass('active')
  })

	/*
	Video play
	=========================== */
  $(document).on('click', '.start-video', function () {
    $(this).fadeOut(800)
    player.playVideo()
  })
  $('.start-video').click(function () {
    $('.video-image').fadeOut(800)
  })

	/*
	Image hover
	=========================== */
  $('.img-caption').css({'opacity': '0', 'filter': 'alpha(opacity=0)'})
  $('.img-wrapper').on('mouseenter', function () {
    $(this).find('.img-caption').stop().fadeTo(900, 1)
    $('.zoom', this).stop().animate({left: '50%'}, {queue: false, duration: 600})
    $('.link', this).stop().animate({right: '50%'}, {queue: false, duration: 600})
    return false
  })
  $('.img-wrapper').on('mouseleave', function () {
    $(this).find('.img-caption').stop().fadeTo(900, 0)
    $('.zoom', this).stop().animate({left: '-50%'}, {queue: false, duration: 300})
    $('.link', this).stop().animate({right: '-50%'}, {queue: false, duration: 300})
    return false
  })

	/*
	Progress Bar
	=========================== */
  $(window).on('scroll.myProgress', function () {
    // Get Position Progress Bar
    var p_progress = $('#progress').offset().top
    var h_window = $(window).height()
    var get_scroll_progress = p_progress - h_window

    // Scroll To Progress
    if ($(document).scrollTop() > get_scroll_progress) {
      $(window).off('scroll.myProgress')
      $('div.progress').each(function () {
        // Animation Progress Bar
        var myProgress = $(this).find('.progress-bar')
        var val_progress = myProgress.data('value-progress')
        myProgress.animate({
          'width': val_progress + '%'
        }, {
					duration: 1000
        })

				// Counter Progress Bar
        $(this).find('.value-progress').each(function () {
          $(this).text('0')
          $(this).prop('Counter', 0).animate({
						Counter: val_progress
					}, {
						duration: 5000,
						step: function (now) {
              $(this).text(Math.ceil(now))
						}
					})
        })
      })
    }
  })
})(jQuery)
