<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('alias');
            $table->nestedSet();
            $table->unsignedInteger('ordering')->nullable();
            $table->string('path');
            $table->tinyInteger('state')->nullable()->default(1);
            $table->text('introimage')->nullable();
            $table->text('introtext')->nullable();
            $table->text('image')->nullable();
            $table->text('description')->nullable();
            $table->string('extension');
            $table->unsignedInteger('hits')->nullable()->default(0);
            $table->unsignedInteger('access')->nullalbe()->default(2);

            $table->string('language')->nullable()->default('All');
            $table->string('content_type')->nullable();
            $table->string('template')->nullable();
            $table->string('metadesc')->nullable();
            $table->string('metadata')->nullable();
            $table->text('params')->nullable();
            $table->unsignedInteger('lock_by')->nullable()->default(0);
            $table->timestamp('lock_at')->nullable();
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
        Schema::dropIfExists('categories');
    }
}
