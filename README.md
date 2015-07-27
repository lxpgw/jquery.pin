## jQuery.pin

对原[项目](https://github.com/webpop/jquery.pin)的扩展以及更新.

## Usage

### 基本用法

将某个DOM以body为容器进行固定.

```javascript
$(".pinned").pin()
```

固定到某个容器内部

```javascript
$(".pinned").pin({
    containerSelector: ".container"
})
```

### 高级用法

有时候我们需要对目标DOM设置top,或者bottom, 以针对页面中有固定顶部菜单栏等情况，可以设置以下参数:

```javascript
$(".pinned").pin({
    padding: {top: 50}
})
```

`padding` 接收一个object,用来设置 `top` 和 `bottom` 值

## Examples

Plenty of examples [Here](http://webpop.github.com/jquery.pin/).
