<?php

namespace Database\Seeders;

use App\Helpers\Model;
use App\Models\Employee;
use App\Models\School;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Avlima\PhpCpfCnpjGenerator\Generator;

class EmployeeSeeder extends Seeder
{
    use Model;
    public function run(): void
    {
        $schools = School::get();
        for($i=0;$i<5000;$i++){
            $name = fake()->unique()->name();
            $email = self::generateEmail($name);
            $cpf = Generator::cpf(true);
            $verify = Employee::whereNameOrCpfOrEmail($name,$cpf,$email)->exists();
            if(!$verify){
                self::setData([
                    'name' => $name,
                    'cpf' => $cpf,
                    'email' => $email,
                    'phone' => fake()->phoneNumber(),
                    'birth_date' => fake()->date(),
                    'school_id' => Arr::random($schools->pluck('id')->toArray())
                ],Employee::class);
            }
        }
    }

    private static function generateEmail($name)
    {
        $name = iconv('UTF-8', 'ASCII//TRANSLIT', $name);
        $name =  preg_replace('/[^a-zA-Z0-9]/', '', strtolower(str_replace([' ', 'Dr.', 'Sr.', 'Srta.', 'Sra.'], '', $name)));
        return $name . '@' . Arr::random([fake()->freeEmailDomain()]);
    }
}