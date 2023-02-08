<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMenuLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menu_logs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('menuId');
            $table->unsignedBigInteger('refererId')->nullable();
            $table->dateTime('leaveAt')->nullable();
            $table->unsignedInteger('time')->nullable();
            $table->unsignedBigInteger('userId')->nullable();
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
        Schema::dropIfExists('menu_logs');
    }
}
