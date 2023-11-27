<?php

namespace Database\Seeders;

use App\Models\Car;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Provider\Fakecar;

class CarsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i=0;$i<1000;$i++){
            $car = Fakecar::vehicleArray([
                'brand' => Fakecar::vehicleBrand(),
                'model' => Fakecar::vehicleModel(),
                'plate' => Fakecar::vehicleRegistration()
            ]);
            Car::create($car);
        }
    }
}
