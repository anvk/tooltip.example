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
            content: that.createContentFunc(that.tooltipText),
            items: that.myButton,
            position: { my: "left+15 top", at: "left bottom", collision: "flipfit" }
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