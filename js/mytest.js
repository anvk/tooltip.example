(function ($) {
    "use strict";

    var tooltipTest = function () {
        var that = {};
        that.tooltipText = "before click!";
        that.createContentFunc = function (content) {
            return typeof content === "function" ? content : function () {
                return content;
            };
        };
        that.myButton = $("#myButton");
        that.myButton.tooltip({
            content: that.createContentFunc(that.tooltipText)
        });
        that.myButton.click(function() {
            that.tooltipText = "after click!";
            that.myButton.tooltip("option", "content", that.createContentFunc(that.tooltipText));
        });
   };

   $(window).load(function() {
        tooltipTest();
    });
    
})(jQuery);