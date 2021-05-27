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
            $table->nestedSet();
            $table->string('title');
            $table->string('alias');
            $table->string('path');
            $table->tinyInteger('state')->default(1);
            $table->text('introimage')->nullable();
            $table->text('introtext')->nullable();
            $table->text('image')->nullable();
            $table->text('description')->nullable();
            $table->text('content_type')->nullable();
            $table->string('extension');
            $table->unsignedInteger('hits')->nullable()->default(0);
            $table->unsignedInteger('access');
            $table->string('language')->nullable()->default('*');
            $table->string('template')->nullable();
            $table->unsignedInteger('ordering')->nullable();
            $table->unsignedInteger('featured')->nullable();
            $table->unsignedInteger('featured_ordering')->nullable();
            $table->text('params')->nullable();
            $table->unsignedInteger('item_extrafield_group_id')->nullable();
            $table->unsignedInteger('extrafield_group_id')->nullable();
            $table->text('extrafields')->nullable();
            $table->text('extrafields_search')->nullable();
            $table->unsignedInteger('locked_by')->nullable()->default(0);
            $table->unsignedInteger('created_by');
            $table->unsignedInteger('updated_by')->nullable();
            $table->timestamp('locked_at')->nullable();
            $table->timestamps();
            $table->timestamp('publish_up')->nullable();
            $table->timestamp('publish_down')->nullable();
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
