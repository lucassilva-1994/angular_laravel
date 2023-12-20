<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function signIn(Request $request){
        if(auth()->attempt($request->only('email','password'))){
            $token = $request->user()->createToken('user'); 
            return response()->json([
                'token' => $token->plainTextToken,
                'user' => $request->user()
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
