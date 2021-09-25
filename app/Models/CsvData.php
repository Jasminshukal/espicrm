<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CsvData extends Model
{
    use HasFactory;
    protected $table = 'csv_data';
    protected $fillable = ['csv_filename', 'csv_header', 'csv_data','company_id'];
}