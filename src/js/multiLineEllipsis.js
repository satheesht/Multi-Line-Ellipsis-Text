(function ( $ ) { 
    $.fn.multiLineEllipsis = function(options) {
        var settings = $.extend({
            line:2,
            tooltip:true
        }, options);
        this.each(function(){
            applyEllipsis(this,this.offsetWidth,settings.line,settings.tooltip);
        });
    };

    function applyEllipsis(element, offset, line,toolTip) {

            var text = element.innerHTML;
            var space = getTextWidthByFontStyles("&nbsp;", element);
            var ar = text.split(" ");
            var first = [], rest = [], sum = 0, line_log = [], line_count = 0, last_index = 0, cur_length, innerHTML, sp_flag = 1;
            if (line == 1) {
                innerHTML = "<span class='liner'>" + text + "</span>"; //This line requires ellipsis
                if (getTextWidthByFontStyles(text, element) > offset && toolTip)
                    toolTip = true;
            } else {
                for (var i = 0; i <= ar.length; i++, sp_flag++) {
                    cur_length = getTextWidthByFontStyles(ar[i], element);
                    sum = sum + cur_length;
                    if (sum + (space * (sp_flag - 1)) > offset) {//Line break necessary
                        sp_flag = 0;
                        line_log[line_count] = ar.slice((last_index), i).join(" ");
                        line_count++;
                        last_index = i;
                        sum = cur_length; //Reset the sum to check the next word fits
                        if (line == (line_count + 1) || !ar[i + 1]) { //Line count reached the threshold "line"
                            if (line_log.length) lines = "<span class='liner-nl'>" + line_log.join("</span><span class='liner-nl'>") + "</span>"; //This lines need not ellipsis
                            if (ar.slice((i), ar.length).join("")) rest = "<span class='liner'>" + ar.slice((i), ar.length).join(" ") + "</span>"; //This line requires ellipsis
                            innerHTML = lines + rest;
                            if (getTextWidthByFontStyles(ar.slice((i), ar.length).join(" "), element) > offset && toolTip) { //check to show tooltip
                                toolTip = true;
                            }
                            break;
                        }
                    }
                }
            }
            if (!($(element).css('text-overflow') === 'ellipsis')) {
                $(element).attr('title', '');
            }
            if (toolTip) {
                $(element).attr('title', ($(element).attr('title') != '' && $(element).attr('title') != undefined) ? $(element).attr('title') : text);
            }
            element.innerHTML = innerHTML ? innerHTML : "<span class='liner-nl'>" + text + "</span>";
        }

        function getTextWidthByFontStyles(text, element) {
            var temp_el = document.createElement('span');
            temp_el.style.fontSize = window.getComputedStyle(element).fontSize;
            temp_el.style.fontFamily = window.getComputedStyle(element).fontFamily;
            temp_el.style.fontStyle = window.getComputedStyle(element).fontStyle;
            temp_el.style.textTransform = window.getComputedStyle(element).textTransform;
            temp_el.style.fontStretch = window.getComputedStyle(element).fontStretch;
            temp_el.style.fontWeight = window.getComputedStyle(element).fontWeight;
            temp_el.style.fontVariant = window.getComputedStyle(element).fontVariant;
            temp_el.innerHTML = text;
            temp_el.style.visibility = "hidden";
            document.body.appendChild(temp_el);
            var width = temp_el.getBoundingClientRect().width;
            document.body.removeChild(temp_el);
            return width;
        }
}( jQuery ));




