<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    private $table = 'students';
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->bigInteger('order');
            $table->string('name')->unique();
            $table->string('cpf',14)->unique();
            $table->string('email',100)->unique();
            $table->string('phone',200);
            $table->date('birth_date');
            $table->foreignUuid('school_id')->references('id')->on('schools')->onDelete('cascade');
            $table->dateTime('created_at');
            $table->dateTime('updated_at')->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists($this->table);
    }
};
