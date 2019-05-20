# Vueloquent

Vueloquent brings Laravel's DB queries syntax to the front-end as a Vue plugin or plain JavaScript module.

Using Vueloquent, you don't need to create a route for every resource/model you want to query.
Just create a single route and retrieve data easily like:

```javascript
Vue.eloquent.from('User').find(1);
```

or

```javascript
Vue.eloquent
  .from('User')
  .with('posts')
  .where('published', true)
  .get();
```

## Requirements

- PHP 7.1+
- Laravel 5.6+

## Installation

1. Install the package by running this command in your terminal/cmd:

```
composer require charlgottschalk/vueloquent
```

2. Publish the Vueloquent plugin

*If you're using Vue*

```
php artisan vendor:publish --tag=vueloquent-vue
```

Include the self-installing plugin after Vue.
```html
<script src="/js/app.js"></script>
<script src="/js/vendor/vueloquent/vueloquent-vue.js"></script>
```

*If you're using plain JavaScript*

```
php artisan vendor:publish --tag=vueloquent-js
```

Include the script before your closing `</body>` tag.
```html
<script src="/js/vendor/vueloquent/vueloquent.js"></script>
```

### Vue Plugin

Once loaded, you will be able to access Vueloquent globally in your Vue instances at `Vue.eloquent`.

### Plain JS Module

Once loaded, you will be able to access Vueloquent at `$v`.

## Documentation

For more in-depth documentation, please visit the [wiki](LICENSE).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
