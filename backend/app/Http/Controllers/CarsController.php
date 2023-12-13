<?php
namespace App\Http\Controllers;
use App\Http\Requests\CarsRequest;
use App\Models\Car;
use Illuminate\Http\Request;

class CarsController extends Controller
{
    public function all(){
        return Car::all();
    }

    public function listById(int $id){
        return Car::find($id);
    }
    
    public function store(CarsRequest $request){
        $car = Car::create($request->all());
        if($car){
            return response()->json(['Sucesso.'],201);
        }
        return response()->json(['Falha ao registrar veiculo.']);
    }

    public function delete(int $id){
        $car = Car::where('id',$id)->first();
        return $car->delete();
    }

    public function update(Request $request,$id){
        $car = Car::where('id', $id)->update($request->all());
        if($car){
            return response()->json(['Atualizado com sucesso.']);
        }
        return response()->json(['Falha ao atualizar veículo']);
    }
}
