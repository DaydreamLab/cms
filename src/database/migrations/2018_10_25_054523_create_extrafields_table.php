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
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('alias')->nullable();
            $table->unsignedInteger('group_id')->nullable();
            $table->string('type');
            $table->unsignedTinyInteger('state')->default(1)->nullable();
            $table->unsignedTinyInteger('required');
            $table->string('value')->nullable();
            $table->text('description')->nullable();
            $table->text('params')->nullable();
            $table->unsignedInteger('access')->nullable()->default(1);
            $table->unsignedBigInteger('ordering')->nullable();
            $table->unsignedBigInteger('locked_by')->nullable()->default(0);
            $table->timestamp('locked_at')->nullable();
            $table->unsignedBigInteger('created_by');
            $table->unsignedBigInteger('updated_by')->nullable();
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
