<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('alias');
            $table->unsignedInteger('category_id')->nullable()->default(1);
            $table->unsignedInteger('ordering')->nullable()->default(1);
            $table->tinyInteger('state')->default(1);
            $table->text('introimage')->nullable();
            $table->text('introtext')->nullable();
            $table->text('image')->nullable();
            $table->text('description')->nullable();
            $table->text('video')->nullable();
            $table->text('link')->nullable();
            $table->unsignedInteger('hits')->nullable()->default(0);
            $table->unsignedInteger('access')->nullable()->default(2);
            $table->unsignedTinyInteger('featured')->nullable()->default(0);
            $table->unsignedInteger('featured_ordering')->nullable();
            $table->string('language')->nullable()->default('All');
            $table->string('metadesc')->nullable();
            $table->string('metadata')->nullable();
            $table->string('content_type')->nullable()->default('article');
            $table->text('params')->nullable();
            $table->text('extrafields')->nullable();
            $table->unsignedInteger('locked_by')->nullable()->default(0);
            $table->timestamp('locked_at')->nullable();
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
        Schema::dropIfExists('items');
    }
}
