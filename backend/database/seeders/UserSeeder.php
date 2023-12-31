<?php

namespace Database\Seeders;

use App\Helpers\Model;
use App\Models\{Employee,User};
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    use Model;
    public function run(): void
    {
        $employees = Employee::get();
        foreach($employees as $employee){
                self::setData([
                    'employee_id' => $employee->id,
                    'password' => '12345678910',
                ],User::class);
        }
    }
}
