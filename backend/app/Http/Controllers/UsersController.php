<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Helpers\HelperGeneric;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    use HelperGeneric;
    public function signIn(Request $request){
        $user = User::whereHas('employee', function ($query) use ($request) {
            $query->where('email', $request->email);
        })->first();
        if(auth()->attempt(['employee_id' => $user->employee->id, 'password' => $request->password])){
            $token = $request->user()->createToken('user'); 
            return response()->json([
                'token' => "Bearer $token->plainTextToken",
                'user_id' => auth()->user()->id,
                'name' => auth()->user()->employee->name,
                'email' => auth()->user()->employee->email,
                'username' => self::generateUserName(auth()->user()->employee->name)
            ]);
        }
        return response()->json('Email e senha inválidos.');
    }

    public function signUp(){

    }

    public function signOut(Request $request){
        $request->user()->tokens()->delete();
        return response()->json('Sucesso.');
    }
}
