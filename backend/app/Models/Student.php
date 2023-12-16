<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $table = 'students';
    protected $fillable = ['id','order','name','cpf','email','phone','school_id','birth_date','created_at','updated_at'];
    public $timestamps = false;
    protected $keyType = 'string';

    public function school(){
        return $this->belongsTo(School::class);
    }
}
