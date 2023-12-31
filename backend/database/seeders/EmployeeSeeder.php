<?php

namespace Database\Seeders;

use App\Helpers\{HelperGeneric,Model};
use App\Models\{Employee,Job,School};
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Avlima\PhpCpfCnpjGenerator\Generator;

class EmployeeSeeder extends Seeder
{
    use Model;
    use HelperGeneric;
    public function run(): void
    {
        $schools = School::get();
        $jobs = Job::get();
        for($i=0;$i<2000;$i++){
            $name = fake()->unique()->name();
            $email = self::generateEmail($name);
            $cpf = Generator::cpf();
            $verify = Employee::whereNameOrCpfOrEmail($name,$cpf,$email)->exists();
            if(!$verify){
                self::setData([
                    'name' => $name,
                    'cpf' => $cpf,
                    'email' => $email,
                    'phone' => str_replace(['(',')','-',' '],'',fake()->phoneNumber()),
                    'job_id' => Arr::random($jobs->pluck('id')->toArray()),
                    'birth_date' => fake()->date(),
                    'school_id' => Arr::random($schools->pluck('id')->toArray())
                ],Employee::class);
            }
        }
    }
}
