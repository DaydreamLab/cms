<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExtrafieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('extrafields', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('alias')->nullable();
            $table->unsignedInteger('group_id')->nullable();
            $table->string('type');
            $table->unsignedTinyInteger('state')->default(1)->nullable();
            $table->unsignedTinyInteger('required');
            $table->string('value');
            $table->text('description')->nullable();
            $table->text('params')->nullable();
            $table->unsignedInteger('ordering')->nullable();
            $table->unsignedInteger('created_by');
            $table->unsignedInteger('updated_by')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('extrafields');
    }
}
