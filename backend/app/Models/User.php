<?php

namespace App\Models;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    protected $table = 'users';
    protected $fillable = ['id','order','employee_id','password','created_at','updated_at'];
    protected $keyType='string';
    public $timestamps = false;
    protected $hidden = ['password'];

    public function employee(){
        return $this->belongsTo(Employee::class);
    }
}
