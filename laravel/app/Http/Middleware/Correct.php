<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\Mot;

class Correct
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $number = strtoupper(preg_replace("/\s+/", "", $request->route('number')));
        $pattern = '/(?=[A-Z]{2}[0-9]{2}[A-Z]{3})[^JTUIQZ]{2}[0-9]{2}[^IQ]{3}/';
        
        if (preg_match($pattern, $number)) {
            $request->replace(array('number' => $number));
            return $next($request); 
        }
        return response()->json([
            'object' => []
        ]);
    }
}
