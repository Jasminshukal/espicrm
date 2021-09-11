<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\University;
use App\Models\Course;
use App\Models\Intact;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $university=University::all();
        $course=Course::all();
        $intake=Intact::all();
        $user=User::role('Counsellor')->get();
        return view('home',compact("user","university","course","intake"));
    }

    public function front_end()
    {
        return view('coming_soon');
    }
}
