// ================================================ =============================
// FixImageLoading.js
// ------------------------------------------------ ----------------------------
// Copyright (c) 2015-2017 Triacontane
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ------------------------------------------------ ----------------------------
// Version
// 2.0.1 2019/04/06 MoviePicture.js���� �浹�� ����
// 2.0.0 2017/06/09 ��ü ver1.5.0�� �°� �ٽ� �ۼ�
// 1.1.1 2016/11/20�ε� �Ϸ�� frame�� ������Ʈ���� �ʴ� ������ ����
//�ε� �� frame�� ����� ���ε� �Ϸ���� �ݿ��� ���� ����� �߰�
// 1.1.0 2016/11/16 liply_GC.js���� �浹�� �ؼ� by ���� ���� �� ��
// 1.0.0 2016/05/02 ����
// ------------------------------------------------ ----------------------------
// [Blog] : http://triacontane.blogspot.jp/
// [Twitter] : https://twitter.com/triacontane/
// [GitHub] : https://github.com/triacontane/
// ================================================ =============================

/ * : ja
 * @plugindesc �̹����ε�� ��� �� �� ���� �÷�����
 * @author �丮����ź
 *
 * @help ĳ������ �ʴ� �̹����� ǥ�� �� ��
 * ���� �߻��ϴ� ġ�� ���ظ� �����մϴ�.
 * �̹����Ƿε尡 �Ϸ� �� ������ ������ ǥ���ϰ� �̹����� �����ϴ�.
 *
 * �ݴ�� �̹����� ����� ���� ���� ��� ������ ������ ���� ���� �����ϰ�
 * ǥ���Ͻʽÿ�.
 *
 *�� �÷������� �÷����� ����� �����ϴ�.
 *
 * �̿� ��� :
 * ���ڿ� �������� ����, ������� �����ϸ�, �̿� ���� (�����, 18 �� �̿� ��)
 * ���ؼ��� ������ �����ϴ�.
 *�� �÷������� �̹� ����� ���Դϴ�.
 * /

(function () {
    'use strict';

    var _Sprite__renderCanvas = Sprite.prototype._renderCanvas;
    Sprite.prototype._renderCanvas = function (renderer) {
        _Sprite__renderCanvas.apply (this, arguments);
        if (this.isExistLoadingBitmap ()) {
            this._renderCanvas_PIXI (renderer);
        }
    };

    var _Sprite__renderWebGL = Sprite.prototype._renderWebGL;
    Sprite.prototype._renderWebGL = function (renderer) {
        _Sprite__renderWebGL.apply (this, arguments);
        if (this.isExistLoadingBitmap ()) {
            if (this._isPicture) {
                this._speedUpCustomBlendModes (renderer);
                renderer.setObjectRenderer (renderer.plugins.picture);
                if (! this.isVideoPicture ||! this.isVideoPicture ()) {
                    renderer.plugins.picture.render (this);
                }
            } else {
                renderer.setObjectRenderer (renderer.plugins.sprite);
                renderer.plugins.sprite.render (this);
            }
        }
    };

    Sprite.prototype.isExistLoadingBitmap = function () {
        return this.bitmap &&! this.bitmap.isReady ();
    };
}) ();
