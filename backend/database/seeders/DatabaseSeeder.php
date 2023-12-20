<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            SchoolSeeder::class,
            JobSeeder::class,
            EmployeeSeeder::class,
            StudentSeeder::class
        ]);
    }
}
