<?php

namespace App\Http\Controllers;

use App\Helpers\Model;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeesController extends Controller
{
    use Model;
    public function get(){
        $schools = Employee::paginate(50)->load('school')->flatten();
        return response()->json($schools);
    }

    public function getById(string $id){
        return response()->json(Employee::find($id));
    }

    public function create(Request $request){
        try {
            if(self::setData($request->all(),Employee::class)){
                return response()->json('Registro inserido com sucesso.');
            }
        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }

    public function update(Request $request, string $id){
        if(self::updatedata(Employee::class,$request->all(),['id' => $id])){
            return response()->json('Registrado atualizado com sucesso.');
        }
    }

    public function delete(string $id){
        try {
            if(Employee::find($id)->delete())
            return response()->json('Registro excluido com sucesso.');
        } catch (\Throwable $th) {
            return response()->json($th);
        }
    }
}
