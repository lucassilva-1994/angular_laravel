<?php

namespace Database\Seeders;

use App\Models\School;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use App\Helpers\Model;
use Avlima\PhpCpfCnpjGenerator\Generator;

class SchoolSeeder extends Seeder
{
    use Model;
    public function run(): void
    {
        for($i=0; $i<10;$i++){
            $name = fake()->unique()->company();
            $email = self::generateEmail($name);
            $cnpj = Generator::cnpj();
            $verify = School::whereNameOrCnpjOrEmail($name,$cnpj,$email)->exists();
            if(!$verify){
                self::setData([
                    'name' => $name,
                    'address' => fake()->address(),
                    'phone' => fake()->phoneNumber(),
                    'email' =>$email,
                    'cnpj' => $cnpj
                ],School::class);
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
