


![截屏2021-10-09 下午4.29.43.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/08e2076e8dd448679771ead318091dcc~tplv-k3u1fbpfcp-watermark.image?)

**核心**： CSS  clip-path 

直接上代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    .root {
      width: 1920px;
      height: 1280px;
      background-color: #ee1c25ff;
    }
    .star_base {
      background-color: #ffff00ff;
      clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
      );
    }
    .star_big {
      position: relative;
      top: 128px;
      left: 128px;
      width: 384px;
      height: 384px;
    }
    .star_small {
      width: 128px;
      height: 128px;
    }
    .no_1 {
      position: absolute;
      top: 64px;
      left: 576px;
      transform: rotate(36deg);
    }
    .no_2 {
      position: absolute;
      top: 192px;
      left: 704px;
      transform: rotate(18deg);
    }
    .no_3 {
      position: absolute;
      top: 384px;
      left: 704px;
    }
    .no_4 {
      position: absolute;
      top: 512px;
      left: 576px;
      transform: rotate(36deg);
    }
  </style>

  <body>
    <div class="root">
      <div class="star_base star_big"></div>
      <div class="star_base star_small no_1"></div>
      <div class="star_base star_small no_2"></div>
      <div class="star_base star_small no_3"></div>
      <div class="star_base star_small no_4"></div>
    </div>
  </body>
</html>

```