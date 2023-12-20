<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    private $table = 'personal_access_tokens';
    public function up(): void
    {
        Schema::table($this->table, function(Blueprint $table){
            $table->uuid('tokenable_id')->change();
        });
    }
};
