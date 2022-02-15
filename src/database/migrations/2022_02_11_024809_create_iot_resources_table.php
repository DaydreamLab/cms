<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIotResourcesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('iot_resources', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('alias');
            $table->string('title');
            $table->text('introimage')->nullable();
            $table->text('introtext')->nullable();
            $table->text('images')->nullable();
            $table->text('description')->nullable();
            $table->text('points')->nullable();
            $table->text('video')->nullable();
            $table->text('documents')->nullable();
            $table->tinyInteger('state')->default(1);
            $table->unsignedInteger('access');
            $table->unsignedInteger('ordering')->nullable();
            $table->text('params')->nullable();
            $table->unsignedInteger('locked_by')->nullable()->default(0);
            $table->timestamp('locked_at')->nullable();
            $table->timestamp('publish_up')->nullable();
            $table->timestamp('publish_down')->nullable();
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
        Schema::dropIfExists('iot_resources');
    }
}
