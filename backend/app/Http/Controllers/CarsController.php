<?php
namespace App\Http\Controllers;
use App\Http\Requests\CarsRequest;
use App\Models\Car;

class CarsController extends Controller
{
    public function all(){
        return response()->json(Car::orderBy('id','DESC')->paginate(10)->flatten());
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
        return Car::find($id)->delete();
    }

    public function update(CarsRequest $request,$id){
        $car = Car::find($id)->update($request->all());
        if($car){
            return response()->json(['Atualizado com sucesso.']);
        }
        return response()->json(['Falha ao atualizar veículo']);
    }
}
