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
            $table->string('title');
            $table->string('alias');
            $table->string('path');

            $table->nestedSet();
            $table->unsignedInteger('ordering')->nullable()->default(1);
            $table->tinyInteger('state')->nullable()->default(1);
            $table->text('description')->nullable();
            $table->string('content_type')->nullable()->default('item');
            $table->unsignedInteger('hits')->nullable()->default(0);
            $table->unsignedInteger('access')->nullable()->default(1);
            $table->string('language')->nullable()->default('*');
            $table->string('metadesc')->nullable();
            $table->string('metakeywords')->nullable();
            $table->text('params')->nullable();
            $table->unsignedBigInteger('locked_by')->nullable()->default(0);
            $table->timestamp('locked_at')->nullable();
            $table->unsignedBigInteger('created_by');
            $table->unsignedBigInteger('updated_by')->nullable();
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
        Schema::dropIfExists('tags');
    }
}
