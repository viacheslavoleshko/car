<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mot;
use App\Models\Tax;

class PagesController extends Controller
{
    

    public function mot(){
        // Read value from Model method
        $data = Mot::getData();

        // Pass to view
        return view('pages/mot')->with("data", $data);
    }

    public function tax(){
        // Read value from Model method
        $data = Tax::getData();

        // Pass to view
        return view('pages/tax')->with("data", $data);
    }
    
    public function services(){
        $data = array(
            'title' => 'Services',
            'services' => [
                'Web Design', 
                'Programming', 
                'SEO'
            ]
        );
        return view('pages/services')->with($data);
    }
}
