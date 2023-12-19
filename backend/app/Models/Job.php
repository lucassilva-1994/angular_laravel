<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    protected $table = 'jobs';
    protected $fillable = ['id','order','name','created_at','updated_at'];
    public $timestamps = false;
    protected $keyType = 'string';
}
