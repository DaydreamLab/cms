<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIoTCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('iot_categories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->nestedSet();
            $table->string('alias');
            $table->string('title');
            $table->tinyInteger('state')->default(1);
            $table->text('description')->nullable();
            $table->unsignedInteger('access');
            $table->text('params')->nullable();
            $table->unsignedInteger('created_by');
            $table->unsignedInteger('updated_by')->nullable();
            $table->unsignedInteger('locked_by')->nullable()->default(0);
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
        Schema::dropIfExists('iot_categories');
    }
}
