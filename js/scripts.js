window.onload = function () {

  // Sticky Sidebar | Липкий сайдбар
  if ($('.js-sticky').length) {
    var stickySidebar = new StickySidebar('.js-sticky', {
      topSpacing: 10,
      bottomSpacing: 10,
      containerSelector: false,
      innerWrapperSelector: '.sidebar__inner',
      resizeSensor: true,
      stickyClass: 'is-affixed',
      minWidth: 0
    });
  }

  // Изменение количества товара (плюс минус)
  function counter(block) {
    const counter = document.querySelectorAll(block);
    if (counter) {
      counter.forEach(element => {
        const minus = element.querySelector('.js-counter-minus');
        const plus = element.querySelector('.js-counter-plus');
        const inputWrap = element.querySelector('.js-counter-input');
        const input = inputWrap.querySelector('input');
        plus.addEventListener('click', () => {
          if (Number(input.value) < 999) {
            input.value = Number(input.value) + 1;
          }
        })
        minus.addEventListener('click', () => {
          if (Number(input.value) > 1) {
            input.value = Number(input.value) - 1;
          }
        })
        input.addEventListener('keyup', () => {
          input.value = input.value.replace(/[^\d]/g, '');
        })
        input.addEventListener('blur', () => {
          if (input.value == '' || input.value == 0) {
            input.value = 1;
          }
        })
      });
    }
  }
  counter('.js-counter');

  // Inputmask | Маска телефона
  $('.js-mask-tel').inputmask("+7(999)-999-99-99");

  // Изменение высоты textarea под вводимый текст
  $(function () {
    $('.eiv-textarea textarea').on('input keyup paste', function () {
      var $el = $(this),
        offset = $el.innerHeight() - $el.height();

      if ($el.innerHeight() < this.scrollHeight) {
        $el.height(this.scrollHeight - offset);
      } else {
        $el.height(1);
        $el.height(this.scrollHeight - offset);
      }
    });
  });

  // Переключение доставок
  $(function () {
    let content = $('.eiv-cart__hide-content');
    $('[data-checkbox]').on('change', function () {
      let contentCurrent = $('#' + $(this).data('checkbox'));
      content.removeClass('eiv-show');
      contentCurrent.addClass('eiv-show');
    })
  });

}