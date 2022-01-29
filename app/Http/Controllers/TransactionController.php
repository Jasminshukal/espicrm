<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function add(Request $request,$enquiryId)
    {
        $request->validate([
            'payment_mode'=>'required',
            'price'=>'required|numeric',
            'note'=>'required',
            'title'=>'required'
        ]);
        $transaction=new Transaction();
        $transaction->price=$request->price;
        $transaction->title=$request->title;
        $transaction->payment_mode=$request->payment_mode;
        $transaction->note=$request->note;
        $transaction->enquiry_id=$enquiryId;
        $transaction->company_id=\Auth::user()->company_id;
        $transaction->receive_by=\Auth::user()->id;
        $transaction->save();
        return redirect()->back()->withInfo('Add Transaction SuccessFully.');
    }
}
