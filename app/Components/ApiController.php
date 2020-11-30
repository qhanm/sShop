<?php
namespace App\Components;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller;

class ApiController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function sendResponse($result = [], $message = '', $success = true, $status = 200)
    {
        return response()->json([
            'success' => $success,
            'data' => $result,
            'message' => $message
        ], $status);
    }

    public function sendError($errors = [], $success = false, $status = 400)
    {
        return response()->json([
            'success' => $success,
            'errors' => $errors,
        ], $status);
    }
}
