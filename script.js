var isInView = function (element) {
      var elementTop = element.offset().top;
      var elementBot = elementTop + element.outerHeight();
      var screenBot = $(window).scrollTop() + $(window).height();
      return (screenBot > elementTop) && (screenBot <  elementBot);

}

var buttons = ['#about-button', '#work-button', '#code-button', '#tricking-button'];

var toggleActive = function (element) {
      for (var i = 0; i < buttons.length; i++) {
            if (element === buttons[i]) {
                  $(buttons[i]).addClass('active');
            } else {
                  $(buttons[i]).removeClass('active');
            }
      }
}



$(window).scroll(function() {
      if (isInView($('#about'))) {
            toggleActive('#about-button');
            $('header').css('border-bottom', 'solid #f49445  1px');
            $('header').css('border-top', 'solid #f49445  1px');
      }

      if (isInView($('#work'))) {
            toggleActive('#work-button');
            $('header').css('border-bottom', 'solid #40cde4  1px');
            $('header').css('border-top', 'solid #40cde4  1px');
      }

      if (isInView($('#code'))) {
            toggleActive('#code-button');
            $('header').css('border-bottom', 'solid #5aa814  1px');
            $('header').css('border-top', 'solid #5aa814 1px');
      }

      if (isInView($('#tricking'))) {
            toggleActive('#tricking-button');
            $('header').css('border-bottom', 'solid #d42700 1px');
            $('header').css('border-top', 'solid #d42700 1px');
      }
});

$(document).ready( function() {
      $('#about-button').click(function() {
            toggleActive('#about-button');
            $('header').css('border-bottom', 'solid #f49445  1px');
            $('header').css('border-top', 'solid #f49445  1px');
      });

      $('#work-button').click(function() {
            toggleActive('#work-button');
            $('header').css('border-bottom', 'solid #40cde4  1px');
            $('header').css('border-top', 'solid #40cde4  1px');
      });

      $('#code-button').click(function() {
            toggleActive('#code-button');
            $('header').css('border-bottom', 'solid #5aa814  1px');
            $('header').css('border-top', 'solid #5aa814 1px');
      });

      $('#tricking-button').click(function() {
            toggleActive('#tricking-button');
            $('header').css('border-bottom', 'solid #d42700 1px');
            $('header').css('border-top', 'solid #d42700 1px');
      });

      $('a').click(function(e) {
            if (this.hash !== ' ' ) {
                  e.preventDefault();

                  var hash = this.hash;

                  $('html, body').animate({
                        scrollTop: $(hash).offset().top - 50
                  }, 800, function() {
                        window.location.hash = hash;
                  });
            }
      });
});

(function(d3) {
      var javabar = new ProgressBar.Line('#javabar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
      javabar.animate(1.0);

      var jsbar = new ProgressBar.Line('#jsbar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
      jsbar.animate(1.0);

      var htmlbar = new ProgressBar.Line('#htmlbar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
      htmlbar.animate(1.0);

      var cssbar = new ProgressBar.Line('#cssbar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
      cssbar.animate(1.0);

      var cppbar = new ProgressBar.Line('#cppbar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
      cppbar.animate(0.8);

      var cbar = new ProgressBar.Line('#cbar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
      cbar.animate(0.6);

      var photoshopbar = new ProgressBar.Line('#photoshopbar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
      photoshopbar.animate(1.0);

      var illustratorbar = new ProgressBar.Line('#illustratorbar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '500%'}
      });
      illustratorbar.animate(1.0);

      var indesignbar = new ProgressBar.Line('#indesignbar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '500%'}
      });
      indesignbar.animate(0.7);

      var mayabar = new ProgressBar.Line('#mayabar', {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 2000,
            color: '#f49445',
            trailColor: '#b0abab',
            trailWidth: 1,
            svgStyle: {width: '100%', height:'500%'}
      });
      mayabar.animate(0.4);

      var eclipsebar = new ProgressBar.Line('#eclipsebar', {
       strokeWidth: 4,
       easing: 'easeInOut',
       duration: 2000,
       color: '#f49445',
       trailColor: '#b0abab',
       trailWidth: 1,
       svgStyle: {width: '100%', height: '500%'}
      });
      eclipsebar.animate(1.0);

      var qtbar = new ProgressBar.Line('#qtbar', {
       strokeWidth: 4,
       easing: 'easeInOut',
       duration: 2000,
       color: '#f49445',
       trailColor: '#b0abab',
       trailWidth: 1,
       svgStyle: {width: '100%', height: '500%'}
      });
      qtbar.animate(1.0);

      var atombar = new ProgressBar.Line('#atombar', {
       strokeWidth: 4,
       easing: 'easeInOut',
       duration: 2000,
       color: '#f49445',
       trailColor: '#b0abab',
       trailWidth: 1,
       svgStyle: {width: '100%', height: '500%'}
      });
      atombar.animate(1.0);

      var androidbar = new ProgressBar.Line('#androidbar', {
       strokeWidth: 4,
       easing: 'easeInOut',
       duration: 2000,
       color: '#f49445',
       trailColor: '#b0abab',
       trailWidth: 1,
       svgStyle: {width: '100%', height: '500%'}
      });
      androidbar.animate(0.8);




})(window.d3);
