<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tags', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->nestedSet();
            $table->string('title');
            $table->string('alias');
            $table->string('path');
            $table->tinyInteger('state')->nullable()->default(1);
            $table->text('description')->nullable();
            $table->string('content_type')->nullable()->default('item');
            $table->unsignedInteger('hits')->nullable()->default(0);
            $table->unsignedInteger('access')->nullable()->default(1);
            $table->string('language')->nullable()->default('*');
            $table->text('params')->nullable();
            $table->unsignedInteger('ordering')->nullable()->default(1);
            $table->unsignedTinyInteger('featured')->default(0)->nullable();
            $table->unsignedBigInteger('featured_ordering')->nullable();
            $table->timestamp('publish_up')->nullable();
            $table->timestamp('publish_down')->nullable();
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
        Schema::dropIfExists('tags');
    }
}
