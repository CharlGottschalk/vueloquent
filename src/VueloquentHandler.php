<?php

namespace CharlGottschalk\Vueloquent;

use Illuminate\Http\Request;

class VueloquentHandler
{

    /**
     * Create a new event handler instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the Eloquent request.
     *
     * @param Illuminate\Http\Request $request
     * @return void
     */
    public function handle(Request $request)
    {
        $model = config('vueloquent.model_namespace') . $request->input('model');
        $queries = $request->input('queries');
        $final = $request->input('final');
        return $this->execute($model, $queries, $final);
    }

    protected function execute($model, $queries, $final)
    {
        try {
            $result = app($model);
            foreach ($queries as $value) {
                $action = $value['method'];
                if (is_callable(array($result, $action))) {
                    $result = $result->$action(...$value['args']);
                }
            }
            $action = $final['method'];
            if (is_callable([$result, $action])) {
                return $result->$action(...$final['args']);
            }
        } catch (\Throwable $th) {
            return $th;
        }
    }
}
