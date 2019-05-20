<?php

namespace CharlGottschalk\Vueloquent;

use Illuminate\Support\ServiceProvider;

/**
 * Laravel service provider for EloquentJs.
 */
class VueloquentServiceProvider extends ServiceProvider
{
    /**
     * Publishes configuration file and Vue plugin.
     *
     * @return void
     */
    public function boot()
    {
        $this->publishes(
            [__DIR__.'/../config/vueloquent.php' => config_path('vueloquent.php')],
            'vueloquent-config'
        );

        $this->publishes(
            [__DIR__.'/../js/dist/vueloquent-vue.js' => public_path(config('vueloquent.public_js') . '/vendor/vueloquent/vueloquent-vue.js')],
            'vueloquent-vue'
        );

        $this->publishes(
            [__DIR__.'/../js/dist/vueloquent.js' => public_path(config('vueloquent.public_js') . '/vendor/vueloquent/vueloquent.js')],
            'vueloquent-js'
        );
    }

    /**
     * Make config publishing optional by merging the config from the package.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__.'/../config/vueloquent.php',
            'vueloquent'
        );
    }
}
