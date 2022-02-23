<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIotSlideshowsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('iot_slideshows', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('alias');
            $table->string('title');
            $table->string('sub_title')->nullable();
            $table->mediumText('description')->nullable();
            $table->text('url')->nullable();
            $table->text('image')->nullable();
            $table->tinyInteger('state')->default(1);
            $table->unsignedInteger('access');
            $table->unsignedInteger('ordering')->nullable();
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
        Schema::dropIfExists('iot_slideshows');
    }
}
