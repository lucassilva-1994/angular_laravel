<?php

namespace Database\Seeders;

use App\Helpers\{HelperGeneric, Model};
use App\Models\{School, Student};
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Avlima\PhpCpfCnpjGenerator\Generator;

class StudentSeeder extends Seeder
{
    use Model;
    use HelperGeneric;
    public function run(): void
    {
        $schools = School::get();
        for($i=0;$i<15000;$i++){
            $name = fake()->unique()->name();
            $email = self::generateEmail($name);
            $cpf = Generator::cpf();
            $verify = Student::whereNameOrCpfOrEmail($name,$cpf,$email)->exists();
            if(!$verify){
                self::setData([
                    'name' => $name,
                    'cpf' => $cpf,
                    'email' => $email,
                    'phone' => str_replace(['(',')','-',' '],'',fake()->phoneNumber()),
                    'birth_date' => fake()->date(),
                    'school_id' => Arr::random($schools->pluck('id')->toArray())
                ],Student::class);
            }
        }
    }
}
