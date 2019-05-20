# Vueloquent

Vueloquent brings Laravel's DB queries syntax to the front-end as a Vue plugin or plain JavaScript module.

Using Vueloquent, you don't need to create a route for every resource/model you want to query.
Just create a single route and retrieve data easily like:

```javascript
Vue.eloquent.token('api_token').at('endpoint').from('User').find(1);
```

or

```javascript
$v.token('api_token')
  .at('endpoint')
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

Once loaded, you will be able to access Vueloquent globally in your Vue instances at `Vue.eloquent`.

*If you're using plain JavaScript*

```
php artisan vendor:publish --tag=vueloquent-js
```

Include the script before your closing `</body>` tag.
```html
<script src="/js/vendor/vueloquent/vueloquent.js"></script>
```

Once loaded, you will be able to access Vueloquent at `$v`.

## Route Setup

You will need to create a `post` route that will handle all Vueloquent queries. I suggest creating an api route in your `routes\api.php` file.

```php
use Illuminate\Http\Request;
use CharlGottschalk\Vueloquent\VueloquentHandler;

Route::middleware('auth:api')->post('[vueloquent_route]', function (Request $request, VueloquentHandler $handler) {
    return $handler->handle($request);
});
```

*Replace `[vueloquent_route]` with the endpoint you wish.*

## Documentation

For more in-depth documentation, please visit the [wiki](https://github.com/CharlGottschalk/vueloquent/wiki).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
