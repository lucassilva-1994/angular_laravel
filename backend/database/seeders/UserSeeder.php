<?php

namespace Database\Seeders;

use App\Helpers\Model;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

class UserSeeder extends Seeder
{
    use Model;
    public function run(): void
    {
        for($i=0;$i<100;$i++){
            $name = fake()->name();
            $email = self::generateEmail($name);
            $username = self::generateUserName($name);
            $verify = User::whereEmailOrUsername($email,$username)->exists();
            if(!$verify){
                self::setData([
                    'name' => $name,
                    'email' => $email,
                    'username' => $username,
                    'password' => '12345678910'
                ],User::class);
            }
        }
    }

    private static function generateUserName($name)
    {
        $name = iconv('UTF-8', 'ASCII//TRANSLIT', $name);
        $name =  preg_replace('/[^a-zA-Z0-9]/', '', strtolower(str_replace([' ', 'Dr.', 'Sr.', 'Srta.', 'Sra.'], '', $name)));
        return $name;
    }

    private static function generateEmail($name)
    {
        $name = iconv('UTF-8', 'ASCII//TRANSLIT', $name);
        $name =  preg_replace('/[^a-zA-Z0-9]/', '', strtolower(str_replace([' ', 'Dr.', 'Sr.', 'Srta.', 'Sra.'], '', $name)));
        return $name . '@' . Arr::random([fake()->freeEmailDomain()]);
    }
}
