// ================================================ =============================
// FixImageLoading.js
// ------------------------------------------------ ----------------------------
// Copyright (c) 2015-2017 Triacontane
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ------------------------------------------------ ----------------------------
// Version
// 2.0.1 2019/04/06 MoviePicture.js과의 충돌을 수정
// 2.0.0 2017/06/09 본체 ver1.5.0에 맞게 다시 작성
// 1.1.1 2016/11/20로드 완료시 frame이 업데이트되지 않는 문제를 수정
//로드 중 frame이 변경된 경우로드 완료까지 반영을 지연 사양을 추가
// 1.1.0 2016/11/16 liply_GC.js과의 충돌을 해소 by 연주 네코 마 님
// 1.0.0 2016/05/02 초판
// ------------------------------------------------ ----------------------------
// [Blog] : http://triacontane.blogspot.jp/
// [Twitter] : https://twitter.com/triacontane/
// [GitHub] : https://github.com/triacontane/
// ================================================ =============================

/ * : ja
 * @plugindesc 이미지로드시 찌라 つ き 방지 플러그인
 * @author 토리아콘탄
 *
 * @help 캐시하지 않는 이미지를 표시 할 때
 * 순간 발생하는 치라 다해를 방지합니다.
 * 이미지의로드가 완료 될 때까지 이전에 표시하고 이미지를 떠납니다.
 *
 * 반대로 이미지를 지우고 싶을 때는 명시 적으로 사진의 삭제 등을 수행하고
 * 표시하십시오.
 *
 *이 플러그인은 플러그인 명령은 없습니다.
 *
 * 이용 약관 :
 * 저자에 무단으로 수정, 재배포가 가능하며, 이용 형태 (상업용, 18 금 이용 등)
 * 대해서도 제한은 없습니다.
 *이 플러그인은 이미 당신의 것입니다.
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
