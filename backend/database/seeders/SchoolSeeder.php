<?php

namespace Database\Seeders;

use App\Helpers\{HelperGeneric,Model};
use App\Models\School;
use Illuminate\Database\Seeder;
use Avlima\PhpCpfCnpjGenerator\Generator;

class SchoolSeeder extends Seeder
{
    use Model;
    use HelperGeneric;
    public function run(): void
    {
        for($i=0; $i<100;$i++){
            $name = fake()->unique()->company();
            $email = self::generateEmail($name);
            $cnpj = Generator::cnpj();
            $verify = School::whereNameOrCnpjOrEmail($name,$cnpj,$email)->exists();
            if(!$verify){
                self::setData([
                    'name' => $name,
                    'address' => fake()->address(),
                    'phone' => str_replace(['(',')','-',' '],'',fake()->phoneNumber()),
                    'email' =>$email,
                    'cnpj' => $cnpj
                ],School::class);
            }
        }
    }
}
