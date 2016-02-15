angular.module('angularSlideables', [])

.directive('slideable', function () {
    return {
        restrict:'C',
        compile: function (element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');
            
            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = (!attrs.duration) ? '0.5s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                element.css({
                    'overflow': 'hidden',
                    'height': '0px',
                    'transitionProperty': 'height',
                    'transitionDuration': attrs.duration,
                    'transitionTimingFunction': attrs.easing
                });
            };
            
        }
    };
})

.directive('slideToggle', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
   
            var target, content,head;
            
            attrs.expanded = false;
            
            element.bind('click', function() {
                if (!target) target = document.querySelector(attrs.slideToggle);
                         if (!head) head = document.querySelector(attrs.slideToggleHead);
                         if (!content) content = target.querySelector('.slideable_content');
                         
                         if(!attrs.expanded) {
                             content.style.border = '1px solid rgba(0,0,0,0)';
                             var y = content.clientHeight;
                             content.style.border = 0;
                             target.style.height = y + 'px';
                             head.style.overflow = 'hidden';
                             head.style.height = '0px';
                             head.style.transitionProperty = 'height';
                             head.style.transitionDuration = '0.1s';
                             head.style.transitionTimingFunction = 'ease-in-out';
                             
                         } else {
                             target.style.height = '0px';
                             head.style.height = '30px';
                             head.style.overflow = '';
                            
                             head.style.transitionProperty = 'height';
                             head.style.transitionDuration = '0.1s';
                             head.style.transitionTimingFunction = 'ease-in-out';
                         }
                         attrs.expanded = !attrs.expanded;
            });
        }
    }
});
