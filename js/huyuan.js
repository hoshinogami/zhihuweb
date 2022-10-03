window.addEventListener('load', function () {
    // 1. ��ȡԪ��
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    // 2. ��꾭��focus ����ʾ�������Ұ�ť
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null; // �����ʱ������
    });
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            //�ֶ����õ���¼�
            arrow_r.click();
        }, 2000);
    });
    // 3. ��̬����СԲȦ  �м���ͼƬ���Ҿ����ɼ���СԲȦ
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    // console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        // ����һ��Сli 
        var li = document.createElement('li');
        // ��¼��ǰСԲȦ�������� ͨ���Զ����������� 
        li.setAttribute('index', i);
        // ��Сli���뵽ol ����
        ol.appendChild(li);
        // 4. СԲȦ������˼�� ���ǿ���ֱ��������СԲȦ��ͬʱֱ�Ӱ󶨵���¼�
        li.addEventListener('click', function () {
            // �ɵ������� �����е�Сli ��� current ����
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // �������Լ�  ��ǰ��Сli ����current ����
            this.className = 'current';
            // 5. ���СԲȦ���ƶ�ͼƬ ��Ȼ�ƶ����� ul 
            // ul ���ƶ����� СԲȦ�������� ���� ͼƬ�Ŀ�� ע���Ǹ�ֵ
            // �����ǵ����ĳ��Сli ���õ���ǰСli ��������
            var index = this.getAttribute('index');
            // �����ǵ����ĳ��Сli ��Ҫ�����li �������Ÿ� num  
            num = index;
            // �����ǵ����ĳ��Сli ��Ҫ�����li �������Ÿ� circle  
            circle = index;
            // num = circle = index;
            console.log(focusWidth);
            console.log(index);

            animate(ul, -index * focusWidth);
        })
    }
    // ��ol����ĵ�һ��Сli��������Ϊ current
    ol.children[0].className = 'current';
    // 6. ��¡��һ��ͼƬ(li)�ŵ�ul �����
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 7. ����Ҳఴť�� ͼƬ����һ��
    var num = 0;
    // circle ����СԲȦ�Ĳ���
    var circle = 0;
    // flag ������
    var flag = true;
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false; // �رս�����
            // ����ߵ�������Ƶ�һ��ͼƬ����ʱ ���ǵ�ul Ҫ���ٸ�ԭ left ��Ϊ 0
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true; // �򿪽�����
            });
            // 8. ����Ҳఴť��СԲȦ����һ��仯 ����������һ����������СԲȦ�Ĳ���
            circle++;
            // ���circle == 4 ˵���ߵ�������ǿ�¡������ͼƬ�� ���Ǿ͸�ԭ
            if (circle == ol.children.length) {
                circle = 0;
            }
            // ���ú���
            circleChange();
        }
    });

    // 9. ��ఴť����
    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';

            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            // �����ఴť��СԲȦ����һ��仯 ����������һ����������СԲȦ�Ĳ���
            circle--;
            // ���circle < 0  ˵����һ��ͼƬ����СԲȦҪ��Ϊ��4��СԲȦ��3��
            // if (circle < 0) {
            //     circle = ol.children.length - 1;
            // }
            circle = circle < 0 ? ol.children.length - 1 : circle;
            // ���ú���
            circleChange();
        }
    });

    function circleChange() {
        // ���������СԲȦ��current����
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // ���µ�ǰ��СԲȦ��current����
        ol.children[circle].className = 'current';
    }
    // 10. �Զ������ֲ�ͼ
    var timer = setInterval(function () {
        //�ֶ����õ���¼�
        arrow_r.click();
    }, 2000);

})