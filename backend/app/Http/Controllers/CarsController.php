<?php
namespace App\Http\Controllers;
use App\Http\Requests\CarsRequest;
use App\Models\Car;

class CarsController extends Controller
{
    public function all(){
        return Car::orderBy('id','DESC')->paginate(15)->flatten();
    }

    public function listById(int $id){
        return Car::find($id);
    }
    
    public function store(CarsRequest $request){
        $car = Car::create($request->all());
        if($car){
            return response()->json(['Veículo cadastrado com sucesso.'],201);
        }
        return response()->json(['Falha ao registrar veiculo.']);
    }

    public function delete(int $id){
        $delete = Car::find($id)->delete();
        if($delete){
            return response()->json('Veículo excluido com sucesso.');
        }
    }

    public function update(CarsRequest $request,$id){
        $car = Car::find($id)->update($request->all());
        if($car){
            return response()->json('Veículo atualizado com sucesso.');
        }
        return response()->json(['Falha ao atualizar veículo.']);
    }
}
