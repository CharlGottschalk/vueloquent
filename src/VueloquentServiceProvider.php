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
            [__DIR__.'/../js/dist/vueloquent.plugin.js' => public_path(config('vueloquent.public_js') . '/vendor/vueloquent/vueloquent.plugin.js')],
            'vueloquent-plugin'
        );

        $this->publishes(
            [__DIR__.'/../js/dist/vueloquent.plain.js' => public_path(config('vueloquent.public_js') . '/vendor/vueloquent/vueloquent.plain.js')],
            'vueloquent-plain'
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
