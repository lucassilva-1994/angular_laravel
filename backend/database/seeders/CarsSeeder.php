<?php

namespace Database\Seeders;

use App\Models\Car;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Provider\Fakecar;
use Illuminate\Support\Arr;

class CarsSeeder extends Seeder
{
    public function run(): void
    {
        for($i=0;$i<100;$i++){
            $fakerCar = Fakecar::vehicleArray();
            Car::create([
                'brand' => $fakerCar['brand'],
                'model' => $fakerCar['model'],
                'year' => fake()->biasedNumberBetween(1990, date('Y'), 'sqrt'),
                'color' => Arr::random(self::colors())
            ]);
        }
    }

    private static function colors(){
        return ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Laranja', 'Roxo', 'Rosa', 'Marrom', 'Preto', 'Branco', 'Cinza', 'Ciano', 'Magenta', 'Ouro', 'Prata', 'Turquesa', 'Lima', 'Aqua', 'Oliva', 'Marfim', 'Salmon', 'Teal', 'Chocolate', 'Índigo', 'Verde Oliva', 'Violeta', 'Dourado', 'Bege', 'Verde Limão'];
    }
}
