<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $e)
    {

        if(Str::of(ltrim($request->getPathInfo(), '/'))->is('api*'))
        {
            $status = 400;
            $errors = [];
            if($e instanceof ValidationException)
            {
                $errors = [$e->errors()];
            }else{
                echo '<pre>';
                print_r($e->getMessage());
                die;
            }

            return response()->json([
                'errors' => $errors
            ], $status);
        }

        return parent::render($request, $e);
    }
}
