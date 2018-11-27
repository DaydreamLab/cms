<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLanguagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('languages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('type');
            $table->string('code');
            $table->string('sef');
            $table->string('image')->nullable();
//            $table->string('image')->nullable();
//            $table->tinyInteger('state')->default(1);
            $table->text('description')->nullable();
//            $table->unsignedInteger('access')->nullable()->default(1);
//            $table->string('metadesc')->nullable();
//            $table->string('metakeywords')->nullable();
//            $table->string('sitename')->nullable();
//            $table->unsignedInteger('site_id');
//            $table->integer('order')->nullable()->default(1);
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
        Schema::dropIfExists('languages');
    }
}
