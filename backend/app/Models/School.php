<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    protected $table = 'schools';
    protected $fillable = ['id','order','name','address','phone','email','cnpj','created_at','updated_at'];
    public $timestamps = false;
    protected $keyType = 'string';

    public function employees(){
        return $this->hasMany(Employee::class);
    }

    public function students(){
        return $this->hasMany(Student::class);
    }
}
