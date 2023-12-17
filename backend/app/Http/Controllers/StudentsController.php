<?php

namespace App\Http\Controllers;

use App\Helpers\Model;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentsController extends Controller
{
    use Model;
    public function get(){
        $schools = Student::paginate(50)->load('school')->flatten();
        return response()->json($schools);
    }

    public function getById(string $id){
        return response()->json(Student::find($id));
    }

    public function create(Request $request){
        try {
            $create = self::setData($request->all(),Student::class);
            if($create){
                return response()->json([$create,'Registro inserido com sucesso.']);
            }
        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }

    public function update(Request $request, string $id){
        if(self::updatedata(Student::class,$request->all(),['id' => $id])){
            return response()->json('Registrado atualizado com sucesso.');
        }
    }

    public function delete(string $id){
        try {
            if(Student::find($id)->delete())
            return response()->json('Registro excluido com sucesso.');
        } catch (\Throwable $th) {
            return response()->json($th);
        }
    }
}
