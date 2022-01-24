<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\User;
use App\Models\University;
use App\Models\Course;
use App\Models\Intact;
use GuzzleHttp\RetryMiddleware;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function __construct()
    {
        $this->middleware("auth");
    }
    public function index()
    {
        // if(\Auth::user()->roles[0]->name!="super-admin" && \Auth::user()->roles[0]!="admin")
        // {
        //     return redirect()->route('Enquires.create');
        // }
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

    public function ocr()
    {
        return view("ocr.index");
    }


}
