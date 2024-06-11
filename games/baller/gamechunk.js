/*
Baller v1.2.7

Written by muffinshades
Copyright muffinshades 2024 All Rights Reserved
Minified with the Google Closure Compiler
*/

(function() {
    'use strict';(function(c,d){var a=document;window.addEventListener("load",function(){const T=a.createElement("canvas");T.id="c";a.body.appendChild(T)});var b=a.querySelector("#c");b.width=c;b.height=d})(400,400);
    'use strict';const d=document,can=d.getElementById("c"),drawingContext=can.getContext("2d"),X=drawingContext;const _FPS=60;var _kdowns={},_kwd={},_kwu={},_mm={},_md={},_mu={},r=function(o){let k=Object.keys(o);for(let g of k)o[g]=false};var World={mouseX:0,mouseY:0};function mouseDidMove(b){if(!b)b=0;return _mm[b]}function mouseWentDown(b){if(!b)b=0;return _md[b]}function mouseWentUp(b){if(!b)b=0;return _mu[b]}function keyWentDown(k){if(_kwd[k]==void 0)_kwd[k]=false;return _kwd[k]}function keyWentUp(k){if(_kwu[k]==
        void 0)_kwu[k]=false;return _kwu[k]}function keyDown(k){if(_kdowns[k]==void 0)_kdowns[k]=false;return _kdowns[k]}function image(i,a,e,f,d,q,l,o,r){X.drawImage(i,a,e,f,d,q,l,o,r)}function loadImage(u){var g=d.createElement("img");g.src=u;return g}function _tk(k){switch(k){case "arrowup":{return"Up"}case "arrowleft":{return"Left"}case "arrowright":{return"Right"}case "arrowdown":{return"Down"}default:{return k}}}setInterval(function(){if(typeof draw=="function")draw();r(_kwd);r(_kwu);r(_mm);r(_md);
        r(_mu)},1E3/_FPS);window.addEventListener("keydown",function(Y){let e=_tk(Y.key.toLowerCase());_kdowns[e]=true;_kwd[e]=true});window.addEventListener("keyup",function(Y){let e=_tk(Y.key.toLowerCase());_kdowns[e]=false;_kwu[e]=true});window.addEventListener("mousemove",function(e){_mm[e.button]=true;var M=can.getBoundingClientRect();World.mouseX=e.pageX-M.left;World.mouseY=e.pageY-M.top});window.addEventListener("mousedown",function(e){_md[e.button]=true});window.addEventListener("mouseup",function(e){_mu[e.button]=
        true})

        var LEVEL_ROM = [
            "u0000+Ytyw3x09i0Ug20UM1hw0000000r02a000008E0yw00000S08E00000Ug2a000004k0yw00002Z08E000006M2a00000cY0yw00001Mw8E00000B82a000002a0yw00003Ww8E00000r00S00000fG0dw00001I0e400000_E3x000006M0hg00003Ww4k00000r02Z000008E0Lg00000S0bQ00000Ug2Z000004k0Lg00002Z0bQ000006M2Z00000cY0Lg00001MwbQ00000B82Z000002a0Lg00003WwbQ0",
            "D0000+Ytyw3x09i0B820UM1hw7w00000r02a000008E0yw00000S08E00000Ug2a000004k0yw00002Z08E000006M2a00000cY0yw00001Mw8E00000B82a000002a0yw00003Ww8E00000r00S083002a0dw00003Ww3o00000r03x083002a0Ug00003Wwe400000r015083002a0hg00003Ww4k00000r02Z000008E0Lg00000S0bQ00000Ug2Z000004k0Lg00002Z0bQ000006M2Z00000cY0Lg20w01MwbQ0wc008E2Z00000fG0Lg00003f01I0w800s80r083002a06M00003Ww1I00000PM3f08200720PM20M00ywcY00000_E3f00000cY0s820w01Mw720wc008E1Mw0000fG0s800003f09i0w800s82kw83002a0B800003Ww9i00000PM0yw82007208E20M00yw2a00000_E0yw0000cY0_E00001MwfG00000B83Ww00002a0_E00003WwfG0",
            "hw00Pv+5r00S08E0B820Og0Ew4M00000hg0000000bQ00000000r00000000PM00000007200000002kw00000008E0000000fG0000000150dw0w400PM3o08100720S020g02kwdw0w4008E3o00000fG0S000001506M00000_E1I00000dw0yw00001I08E00000yw2a000003o0yw00003x08E00000hg2a00000bQ0yw00000r08E00000_E2a00000dw0dw00003Ww3o00000S03x00000fG0Ug00003o04k00000r015000008E0hg00000S04k00000Ug15000004k0hg00002Z04k000006M1500000cY0hg20M02kw4k000008E1500000fG0hg00003f0bQ0wc00B82Z000002a0Lg20w03WwbQ0w000S00r080006M06M20002a01I0w000dw0r08000e406M20001501I0w000Lg0r080001I06M00003f01I0wc00B80r000002a06M20w03Ww1I00000S03f000006M0PM00002a0cY00000dw3f00000e40PM0000150cY00000Lg3f000001I0PM00003f0cY0wc00B83f000002a0PM00003WwcY00000S01Mw82006M0s820g0150720w400Lg1Mw81001I0s800003Ww7200000S02kw82006M0B800003Ww9i00000S00yw82006M08E00w02a02a0w000hg0yw8000bQ08E20000r02a00000_E0yw0000dw0_E00001I0fG00000yw3Ww00003o0_E00003x0fG00000hg3Ww0000bQ0_E00000r0fG00000PM3Ww0000720_E00002kwfG000008E3Ww0000fG0_E200020002j09g0",
            "_w00kv_VB82a0720s800mw0107w00000S000000006M00000002a00000000S03o000008E0S000001Mwdw00000B83o000002a0S000003o06M00000yw1I00000720r020g02kw6M000008E1I00000000yw00003o08E00000yw2a000003o0yw00003x08E00000hg2a00000bQ0yw00000r08E00000PM2a00000720yw00000yw8E00000000S00000bQ0dw20g00r03o0w400PM0S00000720dw00000yw3o00000003x000006M0Ug00002a0e400000dw3x08200e40Ug00002Z0e400000s83x000002a0Ug00000004k00000dw1508200e40hg00002Z04k00000s815000002a0hg0000000bQ00000S02Z082006M0Lg00000S0bQ0w800Ug2Z000002a0Lg00000001I00000dw0r08200e406M20000r01I0w000PM0r000002a06M0000000cY0wc00yw3f000003o0PM00003x0cY00000hg3f00000bQ0PM00000r0cY00000PM3f00000720PM00002kwcY000008E3f00000000s820M02kw7200c008E1Mw0000000B820003o09i0w000r02kw80008E0B820000S09i0w000Ug2kw80004k0B820002Z09i0w0006M2kw8000cY0B820001Mw9i00c008E2kw00000008E00003o02a00000r00yw00008E08E00000S02a00c00Ug0yw03004k08E00M02Z02a00c006M0yw0300cY08E00M01Mw2a00c00B80yw03002a08E30002000370eU00000r030w20j01M0K00",
            "v000Ev_Vr02a02a08E20Sw2V06800000S01I000006M0r000002a06M00000dw1I00000e40r000001506M00000Lg1I000001I0r000003f06M00000s81I000009i0r000000yw6M00000_E1I000005W0r000003o08E0w400Lg2a081001I0yw20g03f08E0w400s82a000005W0yw00003o03o0w000yw0S080003o0dw20003x03o0wc008E0S00300fG0dw00001uw3o00000S03x000006M0Ug00002a0e400000dw3x00000e40Ug0000150e400000Lg3x000001I0Ug00003f0e400000s83x083002a0Ug00M03Wwe400000nE3x00000720hg00001uw4k00000s82Z003009i0Lg20w00ywbQ00000nE2Z000007206M00001uw1I00000s83f020002a0PM00001uwcY00000s81Mw00009i0s800003Ww7200000nE1Mw00009i0B800003Ww9i00000B80yw0000fG08E00002kwfG000008E3Ww0000fG0_E200030001Qw3E0",
            "Zw00cvZhr02a04k0Lg200w1R04M00000S03o000006M0S000002a0dw00000dw3o00000e40S00000150dw00000Lg3o000001I0S000003f0dw00000s83o000009i0S000000ywdw00000_E3o00000dw0r000000S06M0w400hg1I08100bQ0r020g00r06M0w400PM1I08100720r020g02kw6M0w4008E1I00000fG0r000003o08E00000dw2a08200e40yw20002Z08E0w0006M2a08000cY0yw20002kw8E0w0008E2a00000fG0yw00003o03o0w400dw0S083004k0dw00g02Z03o004006M0S00100cY0dw00002kw3o000008E0S00000fG0dw00003o0e40w000dw3x08000e40Ug00g02Z0e40wc008E3x00000fG0Ug00003o04k00000r015000008E0hg00000S04k00000Ug15000004k0hg00002Z04k0w8006M1508300cY0hg00001Mw4k00000B815000002a0hg00003Ww4k00800S02Z083006M0Lg00g02a0bQ0w800dw2Z00000bQ0Lg00w03WwbQ00800S00r081008E06M20003x01I0w400hg0r00200bQ06M00w00r01I00800PM0r002007206M20w02kw1I0wc008E0r00200fG06M00w03o0cY0wc00dw3f00200e40PM20w0150cY00800Lg3f00200fG0PM00w03o0720w000yw1Mw8100e40s800w02Z0720w8006M1Mw8300cY0s800w01Mw7200800B81Mw02002a0s800w03Ww7200800S02kw83006M0B800g02a09i0w800dw2kw0200bQ0B800w01Mw9i00800S00yw02007208E00w03o0fG00800r03Ww02008E0_E00w00S0fG00800Ug3Ww02004k0_E00w02Z0fG008006M3Ww0200cY0_E00w01MwfG0M000M000v832080002s0782wbU0a04a0",
            "bw00000Gr01I0cY0r020Cw1901g00000S03o000006M0S000002a0dw00000dw3o00000e40S000M0150dw00c00Lg3o003001I0S000M03f0dw00c00s83o003009i0S000M00ywdw00000S01I003003o0r000000r06M00c008E1I00000dw0yw20g00S08E000006M2a00100cY0yw20w01Mw8E0wc00B82a003002a0yw00M03Ww8E00000S00S003006M0dw20w02a03o0wc00Ug0S003004k0dw00002Z03o000006M0S00100cY0dw00M03Ww3o00c00S03x080003o0Ug00002Z0e40w4006M3x00100cY0Ug00g01Mwe40w800B83x083002a0Ug00g03Wwe400400nE3x00300dw0hg00M00S04k00000Lg1500100cY0hg00g01uw4k00c00S02Z000008E0Lg00000S0bQ00000Ug2Z000004k0Lg20w02Z0bQ0w400PM2Z001009i0Lg00g00ywbQ00400_E2Z001005W0Lg00M03o01I00000yw0r08000cY06M00g01uw1I00000S03f000008E0PM20g0150cY00400Lg3f001001I0PM00g03f0cY00400s83f001009i0PM00g00ywcY00400nE3f00000dw0s800002a07200400dw1Mw8200e40s820g02Z072004006M1Mw0100cY0s800g00yw7200400nE1Mw0000dw0B800002a09i00400dw2kw0100e40B820w01509i0w4006M2kw0100cY0B800g00yw9i00400nE2kw0000dw08E00002a02a00000dw0yw0000e408E00001502a0w800Lg0yw0100cY08E00M00yw2a0w000_E0yw01005W08E00003o0fG0w0006M3Ww0100cY0_E00M00ywfG00c00_E3Ww03005W0_E00003o05W00000r01uw00008E0nE00000S05W00000Ug1uw00004k0nE00g02Z05W004006M1uw0100cY0nE0g003000150c80w000Wg3F000009M0KE20003j07a00000nw3X040003203g00002swaI081v0_E1500",
            "Mg00nL__Lg2Z0e40B8204M0p01g00800000000200dw00000w01I00000800yw00002003o00000w03x00000c00hg0000300bQ00000M00r00000c00PM00003007200000M02kw0000c008E0000300fG00000w0000dw0w400S03o00300fG0S000w00006M0wc00r01I000008E0r000000S06M00000Ug1I000004k0r000w02Z06M008006M1I00200cY0r000w01Mw6M0w800B81I083002a0r000M03Ww6M00800002a000006M0yw00M03Ww8E00800000S000006M0dw00000S03o00000Ug0S000004k0dw00w00r03o00800PM0S00200720dw20w02kw3o0wc008E0S00200fG0dw00M0000e400000r03x000003o0Ug00003x0e400000hg3x000001I0Ug00003f0e40w800s83x083002a0Ug00M03Wwe400c000015000006M0hg00000S04k0w800Ug1500000cY0hg20w01Mw4k0wc008E1500300fG0hg00M0000bQ00000r02Z000003o0Lg20w03x0bQ00000PM2Z00200720Lg20w02kwbQ00c00_E2Z003000006M00001I01I00000dw0r08200e406M00003f01I0wc008E0r00300fG06M00M0000cY00000r03f000003o0PM00003x0cY00000hg3f00000bQ0PM00000r0cY00000PM3f00200720PM20w02kwcY00c00_E3f00300000s800001I07200000dw1Mw0000e40s80000150720w000PM1Mw83002a0s800M03Ww7200c00002kw00006M0B800001509i0wc006M2kw0300cY0B820w01Mw9i00c00_E2kw03000008E00001I02a00000yw0yw00003o08E00003x02a00000hg0yw8100cY08E20002kw2a00c00_E0yw0300000_E20M01MwfG00800B83Ww82002a0_E00M03WwfG00c00001uw0300dw0nE00M01I05W00c00yw1uw03003o0nE00M03x05W00c00hg1uw0300bQ0nE00M00r05W00c00PM1uw0300720nE00w02kw5W00c008E1uw0300fG0nE3w0020003Iw7w0g000H82y0c0003w0Z000000U0fG0g000GM2Gw20Lw3i0B820bU3cw240",
            /*"Fw00kv_Vyw0S0720dw20pM0Lw2o00000S01I000006M0r000002a06M00000dw1I00000e40r000001506M00000Lg1I000001I0r000003f06M00000s81I000009i0r000000yw6M00000_E1I00000dw0yw20g01I08E0w400yw2a081003o0yw20g03x08E0w400hg2a08100bQ0yw00000r08E0w400PM2a08100720yw20g02kw8E0w4008E2a00000fG0yw00003o03o000006M0S00000fG0dw00003o0e400000r03x000008E0Ug00000S0e400000Ug3x000004k0Ug00000r0e400000PM3x00000720Ug00003Wwe400000S015082006M0hg20g02a04k0w400dw15000001I0hg00003Ww4k00000S02Z082006M0Lg00000r0bQ00000_E2Z00000dw06M20w01I01I00000Ug0r000004k06M00002Z01I000006M0r000009i06M00000yw1I00000_E0r00000dw0PM20w01I0cY0w400Ug3f081004k0PM20g02Z0cY000006M3f083002a0PM00003WwcY00000S01Mw82006M0s800000r0720wc008E1Mw0000fG0s800003o09i0w800r02kw83002a0B800003Ww9i00000S00yw82006M08E20002a02a0w000dw0yw8000e408E20001502a0w000Lg0yw80001I08E20003f02a0w000s80yw80009i08E20M00yw2a00000_E0yw0000dw0_E00001I0fG00000yw3Ww00003o0_E00003x0fG00000hg3Ww0000bQ0_E00000r0fG00000PM3Ww0000720_E00002kwfG000008E3Ww0000fG0_E00000"*/
            /*"aM00003wyw1I0fG0s800Hw0j04M00000000000200dw00000w01I00000800yw00002003o00000w03x00000000hg0000000bQ00000000r00000000PM00000007200000002kw00000008E0000000fG00000001uw0000000003o00200dw0S020g01I0dw0w400yw3o081003o0S000w03x0dw00000hg3o00000bQ0S000000r0dw00000PM3o00000720S000002kwdw000008E3o00000fG0S000001uwdw00000001I00200dw0r020w01I06M0wc00dw1I00200e40r000001506M00000Lg1I000001I0r000003f06M00000s81I000009i0r000000yw6M00000_E1I000005W0r000000008E00800S02a082006M0yw20M00S08E00800Ug2a000004k0yw00002Z08E000006M2a00000cY0yw00001Mw8E00000B82a000002a0yw00003Ww8E00000nE2a00000aC0yw00000003o00800S00S082006M0dw20M00S03o00800Ug0S002004k0dw00w02Z03o008006M0S00000cY0dw00001Mw3o00000B80S000002a0dw00003Ww3o00000nE0S00000aC0dw0000000e400800S03x082006M0Ug00003f0e400000s83x000009i0Ug00000ywe400000_E3x000005W0Ug00000004k00800S015080006M0hg20002a04k0w000dw1508000e40hg20001504k0w000Lg15020001I0hg20g03f04k0w400s815081009i0hg20g00yw4k0wc00_E15000005W0hg0000000bQ00800S02Z002006M0Lg00w02a0bQ00800dw2Z00200e40Lg00w0150bQ00000Lg2Z080009i0Lg20M03WwbQ00000nE2Z000000006M00003o01I00000r00r000008E06M00000S01I00000Ug0r000004k06M00002Z01I0w0006M0r00000cY06M20M01Mw1I00c00B80r082002a06M20M03Ww1I00000nE0r00000000PM00003o0cY00000r03f000008E0PM00000S0cY00000Ug3f000004k0PM00002Z0cY000006M3f00000cY0PM20w01MwcY0w400B83f08300fG0PM00001uwcY00000001Mw0000dw0s800001I07200000yw1Mw00003o0s800003x07200000hg1Mw0000bQ0s800000r07200000PM1Mw8000720s820002kw720w0008E1Mw00005W0s800000009i00000S02kw00006M0B800002a09i00000dw2kw0000e40B800001509i00000Lg2kw00001I0B800003f09i00000s82kw00009i0B800000yw9i00000_E2kw00005W0B800000002a00000S00yw00006M08E00002a02a00000dw0yw0000e408E00001502a00000Lg0yw00001I08E00003f02a00000s80yw00009i08E00000yw2a00000_E0yw00005W08E0000000fG00000S03Ww00006M0_E00002a0fG00000dw3Ww0000e40_E0000150fG00000Lg3Ww00001I0_E00003f0fG00000s83Ww00009i0_E00000ywfG00000_E3Ww00005W0_E00000005W00000S01uw00006M0nE00002a05W00000dw1uw0000e40nE00001505W00000Lg1uw00001I0nE00003f05W00000s81uw00009i0nE00000yw5W00000_E1uw00005W0nE0",
            "I00003f+yw0S0cY0B820EM2hw00000008E0S020001I0Ug00000ywe4000008E15000002a0Lg00000yw1I0w000S03f080006M0PM20002a0cY0w000dw3f000002a0PM00000yw72000008E2kw0"*/
          ]; //ROM that contains all levels, exported from seperate level editor program as base 64
          
          //info for all the blocks and items below
          var TILE_INF = [
              {
                  id: 0,
                  color: '#17d83f',
                  collidable: true,
                  connected: true,
                  borderSize: 3,
                  borderColor: '#17be3a',
                  useImage: false
              },
              {
                  id: 1,
                  color: '',
                  useImage: true,
                  imgClip: {
                      x: 0,
                      y: 38,
                      w: 9,
                      h: 9
                  },
                  dangerous: true,
                  hitBox: {
                      x: 3,
                      y: 5,
                      w: 3,
                      h: 3
                  }
              },
              {
                  id: 2,
                  pStart: true
              },{
                  id: 3,
                  pEnd: true,
                  useImage: true,
                  imgClip: {
                      x: 9,
                      y: 52,
                      w: 9,
                      h: 9
                  }
              },
              {
                  id: 4,
                  pushable: true,
                  useImage: true,
                  imgClip: {
                      x: 9, y: 38,
                      w: 9,
                      h: 9
                  }
              }
          ];
          
          var ITEM_INF = [
              {
                  id: 0,
                  useImage: true,
                  imgClip: {
                      x: 32,
                      y: 16,
                      w: 9,
                      h: 9
                  },
                  effect: function() {
                      lavaSettings.speed = Math.abs(lavaSettings.speed);
                      lavaSettings.dir = 1;
                      if (lavaSettings.mode != 1) lavaSettings.pos = player.x;
                      lavaSettings.mode = 1;
                  },
                  hasDuration: false
              },
              {
                  id: 1,
                  useImage: true,
                  imgClip: {
                      x: 41,
                      y: 16,
                      w: 9,
                      h: 9
                  },
                  effect: function() {
                      lavaSettings.speed = -Math.abs(lavaSettings.speed);
                      lavaSettings.dir = -1;
                      if (lavaSettings.mode != 1) lavaSettings.pos = player.x;
                      lavaSettings.mode = 1;
                  },
                  hasDuration: false
              },
              {
                  id: 2,
                  useImage: true,
                  imgClip: {
                      x: 50,
                      y: 16,
                      w: 9,
                      h: 9
                  },
                  effect: function() {
                      lavaSettings.speed = -Math.abs(lavaSettings.speed);
                      lavaSettings.dir = -1;
                      if (lavaSettings.mode != 0) lavaSettings.pos = player.y;
                      lavaSettings.mode = 0;
                  },
                  hasDuration: false
              },
              {
                  id: 3,
                  useImage: true,
                  imgClip: {
                      x: 59,
                      y: 16,
                      w: 9,
                      h: 9
                  },
                  effect: function() {
                      lavaSettings.speed = Math.abs(lavaSettings.speed);
                      lavaSettings.dir = 1;
                      if (lavaSettings.mode != 0) lavaSettings.pos = player.y;
                      lavaSettings.mode = 0;
                  },
                  hasDuration: false
              },
              {
                  id: 4,
                  useImage: true,
                  imgClip: {
                      x: 68,
                      y: 16,
                      w: 9,
                      h: 9
                  },
                  effect: function() {
                      this.speedSave = lavaSettings.speed;
                      lavaSettings.speed = 0;
                  },
                  effectFinish: function() {
                      lavaSettings.speed = Math.abs(this.speedSave) * Math.sign(lavaSettings.dir);
                  },
                  hasDuration: true
              },
              {
                  id: 5,
                  useImage: true,
                  imgClip: {
                      x: 76,
                      y: 16,
                      w: 9,
                      h: 9
                  },
                  effect: function() {
                      lavaSettings.speed *= 0.5;
                  },
                  hasDuration: true
              }
          ];
          
          //access canvas context cause canvas has features that i need
          var ctx = drawingContext;
          
          //canvas dimensions
          var canWidth = 400, canHeight = 400;
          
          //constants
          var MOUSEEVENT_DOWN  = 0;
          var MOUSEEVENT_MOVE  = 1;
          var MOUSEEVENT_UP  = 2;
          
          var BUTTON_CENTER = -100;
          
          var HPI = Math.PI / 2;
          
          var tileSize = 27;
          var imgRenderScale = 3;
          var imgFileScale = 1;
          
          //fps stuff
          var FPS = 60;
          World.frameRate = FPS;
          
          //global spritesheet
          var spritesheet = loadImage("https://codehs.com/uploads/9cb895dfc2d796afaa0b31d1d4a43da8");
          
          //reimplement ctx.drawImage using p5 since it's built into game lab
          ctx.renderImage = function(img, cx, cy, cw, ch, dx, dy, w, h) {
            var useClip = true;
            if (dx == void 0) useClip = false;
            
            if (useClip)
              image(img, cx, cy, cw, ch, dx, dy, w, h);
            else
              image(img, cx, cy, cw, ch);
          };
          
          //test to see if context works.. it does!!!
          /*ctx.fillStyle = '#000';
          ctx.fillRect(0,0,100,100);*/
          
          //SAVE MASK
          var SAVE_MASK = 0x6f012b55
          
          //map settings
          var mapSettings = {
           mapW: 15,
           mapH: 15
          };
          
          var map = [];
          
          function allocMap() {
            map = [];
            
            for (var y = 0; y < mapSettings.mapH; y++) {
              map[y] = [];
              
              for (var x = 0; x < mapSettings.mapW; x++) {
                map[y][x] = null;
              }
            }
          }
          
          function pixCan() {
              ctx.webkitImageSmoothingEnabled = false;
              ctx.mozImageSmoothingEnabled = false;
              ctx.imageSmoothingEnabled = false;
          }
          
          //This rendering context dosent have save so i need to implement it myself
          ctx.saveState = function() {
            ctx._lastSave = {
              _tMat: ctx.getTransform()
            };
          };
          ctx.restoreState = function() {
            if (typeof this._lastSave == 'object' && this._lastSave._tMat) {
              ctx.setTransform(this._lastSave._tMat);
            }
          };
          
          //for encoding / decoding level data as base64
          var b64 = {
            table: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_+',
            bitCombine: function(bits, i, len) {
              var r = 0;
              for (var j = 0; j < len; j++) { //basically just collects all the bits into a int / long
                r |= bits[i++];
                r <<= 1;
              }
              return r >> 1;
            },
            encode: function(dat) {
              var res = "";
              
              var bits = [],v = null;
              
              //extract all the bits from the bytes to encode
              for (var i = 0; i < dat.length; i++) { //cant use of :/
                v = dat[i];
                for (var b = 0; b < 8; b++) {
                  bits.push(
                    (v >> b) 
                    & 1
                  );
                }
              }
              
              //combine the bits into 6 bit chunks from 0-64 and index a table to get the character
              for (i = 0; i < bits.length; i += 6) {
                var cmax = i >= bits.length ? 6 - (i - bits.length) : 6;
                res += this.table[
                  this.bitCombine(bits, i, cmax)
                ];
              }
              return res;
            },
            decode: function(dat) {
              var bits = [];
              var v;
              
              //collect all the bytes
              for (var i = 0; i < dat.length; i ++) {
                v = this.table.indexOf(dat[i]); //opposite of the prior table indexing
                for (var b = 0; b < 6; b++)
                  bits.push(
                    (v >> (5-b)) & 1  
                  );
              }
              
              var res = [];
              
              //now assemble as bytes instead of 6 bit chunks
              var val = 0;
              for (var b = 0; b < bits.length; b += 8) {
                val = 0;
                var cmax = b >= bits.length ? 8 - (b - bits.length) : 8;
                for (var j = 0; j < cmax; j++) {
                  val |= (bits[b+j] << j);
                }
                res.push(val);
              }
              
              return res;
            }
          };
          
          //Binary utility functions
          var bin = {
            combineBytes: function(bytes, i, sz) {
              var r = 0;
              
              for (var b = i+sz-1; b >= i;) {
                r |= bytes[b--];
                r <<= 8;
              }
              
              return r >> 8;
            },
            intSplit: function(v, sz) {
              var r = [];
              
              for (var i = 0; i < sz; i++) {
                r.push(v & 255);
                v >>= 8;
              }
              
              return r;
            }
          };
          
          //function to add custom levels
          function addLevel(dat) {
            if (typeof dat == 'string' && dat) {
              LEVEL_ROM.push(dat);
            }
          }
          
          //some physics stuff
          var physics = {
            rectCollide: function(x1,y1,w1,h1,x2,y2,w2,h2) {
              return (x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2);
            }
          }
          
          //just some base 64 util functions
          function getBytesFromString(str) {
            var bytes = [];
            for (var i= 0; i < str.length; i++) {
              bytes.push(str.charCodeAt(i));
            }
            
            return bytes;
          }
          
          function getStringFromBytes(bytes) {
            var res = "";
            for (var i= 0;i < bytes.length; i++) {
              res += String.fromCharCode(bytes[i]);
            }
            
            return res;
          }
          
          //testing
          
          
          /*var dat = b64.encode(getBytesFromString("Base 64 works yay!"));
          
          console.log(dat);
          console.log(getStringFromBytes(b64.decode(dat)));*/
          
          //item stuff
          var items = [], durationQueue = [];
          
          var Item = function(id, x, y, duration) {
              this.x = x || 0;
              this.y = y || 0;
              this.offY = 0;
              this.vy = 0;
              this.id = id;
              this.inf = ITEM_INF[this.id];
              this.item = 0;
              this.duration = duration || 0;
              this.thetaTick = 0;
              
              if (this.inf == void 0)
                  return;
                  
              this.update = function() {
                  this.thetaTick += 0.1;
                  this.offY = Math.sin(this.thetaTick) * 5;
                  
                  if (this.thetaTick > Math.PI * 2)
                      this.thetaTick = 0;
                  
                  if (this.inf.useImage) {
                      if (this.inf.imgClip)
                          ctx.drawImage(spritesheet, this.inf.imgClip.x, this.inf.imgClip.y, this.inf.imgClip.w, this.inf.imgClip.h, this.x, this.y + this.offY, tileSize, tileSize);
                      else
                          ctx.drawImage(spritesheet, this.x, this.y + this.offY, tileSize, tileSize);
                  } else {
                      ctx.fillStyle = '#000';
                      ctx.fillRect(this.x, this.y + this.offY, tileSize, tileSize);
                  }
              }
          }
          
          //menu buttons
          
          
          //menu updates
          var menuUpdates = {}, menuInfo = {}, menuIni = {}, _m_ini = {}, menuEvents = {}, pauseMenu = {
              active: false
          };
          
          //lava settings
          var lavaSettings = {
            spacing: 200,
            pos: 200,
            mode: 1,
            speed: 1.0,
            partClip: {
              x: 23,
              y: 8,
              w: 6,
              h: 3,
              rh: 6
            },
            offset: 0,
            color: "#f29833"
          }
          
          //game/level manager
          var GameManager = {
            loadedLevel: null,
            loadedMenu: null,
            defLevelInf: {
              backgroundColor: "#fff",
              pStartPos: {
                x: 0,
                y: 0
              },
              pEndPos: {
                  x: 100,
                  y: 100
              }
            },
            levelInf: this.defLevelInf,
            save: [],
            
            //level file format
          //
          // file header (10 bytes + 8 bytes):
          //
          // 3 bytes -> number of tiles / blocks
          // 3 bytes -> background color
          // 2 bytes -> player start x
          // 2 bytes -> player start y
          // 1 byte -> lava mode
          // 2 bytes -> lava pos
          // 2 bytes -> lava seperation
          // 2 bytes -> lava start speed * 100 (used to preserve decimal)
          //
          // Data:
          //
          // 1 byte -> block id (unsigned char / byte)
          // 2 bytes -> additional block info (unsigned short)
          // 4 bytes -> x position on grid (signed int)
          // 4 bytes -> y position on grid (signed int)
          // 8 bytes -> number of items to load
          //
          // same format for items
            
            
            LoadLevel: function(l_id) {
              durationQueue = []; //reset duration queue
              items = []; //clear all items
                
              player.vx = player.vy = 0;
              player.mov.u = player.mov.d = player.mov.r = player.mov.l = false;
                
              allocMap();
              //some error checks
              if (l_id < 0 || l_id >= LEVEL_ROM.length) {
                console.error("Could not load level ["+l_id+"]");
                return;
              }
              
              if (LEVEL_ROM[l_id] == null) {
                this.loadedMenu = null;
                this.loadedLevel = l_id;
                return;
              }
              
              //decode level info
              var lBytes = b64.decode(LEVEL_ROM[l_id]);
              
              //load in map data
              var rByte = 3; //start reading from 3rd byte
              var nTiles = bin.combineBytes(lBytes, 0, 3);
              
              //background color
              var bgColorR = lBytes[rByte++],
                  bgColorG = lBytes[rByte++],
                  bgColorB = lBytes[rByte++];
                  
              this.levelInf.backgroundColor = 'rgb('+bgColorR+','+bgColorG+','+bgColorB+')';
              
              //read in player start x and start y
              this.levelInf.pStartPos.x = bin.combineBytes(lBytes, rByte, 2);
              rByte += 2;
              
              this.levelInf.pStartPos.y = bin.combineBytes(lBytes, rByte, 2);
              rByte += 2;
              
              //read in player end x and end y
              this.levelInf.pEndPos.x = bin.combineBytes(lBytes, rByte, 2);
              rByte += 2;
              
              this.levelInf.pEndPos.y = bin.combineBytes(lBytes, rByte, 2);
              rByte += 2;
              
              //read in lava info
              lavaSettings.mode = lBytes[rByte++];
              lavaSettings.pos = bin.combineBytes(lBytes, rByte, 2);
              rByte += 2;
              lavaSettings.spacing = bin.combineBytes(lBytes, rByte, 2);
              rByte += 2;
              lavaSettings.speed = bin.combineBytes(lBytes, rByte, 2) / 100;
              rByte += 2;
              
              //read in tile info
              var x,y,ad,b_id,tTiles = 0; //block info
              
              //console.log('Loading: ' + nTiles);
              
              while(tTiles++ < nTiles && rByte < lBytes.length) { //read in tiles until none are left
                b_id = lBytes[rByte++];
                ad =  bin.combineBytes(lBytes, rByte, 2);
                rByte += 2;
                x = bin.combineBytes(lBytes, rByte, 2) / tileSize;
                rByte += 2;
                y = bin.combineBytes(lBytes, rByte, 2) / tileSize;
                rByte += 2;
                //some quick checks
                if (x < 0 || y < 0 || x >= mapSettings.mapW || y >= mapSettings.mapH) {
                  console.log("Error, failed to load tile!");
                  continue;
                }
                
                var inf = TILE_INF[b_id];
                
                //now add tile to map
                map[y][x] = {
                  id: b_id,
                  dat: ad
                };
                
                if (inf.pushable)
                  map[y][x].pOffset = {x: 0, y: 0};
              } 
              
              //
              this.loadedLevel = l_id;
              this.loadedMenu = null;
              
              player.x = this.levelInf.pStartPos.x;
              player.y = this.levelInf.pStartPos.y;
              
              if (rByte >= lBytes.length) return;
              
              //load in item data
              var nItems = bin.combineBytes(lBytes, rByte, 3), lItems = 0;
              rByte += 3;
              
              while (lItems < nItems && rByte < lBytes.length) {
                  b_id = lBytes[rByte++];
                  ad =  bin.combineBytes(lBytes, rByte, 2);
                  rByte += 2;
                  x = Math.floor(bin.combineBytes(lBytes, rByte, 2));
                  rByte += 2;
                  y = Math.floor(bin.combineBytes(lBytes, rByte, 2));
                  rByte += 2;
                  
                  if (typeof b_id != 'number' || ITEM_INF[b_id] == void 0) continue;
                  
                  items.push(new Item(b_id, x, y, ad));
              }
            },
            LoadMenu: function(m_id) {
               var lastMenu = this.loadedMenu;
              this.loadedMenu = m_id;
              
              if (typeof menuIni[this.loadedMenu] == 'function' && !_m_ini[this.loadedMenu]) {
                menuIni[this.loadedMenu]();
              }
              
              //call show function for menu
              if (typeof this.loadedMenu == 'string' && typeof menuEvents[this.loadedMenu].show == 'function')
                  menuEvents[this.loadedMenu].show();
              
              _m_ini[this.loadedMenu] = true;
              
              if (lastMenu && typeof menuIni[lastMenu] == 'function' && typeof menuEvents[lastMenu].hide == 'function') {
                  menuEvents[lastMenu].hide();
              }
            },
            UnloadLevel: function(m_id) {
              this.loadedLevel = null;
              this.LoadMenu(m_id);
            },
            Ini: function() {
              this.levelInf = this.defLevelInf;
              GameManager.LoadMenu("main");
            },
            Update: function() {
              if (typeof this.loadedLevel == 'number') {
                //render level background
                ctx.fillStyle = this.levelInf.backgroundColor;
                ctx.fillRect(0,0, canWidth,canHeight);
                pixCan();
                //ctx.translate(0.5,0.5);
                this.gameUpdate();
              }
              
              if (this.loadedMenu && typeof menuUpdates[this.loadedMenu] == 'function') {
                menuUpdates[this.loadedMenu]();
              }
            },
            //ends current level
            EndLevel: function() {
                var lastLoadedLevel = this.loadedLevel;
                this.UnloadLevel("levels");
                if (lastLoadedLevel != null) {
                  this.save[lastLoadedLevel] = this.unlockStates.completed;
                  this.Save(); //save game after level completion
                }
                
                //if were going to next level then load it
                if (typeof lastLoadedLevel == 'number' && lastLoadedLevel + 1 < LEVEL_ROM.length)
                    this.LoadLevel(lastLoadedLevel + 1);
            },
            
            unlockStates: {
                locked: 0,
                unlocked: 1,
                completed: 2
            },
            
            LoadDefaultSave: function() {
                for (var i = 0;i < LEVEL_ROM.length; i++) {
                    this.save[i] = this.unlockStates.locked;
                }
                
                if (this.save.length >= 1)
                  this.save[0] = this.unlockStates.unlocked;
            },
            
            LoadSave: function() {
                var lStorge = true;
                
                if (typeof localStorage != 'object')
                  this.LoadDefaultSave();
                  
                //else load save
                var saveBin = localStorage.getItem("_g_stat_save");
                
                if (saveBin == null) {
                    this.LoadDefaultSave();
                    return;
                }
                
                //decode save
                var decodedSave = b64.decode(saveBin);
                console.log(decodedSave);
                //load in save
                var rByte = 0;
                var sav_mask = bin.combineBytes(decodedSave, rByte, 4);
                rByte += 4;
                var nSaveLevels = bin.combineBytes(decodedSave, rByte, 2), state = 0;
                
                for (var i = 0; i < nSaveLevels; i++)
                  this.save[i] = 0;
                
                console.log("Loading Save ["+nSaveLevels+"]")
                rByte += 2;
                var nLoadedLevels = 0, lt = 0;
                do {
                   //load in the next 4 levels
                   var _ = decodedSave[rByte++] ^ sav_mask;
                   lt = 0;
                   while (nLoadedLevels < nSaveLevels && lt < 8) {
                       state = (_ >> lt) & 3; //get first 2 bits
                       lt += 2;
                       console.log("Save State: "+state,_)
                       //load in state
                       this.save[nLoadedLevels++] = state;
                   }
                } while (rByte < decodedSave.length);
            },
            
            Save: function() {
                var dat = [];
                var cVal = 0;
                var sav_mask = Math.floor(Math.random() * 0xffffffff);
                for (var i = 0; i < this.save.length;) {
                    var c= 0;
                    while (c < 4) {
                        cVal |= (this.save[i++] & 3) << (c++ * 2);
                    }
                    
                    dat.push(cVal ^ sav_mask);
                }
                
                dat = bin.intSplit(sav_mask,4).concat(bin.intSplit(this.save.length, 2).concat(dat));
                
                var sav_bin = b64.encode(dat);
                
                console.log(sav_bin);
                
                if (typeof localStorage == 'object')
                  localStorage.setItem("_g_stat_save", sav_bin);
            },
            
            CompleteCurrentLevel: function() {
                this.save[this.loadedLevel] = this.unlockStates.completed;
                
                if (this.loadedLevel + 1 < LEVEL_ROM.length)
                  this.save[this.loadedLevel + 1] = this.unlockStates.unlocked;
            }
          }
          
          var _gbl_buttonUpdates = [];
          
          //menu button for the menus
          var MenuButton = function(text, x, y, w, h, style, hoverstyle, clickstyle) {
            this.x = x;
            this.y = y;
            this.w = h;
            this.h = w;
            this.defX = x;
            this.defY = y;
            this.styles = {
              down: clickstyle || style,
              def: style,
              hover: hoverstyle || style
            };
            this.state = "def";
            this.txt = text;
            this.mouseUpdate = function(m_id, x, y) {
              if (!this.visible) return;
                
              if (!physics.rectCollide(this.x,this.y,this.w,this.h,x,y,1,1)) {
                this.state = "def";
                return;
              }
              
              if (this.state == "def") this.state = "hover";
              switch (m_id) {
                case MOUSEEVENT_DOWN: {
                  this.state = "down";
                  if (typeof this.onMouseDown == 'function' && !this.disabled)
                    this.onMouseDown(x,y);
                    
                  break;
                }
                case MOUSEEVENT_MOVE: {
                  if (typeof this.onMouseMove == 'function' && !this.disabled)
                    this.onMouseMove(x,y);
                    
                  break;
                }
                case MOUSEEVENT_UP: {
                  this.state = "hover";
                  if (typeof this.onMouseUp == 'function' && !this.disabled)
                    this.onMouseUp(x,y);
                    
                  break;
                }
              }
            };
            this.draw = function() {
              var style = this.styles[this.state];
              
              if (typeof style != 'object')
                style = {};
                
              if (this.defX == BUTTON_CENTER) {
                this.x = canWidth / 2 - this.w / 2;
              }
              
              if (this.defY == BUTTON_CENTER) {
                this.y = canHeight / 2 - this.h / 2;
              }
                
              //rotation first
              //var rot = style.rot ? style.rot : 0;
              
              //ctx.saveState();
              //ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
              //ctx.rotate(rot);
              
              //now draw border
              var borderSize = style.borderSize ? style.borderSize : 1;
              var borderColor = style.borderColor ? style.borderColor : "#999";
              
              ctx.fillStyle = borderColor;
              //ctx.fillRect(-this.w/2,-this.h/2,this.w,this.h);
              ctx.fillRect(this.x,this.y,this.w,this.h);
              
              //draw background
              var backgroundColor = style.backgroundColor ? style.backgroundColor : "#fff";
              
              ctx.fillStyle = backgroundColor;
              var rw = this.w - borderSize * 2, rh = this.h - borderSize * 2;
              ctx.fillRect(this.x + borderSize,this.y + borderSize,rw,rh);
              
              //draw text
              var textColor = style.textColor ? style.textColor : "#000";
              var font = style.font ? style.font : "15px Arial";
              
              ctx.font = font;
              ctx.fillStyle = textColor;
              
              //text dimension computations
              var tDim = ctx.measureText(this.txt);
              var tW = tDim.width;
              var dw = rw - tW;
              var left = dw / 2;
              var tH = tDim.actualBoundingBoxAscent + tDim.actualBoundingBoxDescent;
              var dh = rh - tH;
              var top = (dh / 2);
              
              /*ctx.fillStyle = '#ff0';
              ctx.fillRect(left+this.x,this.y+top,tW,tH);*/
              ctx.fillStyle = textColor;
              ctx.fillText(this.txt, left+this.x, this.y+top+tH);
            };
            
            _gbl_buttonUpdates.push(this);
          }
          
          /*
           * Rendering functions
           *
           * These are the same in the map editor for consistensy
           *
           */
          var tileHalf = tileSize / 2;
           
          //to render 1 tile from id, and dat (rotation) info
          function renderTile(x, y, id, dat) {
              var inf = TILE_INF[id];
              var rot = dat;
              
              ctx.saveState();
              ctx.translate(x + tileHalf, y + tileHalf);
              ctx.rotate(HPI * rot);
              
              if (inf.useImage) {
                  if (typeof inf.imgClip == 'object') {
                      ctx.renderImage(spritesheet, inf.imgClip.x * imgFileScale, inf.imgClip.y * imgFileScale, inf.imgClip.w * imgFileScale, inf.imgClip.h * imgFileScale, -tileHalf, -tileHalf, tileSize+1, tileSize+1);
                  } else {
                      ctx.renderImage(spritesheet, -tileHalf, -tileHalf, tileSize+1, tileSize+1);
                  }
              } else {
                  ctx.fillStyle = inf.color || '#000';
                  ctx.fillRect(-tileHalf, -tileHalf, tileSize+1, tileSize+1);
              }
          
              ctx.restoreState();
          }
          
          // Create your variables here
          
          //2d rotation about a point
          function rotatePoint(p, origin, theta) {
              if (typeof origin != 'object') origin = {x: 0, y: 0};
              
              var cos = Math.cos(theta), sin = Math.sin(theta), tp = {
                  x: p.x - origin.x,
                  y: p.y - origin.y
              };
              
              return {
                  x: (tp.x * cos - tp.y * sin) + origin.x,
                  y: (tp.x * sin + tp.y * cos) + origin.y
              }
          }
          
          function mapDisplace() {
              
          }
          
          //player
          var player = {
            x: 0,
            y: 0,
            w: 24,
            h: 24,
            vx: 0,
            vy: 0,
            hp: 1,
            crouchSpeed: 2.5,
            defSpeed: 5,
            courching: false,
            speed: 5,
            imgClip: {
              x: 0,
              y: 0,
              w: 8,
              h: 8
            },
            mov: {
              u: false, d: false, l: false, r: false
            },
            useImage: false,
            color: "#f00",
            controls: {
              up: "Up",
              down: "Down",
              left: "Left",
              right: "Right"
            },
            update: function() {
               //render player
              this.render();
                
              if (this.crouching)
                  this.speed = this.crouchSpeed;
              else
                  this.speed = this.defSpeed;
                
              //position updates
              this.x += this.vx;
              this.y += this.vy;
              
              if (this.mov.l  && this.vx > -this.speed)
                this.vx += -this.speed;
                
              if (this.mov.r && this.vx < this.speed)
                this.vx += this.speed;
                
              if (this.mov.u  && this.vy > -this.speed)
                this.vy += -this.speed;
                
              if (this.mov.d && this.vy < this.speed)
                this.vy += this.speed;
                
              if (Math.abs(this.vx > this.speed))
                  this.vx = this.speed * Math.sign(this.vx);
                  
              if (Math.abs(this.vy > this.speed))
                  this.vy = this.speed * Math.sign(this.vy);
                
              if (!this.mov.l && !this.mov.r)
                this.vx = 0;
                
              if (!this.mov.u && !this.mov.d)
                this.vy = 0;
                
              //key events
              this.keyDown();
              this.keyUp();
              
              //check for lava collision
              this.lavaCollide();
            },
            
            //player render function
            render: function() {
               if (this.useImage) {
                
              } else {
                ctx.fillStyle = '#f00';
                ctx.strokeStyle = '#900';
                ctx.lineWidth = 5;
                ctx.strokeRect(this.x, this.y, this.w, this.h);
                ctx.fillRect(this.x, this.y, this.w, this.h);
              }
            },
            
            //keydown for player
            keyDown: function() {
              if (keyWentDown(this.controls.up))
                this.mov.u = true;
                
              if (keyWentDown(this.controls.down))
                this.mov.d = true;
                
              if (keyWentDown(this.controls.left))
                this.mov.l = true;
                
              if (keyWentDown(this.controls.right))
                this.mov.r = true;
                
              if (keyWentDown("shift"))
                  this.crouching = true;
                
              if (keyWentDown("escape")) {
                  if (pauseMenu.active)
                      GameManager.LoadMenu(null);
                  else
                      GameManager.LoadMenu("pause");
                      
                  pauseMenu.active = !pauseMenu.active;
              }
            },
            
            //key up for player
            keyUp: function() {
              if (keyWentUp(this.controls.up))
                this.mov.u = false;
                
              if (keyWentUp(this.controls.down))
                this.mov.d = false;
                
              if (keyWentUp(this.controls.left))
                this.mov.l = false;
                
              if (keyWentUp(this.controls.right))
                this.mov.r = false;
                
              if (keyWentUp("shift"))
                this.crouching = false;
            },
            
            //basic player rect collider
            tileCollide: function(t, x, y) {
              var inf = TILE_INF[t.id];
              
              if (!inf.collidable) return;
              
              var xp = x * tileSize, yp = y * tileSize;
              
              if (physics.rectCollide(this.x + this.vx, this.y, this.w, this.h, xp, yp, tileSize, tileSize)) {
                this.vx = 0;
                
                if (this.x < xp)
                  this.x = xp - this.w;
                else
                  this.x = xp + tileSize + 1;
              }
              
              if (physics.rectCollide(this.x, this.y + this.vy, this.w, this.h, xp, yp, tileSize, tileSize)) {
                this.vy = 0; 
                
                if (this.y < yp)
                  this.y = yp - this.h;
                else
                  this.y = yp + tileSize + 1;
              }
            },
            
            //push physics for push tiles
            tilePush: function(t, x, y) {
                var inf = TILE_INF[t.id];
              
                if (!inf.pushable) return;
              
                var xp = x * tileSize + t.pOffset.x, yp = y * tileSize + t.pOffset.y;
                
                if (typeof t.lv != 'object') t.lv = {};
                
                if (physics.rectCollide(this.x, this.y + this.vy, this.w, this.h, xp, yp, tileSize, tileSize) /*&& (this.y + this.h - this.vy < yp || this.y - this.vy >= yp + tileSize)*/) {
                  t.pOffset.y += this.vy;
                  t.lv.y = this.vy;
                } 
                
                if (physics.rectCollide(this.x + this.vx, this.y, this.w, this.h, xp, yp, tileSize, tileSize) /*&& (this.x + this.w - this.vx < xp || this.x - this.vx >= xp + tileSize)*/) {
                    t.pOffset.x += this.vx;
                    t.lv.x = this.vx;
                }
                
                return t;
            },
            
            //dangerous tiles
            tileHurt: function(t, x, y) {
                var inf = TILE_INF[t.id];
                
                if (!inf.dangerous) return;
                var xp = x * tileSize, yp = y * tileSize;
                if (typeof inf.hitBox == 'object' && t.cHitbox == void 0) {
                    //TODO compute new hitbox
                    var tOrigin = {
                        x: xp + tileSize / 2,
                        y: yp + tileSize / 2
                    };
                    
                    var hxp = xp + inf.hitBox.x * imgRenderScale, hyp = yp + inf.hitBox.y * imgRenderScale;
                    
                    var topCorner = rotatePoint({
                        x: hxp,
                        y: hyp
                    }, tOrigin, t.dat * HPI);
                    
                    var bottomCorner = rotatePoint({
                        x: hxp + inf.hitBox.w * imgRenderScale,
                        y: hyp + inf.hitBox.h * imgRenderScale
                    }, tOrigin, t.dat * HPI);
                    
                    t.cHitbox = {
                        x: topCorner.x,
                        y: topCorner.y,
                        w: bottomCorner.x - topCorner.x,
                        h: bottomCorner.y - topCorner.y
                    }
                }
                //now render hitbox for testing
                //ctx.strokeStyle = '#f00';
                //ctx.strokeRect(t.cHitbox.x, t.cHitbox.y, t.cHitbox.w, t.cHitbox.h);
                
                if (physics.rectCollide(this.x,this.y,this.w,this.h,t.cHitbox.x,t.cHitbox.y,t.cHitbox.w,t.cHitbox.h))
                  this.hit();
                
                return t;
            },
            
            //function for when player gets hit | also handles death stuff
            hit: function() {
                this.hp--;
                console.log('!')
                if (this.hp <= 0) {
                    GameManager.LoadLevel(GameManager.loadedLevel); //basically just reload the current level;
                    this.hp = 1;
                }
            },
            
            //collision with lava
            lavaCollide: function() {
                if (true) {
                    var sz = lavaSettings.spacing, p = lavaSettings.pos;
                        lavaSettings.inCollider = {};
                    
                    switch (lavaSettings.mode) {
                        case 0: {
                            lavaSettings.inCollider.x = 0;
                            lavaSettings.inCollider.y = p - sz / 2;
                            lavaSettings.inCollider.w = canWidth;
                            lavaSettings.inCollider.h = sz;
                            break;
                        }
                        default: { //1
                            lavaSettings.inCollider.x = p - sz / 2;
                            lavaSettings.inCollider.y = 0;
                            lavaSettings.inCollider.w = sz;
                            lavaSettings.inCollider.h = canHeight;
                            break;
                        }
                    }
                }
                
                if (!physics.rectCollide(
                    this.x,this.y,this.w,this.h,
                    lavaSettings.inCollider.x,lavaSettings.inCollider.y,lavaSettings.inCollider.w,lavaSettings.inCollider.h
                  )) {
                    this.hit();
                }
                
                //ctx.strokeStyle = '#f00';
                //ctx.strokeRect(lavaSettings.inCollider.x, lavaSettings.inCollider.y, lavaSettings.inCollider.w, lavaSettings.inCollider.h)
            },
            lEffectSave: null,
            //item collision
            itemCollide: function(itm) {
                if (!physics.rectCollide(this.x, this.y, this.w, this.h, itm.x, itm.y, tileSize, tileSize)) return false;
                
                if (itm.inf.hasDuration) {
                    durationQueue.push({
                        time: itm.duration,
                        oSettings: structuredClone(lavaSettings),
                        iTime: itm.duration,
                        id: itm.id
                    });
                    
                    itm.inf.effect();
                } else
                    itm.inf.effect();
                
                return true;
            }
          };
          
          //draws the lava on screen
          function drawLava() { 
            if (lavaSettings.mode == 0){ //0 is y
              var p = lavaSettings.pos,
                top = p - lavaSettings.spacing / 2, 
                bottom = p + lavaSettings.spacing / 2, 
                clip = lavaSettings.partClip, 
                cSz = clip.w * 3, 
                nClips = can.width / cSz, 
                clipH = clip.h * 3, off = -cSz - lavaSettings.offset;
              for (var i = 0; i < nClips+2; i++) {
          
                //top
                ctx.saveState();
                ctx.translate(i * cSz + cSz / 2 + off, top + clipH / 2);
                ctx.rotate(Math.PI);
                ctx.renderImage(spritesheet, clip.x, clip.y, clip.w, clip.h, -cSz/2, -clipH/2, cSz, clipH);
                ctx.restoreState();
          
                //bottom
                ctx.drawImage(spritesheet, clip.x, clip.y, clip.w, clip.h, i * cSz + off, bottom, cSz, clip.h * 3);
              }
          
              ctx.fillStyle = lavaSettings.color;
              ctx.fillRect(0, 0, can.width, top);
              ctx.fillRect(0, bottom + clipH, can.width, can.height - bottom);
            } else {
              var p = lavaSettings.pos,
                left = p - lavaSettings.spacing / 2, 
                right = p + lavaSettings.spacing / 2, 
                clip = lavaSettings.partClip,
                rh = clip.rh * 2,
                cSz = clip.w * 3, 
                clipH = clip.h * 3,
                nClips = can.height / clipH,
                off = -cSz - lavaSettings.offset;
              for (var i = 0; i < nClips+2; i++) {
          
                //left
                ctx.saveState();
                ctx.translate(left + rh / 2, i * cSz + cSz / 2 + off);
                ctx.rotate(Math.PI / 2);
                ctx.renderImage(spritesheet, clip.x, clip.y, clip.w, clip.rh, -rh/2, -cSz/2, cSz, rh);
                ctx.restoreState();
          
                //right
                ctx.saveState();
                ctx.translate(right + rh / 2, i * cSz + cSz / 2 + off);
                ctx.rotate(-Math.PI / 2);
                ctx.renderImage(spritesheet, clip.x, clip.y, clip.w, clip.rh, -rh/2, -cSz/2, cSz, rh);
                ctx.restoreState();
              }
          
              ctx.fillStyle = lavaSettings.color;
              ctx.fillRect(0, 0, left + clip.h, can.height);
              ctx.fillRect(right + rh * 0.75, 0, can.width - right, can.height);
            }
          
            lavaSettings.offset = (lavaSettings.offset + 1) % (lavaSettings.partClip.w * 3);
            lavaSettings.pos += lavaSettings.speed;
          }
          
          //small line drawing function
          function _line(x1, y1, x2, y2) {
            ctx.beginPath();
            ctx.moveTo(x1,y1);
            ctx.lineTo(x2,y2);
            ctx.stroke();
          }
          
          //function to draw the whole tile map
          
          function drawMap() {
            var tm = [];
            var tile = null;
            //var fillDisplace = tDisp.length <= 0;
              for (var y = 0; y < mapSettings.mapH; y++) {
                  for (var x = 0; x < mapSettings.mapW; x++) {
                      if ((tile = map[y][x]) == null) continue;
                      if (TILE_INF[tile.id].pushable) {
                          if (typeof tile.pOffset != 'object')
                              tile.pOffset = {x: 0, y: 0};
                          
                          //console.log(tile.pOffset);
                          //basically going to be displace
                          tile = player.tilePush(tile, x, y);
                          
                          /*if (fillDisplace)
                              tDisp.push({x:x,y:y});
                          else if (typeof tile.lv == 'object') {
                              var t,p,xp = x * tileSize + tile.pOffset.x,yp = y * tileSize + tile.pOffset.y,txp,typ;
                              for (var k = 0; k < tDisp.length; k++) {
                                  t = tDisp[k];
                                  if (t.x == x && t.y == y) continue;
                                  p = map[t.y][t.x];
                                  
                                  txp = t.x * tileSize + p.offsetX;
                                  typ = t.y * tileSize + p.offsetY;
                                  
                                  
                                  //apply velocity stuff
                                  if (physics.rectCollide(xp,yp,tileSize,tileSize,txp,typ,tileSize,tileSize)) {
                                      p.offsetX += tile.lv.x;
                                      p.offsetY += tile.lv.y;
                                      console.log('!')
                                  }
                                  
                                  map[t.y][t.x] = p;
                              }
                          }*/
                          
                          renderTile(
                              x*tileSize + (tile.pOffset.x),
                              y*tileSize + (tile.pOffset.y),
                              tile.id,
                              tile.dat
                          );
                      } else {
                          renderTile(x*tileSize,y*tileSize,tile.id,tile.dat);
                          if (TILE_INF[tile.id].connected) tm.push({x:x,y:y});
                          if (Math.sqrt(Math.pow((player.x - (x * tileSize)),2)+Math.pow((player.y - (y * tileSize)),2)) < tileSize * 2) {
                              player.tileCollide(tile, x, y);
                              
                              if (TILE_INF[tile.id].dangerous)
                                  player.tileHurt(tile, x, y);
                          }
                      }
                      
                      map[y][x] = tile;
                  }
              }
          
              var t_id, inf, xp, yp,x,y,i;
              for (i= 0; i < tm.length; i++) {
                var t = tm[i];
                x = t.x,y=t.y;
              
                  if (map[y][x] == null) continue;
                  inf = TILE_INF[map[y][x].id];
                  
                  if (!inf.connected) continue;
                  t_id = map[y][x].id;
                  ctx.strokeStyle = inf.borderColor;
                  ctx.lineWidth = inf.borderSize;
                  ctx.lineCap = "square";
                  xp = x*tileSize; 
                  yp = y*tileSize;
          
                  if (x > 0 && (map[y][x - 1] == null || map[y][x - 1].id != t_id))
                    _line(xp, yp, xp, yp + tileSize);
          
                  if (x < mapSettings.mapW-1 && (map[y][x + 1] == null || map[y][x + 1].id != t_id))
                    _line(xp + tileSize, yp, xp + tileSize, yp + tileSize);
          
                  if (y > 0 && (map[y - 1][x] == null || map[y - 1][x].id != t_id))
                    _line(xp, yp, xp + tileSize, yp);
          
                  if (y < mapSettings.mapH-1 && (map[y + 1][x] == null || map[y + 1][x].id != t_id))
                    _line(xp, yp + tileSize, xp + tileSize, yp + tileSize);
                }
              
          }
          
          //function to draw all the items
          function drawItems() {
              for (var i = 0; i < items.length; i++) {
                  if (items[i].hidden) continue;
                  
                  items[i].update(); 
                  
                  //player interaction
                  items[i].hidden = player.itemCollide(items[i]);
              }
          }
          
          //duration queue
          function drawDurationQueue() {
              var py = 5, px = 5, h = tileSize, w = 100, m = 5, bh = tileSize / 2, by = (h / 2) - (bh / 2), bw = 50;
              
              var rq = [];
              
              for (var i = 0; i < durationQueue.length; i++) {
                  if (durationQueue[i].time-- <= 0) rq.push(i);
                  
                  var id = durationQueue[i].id, inf = ITEM_INF[id];
                  
                  //draw gui for queue
                  ctx.drawImage(spritesheet, inf.imgClip.x, inf.imgClip.y, inf.imgClip.w, inf.imgClip.h, px, py, tileSize, tileSize);
                  ctx.fillStyle = '#0f0';
                  ctx.strokeStyle = '#000';
                  ctx.lineWidth = 3;
                  ctx.fillRect(px+tileSize+m, by+py, bw * (durationQueue[i].time / durationQueue[i].iTime), bh);
                  ctx.strokeRect(px+tileSize+m, by+py, bw, bh);
                  
                  py += h + m;
              }
              
              //removal queue
              while (rq.length > 0) {
                  rq = rq.sort(function(a,b){return a - b;})
                  var i = rq[0];
                  
                  //end effect
                  var inf = ITEM_INF[durationQueue[i].id];
                  
                  if (typeof inf.effectFinish == 'function') {
                      inf.effectFinish();
                  } else
                      lavaSettings = durationQueue[i].oSettings;
                  
                  for (var j = i+1; j < rq.length; j++)
                      rq[j]--;
                      
                  durationQueue.splice(i,1);
                  rq.shift(); //finally remove from queue
              }
          }
          
          //this is a debug function for getting all the functions in game lab
          function printObject(obj) {
            var k  = Object.keys(obj);
            
            for (var i = 0;i < k.length; i++) {
              console.log(k[i]);
            }
          }
          
          /*printObject(window);*/
          //printObject(window);
          // Create your sprites here
          
          function draw() {
            // draw background
          
            // update sprites
            
            GameManager.Update();
          
            //drawSprites();
            
            if (mouseDidMove()) _gbl_mouseMove(World.mouseX, World.mouseY);
            if (mouseWentDown()) _gbl_mouseDown(World.mouseX, World.mouseY);
            if (mouseWentUp()) _gbl_mouseUp(World.mouseX, World.mouseY); 
          }
          
          //end flag
          var endFlag = {
              tileId: 3,
              update: function() {
                  var pEnd = GameManager.levelInf.pEndPos;
                  
                  renderTile(pEnd.x, pEnd.y, 3, 0);
                  
                  if (physics.rectCollide(pEnd.x,pEnd.y,tileSize, tileSize, player.x, player.y, player.w, player.h))
                      GameManager.EndLevel();
              }
          }
          
          
          //Game update
          GameManager.gameUpdate = function() {
            drawMap();
            player.update();
            drawItems();
            endFlag.update();
            drawLava();
            drawDurationQueue();
          };
          
          // Create your functions here
          
          
          //event listeners
          function _gbl_mouseMove(x, y) {
            for (var i = 0; i < _gbl_buttonUpdates.length; i++) {
              if (typeof _gbl_buttonUpdates[i] == 'object')
                _gbl_buttonUpdates[i].mouseUpdate(MOUSEEVENT_MOVE, x, y);
            }
          }
          
          function _gbl_mouseDown(x, y) {
            for (var i = 0; i < _gbl_buttonUpdates.length; i++) {
              if (typeof _gbl_buttonUpdates[i] == 'object')
                _gbl_buttonUpdates[i].mouseUpdate(MOUSEEVENT_DOWN, x, y);
            }
          }
          
          function _gbl_mouseUp(x, y) {
            for (var i = 0; i < _gbl_buttonUpdates.length; i++) {
              if (typeof _gbl_buttonUpdates[i] == 'object')
                _gbl_buttonUpdates[i].mouseUpdate(MOUSEEVENT_UP, x, y);
            }
          }
          
          //MENUs
          menuIni.main = function() {
              var bypS = 175 - (50), bh = 45, bm = 5, sDef = {
              borderSize: 1,
              borderColor: "rgb(0,50,175)",
              backgroundColor: "rgb(0,100,200)",
              font: "25px Arial",
              textColor: "#fff"
            }, sHov = {
              borderSize: 1,
              borderColor: "rgb(0,50,175)",
              backgroundColor: "rgb(0,50,100)",
              font: "25px Arial",
              textColor: "#fff"
            };
            menuInfo.main = {};
            menuInfo.main.playButton = new MenuButton("Play", BUTTON_CENTER, bypS += bh + bm, bh, 150, sDef, sHov);
            menuInfo.main.resetButton = new MenuButton("New Save", BUTTON_CENTER, bypS += bh + bm, bh, 150, sDef, sHov);
            menuInfo.main.controlsButton = new MenuButton("Controls", BUTTON_CENTER, bypS += bh + bm, bh, 150, sDef, sHov);
            
            menuInfo.main.playButton.onMouseDown = function(x, y) {
              GameManager.LoadMenu("levels");
            }
            
            menuInfo.main.resetButton.onMouseDown = function(x, y) {
                GameManager.LoadMenu("resetWarning");
            }
            
            menuInfo.main.controlsButton.onMouseDown = function(x, y) {
                GameManager.LoadMenu("_controlMenu");
            }
          }
          
          menuEvents.main = {};
            
          menuEvents.main.show = function() {
              menuInfo.main.playButton.visible = true;
              menuInfo.main.resetButton.visible = true;
              menuInfo.main.controlsButton.visible = true;
          }
            
          menuEvents.main.hide = function() {
              menuInfo.main.playButton.visible = false;
              menuInfo.main.resetButton.visible = false;
              menuInfo.main.controlsButton.visible = false;
          }
          
          menuUpdates.main = function() {
            ctx.fillStyle = 'rgb(0,200,255)';
            ctx.fillRect(0, 0, canWidth, canHeight);
            
            //draw title
            ctx.fillStyle = '#fff';
            ctx.strokeStyle = '#000';
            ctx.font = '35px Arial';
            ctx.lineWidth = 5;
            var titlePos = {
                x: 45,
                y: 110
            }
            ctx.strokeText("Cool Game Thing", titlePos.x, titlePos.y);
            ctx.fillText("Cool Game Thing", titlePos.x, titlePos.y);
            
            //draw player title
            if (typeof menuInfo.main.pTheta != 'number') menuInfo.main.pTheta = 0;
            menuInfo.main.pTheta += 0.1;
            
            var pDrawPos = {
                x: 150,
                y: 110,
                w: tileSize * 2,
                h: tileSize * 2
            };
            
            ctx.fillStyle = '#f00';
            ctx.strokeStyle = '#900';
            ctx.lineWidth = 6;
            
            //ctx.save();
            //ctx.translate(pDrawPos.x + pDrawPos.w / 2, pDrawPos.y + pDrawPos.h / 2);
            //ctx.rotate(menuInfo.main.pTheta);
            //ctx.fillRect(-pDrawPos.w/2,-pDrawPos.h/2);
            //ctx.restore();
            
            ctx.fillStyle = '#fff';
            ctx.font = '15px Arial';
            ctx.fillText("Version 0.0.1", 5,15);
            
            menuInfo.main.playButton.draw();
            menuInfo.main.resetButton.draw();
            menuInfo.main.controlsButton.draw();
          };
          
          menuIni.levels = function() {
            menuInfo.levels = {};
            
            menuInfo.levels.lButtons = [];
            
            var nLevels = LEVEL_ROM.length;
            
            var selectSz = 50, margin = 5, xp = margin, yp = margin;
            
            var backBtn = new MenuButton("<", xp, yp, selectSz, selectSz, {
                borderSize: 3,
                font: "25px Arial"
              }, {
                borderSize: 3,
                font: "25px Arial",
                backgroundColor: "#bbb"
            });
            
            backBtn.onMouseDown = function() {
              GameManager.LoadMenu("main");
            };
            
            menuInfo.levels.lButtons.push(backBtn);
            
            xp += margin + selectSz;
            
            for (var i = 0; i < LEVEL_ROM.length; i++) {
              
              var btn = new MenuButton((i+1).toString(), xp, yp, selectSz, selectSz, {
                borderSize: 3,
                font: "25px Arial"
              }, {
                borderSize: 3,
                font: "25px Arial",
                backgroundColor: "#bbb"
              });
              
              //button / level load event
              btn._lid = i;
              btn.onMouseDown = function() {
                GameManager.LoadLevel(this._lid);
              }
              
              menuInfo.levels.lButtons.push(btn);
              
              xp += margin + selectSz;
              
              if (xp > canWidth - margin - selectSz) {
                xp = margin;
                yp += selectSz + margin;
              }
            }
            
            menuEvents.levels = {};
            
            menuEvents.levels.hide = function() {
                for (var i = 0; i < menuInfo.levels.lButtons.length; i++) {
                    menuInfo.levels.lButtons[i].visible = false;
                }
            }
            
            menuEvents.levels.show = function() {
                for (var i = 0; i < menuInfo.levels.lButtons.length; i++) {
                    menuInfo.levels.lButtons[i].visible = true;
                }
            }
          }
          
          menuUpdates.levels = function() {
            ctx.fillStyle = '#9f9';
            ctx.fillRect(0,0,canWidth,canHeight);
            
            for (var i = 0; i < menuInfo.levels.lButtons.length; i++) {
              var btn = menuInfo.levels.lButtons[i];
              
              if (i > 0) {
                  //display for various save states
                  switch (GameManager.save[i-1]) {
                      case GameManager.unlockStates.locked: {
                          btn.styles.def.backgroundColor = '#ccc';
                          btn.disabled = true;
                          break;
                      }
                      case GameManager.unlockStates.unlocked: {
                          btn.styles.def.backgroundColor = '#fff';
                          btn.disabled = false;
                          break;
                      }
                      case GameManager.unlockStates.completed: {
                          btn.styles.def.backgroundColor = '#fb0';
                          btn.disabled = false;
                          break;
                      }
                  }
              }
              
              btn.draw();
            }
          }
          
          setTimeout(function() {
              GameManager.Ini();
              GameManager.LoadSave();
          },100);
          
          menuIni.pause = function() {
              var yStart = 100, buttonH = 35, buttonMargin = 5, bsp = buttonH + buttonMargin, styleDef = {
                  font: "15px Arial",
                  textColor: "#fff",
                  borderColor: "rgb(0,50,175)",
                  backgroundColor: "rgb(0,100,200)"
              },styleHov = {
                  font: "15px Arial",
                  textColor: "#fff",
                  borderColor: "rgb(0,50,175)",
                  backgroundColor: "rgb(0,50,100)"
              };
              menuInfo.pause = {};
              menuInfo.pause.resumeButton = new MenuButton("Resume",BUTTON_CENTER,yStart += bsp,buttonH,150, styleDef, styleHov);
              
              menuInfo.pause.resumeButton.onMouseDown = function() {
                  pauseMenu.active = false;
                  GameManager.LoadMenu(null);
              }
              
              var self = menuInfo.pause;
              
              self.exitButton = new MenuButton("Exit", BUTTON_CENTER, yStart += bsp, buttonH, 150, styleDef, styleHov);
              
              self.exitButton.onMouseDown = function() {
                  GameManager.UnloadLevel();
                  pauseMenu.active = false;
                  GameManager.LoadMenu("levels"); //return to level menu
              }
          }
          
          menuUpdates.pause = function() {
              ctx.globalAlpha = 0.5;
              ctx.fillStyle = '#000';
              ctx.fillRect(0,0,canWidth,canHeight);
              ctx.globalAlpha = 1;
              
              var self = menuInfo.pause;
              self.resumeButton.draw();
              self.exitButton.draw();
          }
          
          menuEvents.pause = {};
          menuEvents.pause.hide = function() {
              var self = menuInfo.pause;
              self.resumeButton.visible = false;
              self.exitButton.visible = false;
              
              lavaSettings.speed = pauseMenu.lDefSpeed;
              
              if (typeof lavaSettings.speed != 'number')
                  lavaSettings.speed = 0;
          }
          
          menuEvents.pause.show = function() {
              var self = menuInfo.pause;
              menuInfo.pause.resumeButton.visible = true;
              self.exitButton.visible = true;
              pauseMenu.active = true;
              pauseMenu.lDefSpeed = lavaSettings.speed;
              lavaSettings.speed = 0;
          }
          
          menuIni.resetWarning = function() {
              menuInfo.resetWarning = {};
              
              var bw = 100, bh = 35, bm = 5, tW = (bw + bm) * 2;
              var xp = (canWidth / 2) -  (tW / 2);
              var yp = 300;
              
              menuInfo.resetWarning.yes = new MenuButton("Yes", xp, yp, bh, bw, {
                  font: "25px Arial",
                  textColor: "#fff",
                  borderSize: 3,
                  borderColor: "#0b0",
                  backgroundColor: "#0f0"
              }, {
                  font: "25px Arial",
                  textColor: "#ddd",
                  borderSize: 3,
                  borderColor: "#0d0",
                  backgroundColor: "#0b0"
              });
              xp += bw + bm;
              menuInfo.resetWarning.no = new MenuButton("No", xp, yp, bh, bw, {
                  font: "25px Arial",
                  textColor: "#fff",
                  borderSize: 3,
                  borderColor: "#b00",
                  backgroundColor: "#f00"
              }, {
                  font: "25px Arial",
                  textColor: "#ddd",
                  borderSize: 3,
                  borderColor: "#d00",
                  backgroundColor: "#b00"
              });
              
              menuInfo.resetWarning.yes.onMouseDown = function() {
                  GameManager.LoadDefaultSave();
                  
                  if (typeof localStorage == 'object')
                      localStorage.setItem("_g_stat_save_bak", localStorage.getItem("_g_stat_save")); //backup just in case (this isnt used)
                  
                  GameManager.Save(); //save to comfirm new save
                  GameManager.LoadMenu("main");
              }
              
              menuInfo.resetWarning.no.onMouseDown = function() {
                  GameManager.LoadMenu("main");
              }
          }
          
          menuUpdates.resetWarning = function() {
              ctx.fillStyle = '#999';
              ctx.fillRect(0,0,canWidth,canHeight);
              
              ctx.fillStyle = '#fff';
              ctx.font = '20px Arial';
              ctx.fillText("WARNING! This will reset ALL", 50, 50);
              ctx.fillText("of your progress!", 50, 75)
              ctx.fillText("Do you want to proceed?", 50, 125);
              
              menuInfo.resetWarning.yes.draw();
              menuInfo.resetWarning.no.draw();
          }
          
          menuEvents.resetWarning = {};
          
          menuEvents.resetWarning.hide = function() {
              menuInfo.resetWarning.yes.visible = false;
              menuInfo.resetWarning.no.visible = false;
          }
          
          menuEvents.resetWarning.show = function() {
              menuInfo.resetWarning.yes.visible = true;
              menuInfo.resetWarning.no.visible = true;
          }
          
          menuIni._controlMenu = function() {
              menuInfo._controlMenu = {};
              menuInfo._controlMenu.backBtn = new MenuButton("<", 5, 5, 35, 35, {
                  backgroundColor: "#fff",
                  borderSize: 3,
                  borderColor: "#999",
                  font: "20px Arial"
              }, {
                  backgroundColor: "#bbb",
                  borderSize: 3,
                  borderColor: "#777",
                  font: "20px Arial"
              });
              
              menuInfo._controlMenu.backBtn.onMouseDown = function() {
                  GameManager.LoadMenu("main");
              }
          }
          
          menuUpdates._controlMenu = function() {
              ctx.fillStyle = 'rgb(255,200,255)';
              ctx.fillRect(0,0,canWidth,canHeight);
              ctx.fillStyle = '#fff';
              ctx.font = '20px Arial';
              ctx.fillText("Move: arrow keys", 100, 50);
              ctx.fillText("Pause: Esc", 100, 75);
              ctx.fillText("Crouch / Slow: Shift", 100, 100);
              
              menuInfo._controlMenu.backBtn.draw();
          }
          
          menuEvents._controlMenu = {};
          
          menuEvents._controlMenu.show = function() {
               menuInfo._controlMenu.backBtn.visible = true;
          }
          
          menuEvents._controlMenu.hide = function() {
               menuInfo._controlMenu.backBtn.visible = false;
          }

})();