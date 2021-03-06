<?php

namespace App\Http\Controllers;

use App\Http\Requests\Card\EditCard;
use DataTables;
use App\Models\Card;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use DB;

class CardController extends Controller
{
    public function index(Request $request)
    {
        $title = 'Manage Card';
        if ($request->ajax()) {
            $data = Card::select('*');
            return Datatables::of($data)
                    ->addIndexColumn()


                    ->addColumn('action', function($row){
                        $btn = "";
                        $btn = '<a href="'.route('card.edit',$row->id).'" title="Edit" class="edit btn btn-primary btn-sm">Edit</a>';
                        // $btn = '<a href="'.route('card.destroy',$row->id).'" title="Delete" class="edit btn btn-danger btn-sm">Delete</a>';

                        return $btn;
                    })
                    ->rawColumns(['action'])
                    ->make(true);
                }
        return view('card.index');
    }
    public function create()
    {
      //  $title = 'Create user';
        //$roles = Role::pluck('name', 'id');
        return view('card.add');
    }
    public function store (Request $request)
    {
        // $request->validate([
        //     'name'=>'required',
        //     'card_number'=>'required|numeric',
        //     'note'=>'required',
        //     'title'=>'required'
        // ]);
        // print_r($request->all());
        $transaction=new Card();
        $transaction->name=$request->name;
        $transaction->card_number=$request->card_number;
        $transaction->date=$request->date;
        $transaction->note=$request->note;
        $transaction->company_id=\Auth::user()->company_id;
        $transaction->save();
        return redirect()->back()->withInfo('Add  Credit Card SuccessFully.');
    }
    public function edit(Card $Card)
    {
        $title = "Card Details";
        $roles = Role::pluck('name', 'id');

        return view('card.edit', compact('Card','title', 'roles'));
    }
    public function update(EditCard $request, Card $Card)
    {

        $Card->name=$request->name;
        $Card->card_number=$request->card_number;
        $Card->date=$request->date;
        $Card->note=$request->note;
        $Card->company_id=\Auth::user()->company_id;
        $Card->save();

// print_r($Card);die;
        return redirect()->route('card.index');
    }
}
