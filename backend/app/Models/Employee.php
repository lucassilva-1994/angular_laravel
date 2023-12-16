<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $table = 'employees';
    protected $fillable = ['id','order','name','email','phone','cpf','school_id','birth_date','created_at','updated_at'];
    public $timestamps = false;
    protected $keyType = 'string';

    public function school(){
        return $this->belongsTo(School::class);
    }
}   
