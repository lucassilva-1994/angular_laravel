<?php

namespace App\Http\Controllers;

use App\Helpers\Model;
use App\Http\Requests\JobRequest;
use App\Models\Job;
use Illuminate\Http\Request;

class JobsController extends Controller
{
    use Model;
    public function get(Request $request){
        if($request->has('search')){
            $jobs =  Job::where('name','like',"%{$request->search}%")
            ->paginate(10)->flatten();
            return response()->json($jobs);
        }
        if(!$request->has('search')){
            return Job::get();
        }
        $jobs = Job::paginate(10)->flatten();
        return response()->json($jobs);
    }

    public function getById(string $id){
        return response()->json(Job::find($id));
    }

    public function create(JobRequest $request){
        try {
            if(self::setData($request->all(),Job::class)){
                return response()->json('Registro inserido com sucesso.');
            }
        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }

    public function update(JobRequest $request, string $id){
        if(self::updatedata(Job::class,$request->all(),['id' => $id])){
            return response()->json('Registro atualizado com sucesso.');
        }
    }

    public function delete(string $id){
        try {
            if(Job::find($id)->delete())
            return response()->json('Registro excluido com sucesso.');
        } catch (\Throwable $th) {
            return response()->json($th);
        }
    }
}
