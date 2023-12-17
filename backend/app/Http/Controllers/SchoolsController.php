<?php

namespace App\Http\Controllers;

use App\Helpers\Model;
use App\Http\Requests\SchoolRequest;
use App\Models\School;
use Illuminate\Http\Request;

class SchoolsController extends Controller
{
    use Model;
    public function get(){
        $schools = School::paginate(50)->load('employees','students')->flatten();
        return response()->json($schools);
    }

    public function getById(string $id){
        return response()->json(School::find($id));
    }

    public function create(SchoolRequest $request){
        try {
            if(self::setData($request->all(),School::class)){
                return response()->json('Registro inserido com sucesso.');
            }
        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }

    public function update(Request $request, string $id){
        if(self::updatedata(School::class,$request->all(),['id' => $id])){
            return response()->json('Registrado atualizado com sucesso.');
        }
    }

    public function delete(string $id){
        try {
            if(School::find($id)->delete())
            return response()->json('Registro excluido com sucesso.');
        } catch (\Throwable $th) {
            return response()->json($th);
        }
    }
}
