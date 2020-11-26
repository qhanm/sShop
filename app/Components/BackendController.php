<?php
namespace App\Components;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller;

class BackendController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
