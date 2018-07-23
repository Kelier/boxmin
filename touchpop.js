$('body').on('mouseover', 'img', function(e) {
    console.log(e.target);
    var type = e.target.nodeName;
    var node = e.target;

    // 确认点击类型
    const types = ['IMG', 'CANVAS'];
    
    const pop = {
      init: function() {

      },
      getLog: function(node) {
        if ($('.field-set')) {
          $('.field-set').remove();
        }
        var params = {};
        params.clientWidth = node.clientWidth;
        params.clientHeight = node.clientHeight;
        params.naturalWidth = node.naturalWidth;
        params.naturalHeight = node.naturalHeight;
        params.src = node.src;
        params.offsetTop = node.y + node.scrollHeight - node.clientHeight;
        params.offsetLeft = node.x + node.scrollLeft;

        this.pack(params);
      },
      pack: function(params) {
        var notifity = `<div class="field-set" style="position:fixed;top:${params.offsetTop+1}px;left:${params.offsetLeft+1}px">
                          <fieldset class="field-style">
                            表现宽度：<input type="text" disabled value="${params.clientWidth}" class="field-input" />
                          </fieldset>
                          <fieldset class="field-style">
                            表现高度：<input type="text" disabled value="${params.clientHeight}" class="field-input" />
                          </fieldset>
                          <fieldset class="field-style">
                            原始宽度：<input type="text" disabled value="${params.naturalWidth}" class="field-input" />
                          </fieldset>
                          <fieldset class="field-style">
                            原始高度：<input type="text" disabled value="${params.naturalHeight}" class="field-input" />
                          </fieldset>
                          <fieldset  class="field-style">
                            图片地址：<input type="text" value="${params.src}" class="field-input" />
                          </fieldset>
                        </div>`;
        $('html').append(notifity);
      }
    }


    if (types.indexOf(type) > -1) {
      pop.getLog(node);
    }
});

$('body').click(function(e) {
  if (e.target.nodeName !== 'IMG') {
    $('.field-set').remove();
  }
});



