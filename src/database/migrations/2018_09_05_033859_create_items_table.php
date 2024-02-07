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
            $table->unsignedInteger('category_id');
            $table->unsignedInteger('ordering')->nullable();
            $table->tinyInteger('state')->default(1);
            $table->text('introimage')->nullable();
            $table->text('introtext')->nullable();
            $table->text('image')->nullable();
            $table->text('description')->nullable();
            $table->text('video')->nullable();
            $table->text('link')->nullable();
            $table->unsignedInteger('hits');
            $table->unsignedInteger('download_count')->default(0);
            $table->unsignedInteger('access');
            $table->unsignedTinyInteger('featured')->default(0);
            $table->unsignedInteger('featured_ordering')->nullable();
            $table->string('language')->default('*');
            $table->string('metadesc')->nullable();
            $table->string('metakeywords')->nullable();
            //$table->string('content_type')->nullable()->default('article');
            $table->text('params')->nullable();
            $table->unsignedInteger('extrafield_group_id')->nullable();
            $table->text('extrafields')->nullable();
            $table->text('extrafields_search')->nullable();
            $table->unsignedInteger('locked_by')->nullable()->default(0);
            $table->timestamp('locked_at')->nullable();
            $table->unsignedInteger('created_by');
            $table->unsignedInteger('updated_by')->nullable();
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
        Schema::dropIfExists('items');
    }
}
